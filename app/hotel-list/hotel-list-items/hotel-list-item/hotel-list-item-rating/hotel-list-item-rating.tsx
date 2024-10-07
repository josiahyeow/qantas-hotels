import { CIRCLE_RATING_ICON_SET, STAR_RATING_ICON_SET } from "./icon-sets";
import { Rating } from "./rating";

export function HotelListItemRating({
  value,
  type,
}: {
  value: number;
  type: "self" | "star";
}) {
  if (type === "self") {
    return <Rating iconSet={CIRCLE_RATING_ICON_SET} value={value} />;
  }

  return <Rating iconSet={STAR_RATING_ICON_SET} value={value} />;
}
