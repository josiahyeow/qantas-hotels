import { render, screen } from "@testing-library/react";
import { HotelListItemImage } from "./hotel-list-item-image";

describe("HotelListItemImage", () => {
  const imageUrl = "https://example.com/image.jpg";
  const description = "A beautiful hotel";
  const promoTitle = "Special Offer";

  it("renders the image with the correct src and alt attributes", () => {
    render(
      <HotelListItemImage imageUrl={imageUrl} description={description} />
    );
    const imgElement = screen.getByAltText(description);
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute("src", imageUrl);
  });

  it("renders the promo title when provided", () => {
    render(
      <HotelListItemImage
        imageUrl={imageUrl}
        description={description}
        promoTitle={promoTitle}
      />
    );
    expect(screen.getByText(promoTitle)).toBeInTheDocument();
  });

  it("does not render the promo title when not provided", () => {
    render(
      <HotelListItemImage imageUrl={imageUrl} description={description} />
    );
    expect(screen.queryByText(promoTitle)).not.toBeInTheDocument();
  });
});
