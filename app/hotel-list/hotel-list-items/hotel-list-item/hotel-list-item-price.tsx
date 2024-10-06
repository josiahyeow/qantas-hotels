type Price = { amount: number; currency: string };

export function HotelListItemPrice({
  price,
  savings,
}: {
  price: Price;
  savings?: Price | null;
}) {
  return (
    <div className="text-right">
      <span className="text-xs">
        <b>1</b> night total ({price.currency})
      </span>
      <div className="flex gap-1 justify-end">
        <span className="">$</span>
        <span className="text-3xl">{price.amount}</span>
      </div>
      {savings ? (
        <span className="text-lg text-red-600">Save ${savings.amount}~</span>
      ) : (
        <span>&nbsp;</span>
      )}
    </div>
  );
}
