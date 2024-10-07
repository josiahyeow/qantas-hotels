import { render } from "@testing-library/react";
import { HotelListItemRating } from "./hotel-list-item-rating";
import { CIRCLE_RATING_ICON_SET, STAR_RATING_ICON_SET } from "./icon-sets";
import { Rating } from "./rating";

jest.mock("./rating", () => ({
  Rating: jest.fn(() => null),
}));

describe("HotelListItemRating", () => {
  it("renders self rating with circle icons", () => {
    const value = 4;
    const type = "self";

    render(<HotelListItemRating value={value} type={type} />);

    expect(Rating).toHaveBeenCalledWith(
      { iconSet: CIRCLE_RATING_ICON_SET, value },
      {}
    );
  });

  it("renders star rating with star icons", () => {
    const value = 5;
    const type = "star";

    render(<HotelListItemRating value={value} type={type} />);

    expect(Rating).toHaveBeenCalledWith(
      { iconSet: STAR_RATING_ICON_SET, value },
      {}
    );
  });
});
