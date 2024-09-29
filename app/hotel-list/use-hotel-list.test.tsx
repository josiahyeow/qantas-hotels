import { act, renderHook } from "@testing-library/react";
import { Hotel } from "./get-hotels";
import { useHotelList } from "./use-hotel-list";

describe("useHotelList", () => {
  it("sorts hotels by price high to low by default", () => {
    const { result } = renderHook(() => useHotelList(HOTELS_FIXTURE));

    expect(result.current.sortBy).toEqual("price-high-low");
    expect(result.current.hotels).toEqual([HOTEL_4, HOTEL_2, HOTEL_1, HOTEL_3]);
  });

  it("sorts hotels by selected sort by option", () => {
    const { result } = renderHook(() => useHotelList(HOTELS_FIXTURE));

    act(() => result.current.sortPriceLowToHigh());

    expect(result.current.sortBy).toEqual("price-low-high");
    expect(result.current.hotels).toEqual([HOTEL_3, HOTEL_1, HOTEL_2, HOTEL_4]);

    act(() => result.current.sortPriceHighToLow());

    expect(result.current.sortBy).toEqual("price-high-low");
    expect(result.current.hotels).toEqual([HOTEL_4, HOTEL_2, HOTEL_1, HOTEL_3]);
  });

  it("returns empty array if no hotels are provided", () => {
    const { result } = renderHook(() => useHotelList([]));

    expect(result.current.hotels).toEqual([]);
  });
});

const HOTEL_1: Hotel = {
  id: "cxd650nuyo",
  property: {
    propertyId: "P107801",
    title: "Courtyard by Marriott Sydney-North Ryde",
    address: ["7-11 Talavera Rd", "North Ryde"],
    previewImage: {
      url: "https://unsplash.it/145/125/?random",
      caption: "Image of Courtyard by Marriott Sydney-North Ryde",
      imageType: "PRIMARY",
    },
    rating: {
      ratingValue: 4.5,
      ratingType: "self",
    },
  },
  offer: {
    promotion: {
      title: "Exclusive Deal",
      type: "MEMBER",
    },
    name: "Deluxe Balcony Room",
    displayPrice: {
      amount: 329.0,
      currency: "AUD",
    },
    savings: {
      amount: 30.0,
      currency: "AUD",
    },
    cancellationOption: {
      cancellationType: "NOT_REFUNDABLE",
    },
  },
};

const HOTEL_2: Hotel = {
  id: "mesq6mggyn",
  property: {
    propertyId: "P107802",
    title: "Primus Hotel Sydney",
    address: ["339 Pitt St", "Sydney"],
    previewImage: {
      url: "https://unsplash.it/145/125/?random",
      caption: "Image of Primus Hotel Sydney",
      imageType: "PRIMARY",
    },
    rating: {
      ratingValue: 5,
      ratingType: "self",
    },
  },
  offer: {
    promotion: {
      title: "Exclusive Deal",
      type: "MEMBER",
    },
    name: "Deluxe King",
    displayPrice: {
      amount: 375.0,
      currency: "AUD",
    },
    savings: {
      amount: 28.0,
      currency: "AUD",
    },
    cancellationOption: {
      cancellationType: "FREE_CANCELLATION",
    },
  },
};

const HOTEL_3: Hotel = {
  id: "xbtlihs45t",
  property: {
    propertyId: "P107803",
    title: "Rydges World Square Sydney",
    address: ["389 Pitt St", "Sydney"],
    previewImage: {
      url: "https://unsplash.it/145/125/?random",
      caption: "Image of property",
      imageType: "PRIMARY",
    },
    rating: {
      ratingValue: 4,
      ratingType: "star",
    },
  },
  offer: {
    promotion: {
      title: "Red Hot",
      type: "CAMPAIGN",
    },
    name: "Deluxe King Room",
    displayPrice: {
      amount: 227.0,
      currency: "AUD",
    },
    savings: null,
    cancellationOption: {
      cancellationType: "NOT_REFUNDABLE",
    },
  },
};

const HOTEL_4: Hotel = {
  id: "5lm8loqk1s",
  property: {
    propertyId: "P107804",
    title: "PARKROYAL Darling Harbour Sydney",
    address: ["150 Day Street", "Sydney"],
    previewImage: {
      url: "https://unsplash.it/145/125/?random",
      caption: "Image of PARKROYAL Darling Harbour Sydney",
      imageType: "PRIMARY",
    },
    rating: {
      ratingValue: 4.5,
      ratingType: "star",
    },
  },
  offer: {
    promotion: {
      title: "Exclusive Deal",
      type: "MEMBER",
    },
    name: "Deluxe King",
    displayPrice: {
      amount: 535.0,
      currency: "AUD",
    },
    savings: null,
    cancellationOption: {
      cancellationType: "FREE_CANCELLATION",
    },
  },
};

const HOTELS_FIXTURE: Hotel[] = [HOTEL_1, HOTEL_2, HOTEL_3, HOTEL_4];
