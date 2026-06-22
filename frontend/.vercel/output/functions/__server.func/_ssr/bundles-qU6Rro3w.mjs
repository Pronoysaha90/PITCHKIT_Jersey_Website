import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { l as useCart, n as bundles, o as productById, t as SIZES } from "./cart-store-CoxaE1M5.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/bundles-qU6Rro3w.js
var import_jsx_runtime = require_jsx_runtime();
function BundlesPage() {
	const add = useCart((s) => s.add);
	const addBundle = (ids, name) => {
		ids.forEach((id) => add(id, "M", 1));
		toast.success(`${name} added to cart (size M — change in cart)`);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container-x py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-2xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "chip bg-accent/10 text-accent",
						children: "Bundle & save"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 font-display text-5xl",
						children: "Pre-built kit bundles"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-muted-foreground",
						children: "Save more when you grab two or more kits at once. Discounts apply automatically at checkout. Sizes default to Medium — adjust anytime in your cart."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3",
				children: bundles.map((b) => {
					const items = b.productIds.map((id) => productById(id)).filter(Boolean);
					const total = items.reduce((s, p) => s + p.price, 0);
					const discounted = +(total * (1 - b.discountPct / 100)).toFixed(2);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "overflow-hidden rounded-2xl border border-border bg-card flex flex-col",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-3 gap-1 bg-secondary/40 p-2",
							children: items.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: p.image,
								alt: p.name,
								loading: "lazy",
								width: 300,
								height: 400,
								className: "aspect-[3/4] w-full rounded-md object-cover"
							}, p.id))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-5 flex-1 flex flex-col",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-2xl",
										children: b.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "chip bg-accent text-accent-foreground",
										children: [
											"-",
											b.discountPct,
											"%"
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted-foreground",
									children: b.description
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-3 space-y-1 text-sm",
									children: items.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: p.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-muted-foreground",
											children: ["$", p.price]
										})]
									}, p.id))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-auto pt-5 flex items-end justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-xs text-muted-foreground line-through",
										children: ["$", total]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "font-display text-3xl",
										children: ["$", discounted]
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => addBundle(b.productIds, b.name),
										className: "rounded-md bg-foreground px-4 py-2 text-sm font-semibold text-background hover:opacity-90",
										children: "Add bundle"
									})]
								})
							]
						})]
					}, b.id);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 rounded-2xl border border-dashed border-border p-6 text-sm text-muted-foreground",
				children: [
					"Tip: spend ৳150 to get an extra 5% off, ৳250 for 10% off — applied automatically at checkout. Available sizes: ",
					SIZES.join(", "),
					". ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/shop",
						className: "text-primary hover:underline",
						children: "Browse all kits →"
					})
				]
			})
		]
	});
}
//#endregion
export { BundlesPage as component };
