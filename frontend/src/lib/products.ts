import red from "@/assets/jersey-red.jpg";
import green from "@/assets/jersey-green.jpg";
import blue from "@/assets/jersey-blue.jpg";
import white from "@/assets/jersey-white.jpg";
import black from "@/assets/jersey-black.jpg";
import yellow from "@/assets/jersey-yellow.jpg";

// New Assets
import argHome from "@/assets/argentina-2026-home.jpg";
import argAway from "@/assets/argentina-2026-away.jpg";
import braHome from "@/assets/brazil_2026_kit.png";
import braAway from "@/assets/brazil-2026-away.jpg";
import croAway from "@/assets/croatia-2026-away.jpg";
import egyHome from "@/assets/egypt-2026-home.jpg";
import engHome from "@/assets/england-2026-home.jpg";
import fraHome from "@/assets/france-2026-home.jpg";
import gerHome from "@/assets/germany-2026-home.jpg";
import porHome from "@/assets/portugal-2026-home.jpg";
import spaHome from "@/assets/spain-2026-home.jpg";

export type League = "Premier League" | "La Liga" | "Serie A" | "Bundesliga" | "Ligue 1" | "International" | "Accessories";
export type Kind = "Home" | "Away" | "Third" | "Retro" | "Training" | "Player Edition" | "Fan Edition" | "Collectible";

export interface Product {
  id: string;
  slug: string;
  name: string;
  club: string;
  league: League;
  kind: Kind;
  season: string;
  price: number;
  compareAt?: number;
  color: string;
  colorHex: string;
  image: string;
  stock: number;
  rating: number;
  reviewsCount: number;
  badges?: ("New" | "Hot" | "Limited" | "Bestseller")[];
  description: string;
}

