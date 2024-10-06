import { createContext, useContext } from "react";
import { getHotels, Hotel } from "../get-hotels/get-hotels";
import { HotelListSortBy, useHotelList } from "./use-hotel-list";

type HotelListContextType = {
  sortBy: HotelListSortBy;
  hotels: Hotel[];
  sortPriceHighToLow: () => void;
  sortPriceLowToHigh: () => void;
};

const HotelListContextDefaultValues = {
  sortBy: "price-high-low" as const,
  hotels: [],
  sortPriceHighToLow: () => {},
  sortPriceLowToHigh: () => {},
};

const HotelListContext = createContext<HotelListContextType>(
  HotelListContextDefaultValues
);

export function HotelListProvider({ children }: React.PropsWithChildren) {
  const value = useHotelList(getHotels());

  return (
    <HotelListContext.Provider value={value}>
      {children}
    </HotelListContext.Provider>
  );
}

export function useHotelListContext() {
  return useContext(HotelListContext);
}
