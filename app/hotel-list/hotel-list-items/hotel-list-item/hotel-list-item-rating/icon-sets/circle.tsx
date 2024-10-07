import { RatingIconSet } from "./icon-set";

const CircleRatingIcon = () => (
  <svg
    className="w-4 h-4 text-yellow-500"
    viewBox="0 0 24 24"
    fill="currentcolor"
  >
    <path d="M12,3a9,9,0,1,0,9,9A9,9,0,0,0,12,3Z"></path>
  </svg>
);

const CircleHalfRatingIcon = () => (
  <svg
    className="w-4 h-4 text-yellow-500"
    viewBox="0 0 24 24"
    fill="currentcolor"
  >
    <path d="M12,3a9,9,0,1,0,9,9A9,9,0,0,0,12,3Zm0,16.14V4.86a7.14,7.14,0,0,1,0,14.28Z"></path>
  </svg>
);

const CircleRatingIconEmpty = () => (
  <svg
    className="w-4 h-4 text-yellow-500"
    viewBox="0 0 24 24"
    fill="currentcolor"
  >
    <path d="M12,3a9,9,0,1,0,9,9A9,9,0,0,0,12,3Zm0,16.2A7.2,7.2,0,1,1,19.2,12,7.21,7.21,0,0,1,12,19.2Z"></path>
  </svg>
);

export const CIRCLE_RATING_ICON_SET: RatingIconSet = {
  filled: CircleRatingIcon,
  halfFilled: CircleHalfRatingIcon,
  empty: CircleRatingIconEmpty,
};
