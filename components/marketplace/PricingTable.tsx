import type { PriceTier } from "@/lib/products";

type PricingTableProps = {
  priceTiers: PriceTier[];
};

export default function PricingTable({
  priceTiers,
}: PricingTableProps) {
  return (
    <dl className="mt-4 space-y-2">
      {priceTiers.map((tier) => (
        <div
          key={tier.quantity}
          className="flex items-center justify-between rounded-lg bg-gray-50 px-3 py-2 text-sm"
        >
          <dt className="text-gray-600">
            {tier.quantity} cartons
          </dt>

          <dd className="font-semibold text-gray-900">
            {tier.price}
          </dd>
        </div>
      ))}
    </dl>
  );
}