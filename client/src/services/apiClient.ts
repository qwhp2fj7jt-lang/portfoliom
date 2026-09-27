export const API_URL = (process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:5001").replace(/\/+$/, "");

const REQUEST_TIMEOUT_MS = 10_000;

export class ApiError extends Error {
  constructor(
    public status: number,
    message: string,
    public data?: unknown,
  ) {
    super(message);
    this.name = "ApiError";
  }
}

type RequestOptions = Omit<RequestInit, "body"> & {
  body?: unknown;
  token?: string;
  query?: Record<string, string | number | undefined>;
  next?: { revalidate?: number | false; tags?: string[] };
};

// Yüklenen dosyalar (/uploads) API'den, diğer yollar (ör. /images) sitenin public klasöründen sunulur.
export function resolveAssetUrl(path: string) {
  if (!/^https?:\/\//i.test(path)) {
    const normalized = path.startsWith("/") ? path : `/${path}`;
    return normalized.startsWith("/uploads/") ? `${API_URL}${normalized}` : normalized;
  }
  try {
    const { pathname } = new URL(path);
    return pathname.startsWith("/uploads/") ? `${API_URL}${pathname}` : path;
  } catch {
    return path;
  }
}

export function isApiAsset(src: string) {
  return src.startsWith(`${API_URL}/`);
}

async function request<T>(path: string, { body, token, query, headers, ...init }: RequestOptions = {}): Promise<T> {
  const url = new URL(`${API_URL}${path}`);
  for (const [key, value] of Object.entries(query ?? {})) {
    if (value !== undefined) url.searchParams.set(key, String(value));
  }

  const isForm = typeof FormData !== "undefined" && body instanceof FormData;
  const res = await fetch(url, {
    ...init,
    signal: init.signal ?? AbortSignal.timeout(REQUEST_TIMEOUT_MS),
    headers: {
      Accept: "application/json",
      ...(body !== undefined && !isForm && { "Content-Type": "application/json" }),
      ...(token && { Authorization: `Bearer ${token}` }),
      ...headers,
    },
    body: body === undefined ? undefined : isForm ? (body as FormData) : JSON.stringify(body),
  });

  const text = await res.text();
  let data: unknown;
  try {
    data = text ? JSON.parse(text) : undefined;
  } catch {
    data = text;
  }

  if (!res.ok) {
    const message =
      data && typeof data === "object" && "message" in data ? String(data.message) : res.statusText;
    throw new ApiError(res.status, message, data);
  }
  return data as T;
}

export const apiClient = {
  get: <T>(path: string, options?: Omit<RequestOptions, "body">) => request<T>(path, { ...options, method: "GET" }),
  post: <T>(path: string, body?: unknown, options?: RequestOptions) =>
    request<T>(path, { ...options, method: "POST", body }),
};

/**
 * API'ye ulaşılamadığında (ör. Render uykudan uyanırken) çalışma anında hatayı fırlatır; Next.js böylece
 * önbellekteki son başarılı sayfayı sunmaya devam eder. Build sırasında ise sayfanın boş da olsa üretilmesi için
 * verilen yedek değer döner.
 */
export function keepCachedOr<T>(fallback: T, error: unknown): T {
  if (process.env.NEXT_PHASE === "phase-production-build") return fallback;
  throw error;
}
