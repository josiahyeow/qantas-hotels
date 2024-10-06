import { useHotelListContext } from "./hotel-list-context";
import { HotelListSortSelect } from "./hotel-list-sort-select";

export function HotelListHeader() {
  const { hotels } = useHotelListContext();
  const hotelCount = hotels.length;

  return (
    <div className="flex flex-row justify-between w-full">
      <div>
        <span className="font-semibold">
          {hotelCount} <span className="italic font-normal">hotels in</span>{" "}
          Sydney.
        </span>
      </div>
      <HotelListSortSelect />
    </div>
  );
}
