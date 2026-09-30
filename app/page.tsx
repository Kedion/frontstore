import Button from "@/components/ui/Button";
import ProductCard from "@/components/marketplace/ProductCard";
import ProductGrid from "@/components/marketplace/ProductGrid";
import SellerCard from "@/components/marketplace/SellerCard";
import CategoryCard from "@/components/marketplace/CategoryCard";
import { products } from "@/lib/products";

export default function Home() {
    const featuredWholesaleProduct = products.find(
    (product) => product.id === "chicken-seasoning-001",
  );

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Navigation */}
      <header className="border-b border-slate-200">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="text-2xl font-bold tracking-tight">
            Front<span className="text-orange-600">Store</span>
          </div>

          <nav className="hidden gap-8 text-sm font-medium md:flex">
            <a href="#" className="hover:text-orange-600">
              Marketplace
            </a>
            <a href="#" className="hover:text-orange-600">
              Oso Ahịa
            </a>
            <a href="#" className="hover:text-orange-600">
              Learn a Trade
            </a>
            <a href="#" className="hover:text-orange-600">
              Sell
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <button className="hidden rounded-lg px-4 py-2 text-sm font-medium hover:bg-slate-100 sm:block">
              Sign in
            </button>

            <button className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800">
              Get started
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-orange-700">
              Built for African commerce
            </div>

            <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-7xl">
              Find products.
              <br />
              Build businesses.
              <br />
              <span className="text-orange-600">Grow together.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              FrontStore connects buyers, sellers, Oso Ahịa agents and
              entrepreneurs in one marketplace built around the way business
              actually works.
            </p>

            {/* Search */}
            <div className="mt-10 flex max-w-2xl flex-col gap-3 sm:flex-row">
              <input
                type="text"
                placeholder="Search products, brands or sellers..."
                className="flex-1 rounded-xl border border-slate-300 bg-white px-5 py-4 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
              />

              <button className="rounded-xl bg-orange-600 px-7 py-4 font-semibold text-white transition hover:bg-orange-700">
                Search
              </button>
            </div>

            {/* CTAs */}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button>
                Shop Products
              </Button>

              <Button variant="outline">
                Start Selling
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Four paths */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-wider text-orange-600">
            One platform
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
            More than a marketplace
          </h2>

          <p className="mt-3 max-w-2xl text-slate-600">
            Whether you&apos;re buying, selling, earning or learning a trade,
            FrontStore gives you a place to participate.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <FeatureCard
            title="Marketplace"
            description="Discover products from verified businesses and buy for yourself or your business."
            action="Shop products"
          />

          <FeatureCard
            title="Oso Ahịa"
            description="Earn commission by connecting customers with products they need."
            action="Explore opportunities"
          />

          <FeatureCard
            title="Learn a Trade"
            description="Find apprenticeship opportunities and learn directly from established businesses."
            action="Find an Oga"
          />

          <FeatureCard
            title="Sell"
            description="Create your storefront, manage inventory and reach new customers."
            action="Open your store"
          />
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-wider text-orange-600">
            Browse marketplace
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
            Shop by category
          </h2>

          <p className="mt-3 max-w-2xl text-slate-600">
            Explore products from Nigerian manufacturers, distributors and
            businesses across everyday categories.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <CategoryCard
            name="Seasonings"
            description="Chicken, beef, onion, curry and other flavour products."
            productCount={42}
          />

          <CategoryCard
            name="Tomato Products"
            description="Tomato paste, concentrate, sauces and related products."
            productCount={28}
          />

          <CategoryCard
            name="Beverages"
            description="Soft drinks, juices, bottled water and other beverages."
            productCount={36}
          />

          <CategoryCard
            name="Rice"
            description="Local, parboiled and packaged rice from trusted sellers."
            productCount={31}
          />

          <CategoryCard
            name="Garri & Staples"
            description="Garri, garri mixes and everyday Nigerian food staples."
            productCount={24}
          />
        </div>
      </section>

      {/* Products */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-orange-600">
              Marketplace
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
              Products for your business
            </h2>

            <p className="mt-3 max-w-2xl text-slate-600">
              Discover wholesale products from Nigerian manufacturers,
              distributors and trusted sellers.
            </p>
          </div>

          <button className="w-fit rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-orange-500 hover:text-orange-600">
            View all products
          </button>
        </div>

        <ProductGrid />
      </section>

      {/* Wholesale section */}
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-orange-400">
                Built for business
              </p>

              <h2 className="mt-3 text-4xl font-bold tracking-tight">
                Buy at the price that matches your volume.
              </h2>

              <p className="mt-5 leading-7 text-slate-300">
                FrontStore supports minimum order quantities, cartons,
                wholesale pricing and quantity-based discounts.
              </p>

              <button className="mt-8 rounded-xl bg-orange-600 px-6 py-3 font-semibold hover:bg-orange-700">
                Explore wholesale
              </button>
            </div>

            {featuredWholesaleProduct && (
              <ProductCard
                name={featuredWholesaleProduct.name}
                seller={`${featuredWholesaleProduct.seller} · ${featuredWholesaleProduct.location}`}
                image={featuredWholesaleProduct.image}
                priceFrom={featuredWholesaleProduct.priceFrom}
                verified={featuredWholesaleProduct.verified}
                stock={featuredWholesaleProduct.stock}
                priceTiers={featuredWholesaleProduct.priceTiers}
              />
            )}
          </div>
        </div>
      </section>

        {/* Seller Section */}
      <section className="border-t border-gray-200 bg-gray-50 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
              Trusted Sellers
            </p>

            <h2 className="mt-2 text-3xl font-bold text-gray-900">
              Buy from businesses you can trust
            </h2>

            <p className="mt-3 max-w-2xl text-gray-600">
              Discover verified Nigerian businesses, compare their products,
              and connect directly with sellers.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <SellerCard
              name="ABC Foods"
              location="Lagos, Nigeria"
              rating="4.8"
              productCount={24}
              verified
              wholesale
            />

            <SellerCard
              name="Prime Foods & Beverages"
              location="Onitsha, Anambra"
              rating="4.7"
              productCount={18}
              verified
              wholesale
            />

            <SellerCard
              name="Eastern Distribution Hub"
              location="Port Harcourt, Rivers"
              rating="4.6"
              productCount={31}
              wholesale
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} FrontStore
          </p>

          <p>
            Find products. Build businesses. Grow together.
          </p>
        </div>
      </footer>
    </main>
  );
}


