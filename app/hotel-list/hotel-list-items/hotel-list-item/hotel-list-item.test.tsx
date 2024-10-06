/* eslint-disable @typescript-eslint/no-explicit-any */
import { render, screen } from "@testing-library/react";
import { Hotel } from "../../get-hotels/get-hotels";
import { HotelListItem } from "./hotel-list-item";

const mockHotel: Hotel = {
  property: {
    previewImage: {
      url: "https://example.com/image.jpg",
      caption: "Example Image",
      imageType: "PRIMARY",
    },
    title: "Example Hotel",
    address: ["123 Example St", "Example City", "EX 12345"],
  },
  offer: {
    promotion: {
      title: "Special Offer",
    },
    name: "Standard Room",
    displayPrice: { amount: 100, currency: "AUD" },
    savings: { amount: 20, currency: "AUD" },
    cancellationOption: {
      cancellationType: "FREE_CANCELLATION",
    },
  },
} as any;

describe("HotelListItem", () => {
  it("renders hotel image", () => {
    render(<HotelListItem data={mockHotel} />);
    const image = screen.getByAltText("Example Image");
    expect(image).toHaveAttribute("src", "https://example.com/image.jpg");
  });

  it("renders hotel details", () => {
    const { getByText } = render(<HotelListItem data={mockHotel} />);
    expect(getByText("Example Hotel")).toBeInTheDocument();
    expect(
      getByText("123 Example St, Example City, EX 12345")
    ).toBeInTheDocument();
    expect(getByText("Standard Room")).toBeInTheDocument();
    expect(getByText("Free cancellation")).toBeInTheDocument();
  });

  it("renders hotel price", () => {
    const { getByText } = render(<HotelListItem data={mockHotel} />);
    expect(getByText("100")).toBeInTheDocument();
    expect(getByText("Save $20~")).toBeInTheDocument();
  });

  it("does not render free cancellation text if cancellation type is not free", () => {
    const nonFreeCancellationHotel = {
      ...mockHotel,
      offer: {
        ...mockHotel.offer,
        cancellationOption: {
          cancellationType: "NON_REFUNDABLE",
        },
      },
    } as any;
    render(<HotelListItem data={nonFreeCancellationHotel} />);
    expect(screen.queryByText("Free cancellation")).not.toBeInTheDocument();
  });
});
