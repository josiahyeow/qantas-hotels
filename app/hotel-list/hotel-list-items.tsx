import { useHotelListContext } from "./hotel-list-context";

export function HotelListItems() {
  const { hotels } = useHotelListContext();

  return (
    <div>
      {hotels.map((hotel) => (
        <pre key={hotel.id}>{JSON.stringify(hotel)}</pre>
      ))}
    </div>
  );
}
