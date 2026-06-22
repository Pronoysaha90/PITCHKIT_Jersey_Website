import { t as jersey_blue_default } from "./jersey-blue-Cg7MS2wI.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cart-store-CoxaE1M5.js
var jersey_red_default = "/assets/jersey-red-Cjf88nPc.jpg";
var jersey_white_default = "/assets/jersey-white-DHyj5vLO.jpg";
var jersey_yellow_default = "/assets/jersey-yellow-DfxbxFu0.jpg";
var products = [
	{
		id: "p01",
		name: "Argentina 2026 Home Kit",
		club: "Argentina",
		league: "International",
		kind: "Home",
		season: "25/26",
		price: 950,
		compareAt: 1200,
		color: "white",
		colorHex: "#bfdbfe",
		image: "/assets/argentina-2026-home-D_lHkJ-y.jpg",
		stock: 24,
		rating: 4.9,
		reviewsCount: 184,
		badges: ["Bestseller", "New"],
		description: "The brand new Argentina 2026 home kit featuring premium breathable fabric."
	},
	{
		id: "p02",
		name: "Argentina 2026 Away Kit",
		club: "Argentina",
		league: "International",
		kind: "Away",
		season: "25/26",
		price: 900,
		compareAt: 1100,
		color: "blue",
		colorHex: "#1e3a8a",
		image: "/assets/argentina-2026-away-DC79O49N.jpg",
		stock: 15,
		rating: 4.8,
		reviewsCount: 132,
		badges: ["New"],
		description: "The stunning Argentina 2026 away kit. Lightweight and performance-oriented."
	},
	{
		id: "p03",
		name: "Brazil 2026 Home Kit",
		club: "Brazil",
		league: "International",
		kind: "Home",
		season: "25/26",
		price: 950,
		compareAt: 1200,
		color: "yellow",
		colorHex: "#fcd34d",
		image: "/assets/brazil_2026_kit-B3pE4A_Q.png",
		stock: 30,
		rating: 4.8,
		reviewsCount: 145,
		badges: ["New", "Hot"],
		description: "The iconic Brazil 2026 home kit. Designed for the ultimate fan experience."
	},
	{
		id: "p04",
		name: "Brazil 2026 Away Kit",
		club: "Brazil",
		league: "International",
		kind: "Away",
		season: "25/26",
		price: 900,
		compareAt: 1150,
		color: "blue",
		colorHex: "#1e40af",
		image: "/assets/brazil-2026-away-CY0GGzDo.jpg",
		stock: 22,
		rating: 4.7,
		reviewsCount: 98,
		badges: ["New"],
		description: "The blue away kit for Brazil 2026, featuring sleek modern lines."
	},
	{
		id: "p05",
		name: "England 2026 Home Kit",
		club: "England",
		league: "International",
		kind: "Home",
		season: "25/26",
		price: 920,
		compareAt: 1100,
		color: "white",
		colorHex: "#ffffff",
		image: "/assets/england-2026-home-CafeHdVd.jpg",
		stock: 45,
		rating: 4.6,
		reviewsCount: 210,
		description: "Classic white England home jersey for the upcoming 2026 tournaments."
	},
	{
		id: "p06",
		name: "France 2026 Home Kit",
		club: "France",
		league: "International",
		kind: "Home",
		season: "25/26",
		price: 950,
		compareAt: 1250,
		color: "blue",
		colorHex: "#0c1e4a",
		image: "/assets/france-2026-home-CR7qHDc4.jpg",
		stock: 18,
		rating: 4.9,
		reviewsCount: 302,
		badges: ["Hot", "Limited"],
		description: "Deep blue elegant France 2026 home kit."
	},
	{
		id: "p07",
		name: "Germany 2026 Home Kit",
		club: "Germany",
		league: "International",
		kind: "Home",
		season: "25/26",
		price: 930,
		color: "white",
		colorHex: "#f8f9fa",
		image: "/assets/germany-2026-home-DQSgmQ-9.jpg",
		stock: 25,
		rating: 4.8,
		reviewsCount: 175,
		badges: ["New"],
		description: "The classic German engineered home jersey."
	},
	{
		id: "p08",
		name: "Spain 2026 Home Kit",
		club: "Spain",
		league: "International",
		kind: "Home",
		season: "25/26",
		price: 940,
		color: "red",
		colorHex: "#dc2626",
		image: "/assets/spain-2026-home-CSBmAOyX.jpg",
		stock: 28,
		rating: 4.7,
		reviewsCount: 188,
		badges: ["Bestseller"],
		description: "La Roja 2026 home kit with vibrant red shades."
	},
	{
		id: "p09",
		name: "Portugal 2026 Home Kit",
		club: "Portugal",
		league: "International",
		kind: "Home",
		season: "25/26",
		price: 950,
		compareAt: 1150,
		color: "red",
		colorHex: "#991b1b",
		image: "/assets/portugal-2026-home-Bcu59FuQ.jpg",
		stock: 12,
		rating: 4.9,
		reviewsCount: 260,
		badges: ["Limited"],
		description: "The majestic Portugal 2026 home kit."
	},
	{
		id: "p10",
		name: "Croatia 2026 Away Kit",
		club: "Croatia",
		league: "International",
		kind: "Away",
		season: "25/26",
		price: 880,
		color: "blue",
		colorHex: "#1d4ed8",
		image: "/assets/croatia-2026-away-BjNvtm7N.jpg",
		stock: 10,
		rating: 4.7,
		reviewsCount: 85,
		description: "The famous checkered pattern meets a deep blue away design."
	},
	{
		id: "p11",
		name: "Egypt 2026 Home Kit",
		club: "Egypt",
		league: "International",
		kind: "Home",
		season: "25/26",
		price: 850,
		compareAt: 1e3,
		color: "red",
		colorHex: "#b91c1c",
		image: "/assets/egypt-2026-home-BXf3UKe1.jpg",
		stock: 19,
		rating: 4.6,
		reviewsCount: 112,
		badges: ["New"],
		description: "The Pharaohs 2026 home kit. Distinctive and bold."
	},
	{
		id: "p12",
		name: "Madrid Royal Home (Player Edition)",
		club: "Real Madrid",
		league: "La Liga",
		kind: "Player Edition",
		season: "24/25",
		price: 990,
		color: "white",
		colorHex: "#ffffff",
		image: jersey_white_default,
		stock: 12,
		rating: 4.9,
		reviewsCount: 312,
		badges: ["Limited"],
		description: "Player issue white classic with gold-trim heat-pressed crest."
	},
	{
		id: "p13",
		name: "Manchester Reds Home (Fan Edition)",
		club: "Manchester Reds",
		league: "Premier League",
		kind: "Fan Edition",
		season: "24/25",
		price: 700,
		color: "red",
		colorHex: "#E11D2E",
		image: jersey_red_default,
		stock: 38,
		rating: 4.6,
		reviewsCount: 230,
		description: "Standard fit fan edition with classic woven badge."
	},
	{
		id: "p14",
		name: "Cityblue Sky Edition",
		club: "City FC",
		league: "Premier League",
		kind: "Home",
		season: "24/25",
		price: 850,
		compareAt: 1e3,
		color: "blue",
		colorHex: "#1e3a8a",
		image: jersey_blue_default,
		stock: 18,
		rating: 4.7,
		reviewsCount: 121,
		description: "Lightweight knit with engineered ventilation across the back."
	},
	{
		id: "p15",
		name: "Milan Rosso Home",
		club: "AC Milan",
		league: "Serie A",
		kind: "Home",
		season: "24/25",
		price: 820,
		color: "red",
		colorHex: "#b91c1c",
		image: jersey_red_default,
		stock: 16,
		rating: 4.7,
		reviewsCount: 142,
		description: "Classic Rossoneri stripes in heritage cut."
	},
	{
		id: "p16",
		name: "Dortmund Yellow Wall",
		club: "Dortmund",
		league: "Bundesliga",
		kind: "Home",
		season: "24/25",
		price: 850,
		compareAt: 1050,
		color: "yellow",
		colorHex: "#facc15",
		image: jersey_yellow_default,
		stock: 19,
		rating: 4.9,
		reviewsCount: 174,
		badges: ["Hot"],
		description: "Signal yellow with black sleeves."
	}
].map((r) => ({
	...r,
	slug: r.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")
}));
var productBySlug = (slug) => products.find((p) => p.slug === slug);
var productById = (id) => products.find((p) => p.id === id);
var SIZES = [
	"S",
	"M",
	"L",
	"XL",
	"XXL"
];
var bundles = [
	{
		id: "b1",
		name: "South America 2026 Pack",
		description: "Argentina + Brazil 2026 Home kits together.",
		productIds: ["p01", "p03"],
		discountPct: 15
	},
	{
		id: "b2",
		name: "European Giants",
		description: "France + Germany + Spain Home Kits.",
		productIds: [
			"p06",
			"p07",
			"p08"
		],
		discountPct: 20
	},
	{
		id: "b3",
		name: "Argentina Complete",
		description: "Argentina 2026 Home & Away Kit.",
		productIds: ["p01", "p02"],
		discountPct: 12
	}
];
var COUPONS = {
	WELCOME10: {
		pct: 10,
		label: "10% off your first order"
	},
	PITCH15: {
		pct: 15,
		label: "15% off site-wide"
	},
	GOALS20: {
		pct: 20,
		label: "20% off — flash drop"
	}
};
var useCart = create()(persist((set, get) => ({
	items: [],
	coupon: void 0,
	shippingZone: "dhaka",
	add: (productId, size, quantity = 1) => {
		const existing = get().items.find((i) => i.productId === productId && i.size === size);
		if (existing) set({ items: get().items.map((i) => i.id === existing.id ? {
			...i,
			quantity: i.quantity + quantity
		} : i) });
		else set({ items: [...get().items, {
			id: `${productId}-${size}-${Date.now()}`,
			productId,
			size,
			quantity
		}] });
	},
	remove: (lineId) => set({ items: get().items.filter((i) => i.id !== lineId) }),
	setQty: (lineId, qty) => set({ items: get().items.map((i) => i.id === lineId ? {
		...i,
		quantity: Math.max(1, qty)
	} : i).filter((i) => i.quantity > 0) }),
	clear: () => set({
		items: [],
		coupon: void 0
	}),
	applyCoupon: (code) => {
		const key = code.trim().toUpperCase();
		if (!COUPONS[key]) return {
			ok: false,
			message: "Invalid coupon code"
		};
		set({ coupon: key });
		return {
			ok: true,
			message: `Applied — ${COUPONS[key].label}`
		};
	},
	removeCoupon: () => set({ coupon: void 0 }),
	setShippingZone: (zone) => set({ shippingZone: zone })
}), { name: "pitch-cart-v1" }));
function useCartTotals() {
	const items = useCart((s) => s.items);
	const coupon = useCart((s) => s.coupon);
	const shippingZone = useCart((s) => s.shippingZone);
	const subtotal = items.reduce((sum, i) => {
		const p = productById(i.productId);
		return sum + (p ? p.price * i.quantity : 0);
	}, 0);
	const couponPct = coupon ? COUPONS[coupon]?.pct ?? 0 : 0;
	const volumeDiscountPct = subtotal >= 2500 ? 10 : subtotal >= 1500 ? 5 : 0;
	const totalDiscountPct = Math.min(couponPct + volumeDiscountPct, 35);
	const discount = +(subtotal * (totalDiscountPct / 100)).toFixed(2);
	const shipping = subtotal === 0 ? 0 : shippingZone === "dhaka" ? 50 : 100;
	return {
		items,
		coupon,
		shippingZone,
		subtotal,
		couponPct,
		volumeDiscountPct,
		totalDiscountPct,
		discount,
		shipping,
		total: Math.max(0, +(subtotal - discount + shipping).toFixed(2)),
		count: items.reduce((n, i) => n + i.quantity, 0)
	};
}
//#endregion
export { jersey_yellow_default as a, products as c, jersey_white_default as i, useCart as l, bundles as n, productById as o, jersey_red_default as r, productBySlug as s, SIZES as t, useCartTotals as u };
