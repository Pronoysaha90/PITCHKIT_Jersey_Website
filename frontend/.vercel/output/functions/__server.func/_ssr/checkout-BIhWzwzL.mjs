import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { r as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { I as CircleCheck, f as Smartphone, r as Wallet, s as Truck } from "../_libs/lucide-react.mjs";
import { l as useCart, o as productById, u as useCartTotals } from "./cart-store-CoxaE1M5.mjs";
import { g as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/checkout-BIhWzwzL.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CheckoutPage() {
	const { items, subtotal, discount, shipping, total, count, shippingZone } = useCartTotals();
	const clear = useCart((s) => s.clear);
	const setShippingZone = useCart((s) => s.setShippingZone);
	const navigate = useNavigate();
	const [pay, setPay] = (0, import_react.useState)("cod");
	const [bkash, setBkash] = (0, import_react.useState)("");
	const [trxId, setTrxId] = (0, import_react.useState)("");
	const [placed, setPlaced] = (0, import_react.useState)(null);
	const [form, setForm] = (0, import_react.useState)({
		name: "",
		phone: "",
		email: "",
		address: "",
		city: "Dhaka",
		note: ""
	});
	const update = (k, v) => setForm((f) => ({
		...f,
		[k]: v
	}));
	const place = (e) => {
		e.preventDefault();
		if (!form.name || !form.phone || !form.address) {
			toast.error("Please fill in your delivery details");
			return;
		}
		if (pay === "bkash" && (!/^01\d{9}$/.test(bkash) || trxId.length < 6)) {
			toast.error("Enter a valid bKash number and transaction ID");
			return;
		}
		setPlaced("PK-" + Math.random().toString(36).slice(2, 8).toUpperCase());
		clear();
		toast.success("Order placed! Confirmation sent to your email.");
	};
	if (placed) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "container-x py-20 max-w-2xl",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-2xl border border-border p-10 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mx-auto h-14 w-14 text-primary" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-4 font-display text-4xl",
					children: "Order confirmed"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 text-muted-foreground",
					children: [
						"Order ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-bold text-foreground",
							children: ["#", placed]
						}),
						" placed successfully. A confirmation email is on its way to ",
						form.email || "you",
						"."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 grid gap-3 text-left text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
							label: "Delivery",
							value: `${form.address}, ${form.city}`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
							label: "Phone",
							value: form.phone
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
							label: "Payment",
							value: pay === "cod" ? "Cash on Delivery" : `bKash · ${bkash}`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
							label: "ETA",
							value: "2-4 business days"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => navigate({ to: "/shop" }),
					className: "mt-8 inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-pitch-deep",
					children: "Keep shopping"
				})
			]
		})
	});
	if (items.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container-x py-24 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-4xl",
			children: "Your cart is empty"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-muted-foreground",
			children: "Add jerseys before checking out."
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container-x py-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-5xl",
			children: "Checkout"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: place,
			className: "mt-8 grid gap-10 lg:grid-cols-[1fr_400px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl",
						children: "Delivery details"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 grid gap-3 sm:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Full name",
								value: form.name,
								onChange: (v) => update("name", v),
								required: true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Phone (01XXXXXXXXX)",
								value: form.phone,
								onChange: (v) => update("phone", v),
								required: true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Email",
								type: "email",
								value: form.email,
								onChange: (v) => update("email", v),
								className: "sm:col-span-2"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Address",
								value: form.address,
								onChange: (v) => update("address", v),
								className: "sm:col-span-2",
								required: true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "City",
								value: form.city,
								onChange: (v) => update("city", v)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Note (optional)",
								value: form.note,
								onChange: (v) => update("note", v)
							})
						]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl",
							children: "Payment method"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 grid gap-3 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PayCard, {
								active: pay === "cod",
								onClick: () => setPay("cod"),
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wallet, { className: "h-5 w-5" }),
								title: "Cash on Delivery",
								body: "Pay when you receive. Available across Bangladesh."
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PayCard, {
								active: pay === "bkash",
								onClick: () => setPay("bkash"),
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Smartphone, { className: "h-5 w-5" }),
								title: "bKash",
								body: "Send Money to 01XXX-XXXXXX and enter your TrxID."
							})]
						}),
						pay === "bkash" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 grid gap-3 sm:grid-cols-2 rounded-md border border-border bg-secondary/40 p-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "sm:col-span-2 text-sm",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
										"Send ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "font-bold",
											children: ["৳", total.toFixed(2)]
										}),
										" via bKash to ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-bold",
											children: "01711-000000"
										}),
										" (Personal). Then enter your details below."
									] })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Your bKash number",
									value: bkash,
									onChange: setBkash
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Transaction ID",
									value: trxId,
									onChange: setTrxId
								})
							]
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl",
						children: "Shipping Zone"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex flex-col gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "flex items-center gap-3 cursor-pointer p-3 rounded-md border border-border hover:border-foreground transition-colors",
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
							className: "flex items-center gap-3 cursor-pointer p-3 rounded-md border border-border hover:border-foreground transition-colors",
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
					})] })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "h-fit rounded-2xl border border-border p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl",
						children: "Your order"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-muted-foreground",
						children: [
							count,
							" item",
							count > 1 ? "s" : ""
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-3 max-h-72 overflow-y-auto pr-1",
						children: items.map((i) => {
							const p = productById(i.productId);
							if (!p) return null;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: p.image,
										alt: p.name,
										width: 56,
										height: 70,
										className: "h-14 w-12 rounded object-cover"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0 flex-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "truncate text-sm font-semibold",
											children: p.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-xs text-muted-foreground",
											children: [
												"Size ",
												i.size,
												" · Qty ",
												i.quantity
											]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-sm font-semibold",
										children: ["৳", (p.price * i.quantity).toFixed(2)]
									})
								]
							}, i.id);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "mt-5 space-y-2 text-sm border-t border-border pt-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								label: "Subtotal",
								value: `৳${subtotal.toFixed(2)}`
							}),
							discount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								label: "Discounts",
								value: `-৳${discount.toFixed(2)}`,
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
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "mt-5 w-full rounded-md bg-primary py-3 text-sm font-semibold text-primary-foreground hover:bg-pitch-deep",
						children: "Place order"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex items-center justify-center gap-2 text-xs text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Truck, { className: "h-3.5 w-3.5" }), " Delivery in 2-4 business days"]
					})
				]
			})]
		})]
	});
}
function Field({ label, value, onChange, type = "text", className = "", required }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: `block text-sm ${className}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "mb-1 block text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground",
			children: [label, required && " *"]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			type,
			value,
			required,
			onChange: (e) => onChange(e.target.value),
			className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary"
		})]
	});
}
function PayCard({ active, onClick, icon, title, body }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick,
		className: `text-left rounded-lg border p-4 transition ${active ? "border-primary ring-2 ring-primary/30 bg-primary/5" : "border-border hover:border-foreground"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2 font-semibold",
			children: [icon, title]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-xs text-muted-foreground",
			children: body
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
function Info({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex justify-between rounded-md bg-secondary/50 px-3 py-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-xs uppercase tracking-wider text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-semibold",
			children: value
		})]
	});
}
//#endregion
export { CheckoutPage as component };
