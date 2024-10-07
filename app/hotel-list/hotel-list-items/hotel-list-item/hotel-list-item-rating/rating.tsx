import { useCallback } from "react";
import { RatingIconSet } from "./icon-sets/icon-set";

export function Rating({
  value,
  iconSet,
}: {
  value: number;
  iconSet: RatingIconSet;
}) {
  const getRatingElements = useCallback(
    (value: number) => {
      const maxRating = 5;
      const ratingElements = [];

      const filledElements = Math.floor(value);
      const hasHalfRating = value % 1 === 0.5;

      for (let i = 1; i <= maxRating; i++) {
        if (i <= filledElements) {
          ratingElements.push(iconSet.filled);
        } else if (i === filledElements + 1 && hasHalfRating) {
          ratingElements.push(iconSet.halfFilled);
        } else {
          ratingElements.push(iconSet.empty);
        }
      }

      return ratingElements;
    },
    [iconSet]
  );

  return (
    <div className="flex gap-1">
      {getRatingElements(value).map((Icon, index) => {
        return (
          <div key={index}>
            <Icon />
          </div>
        );
      })}
    </div>
  );
}
