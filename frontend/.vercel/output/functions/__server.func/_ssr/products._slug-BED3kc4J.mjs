import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { r as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { N as ArrowRight, _ as RotateCcw, m as ShieldCheck, o as Truck, u as Star, x as Minus, y as Plus } from "../_libs/lucide-react.mjs";
import { c as products, l as useCart, t as SIZES } from "./cart-store-CoxaE1M5.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as Route } from "./products._slug-Cllp94ne.mjs";
import { t as ProductCard } from "./ProductCard-69up3jhp.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products._slug-BED3kc4J.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var seed = [
	{
		id: "r1",
		author: "Tanvir A.",
		rating: 5,
		body: "Stitching is sharp and the colors match the official kit. Fast COD delivery in Dhaka.",
		date: "2 weeks ago"
	},
	{
		id: "r2",
		author: "Sadia R.",
		rating: 4,
		body: "Great fit. Slightly snug on shoulders for a Large — went up a size and it's perfect.",
		date: "1 month ago"
	},
	{
		id: "r3",
		author: "Rafi K.",
		rating: 5,
		body: "Crest looks legit and the fabric breathes well during 5-a-side. Worth every taka.",
		date: "3 weeks ago"
	}
];
function Reviews({ rating, count }) {
	const [reviews, setReviews] = (0, import_react.useState)(seed);
	const [name, setName] = (0, import_react.useState)("");
	const [body, setBody] = (0, import_react.useState)("");
	const [stars, setStars] = (0, import_react.useState)(5);
	const submit = (e) => {
		e.preventDefault();
		if (!name.trim() || !body.trim()) {
			toast.error("Please add your name and review");
			return;
		}
		setReviews((r) => [{
			id: crypto.randomUUID(),
			author: name,
			rating: stars,
			body,
			date: "just now"
		}, ...r]);
		setName("");
		setBody("");
		setStars(5);
		toast.success("Thanks — review submitted");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mt-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-end justify-between border-b border-border pb-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl",
				children: "Customer reviews"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex",
						children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: `h-4 w-4 ${i < Math.round(rating) ? "fill-amber-500 text-amber-500" : "text-muted-foreground"}` }, i))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-medium",
						children: rating.toFixed(1)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-muted-foreground",
						children: [
							"(",
							count,
							"+ reviews)"
						]
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 grid gap-8 md:grid-cols-[1fr_360px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "space-y-5",
				children: reviews.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-lg border border-border p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold",
								children: r.author
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-muted-foreground",
								children: r.date
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1 flex",
							children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: `h-3.5 w-3.5 ${i < r.rating ? "fill-amber-500 text-amber-500" : "text-muted-foreground"}` }, i))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-foreground/80",
							children: r.body
						})
					]
				}, r.id))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: submit,
				className: "h-fit rounded-lg border border-border p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-xl",
						children: "Leave a review"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 flex items-center gap-1",
						children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setStars(i + 1),
							"aria-label": `${i + 1} stars`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: `h-5 w-5 ${i < stars ? "fill-amber-500 text-amber-500" : "text-muted-foreground"}` })
						}, i))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: name,
						onChange: (e) => setName(e.target.value),
						placeholder: "Your name",
						className: "mt-3 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						value: body,
						onChange: (e) => setBody(e.target.value),
						placeholder: "What did you think?",
						rows: 4,
						className: "mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "mt-3 w-full rounded-md bg-foreground py-2 text-sm font-semibold text-background hover:opacity-90",
						children: "Submit review"
					})
				]
			})]
		})]
	});
}
function ProductPage() {
	const { product: p } = Route.useLoaderData();
	const [size, setSize] = (0, import_react.useState)("M");
	const [qty, setQty] = (0, import_react.useState)(1);
	const [activeIndex, setActiveIndex] = (0, import_react.useState)(0);
	const add = useCart((s) => s.add);
	(0, import_react.useEffect)(() => {
		setActiveIndex(0);
	}, [p.id]);
	const gallery = [
		p.image,
		p.image,
		p.image,
		p.image
	];
	const related = products.filter((x) => x.league === p.league && x.id !== p.id).slice(0, 4);
	const off = p.compareAt ? Math.round((p.compareAt - p.price) / p.compareAt * 100) : 0;
	const onAdd = () => {
		add(p.id, size, qty);
		toast.success(`Added ${qty} × ${p.name} (${size}) to cart`);
	};
	const imgRef = (0, import_react.useRef)(null);
	const [showZoom, setShowZoom] = (0, import_react.useState)(false);
	const [zoomPos, setZoomPos] = (0, import_react.useState)({
		x: 0,
		y: 0
	});
	const handleMouseMove = (e) => {
		if (!imgRef.current) return;
		const { left, top, width, height } = imgRef.current.getBoundingClientRect();
		setZoomPos({
			x: (e.clientX - left) / width * 100,
			y: (e.clientY - top) / height * 100
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container-x py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "mb-6 text-xs text-muted-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "hover:text-foreground",
						children: "Home"
					}),
					" / ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/shop",
						className: "hover:text-foreground",
						children: "Shop"
					}),
					" / ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-foreground",
						children: p.name
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 lg:grid-cols-2 relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-border bg-secondary/30 overflow-hidden relative cursor-crosshair group",
							onMouseEnter: () => setShowZoom(true),
							onMouseLeave: () => setShowZoom(false),
							onMouseMove: handleMouseMove,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								ref: imgRef,
								src: gallery[activeIndex],
								alt: p.name,
								width: 900,
								height: 1100,
								className: "aspect-[4/5] w-full object-cover transition-all duration-300 group-hover:opacity-90"
							}), showZoom && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "pointer-events-none absolute hidden lg:block border border-border bg-white/20 backdrop-brightness-110",
								style: {
									width: "40%",
									height: "40%",
									left: `calc(${zoomPos.x}% - 20%)`,
									top: `calc(${zoomPos.y}% - 20%)`
								}
							})]
						}),
						showZoom && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "pointer-events-none absolute left-[calc(50%+1.25rem)] top-0 z-50 hidden lg:block h-[calc(100%-120px)] w-[calc(50%-1.25rem)] rounded-2xl border border-border bg-background shadow-2xl overflow-hidden",
							style: {
								backgroundImage: `url(${gallery[activeIndex]})`,
								backgroundPosition: `${zoomPos.x}% ${zoomPos.y}%`,
								backgroundSize: "250%",
								backgroundRepeat: "no-repeat"
							}
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-4 gap-4",
							children: gallery.map((img, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setActiveIndex(i),
								className: `rounded-lg overflow-hidden border-2 transition-all ${activeIndex === i ? "border-primary" : "border-transparent hover:border-primary/50"}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: img,
									alt: `${p.name} view ${i + 1}`,
									className: "aspect-square w-full object-cover"
								})
							}, i))
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "chip bg-primary/10 text-primary",
								children: p.league
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "chip bg-secondary text-foreground",
								children: p.kind
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "chip bg-secondary text-foreground",
								children: p.season
							}),
							p.badges?.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "chip bg-accent text-accent-foreground",
								children: b
							}, b))
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 font-display text-4xl sm:text-5xl",
						children: p.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 text-sm text-muted-foreground",
						children: p.club
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 flex items-baseline gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-display text-4xl",
							children: ["৳", p.price]
						}), p.compareAt && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-lg text-muted-foreground line-through",
							children: ["৳", p.compareAt]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "chip bg-accent text-accent-foreground",
							children: [
								"Save ",
								off,
								"%"
							]
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-foreground/80",
						children: p.description
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-7",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground",
								children: "Size"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "text-xs text-primary hover:underline",
								children: "Size guide"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 flex flex-wrap gap-2",
							children: SIZES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setSize(s),
								className: `h-11 min-w-[3rem] rounded-md border px-3 text-sm font-semibold transition ${size === s ? "border-primary bg-primary text-primary-foreground" : "border-border hover:border-foreground"}`,
								children: s
							}, s))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center rounded-md border border-input",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setQty((q) => Math.max(1, q - 1)),
									className: "grid h-11 w-11 place-items-center hover:bg-muted",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "h-4 w-4" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "w-10 text-center font-semibold",
									children: qty
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setQty((q) => Math.min(p.stock, q + 1)),
									className: "grid h-11 w-11 place-items-center hover:bg-muted",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" })
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: onAdd,
							className: "flex-1 rounded-md bg-foreground py-3 text-sm font-semibold text-background hover:opacity-90",
							children: ["Add to cart — ৳", (p.price * qty).toFixed(2)]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 text-xs text-muted-foreground",
						children: p.stock <= 10 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-accent font-semibold",
							children: [
								"Only ",
								p.stock,
								" left · selling fast"
							]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							"In stock · ",
							p.stock,
							" units"
						] })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 grid grid-cols-3 gap-3 border-t border-border pt-6 text-xs",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Truck, { className: "h-4 w-4" }),
								title: "Fast delivery",
								body: "2-4 days nationwide"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "h-4 w-4" }),
								title: "30-day returns",
								body: "Tags on, hassle-free"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-4 w-4" }),
								title: "Quality assured",
								body: "Authentic-grade fabric"
							})
						]
					})
				] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reviews, {
				rating: p.rating,
				count: p.reviewsCount
			}),
			related.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-end justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-display text-3xl",
						children: ["More from ", p.league]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/shop",
						className: "inline-flex items-center gap-1 text-sm font-semibold hover:text-primary",
						children: ["View all ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
					children: related.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { p: r }, r.id))
				})]
			})
		]
	});
}
function Info({ icon, title, body }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-md bg-secondary/50 p-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2 text-foreground",
			children: [icon, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-semibold",
				children: title
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-1 text-muted-foreground",
			children: body
		})]
	});
}
//#endregion
export { ProductPage as component };
