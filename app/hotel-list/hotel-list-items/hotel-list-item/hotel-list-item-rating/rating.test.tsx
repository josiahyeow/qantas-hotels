import { render, screen } from "@testing-library/react";
import { RatingIconSet } from "./icon-sets/icon-set";
import { Rating } from "./rating";

const mockIconSet: RatingIconSet = {
  filled: () => <div data-testid="filled-icon" />,
  halfFilled: () => <div data-testid="halfFilled-icon" />,
  empty: () => <div data-testid="empty-icon" />,
};

describe("Rating Component", () => {
  it("renders the correct number of filled icons", () => {
    render(<Rating value={3} iconSet={mockIconSet} />);
    expect(screen.getAllByTestId("filled-icon")).toHaveLength(3);
    expect(screen.getAllByTestId("empty-icon")).toHaveLength(2);
  });

  it("renders the correct number of half-filled icons", () => {
    render(<Rating value={3.5} iconSet={mockIconSet} />);
    expect(screen.getAllByTestId("filled-icon")).toHaveLength(3);
    expect(screen.getAllByTestId("halfFilled-icon")).toHaveLength(1);
    expect(screen.getAllByTestId("empty-icon")).toHaveLength(1);
  });

  it("renders all empty icons when value is 0", () => {
    render(<Rating value={0} iconSet={mockIconSet} />);
    expect(screen.getAllByTestId("empty-icon")).toHaveLength(5);
  });

  it("renders all filled icons when value is 5", () => {
    render(<Rating value={5} iconSet={mockIconSet} />);
    expect(screen.getAllByTestId("filled-icon")).toHaveLength(5);
  });

  it("renders the correct number of icons when value is a non-integer", () => {
    render(<Rating value={2.3} iconSet={mockIconSet} />);
    expect(screen.getAllByTestId("filled-icon")).toHaveLength(2);
    expect(screen.getAllByTestId("empty-icon")).toHaveLength(3);
  });
});
