import { useState } from "react";
import { Hotel } from "./get-hotels";

type SortBy = "price-high-low" | "price-low-high";

export function useHotelList(data: Hotel[]) {
  const [sortBy, setSortBy] = useState<SortBy>("price-high-low");
  const [hotels, setHotels] = useState(
    [...data].sort(sortHotelPriceDescendingFn)
  );

  const sortPriceHighToLow = () => {
    const sortedHotels = [...hotels].sort(sortHotelPriceDescendingFn);
    setHotels(sortedHotels);
    setSortBy("price-high-low");
  };

  const sortPriceLowToHigh = () => {
    const sortedHotels = [...hotels].sort(sortHotelPriceAscendingFn);
    setHotels(sortedHotels);
    setSortBy("price-low-high");
  };

  return { hotels, sortPriceHighToLow, sortPriceLowToHigh, sortBy };
}

const sortHotelPriceDescendingFn = (a: Hotel, b: Hotel) =>
  b.offer.displayPrice.amount - a.offer.displayPrice.amount;

const sortHotelPriceAscendingFn = (a: Hotel, b: Hotel) =>
  a.offer.displayPrice.amount - b.offer.displayPrice.amount;
