import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { r as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { N as ArrowRight, l as Tag, s as Trash2, x as Minus, y as Plus } from "../_libs/lucide-react.mjs";
import { l as useCart, o as productById, u as useCartTotals } from "./cart-store-CoxaE1M5.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cart-DKEhXZSt.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CartPage() {
	const { items, coupon, subtotal, couponPct, volumeDiscountPct, discount, shipping, total, shippingZone } = useCartTotals();
	const setQty = useCart((s) => s.setQty);
	const remove = useCart((s) => s.remove);
	const applyCoupon = useCart((s) => s.applyCoupon);
	const removeCoupon = useCart((s) => s.removeCoupon);
	const setShippingZone = useCart((s) => s.setShippingZone);
	const [code, setCode] = (0, import_react.useState)("");
	if (items.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container-x py-24 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-5xl",
				children: "Your cart is empty"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-muted-foreground",
				children: "Time to grab a kit and back your team."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/shop",
				className: "mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-pitch-deep",
				children: ["Shop jerseys ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container-x py-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-5xl",
			children: "Cart"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-8 grid gap-10 lg:grid-cols-[1fr_380px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "divide-y divide-border border-y border-border",
				children: items.map((i) => {
					const p = productById(i.productId);
					if (!p) return null;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "grid grid-cols-[96px_1fr_auto] gap-4 py-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: p.image,
								alt: p.name,
								width: 96,
								height: 120,
								className: "aspect-[4/5] w-24 rounded-md object-cover"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-semibold truncate",
										children: p.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-sm text-muted-foreground",
										children: [
											p.club,
											" · Size ",
											i.size
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-2 flex items-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center rounded-md border border-input",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													onClick: () => setQty(i.id, i.quantity - 1),
													className: "grid h-9 w-9 place-items-center hover:bg-muted",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "h-3.5 w-3.5" })
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "w-8 text-center text-sm font-semibold",
													children: i.quantity
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													onClick: () => setQty(i.id, i.quantity + 1),
													className: "grid h-9 w-9 place-items-center hover:bg-muted",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3.5 w-3.5" })
												})
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											onClick: () => remove(i.id),
											className: "inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-accent",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-3.5 w-3.5" }), " Remove"]
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-right font-semibold",
								children: ["৳", (p.price * i.quantity).toFixed(2)]
							})
						]
					}, i.id);
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "h-fit rounded-2xl border border-border p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl",
						children: "Order summary"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4",
						children: [coupon ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between rounded-md bg-primary/10 px-3 py-2 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-2 font-semibold text-primary",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, { className: "h-4 w-4" }),
									" ",
									coupon,
									" applied"
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: removeCoupon,
								className: "text-xs text-muted-foreground hover:text-foreground",
								children: "Remove"
							})]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: (e) => {
								e.preventDefault();
								const r = applyCoupon(code);
								r.ok ? toast.success(r.message) : toast.error(r.message);
								if (r.ok) setCode("");
							},
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: code,
								onChange: (e) => setCode(e.target.value),
								placeholder: "Coupon code",
								className: "flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "rounded-md bg-foreground px-4 text-sm font-semibold text-background hover:opacity-90",
								children: "Apply"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-[11px] text-muted-foreground",
							children: "Try WELCOME10, PITCH15 or GOALS20."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground",
							children: "Shipping Zone"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-2 mb-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex items-center gap-3 cursor-pointer",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "radio",
									name: "zone",
									checked: shippingZone === "dhaka",
									onChange: () => setShippingZone("dhaka"),
									className: "w-4 h-4 text-primary"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm font-medium",
									children: "Inside Dhaka (৳50)"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex items-center gap-3 cursor-pointer",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "radio",
									name: "zone",
									checked: shippingZone === "outside",
									onChange: () => setShippingZone("outside"),
									className: "w-4 h-4 text-primary"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm font-medium",
									children: "Outside Dhaka (৳100)"
								})]
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 rounded-xl border border-border bg-secondary/30 p-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "mt-6 space-y-2 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									label: "Subtotal",
									value: `৳${subtotal.toFixed(2)}`
								}),
								volumeDiscountPct > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									label: `Volume discount (-${volumeDiscountPct}%)`,
									value: `-৳${(subtotal * volumeDiscountPct / 100).toFixed(2)}`,
									accent: true
								}),
								couponPct > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									label: `Coupon (-${couponPct}%)`,
									value: `-৳${(subtotal * couponPct / 100).toFixed(2)}`,
									accent: true
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									label: "Shipping",
									value: `৳${shipping.toFixed(2)}`
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "border-t border-border pt-3 flex items-baseline justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-display text-xl",
										children: "Total"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-display text-2xl",
										children: ["৳", total.toFixed(2)]
									})]
								}),
								discount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-xs text-primary font-semibold",
									children: [
										"You saved ৳",
										discount.toFixed(2),
										"!"
									]
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/checkout",
						className: "mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary py-3 text-sm font-semibold text-primary-foreground hover:bg-pitch-deep",
						children: ["Checkout ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/shop",
						className: "mt-2 inline-block w-full text-center text-xs text-muted-foreground hover:text-foreground",
						children: "Continue shopping"
					})
				]
			})]
		})]
	});
}
function Row({ label, value, accent }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex justify-between",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: accent ? "text-primary font-semibold" : "font-medium",
			children: value
		})]
	});
}
//#endregion
export { CartPage as component };
