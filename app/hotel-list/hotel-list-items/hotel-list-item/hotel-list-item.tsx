import Image from "next/image";
import { Hotel } from "../../get-hotels";

export function HotelListItem({ data }: { data: Hotel }) {
  return (
    <div className="flex flex-row gap-6">
      <div className="py-2">
        <HotelListItemImage
          previewImage={data.property.previewImage}
          promoTitle={data.offer.promotion.title}
        />
      </div>
      <div className="flex flex-row justify-between gap-2 w-full border-gray-300 border-t py-4">
        <HotelListItemDetails data={data} />
        <div className="justify-self-end text-right self-end">
          <HotelListItemPrice data={data} />
        </div>
      </div>
    </div>
  );
}

function HotelListItemImage({
  previewImage,
  promoTitle,
}: {
  previewImage: Hotel["property"]["previewImage"];
  promoTitle?: string;
}) {
  return (
    <div className="relative">
      <div className="absolute top-2 left-0 p-2 text-red-600 bg-white font-semibold text-xs">
        {promoTitle}
      </div>
      <Image
        src={previewImage.url}
        alt={previewImage.caption}
        width={200}
        height={150}
      />
    </div>
  );
}

function HotelListItemDetails({ data }: { data: Hotel }) {
  const addressFormatted = data.property.address.join(", ");
  const isFreeCancellation =
    data.offer.cancellationOption.cancellationType === "FREE_CANCELLATION";
  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <h2 className="text-xl font-medium">{data.property.title}</h2>
        <h3 className="text-sm text-gray-500">{addressFormatted}</h3>
        <div className="mt-3">
          <span className="text-xs underline text-red-600">
            {data.offer.name}
          </span>
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

function HotelListItemPrice({ data }: { data: Hotel }) {
  const formattedPrice = data.offer.displayPrice.amount;
  const savings = data.offer.savings?.amount;
  return (
    <div className="text-right">
      <span className="text-xs">
        <b>1</b> night total ({data.offer.displayPrice.currency})
      </span>
      <div className="flex gap-1 justify-end">
        <span className="">$</span>
        <span className="text-3xl">{formattedPrice}</span>
      </div>
      {savings ? (
        <span className="text-lg text-red-600">Save ${savings}~</span>
      ) : (
        <span>&nbsp;</span>
      )}
    </div>
  );
}
