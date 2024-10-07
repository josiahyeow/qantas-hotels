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
    <div className="relative w-full md:min-w-40 md:min-h-32">
      {promoTitle && (
        <div className="absolute top-2 left-0 p-2 text-red-600 bg-white font-semibold text-xs">
          {promoTitle}
        </div>
      )}
      <img
        className="object-cover w-full h-48 md:w-40 md:h-32"
        src={imageUrl}
        alt={description}
      />
    </div>
  );
}
