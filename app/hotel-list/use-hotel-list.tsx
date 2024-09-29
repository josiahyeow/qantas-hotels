import { useEffect, useState } from "react";
import { Hotel } from "./get-hotels";

type SortBy = "price-high-low" | "price-low-high";

export function useHotelList(data: Hotel[]) {
  const [sortBy, setSortBy] = useState<SortBy>("price-high-low");
  const [hotels, setHotels] = useState(data);

  const sortPriceHighToLow = () => {
    const sortedHotels = [...hotels].sort(
      (a, b) => b.offer.displayPrice.amount - a.offer.displayPrice.amount
    );
    setHotels(sortedHotels);
    setSortBy("price-high-low");
  };

  const sortPriceLowToHigh = () => {
    const sortedHotels = [...hotels].sort(
      (a, b) => a.offer.displayPrice.amount - b.offer.displayPrice.amount
    );
    setHotels(sortedHotels);
    setSortBy("price-low-high");
  };

  useEffect(() => {
    sortPriceHighToLow();
  }, []);

  return { hotels, sortPriceHighToLow, sortPriceLowToHigh, sortBy };
}
