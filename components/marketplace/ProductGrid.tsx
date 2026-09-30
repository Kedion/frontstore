import { products } from "@/lib/products";
import ProductCard from "./ProductCard";

export default function ProductGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          seller={product.seller}
          priceFrom={product.priceFrom}
          image={product.image}
          verified={product.verified}
          stock={product.stock}
          priceTiers={product.priceTiers}
        />
      ))}
    </div>
  );
}