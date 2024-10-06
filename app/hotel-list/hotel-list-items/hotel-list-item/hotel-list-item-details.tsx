export function HotelListItemDetails({
  address,
  title,
  offerName,
  isFreeCancellation,
}: {
  address: string;
  title: string;
  offerName: string;
  isFreeCancellation: boolean;
}) {
  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <h2 className="text-xl font-medium">{title}</h2>
        <h3 className="text-sm text-gray-500">{address}</h3>
        <div className="mt-3">
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
