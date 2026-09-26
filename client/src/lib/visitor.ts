const KEY = "visitor-nickname";

let memo: string | undefined;

export function getVisitorNickname() {
  if (memo) return memo;
  try {
    memo = localStorage.getItem(KEY) ?? undefined;
    if (!memo) {
      memo = `ziyaretci-${crypto.randomUUID().slice(0, 8)}`;
      localStorage.setItem(KEY, memo);
    }
  } catch {
    memo ??= `ziyaretci-${Math.random().toString(36).slice(2, 10)}`;
  }
  return memo;
}
