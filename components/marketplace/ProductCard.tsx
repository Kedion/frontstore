import Image from "next/image";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import PricingTable from "./PricingTable";

import type { PriceTier } from "@/lib/products";

type ProductCardProps = {
  name: string;
  seller: string;
  priceFrom: string;
  image: string;
  verified?: boolean;
  stock?: string;
  priceTiers: PriceTier[];
};

export default function ProductCard({
  name,
  seller,
  priceFrom,
  image,
  verified = false,
  stock = "In Stock",
  priceTiers,
}: ProductCardProps) {
  return (
    <article className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow duration-200 hover:shadow-md">
      <div className="relative h-48 overflow-hidden bg-gray-100">
        <Image
          src={image}
          alt={`${name} product`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-contain p-4"
        />
      </div>

      <div className="p-5">
        {verified && (
          <Badge variant="success">Verified Seller</Badge>
        )}

        <h3 className="mt-3 text-xl font-bold text-gray-900">
          {name}
        </h3>

        <p className="mt-1 text-sm text-gray-500">
          {seller}
        </p>

        <p className="mt-4 text-lg font-bold text-gray-900">
          From {priceFrom} / carton
        </p>

        <PricingTable priceTiers={priceTiers} />

        <div className="mt-4">
          <Badge variant="success">{stock}</Badge>
        </div>

        <Button
          className="mt-5 w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2">
          View Product
        </Button>
      </div>
    </article>
  );
}