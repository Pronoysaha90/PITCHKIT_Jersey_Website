import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { k as Heart, p as ShoppingBag, t as Zap, u as Star } from "../_libs/lucide-react.mjs";
import { l as useCart } from "./cart-store-CoxaE1M5.mjs";
import { g as useNavigate, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as useWishlist } from "./wishlist-store-CA4unLzC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ProductCard-69up3jhp.js
var import_jsx_runtime = require_jsx_runtime();
function ProductCard({ p }) {
	const off = p.compareAt ? Math.round((p.compareAt - p.price) / p.compareAt * 100) : 0;
	const addToCart = useCart((s) => s.add);
	const toggleWishlist = useWishlist((s) => s.toggle);
	const isWishlisted = useWishlist((s) => s.has(p.id));
	const navigate = useNavigate();
	const handleBuyNow = (e) => {
		e.preventDefault();
		e.stopPropagation();
		addToCart(p.id, "M", 1);
		navigate({ to: "/checkout" });
	};
	const handleAddToCart = (e) => {
		e.preventDefault();
		e.stopPropagation();
		addToCart(p.id, "M", 1);
		toast.success(`Added ${p.name} to cart`);
	};
	const handleWishlist = (e) => {
		e.preventDefault();
		e.stopPropagation();
		if (toggleWishlist(p.id)) toast.success(`Added ${p.name} to wishlist`);
		else toast.success(`Removed from wishlist`);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/products/$slug",
		params: { slug: p.slug },
		className: "group block overflow-hidden rounded-lg border border-border bg-card transition-shadow hover:shadow-card",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative aspect-[4/5] overflow-hidden bg-secondary/40",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: p.image,
					alt: p.name,
					loading: "lazy",
					width: 900,
					height: 1100,
					className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute left-3 top-3 flex flex-col gap-1",
					children: [p.badges?.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: `chip ${b === "Hot" || b === "Bestseller" ? "bg-accent text-accent-foreground" : b === "Limited" ? "bg-foreground text-background" : "bg-primary text-primary-foreground"}`,
						children: b
					}, b)), off > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "chip bg-foreground text-background",
						children: [
							"-",
							off,
							"%"
						]
					})]
				}),
				p.stock <= 10 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "absolute right-3 top-3 z-10 chip bg-background/95 text-foreground border border-border",
					children: [
						"Only ",
						p.stock,
						" left"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute inset-x-0 bottom-0 z-20 flex translate-y-full flex-col gap-2 bg-gradient-to-t from-black/60 via-black/30 to-transparent p-4 pt-16 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: handleBuyNow,
						className: "flex w-full items-center justify-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-md transition-colors hover:bg-pitch-deep",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "h-4 w-4" }), "Buy Now"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: handleAddToCart,
							className: "flex flex-1 items-center justify-center gap-2 rounded-md bg-background px-4 py-2.5 text-sm font-semibold text-foreground shadow-md transition-colors hover:bg-muted",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-4 w-4" }), "Add to Cart"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: handleWishlist,
							className: `flex items-center justify-center rounded-md bg-background px-4 py-2.5 text-foreground shadow-md transition-colors hover:bg-muted ${isWishlisted ? "text-accent" : "hover:text-accent"}`,
							"aria-label": "Add to wishlist",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: `h-4 w-4 ${isWishlisted ? "fill-accent text-accent" : ""}` })
						})]
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between text-[11px] uppercase tracking-wider text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: p.league }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						p.kind,
						" · ",
						p.season
					] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-1 font-semibold text-foreground line-clamp-1",
					children: p.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-1 flex items-center gap-1 text-xs text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-3.5 w-3.5 fill-current text-amber-500" }),
						p.rating.toFixed(1),
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							"· ",
							p.reviewsCount,
							" reviews"
						] })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 flex items-baseline gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-lg font-bold",
						children: ["৳", p.price]
					}), p.compareAt && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-sm text-muted-foreground line-through",
						children: ["৳", p.compareAt]
					})]
				})
			]
		})]
	});
}
//#endregion
export { ProductCard as t };
