import Button from "@/components/ui/Button";
import ProductCard from "@/components/marketplace/ProductCard";
import SellerCard from "@/components/marketplace/SellerCard";
import { productImages } from "@/lib/product-images";

export default function Home() {
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

            <ProductCard
              name="Chicken Flavour Seasoning"
              seller="ABC Foods · Lagos"
              image={productImages.seasoning.chicken}
              priceFrom="₦20,500"
              verified
              stock="In Stock"
              priceTiers={[
                { quantity: "1–4", price: "₦25,000" },
                { quantity: "5–19", price: "₦23,500" },
                { quantity: "20–99", price: "₦22,000" },
                { quantity: "100+", price: "₦20,500" },
              ]}
            />
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
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 font-bold text-orange-700">
        F
      </div>

      <h3 className="text-xl font-bold">{title}</h3>

      <p className="mt-3 min-h-20 text-sm leading-6 text-slate-600">
        {description}
      </p>

      <button className="mt-5 text-sm font-semibold text-orange-600 hover:text-orange-700">
        {action} →
      </button>
    </div>
  );
}
