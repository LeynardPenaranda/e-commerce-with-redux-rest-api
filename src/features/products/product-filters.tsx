import { Checkbox } from "@/components/ui/checkbox";
import { Star } from "lucide-react";
import { useSearchParams } from "react-router-dom";

const ProductFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const categories = ["Computer Parts", "Home Devices", "Clothing"];
  const priceRanges = [
    { label: "$50 - $100", value: "50-100" },
    { label: "$100 - $150", value: "100-150" },
    { label: "$150 - $200", value: "150-200" },
    { label: "$250 - $300", value: "250-300" },
    { label: "$350 - $400", value: "350-400" },
    { label: "$450 - $500", value: "450-500" },
    { label: "$550 - $2000", value: "550-2000" },
    { label: "$2050 - $5000", value: "2050-5000" },
  ];
  const ratingRanges = [
    { label: "1 - 2 ", value: "1-2" },
    { label: "2 - 3 ", value: "2-3" },
    { label: "3 - 4 ", value: "3-4" },
    { label: "4 - 5 ", value: "4-5" },
    { label: "6 - 7 ", value: "6-7" },
    { label: "8 - 9 ", value: "8-9" },
    { label: "9 - 10 ", value: "9-10" },
  ];

  // For multiple categories
  const handleCategoryChange = (category: string, checked: boolean) => {
    const params = new URLSearchParams(searchParams);
    const selected = params.getAll("category");

    if (checked) {
      if (!selected.includes(category)) {
        params.append("category", category);
      }
    } else {
      const updated = selected.filter((c) => c !== category);
      params.delete("category");
      updated.forEach((c) => params.append("category", c));
    }

    setSearchParams(params, { replace: true });
  };

  // For single-value filters like price or rating
  const handleSingleChange = (key: string, value: string, checked: boolean) => {
    const params = new URLSearchParams(searchParams);

    if (checked) {
      params.set(key, value); // Only one value at a time
    } else {
      params.delete(key);
    }

    setSearchParams(params, { replace: true });
  };

  return (
    <div className="space-y-6 p-3">
      {/* Categories */}
      <div>
        <h3 className="font-semibold mb-2">Categories</h3>
        {categories.map((cat) => {
          const isChecked = searchParams.getAll("category").includes(cat);
          return (
            <div key={cat} className="flex items-center space-x-2">
              <Checkbox
                id={cat}
                checked={isChecked}
                onCheckedChange={(checked) =>
                  handleCategoryChange(cat, checked as boolean)
                }
              />
              <label
                htmlFor={cat}
                className="text-sm font-medium leading-none cursor-pointer"
              >
                {cat}
              </label>
            </div>
          );
        })}
      </div>

      {/* Price Range */}
      <div>
        <h3 className="font-semibold mb-2">Price Range</h3>
        {priceRanges.map((range) => {
          const isChecked = searchParams.get("price") === range.value;
          return (
            <div key={range.value} className="flex items-center space-x-2">
              <Checkbox
                id={`price-${range.value}`}
                checked={isChecked}
                onCheckedChange={(checked) =>
                  handleSingleChange("price", range.value, checked as boolean)
                }
              />
              <label
                htmlFor={`price-${range.value}`}
                className="text-sm font-medium leading-none cursor-pointer"
              >
                {range.label}
              </label>
            </div>
          );
        })}
      </div>

      {/* Rating Range */}
      <div>
        <h3 className="font-semibold mb-2">Rating</h3>
        {ratingRanges.map((range) => {
          const isChecked = searchParams.get("rating") === range.value;
          return (
            <div key={range.value} className="flex items-center space-x-2">
              <Checkbox
                id={`rating-${range.value}`}
                checked={isChecked}
                onCheckedChange={(checked) =>
                  handleSingleChange("rating", range.value, checked as boolean)
                }
              />
              <label
                htmlFor={`rating-${range.value}`}
                className="text-sm font-medium leading-none cursor-pointer flex gap-2"
              >
                {range.label} <Star className="h-4 w-4" />
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductFilters;
