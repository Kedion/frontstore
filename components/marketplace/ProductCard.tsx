import Image from "next/image";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

type PriceTier = {
  quantity: string;
  price: string;
};

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
    <article className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md">
      <div className="relative h-48 overflow-hidden bg-gray-100">
        <Image
          src={image}
          alt={name}
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

        <div className="mt-4 space-y-2">
          {priceTiers.map((tier) => (
            <div
              key={tier.quantity}
              className="flex items-center justify-between rounded-lg bg-gray-50 px-3 py-2 text-sm"
            >
              <span className="text-gray-600">
                {tier.quantity} cartons
              </span>

              <span className="font-semibold text-gray-900">
                {tier.price}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-4">
          <Badge variant="success">{stock}</Badge>
        </div>

        <Button className="mt-5 w-full">
          View Product
        </Button>
      </div>
    </article>
  );
}