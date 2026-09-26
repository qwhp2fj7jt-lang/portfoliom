import type { Post } from "../types";

export const posts: Post[] = [
  {
    slug: "react-query-ile-repository-patterni-birlikte-kullanmak",
    date: "2026-09-18",
    category: "Mimari",
    readingTime: "9 dk",
    title: "React Query ile Repository Pattern’i Birlikte Kullanmak",
    excerpt:
      "Veri erişimini repository katmanında soyutlayıp, cache ve senkronizasyonu React Query’ye bırakarak bileşenleri sadeleştirmek.",
    lead: "Veri erişimini repository katmanında soyutlayıp, cache ve senkronizasyonu React Query’ye bırakarak bileşenleri sade, test edilebilir ve backend değişikliklerine dayanıklı hale getirmek.",
    tags: ["React Query", "Repository Pattern", "Mimari"],
    likes: 24,
    content: [
      { type: "heading", text: "Problem: bileşenlere dağılmış veri mantığı" },
      {
        type: "paragraph",
        text: "Projeler büyüdükçe fetch çağrıları, URL’ler, response dönüşümleri ve hata yönetimi bileşenlerin içine dağılır. Aynı endpoint farklı ekranlarda farklı şekilde çağrılır; backend’deki küçük bir değişiklik onlarca dosyaya dokunmayı gerektirir.",
      },
      {
        type: "paragraph",
        text: "React Query cache, yeniden deneme ve senkronizasyonu harika çözer; ama verinin nereden ve nasıl geldiği sorusunu çözmez. Repository pattern tam da bu boşluğu doldurur.",
      },
      { type: "heading", text: "Repository katmanı" },
      {
        type: "paragraph",
        text: "Repository, veri kaynağına erişimi tek bir arayüzün arkasına saklar. Bileşen “ürünleri getir” der; REST mi, GraphQL mi, mock mu olduğunu bilmez.",
      },
      {
        type: "code",
        file: "features/products/api/product.repository.ts",
        language: "TypeScript",
        code: `export interface ProductRepository {
  getAll(params?: ProductQuery): Promise<Product[]>;
  getById(id: string): Promise<Product>;
  update(id: string, dto: UpdateProductDto): Promise<Product>;
}

export const productRepository: ProductRepository = {
  async getAll(params) {
    const { data } = await http.get('/products', { params });
    return data.map(toProduct); // adapter
  },
  async getById(id) {
    const { data } = await http.get(\`/products/\${id}\`);
    return toProduct(data);
  },
  async update(id, dto) {
    const { data } = await http.patch(\`/products/\${id}\`, dto);
    return toProduct(data);
  },
};`,
      },
      {
        type: "note",
        text: "toProduct bir adapter: API’nin döndürdüğü şekli, uygulamanın domain modeline çevirir. Backend alan adı değişirse yalnızca burası güncellenir.",
      },
      { type: "heading", text: "Query key fabrikası" },
      {
        type: "paragraph",
        text: "Cache anahtarlarını dağınık string’ler yerine tek bir fabrikada toplamak, invalidation işlemlerini öngörülebilir kılar.",
      },
      {
        type: "code",
        file: "features/products/api/product.keys.ts",
        language: "TypeScript",
        code: `export const productKeys = {
  all: ['products'] as const,
  list: (q?: ProductQuery) => [...productKeys.all, 'list', q] as const,
  detail: (id: string) => [...productKeys.all, 'detail', id] as const,
};`,
      },
      { type: "heading", text: "React Query ile birleştirmek" },
      {
        type: "paragraph",
        text: "Custom hook’lar repository’yi React Query’ye bağlar. Bileşen artık sadece hook’u çağırır; veri erişimi ve cache stratejisi tek yerde yaşar.",
      },
      {
        type: "code",
        file: "features/products/hooks/useProducts.ts",
        language: "TypeScript",
        code: `export function useProducts(q?: ProductQuery) {
  return useQuery({
    queryKey: productKeys.list(q),
    queryFn: () => productRepository.getAll(q),
    staleTime: 60_000,
  });
}

export function useUpdateProduct() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({ id, dto }: { id: string; dto: UpdateProductDto }) =>
      productRepository.update(id, dto),
    onSuccess: (p) => {
      qc.setQueryData(productKeys.detail(p.id), p);
      qc.invalidateQueries({ queryKey: productKeys.all });
    },
  });
}`,
      },
      { type: "heading", text: "Sonuç" },
      {
        type: "paragraph",
        text: "Repository veri erişimini, React Query sunucu durumunu, custom hook’lar ikisini birbirine bağlar. Sonuç: test edilebilir, backend değişikliklerine dayanıklı ve bileşenleri sade tutan bir API katmanı.",
      },
    ],
  },
  {
    slug: "core-web-vitals",
    date: "2026-09-02",
    category: "Performans",
    readingTime: "8 dk",
    title: "Core Web Vitals: LCP’yi yarıya indirmek",
    excerpt: "Next.js projesinde lazy loading, görsel optimizasyonu ve SSR ile ölçtüğümüz kazanımlar.",
    tags: ["Core Web Vitals", "Next.js", "Performans"],
  },
  {
    slug: "feature-based",
    date: "2026-08-20",
    category: "Mimari",
    readingTime: "11 dk",
    title: "Feature Based Architecture ile büyüyen kod tabanı",
    excerpt:
      "Klasör yapısından API katmanına, özellik bazlı modüllerle sürdürülebilir bir React uygulaması.",
    tags: ["Feature Based", "React", "Mimari"],
  },
  {
    slug: "a11y",
    date: "2026-08-09",
    category: "Erişilebilirlik",
    readingTime: "6 dk",
    title: "A11y kontrol listesi: bileşen bazında erişilebilirlik",
    excerpt: "Klavye navigasyonu, odak yönetimi ve ARIA rollerini tasarım sisteminin içine gömmek.",
    tags: ["A11y", "ARIA", "Erişilebilirlik"],
  },
  {
    slug: "ai-frontend",
    date: "2026-07-21",
    category: "Yapay Zeka",
    readingTime: "9 dk",
    title: "Frontend’de yapay zeka entegrasyonu",
    excerpt: "Streaming yanıtlar, iyimser UI ve hata durumlarıyla LLM destekli arayüzler kurmak.",
    tags: ["LLM", "Streaming UI", "Yapay Zeka"],
  },
];
