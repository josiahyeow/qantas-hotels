import { RatingIconSet } from "./icon-sets/icon-set";

type RatingElements = ("filled" | "halfFilled" | "empty")[];

export function Rating({
  value,
  iconSet,
}: {
  value: number;
  iconSet: RatingIconSet;
}) {
  const elements = getRatingElements(value);
  return (
    <div className="flex gap-1">
      {elements.map((element, index) => {
        const Icon = iconSet[element];
        return (
          <div key={index}>
            <Icon />
          </div>
        );
      })}
    </div>
  );
}

const getRatingElements = (value: number): RatingElements => {
  const maxRating = 5;
  const ratingElements = [];

  const filledElements = Math.floor(value);
  const hasHalfRating = value % 1 === 0.5;

  for (let i = 1; i <= maxRating; i++) {
    if (i <= filledElements) {
      ratingElements.push("filled");
    } else if (i === filledElements + 1 && hasHalfRating) {
      ratingElements.push("halfFilled");
    } else {
      ratingElements.push("empty");
    }
  }

  return ratingElements as RatingElements;
};