function FeatureCard({
  title,
  description,
  action,
}: {
  title: string;
  description: string;
  action: string;
}) {
  const icons = {
    Marketplace: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 9h18M5 9l1-5h12l1 5M6 9v10h12V9M9 13h6"
        />
      </svg>
    ),
    "Oso Ahịa": (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 10h16M5 10v9h14v-9M7 10V5h10v5M9 19v-5h6v5"
        />
      </svg>
    ),
    "Learn a Trade": (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m3 9 9-5 9 5-9 5-9-5Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7 11.5V15c2.8 2 7.2 2 10 0v-3.5M21 9v5"
        />
      </svg>
    ),
    Sell: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 10h16M5 10v9h14v-9M7 10V5h10v5M9 19v-5h6v5"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 5h8l1 5H7l1-5Z"
        />
      </svg>
    ),
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg">
      <div
        className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-700"
        aria-hidden="true"
      >
        {icons[title as keyof typeof icons]}
      </div>

      <h3 className="text-xl font-bold">{title}</h3>

      <p className="mt-3 min-h-20 text-sm leading-6 text-slate-600">
        {description}
      </p>

      <button
        type="button"
        className="mt-5 rounded-md text-sm font-semibold text-orange-600 transition hover:text-orange-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
      >
        {action} →
      </button>
    </div>
  );
}