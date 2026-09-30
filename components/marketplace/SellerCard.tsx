import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

type SellerCardProps = {
  name: string;
  location: string;
  rating: string;
  productCount: number;
  verified?: boolean;
  wholesale?: boolean;
};

export default function SellerCard({
  name,
  location,
  rating,
  productCount,
  verified = false,
  wholesale = false,
}: SellerCardProps) {
  return (
    <article className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-xl font-bold text-gray-900">
              {name}
            </h3>

            {verified && (
              <Badge variant="success">Verified</Badge>
            )}
          </div>

          <p className="mt-1 text-sm text-gray-500">
            {location}
          </p>
        </div>

        <div className="rounded-xl bg-gray-100 px-3 py-2 text-center">
          <p className="text-sm font-bold text-gray-900">
            ★ {rating}
          </p>
          <p className="text-xs text-gray-500">
            Rating
          </p>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3">
        <div className="rounded-xl bg-gray-50 p-3">
          <p className="text-xs text-gray-500">
            Products
          </p>
          <p className="mt-1 font-bold text-gray-900">
            {productCount}
          </p>
        </div>

        <div className="rounded-xl bg-gray-50 p-3">
          <p className="text-xs text-gray-500">
            Wholesale
          </p>
          <p className="mt-1 font-bold text-gray-900">
            {wholesale ? "Available" : "Contact seller"}
          </p>
        </div>
      </div>

      <Button variant="outline" className="mt-5 w-full">
        View Store
      </Button>
    </article>
  );
}