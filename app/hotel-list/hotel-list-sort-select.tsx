import { useHotelListContext } from "./hotel-list-context";

export function HotelListSortSelect() {
  const { sortBy, sortPriceHighToLow, sortPriceLowToHigh } =
    useHotelListContext();

  const options = {
    "price-high-low": {
      value: "price-high-low",
      label: "Price high-low",
      onSelected: sortPriceHighToLow,
    },
    "price-low-high": {
      value: "price-low-high",
      label: "Price low-high",
      onSelected: sortPriceLowToHigh,
    },
  };

  return (
    <div className="flex flex-row gap-1">
      <label htmlFor="hotel-list-sort-by" className="font-semibold">
        Sort by
      </label>
      <select
        id="hotel-list-sort-by"
        value={sortBy}
        onChange={(e) => {
          const value = e.target.value as keyof typeof options;
          options[value].onSelected();
        }}
      >
        {Object.entries(options).map(([key, { label }]) => (
          <option key={key} value={key}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
}
