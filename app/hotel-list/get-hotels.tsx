import data from "./hotel-data.json";

export type Hotel = {
  id: string;
  property: {
    propertyId: string;
    title: string;
    address: string[];
    previewImage: {
      url: string;
      caption: string;
      imageType: "PRIMARY";
    };
    rating: {
      ratingValue: number;
      ratingType: "self" | "star";
    };
  };
  offer: {
    promotion: {
      title: string;
      type: "MEMBER" | "CAMPAIGN";
    };
    name: string;
    displayPrice: {
      amount: number;
      currency: "AUD";
    };
    savings: {
      amount: number;
      currency: "AUD";
    } | null;
    cancellationOption: {
      cancellationType: "NOT_REFUNDABLE" | "FREE_CANCELLATION";
    };
  };
};

type GetHotelsResponse = {
  results: Hotel[];
};

export function getHotels() {
  return (data as GetHotelsResponse).results;
}
