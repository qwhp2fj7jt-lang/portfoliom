import { Button } from "@/components/atoms/Button";

interface NoResultsProps {
  query: string;
  onClear: () => void;
}

export function NoResults({ query, onClear }: NoResultsProps) {
  return (
    <div className="flex flex-col items-start gap-2.5 py-12">
      <p className="text-lg font-medium">Sonuç bulunamadı</p>
      <p className="text-[15px] text-neutral-300">
        {query.trim()
          ? `“${query.trim()}” için eşleşen yazı yok. Farklı bir kelime deneyin.`
          : "Bu kategoride henüz yazı yok."}
      </p>
      <Button variant="ghost" onClick={onClear}>
        Aramayı temizle
      </Button>
    </div>
  );
}