const raw: Omit<Product, "slug">[] = [
  // 2026 International Collection
  { id: "p01", name: "Argentina 2026 Home Kit", club: "Argentina", league: "International", kind: "Home", season: "25/26", price: 950, compareAt: 1200, color: "white", colorHex: "#bfdbfe", image: argHome, stock: 24, rating: 4.9, reviewsCount: 184, badges: ["Bestseller", "New"], description: "The brand new Argentina 2026 home kit featuring premium breathable fabric." },
  { id: "p02", name: "Argentina 2026 Away Kit", club: "Argentina", league: "International", kind: "Away", season: "25/26", price: 900, compareAt: 1100, color: "blue", colorHex: "#1e3a8a", image: argAway, stock: 15, rating: 4.8, reviewsCount: 132, badges: ["New"], description: "The stunning Argentina 2026 away kit. Lightweight and performance-oriented." },
  { id: "p03", name: "Brazil 2026 Home Kit", club: "Brazil", league: "International", kind: "Home", season: "25/26", price: 950, compareAt: 1200, color: "yellow", colorHex: "#fcd34d", image: braHome, stock: 30, rating: 4.8, reviewsCount: 145, badges: ["New", "Hot"], description: "The iconic Brazil 2026 home kit. Designed for the ultimate fan experience." },
  { id: "p04", name: "Brazil 2026 Away Kit", club: "Brazil", league: "International", kind: "Away", season: "25/26", price: 900, compareAt: 1150, color: "blue", colorHex: "#1e40af", image: braAway, stock: 22, rating: 4.7, reviewsCount: 98, badges: ["New"], description: "The blue away kit for Brazil 2026, featuring sleek modern lines." },
  { id: "p05", name: "England 2026 Home Kit", club: "England", league: "International", kind: "Home", season: "25/26", price: 920, compareAt: 1100, color: "white", colorHex: "#ffffff", image: engHome, stock: 45, rating: 4.6, reviewsCount: 210, description: "Classic white England home jersey for the upcoming 2026 tournaments." },
  { id: "p06", name: "France 2026 Home Kit", club: "France", league: "International", kind: "Home", season: "25/26", price: 950, compareAt: 1250, color: "blue", colorHex: "#0c1e4a", image: fraHome, stock: 18, rating: 4.9, reviewsCount: 302, badges: ["Hot", "Limited"], description: "Deep blue elegant France 2026 home kit." },
  { id: "p07", name: "Germany 2026 Home Kit", club: "Germany", league: "International", kind: "Home", season: "25/26", price: 930, color: "white", colorHex: "#f8f9fa", image: gerHome, stock: 25, rating: 4.8, reviewsCount: 175, badges: ["New"], description: "The classic German engineered home jersey." },
  { id: "p08", name: "Spain 2026 Home Kit", club: "Spain", league: "International", kind: "Home", season: "25/26", price: 940, color: "red", colorHex: "#dc2626", image: spaHome, stock: 28, rating: 4.7, reviewsCount: 188, badges: ["Bestseller"], description: "La Roja 2026 home kit with vibrant red shades." },
  { id: "p09", name: "Portugal 2026 Home Kit", club: "Portugal", league: "International", kind: "Home", season: "25/26", price: 950, compareAt: 1150, color: "red", colorHex: "#991b1b", image: porHome, stock: 12, rating: 4.9, reviewsCount: 260, badges: ["Limited"], description: "The majestic Portugal 2026 home kit." },
  { id: "p10", name: "Croatia 2026 Away Kit", club: "Croatia", league: "International", kind: "Away", season: "25/26", price: 880, color: "blue", colorHex: "#1d4ed8", image: croAway, stock: 10, rating: 4.7, reviewsCount: 85, description: "The famous checkered pattern meets a deep blue away design." },
  { id: "p11", name: "Egypt 2026 Home Kit", club: "Egypt", league: "International", kind: "Home", season: "25/26", price: 850, compareAt: 1000, color: "red", colorHex: "#b91c1c", image: egyHome, stock: 19, rating: 4.6, reviewsCount: 112, badges: ["New"], description: "The Pharaohs 2026 home kit. Distinctive and bold." },

  // Club / Older mocked products
  { id: "p12", name: "Madrid Royal Home (Player Edition)", club: "Real Madrid", league: "La Liga", kind: "Player Edition", season: "24/25", price: 990, color: "white", colorHex: "#ffffff", image: white, stock: 12, rating: 4.9, reviewsCount: 312, badges: ["Limited"], description: "Player issue white classic with gold-trim heat-pressed crest." },
  { id: "p13", name: "Manchester Reds Home (Fan Edition)", club: "Manchester Reds", league: "Premier League", kind: "Fan Edition", season: "24/25", price: 700, color: "red", colorHex: "#E11D2E", image: red, stock: 38, rating: 4.6, reviewsCount: 230, description: "Standard fit fan edition with classic woven badge." },
  { id: "p14", name: "Cityblue Sky Edition", club: "City FC", league: "Premier League", kind: "Home", season: "24/25", price: 850, compareAt: 1000, color: "blue", colorHex: "#1e3a8a", image: blue, stock: 18, rating: 4.7, reviewsCount: 121, description: "Lightweight knit with engineered ventilation across the back." },
  { id: "p15", name: "Milan Rosso Home", club: "AC Milan", league: "Serie A", kind: "Home", season: "24/25", price: 820, color: "red", colorHex: "#b91c1c", image: red, stock: 16, rating: 4.7, reviewsCount: 142, description: "Classic Rossoneri stripes in heritage cut." },
  { id: "p16", name: "Dortmund Yellow Wall", club: "Dortmund", league: "Bundesliga", kind: "Home", season: "24/25", price: 850, compareAt: 1050, color: "yellow", colorHex: "#facc15", image: yellow, stock: 19, rating: 4.9, reviewsCount: 174, badges: ["Hot"], description: "Signal yellow with black sleeves." },
];

export const products: Product[] = raw.map((r) => ({
  ...r,
  slug: r.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""),
}));

export const productBySlug = (slug: string) => products.find((p) => p.slug === slug);
export const productById = (id: string) => products.find((p) => p.id === id);

export const SIZES = ["S", "M", "L", "XL", "XXL"] as const;
export type Size = (typeof SIZES)[number];

export interface Bundle {
  id: string;
  name: string;
  description: string;
  productIds: string[];
  discountPct: number;
}

export const bundles: Bundle[] = [
  { id: "b1", name: "South America 2026 Pack", description: "Argentina + Brazil 2026 Home kits together.", productIds: ["p01", "p03"], discountPct: 15 },
  { id: "b2", name: "European Giants", description: "France + Germany + Spain Home Kits.", productIds: ["p06", "p07", "p08"], discountPct: 20 },
  { id: "b3", name: "Argentina Complete", description: "Argentina 2026 Home & Away Kit.", productIds: ["p01", "p02"], discountPct: 12 },
];

export const COUPONS: Record<string, { pct: number; label: string }> = {
  WELCOME10: { pct: 10, label: "10% off your first order" },
  PITCH15: { pct: 15, label: "15% off site-wide" },
  GOALS20: { pct: 20, label: "20% off — flash drop" },
};
