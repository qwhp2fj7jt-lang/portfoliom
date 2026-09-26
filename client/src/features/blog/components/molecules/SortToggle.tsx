import { ArrowsDownUpIcon } from "@phosphor-icons/react/ssr";
import { Button } from "@/components/atoms/Button";

interface SortToggleProps {
  newestFirst: boolean;
  onToggle: () => void;
}

export function SortToggle({ newestFirst, onToggle }: SortToggleProps) {
  return (
    <Button variant="ghost" onClick={onToggle}>
      <ArrowsDownUpIcon size={16} aria-hidden />
      <span className="sr-only">Sıralama: </span>
      {newestFirst ? "Yeniden eskiye" : "Eskiden yeniye"}
    </Button>
  );
}
