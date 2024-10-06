import { useHotelListContext } from "../hotel-list-context";
import { HotelListItem } from "./hotel-list-item/hotel-list-item";

export function HotelListItems() {
  const { hotels } = useHotelListContext();

  return (
    <div className="w-full  border-gray-300 border-b">
      {hotels.map((hotel) => (
        <HotelListItem key={hotel.id} data={hotel} />
      ))}
    </div>
  );
}
