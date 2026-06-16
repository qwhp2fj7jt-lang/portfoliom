import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function BlogSubSelect({
  title,
  filtrele = [],
  value,
  onChange,
}) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 w-full sm:w-auto">
      <p className="text-sm font-medium text-gray-600 dark:text-gray-100 whitespace-nowrap">
        {title}:
      </p>

      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="w-full sm:w-56 rounded-xl border-gray-200 shadow-sm focus:ring-2 focus:ring-gray-300 transition">
          <SelectValue>
            {filtrele.find((i) => i.name === value)?.label || "Varsayılan"}
          </SelectValue>
        </SelectTrigger>

        <SelectContent className="w-full sm:w-56 bg-white dark:bg-gray-900 dark:ring-gray-800 ring-gray-200 ">
          <SelectGroup>
            {filtrele.map((item) => (
              <SelectItem key={item._id} value={item.name}>
                <div className="flex items-center gap-2">
                  {item.icon && <span>{item.icon}</span>}
                  <span>{item.label}</span>
                </div>
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
