import { getHotels } from "./get-hotels";

export async function HotelList() {
  const hotels = await getHotels();
  return <div>Hotel List {JSON.stringify(hotels)}</div>;
}
