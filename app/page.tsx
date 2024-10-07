import { Header } from "./header/header";
import { HotelList } from "./hotel-list/hotel-list";

export default function Home() {
  return (
    <div className="m-6 max-w-7xl m-auto">
      <main className="flex flex-col gap-8 items-start p-8">
        <Header />
        <HotelList />
      </main>
    </div>
  );
}
