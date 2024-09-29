import { useHotelListContext } from "./hotel-list-context";
import { HotelListSortSelect } from "./hotel-list-sort-select";

export function HotelListHeader() {
  const { hotels } = useHotelListContext();
  const hotelCount = hotels.length;

  return (
    <div>
      <div>
        <span>{hotelCount} hotels in Sydney</span>
      </div>
      <HotelListSortSelect />
    </div>
  );
}
