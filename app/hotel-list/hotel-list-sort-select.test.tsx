import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useHotelListContext } from "./hotel-list-context";
import { HotelListSortSelect } from "./hotel-list-sort-select";

jest.mock("./hotel-list-context");

const mockUseHotelListContext = {
  hotels: [],
  sortBy: "price-high-low" as const,
  sortPriceHighToLow: jest.fn(),
  sortPriceLowToHigh: jest.fn(),
};

describe("HotelListSortSelect", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.mocked(useHotelListContext).mockReturnValue(mockUseHotelListContext);
  });

  it("shows sort by label", () => {
    render(<HotelListSortSelect />);
    expect(screen.getByLabelText("Sort by")).toBeInTheDocument();
  });

  it("calls sortPriceHighToLow when Price high-low is selected", async () => {
    render(<HotelListSortSelect />);

    await userEvent.selectOptions(screen.getByLabelText("Sort by"), [
      "price-low-high",
    ]);
    await waitFor(() => {
      expect(mockUseHotelListContext.sortPriceLowToHigh).toHaveBeenCalled();
    });

    await userEvent.selectOptions(screen.getByLabelText("Sort by"), [
      "price-high-low",
    ]);

    await waitFor(() => {
      expect(mockUseHotelListContext.sortPriceHighToLow).toHaveBeenCalled();
    });
  });
});
