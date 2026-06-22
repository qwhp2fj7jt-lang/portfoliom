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
        <SelectTrigger className="w-full sm:w-56 rounded-xl border-gray-200 shadow-sm">
          <SelectValue placeholder="Tümü" />
        </SelectTrigger>

        <SelectContent className="w-full sm:w-56 bg-white dark:bg-gray-900 dark:ring-gray-800 ring-gray-200">
          <SelectGroup>
            {filtrele && filtrele.map((category) => (
              <div key={category.slug}>
                <div className="px-2 py-1 text-xs font-bold text-gray-500">
                  {category.title}
                </div>

                {category && category.subCategories.map((sub) => (
                  <SelectItem key={sub.slug} value={sub.slug}>
                    {sub.icon} {sub.label}
                  </SelectItem>
                ))}
              </div>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
