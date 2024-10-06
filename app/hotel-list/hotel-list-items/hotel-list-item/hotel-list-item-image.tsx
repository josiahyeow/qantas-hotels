/* eslint-disable @next/next/no-img-element */
export function HotelListItemImage({
  imageUrl,
  description,
  promoTitle,
}: {
  imageUrl: string;
  description: string;
  promoTitle?: string;
}) {
  return (
    <div className="relative min-w-32 min-h-28">
      <div className="absolute top-2 left-0 p-2 text-red-600 bg-white font-semibold text-xs">
        {promoTitle}
      </div>
      <img
        className="object-cover w-32 h-28"
        src={imageUrl}
        alt={description}
      />
    </div>
  );
}
