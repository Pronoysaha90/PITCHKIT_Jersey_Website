import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { N as ArrowRight } from "../_libs/lucide-react.mjs";
import { c as products } from "./cart-store-CoxaE1M5.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as useWishlist } from "./wishlist-store-CA4unLzC.mjs";
import { t as ProductCard } from "./ProductCard-69up3jhp.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/wishlist-DPY-Lv9i.js
var import_jsx_runtime = require_jsx_runtime();
function WishlistPage() {
	const wishlistItems = useWishlist((s) => s.items);
	const savedProducts = products.filter((p) => wishlistItems.includes(p.id));
	if (savedProducts.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container-x py-24 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-5xl",
				children: "Your wishlist is empty"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-muted-foreground",
				children: "Save your favorite kits for later."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/shop",
				className: "mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-pitch-deep",
				children: ["Discover jerseys ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container-x py-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mb-8 flex items-end justify-between",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-5xl",
				children: "Wishlist"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-muted-foreground",
				children: [
					"You have ",
					savedProducts.length,
					" ",
					savedProducts.length === 1 ? "item" : "items",
					" saved."
				]
			})] })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
			children: savedProducts.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { p }, p.id))
		})]
	});
}
//#endregion
export { WishlistPage as component };
