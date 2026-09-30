import { productImages } from "@/lib/product-images";

export type PriceTier = {
  quantity: string;
  price: string;
};

export type Product = {
  id: string;
  name: string;
  seller: string;
  location: string;
  category: string;
  priceFrom: string;
  image: string;
  verified: boolean;
  stock: string;
  priceTiers: PriceTier[];
};

export const products: Product[] = [
  {
    id: "chicken-seasoning-001",
    name: "Chicken Flavour Seasoning",
    seller: "ABC Foods",
    location: "Lagos",
    category: "Seasonings",
    priceFrom: "₦20,500",
    image: productImages.seasoning.chicken,
    verified: true,
    stock: "In Stock",
    priceTiers: [
      { quantity: "1–4", price: "₦25,000" },
      { quantity: "5–19", price: "₦23,500" },
      { quantity: "20–99", price: "₦22,000" },
      { quantity: "100+", price: "₦20,500" },
    ],
  },

  {
    id: "beef-seasoning-001",
    name: "Beef Flavour Seasoning",
    seller: "ABC Foods",
    location: "Lagos",
    category: "Seasonings",
    priceFrom: "₦20,000",
    image: productImages.seasoning.beef,
    verified: true,
    stock: "In Stock",
    priceTiers: [
      { quantity: "1–4", price: "₦24,500" },
      { quantity: "5–19", price: "₦23,000" },
      { quantity: "20–99", price: "₦21,500" },
      { quantity: "100+", price: "₦20,000" },
    ],
  },

  {
    id: "onion-seasoning-001",
    name: "Onion Flavour Seasoning",
    seller: "Prime Foods & Beverages",
    location: "Onitsha",
    category: "Seasonings",
    priceFrom: "₦19,500",
    image: productImages.seasoning.onion,
    verified: true,
    stock: "In Stock",
    priceTiers: [
      { quantity: "1–4", price: "₦23,500" },
      { quantity: "5–19", price: "₦22,000" },
      { quantity: "20–99", price: "₦21,000" },
      { quantity: "100+", price: "₦19,500" },
    ],
  },

  {
    id: "tomato-paste-001",
    name: "Tomato Paste",
    seller: "Eastern Distribution Hub",
    location: "Port Harcourt",
    category: "Tomato Products",
    priceFrom: "₦18,500",
    image: productImages.tomato.paste,
    verified: false,
    stock: "In Stock",
    priceTiers: [
      { quantity: "1–4", price: "₦22,000" },
      { quantity: "5–19", price: "₦20,500" },
      { quantity: "20–99", price: "₦19,500" },
      { quantity: "100+", price: "₦18,500" },
    ],
  },

  {
    id: "orange-juice-001",
    name: "Orange Fruit Juice",
    seller: "Prime Foods & Beverages",
    location: "Onitsha",
    category: "Beverages",
    priceFrom: "₦15,000",
    image: productImages.beverages.juice,
    verified: true,
    stock: "In Stock",
    priceTiers: [
      { quantity: "1–4", price: "₦18,000" },
      { quantity: "5–19", price: "₦17,000" },
      { quantity: "20–99", price: "₦16,000" },
      { quantity: "100+", price: "₦15,000" },
    ],
  },

  {
    id: "parboiled-rice-001",
    name: "Parboiled Rice",
    seller: "Eastern Distribution Hub",
    location: "Port Harcourt",
    category: "Rice",
    priceFrom: "₦45,000",
    image: productImages.rice.parboiledRice,
    verified: false,
    stock: "In Stock",
    priceTiers: [
      { quantity: "1–4", price: "₦50,000" },
      { quantity: "5–19", price: "₦48,000" },
      { quantity: "20–99", price: "₦46,500" },
      { quantity: "100+", price: "₦45,000" },
    ],
  },
];