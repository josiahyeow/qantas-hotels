import { HotelListItemRating } from "./hotel-list-item-rating/hotel-list-item-rating";

export function HotelListItemDetails({
  address,
  title,
  offerName,
  isFreeCancellation,
  rating,
}: {
  address: string;
  title: string;
  offerName: string;
  isFreeCancellation: boolean;
  rating: {
    ratingValue: number;
    ratingType: "self" | "star";
  };
}) {
  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <div className="flex flex-row flex-wrap gap-3 items-center">
          <h2 className="text-lg font-medium max-w-60 sm:max-w-72  md:max-w-80 truncate">
            {title}
          </h2>
          <HotelListItemRating
            value={rating.ratingValue}
            type={rating.ratingType}
          />
        </div>
        <h3 className="text-xs text-gray-500">{address}</h3>
        <div className="mt-2">
          <span className="text-xs underline text-red-600">{offerName}</span>
        </div>
      </div>
      {isFreeCancellation && (
        <span className="text-xs text-green-800 justify-self-end">
          Free cancellation
        </span>
      )}
    </div>
  );
}
