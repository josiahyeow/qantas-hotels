"use client";

import { HotelListProvider } from "./hotel-list-context/hotel-list-context";
import { HotelListHeader } from "./hotel-list-header";
import { HotelListItems } from "./hotel-list-items/hotel-list-items";

export function HotelList() {
  return (
    <HotelListProvider>
      <HotelListHeader />
      <HotelListItems />
    </HotelListProvider>
  );
}
