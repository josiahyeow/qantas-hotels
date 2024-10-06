import Image from "next/image";

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
    <div className="relative">
      <div className="absolute top-2 left-0 p-2 text-red-600 bg-white font-semibold text-xs">
        {promoTitle}
      </div>
      <Image src={imageUrl} alt={description} width={200} height={150} />
    </div>
  );
}
