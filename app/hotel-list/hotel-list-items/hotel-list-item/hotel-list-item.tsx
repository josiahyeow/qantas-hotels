import { Hotel } from "../../get-hotels/get-hotels";
import { HotelListItemDetails } from "./hotel-list-item-details";
import { HotelListItemImage } from "./hotel-list-item-image";
import { HotelListItemPrice } from "./hotel-list-item-price";

export function HotelListItem({ data }: { data: Hotel }) {
  return (
    <div className="flex flex-row gap-6">
      <div className="py-2">
        <HotelListItemImage
          imageUrl={data.property.previewImage.url}
          description={data.property.previewImage.caption}
          promoTitle={data.offer.promotion.title}
        />
      </div>
      <div className="flex flex-row justify-between gap-2 w-full border-gray-300 border-t py-3">
        <HotelListItemDetails
          title={data.property.title}
          address={data.property.address.join(", ")}
          offerName={data.offer.name}
          isFreeCancellation={
            data.offer.cancellationOption.cancellationType ===
            "FREE_CANCELLATION"
          }
          rating={data.property.rating}
        />
        <div className="justify-self-end text-right self-end">
          <HotelListItemPrice
            price={data.offer.displayPrice}
            savings={data.offer.savings}
          />
        </div>
      </div>
    </div>
  );
}
