import Button from "@/components/ui/Button";

type CategoryCardProps = {
  name: string;
  description: string;
  productCount: number;
};

export default function CategoryCard({
  name,
  description,
  productCount,
}: CategoryCardProps) {
  return (
    <article className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg">
      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-orange-100 text-xl font-bold text-orange-700">
        {name.charAt(0)}
      </div>

      <h3 className="mt-5 text-xl font-bold text-slate-900">
        {name}
      </h3>

      <p className="mt-2 min-h-12 text-sm leading-6 text-slate-600">
        {description}
      </p>

      <p className="mt-4 text-sm font-semibold text-slate-900">
        {productCount} products
      </p>

      <Button
        variant="outline"
        className="mt-5 w-full group-hover:border-orange-300"
      >
        Browse Category
      </Button>
    </article>
  );
}