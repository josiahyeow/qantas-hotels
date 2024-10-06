import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { HotelListItemPrice } from "./hotel-list-item-price";

describe("HotelListItemPrice", () => {
  it("renders the price correctly", () => {
    const price = { amount: 200, currency: "AUD" };
    render(<HotelListItemPrice price={price} />);

    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("night total (AUD)")).toBeInTheDocument();
    expect(screen.getByText("$")).toBeInTheDocument();
    expect(screen.getByText("200")).toBeInTheDocument();
  });

  it("renders the savings correctly when provided", () => {
    const price = { amount: 200, currency: "AUD" };
    const savings = { amount: 50, currency: "AUD" };
    render(<HotelListItemPrice price={price} savings={savings} />);

    expect(screen.getByText("Save $50~")).toBeInTheDocument();
  });

  it("does not render savings when not provided", () => {
    const price = { amount: 200, currency: "AUD" };
    render(<HotelListItemPrice price={price} />);

    expect(screen.queryByText(/Save \$/)).not.toBeInTheDocument();
  });
});
