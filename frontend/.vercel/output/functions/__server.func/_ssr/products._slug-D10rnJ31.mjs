import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { r as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { B as ArrowRight, C as Minus, b as Plus, d as Star, h as ShieldCheck, s as Truck, v as RotateCcw } from "../_libs/lucide-react.mjs";
import { c as products, l as useCart, t as SIZES } from "./cart-store-CoxaE1M5.mjs";
import { g as useNavigate, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as useWishlist } from "./wishlist-store-CA4unLzC.mjs";
import { t as Route } from "./products._slug-BKUl41Fn.mjs";
import { t as ProductCard } from "./ProductCard-69up3jhp.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products._slug-D10rnJ31.js
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
	const toggleWishlist = useWishlist((s) => s.toggle);
	const hasWishlist = useWishlist((s) => s.has);
	const navigate = useNavigate();
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
	(0, import_react.useRef)(null);
	const [showZoom, setShowZoom] = (0, import_react.useState)(false);
	const [zoomStyle, setZoomStyle] = (0, import_react.useState)({});
	const handleMouseMove = (e) => {
		const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
		setZoomStyle({
			transformOrigin: `${(e.clientX - left) / width * 100}% ${(e.clientY - top) / height * 100}%`,
			transform: "scale(2.5)"
		});
	};
	const [activeTab, setActiveTab] = (0, import_react.useState)("sizeGuide");
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
				className: "grid gap-10 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-4 h-[600px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-col gap-3 w-20 overflow-y-auto no-scrollbar shrink-0",
						children: gallery.map((img, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setActiveIndex(i),
							className: `rounded-lg overflow-hidden border-2 transition-all ${activeIndex === i ? "border-primary" : "border-transparent hover:border-primary/50"}`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: img,
								alt: `${p.name} view ${i + 1}`,
								className: "aspect-[4/5] w-full object-cover"
							})
						}, i))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex-1 rounded-2xl border border-border bg-secondary/30 overflow-hidden relative cursor-crosshair group",
						onMouseEnter: () => setShowZoom(true),
						onMouseLeave: () => {
							setShowZoom(false);
							setZoomStyle({ transform: "scale(1)" });
						},
						onMouseMove: handleMouseMove,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: gallery[activeIndex],
							alt: p.name,
							className: "w-full h-full object-cover transition-transform duration-100 ease-out",
							style: showZoom ? zoomStyle : { transform: "scale(1)" }
						})
					})]
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
						className: "mt-5 font-display text-4xl sm:text-5xl tracking-wide",
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
							className: "chip bg-primary text-primary-foreground font-bold",
							children: [
								"Save ",
								off,
								"%"
							]
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground",
								children: "Size"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setActiveTab("sizeGuide"),
								className: "text-xs text-primary hover:underline",
								children: "Size guide"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 flex flex-wrap gap-2",
							children: SIZES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setSize(s),
								className: `h-11 min-w-[3rem] rounded-md border px-3 text-sm font-semibold transition ${size === s ? "border-primary bg-primary text-primary-foreground" : "border-border hover:border-foreground"}`,
								children: s
							}, s))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex flex-col gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center rounded-md border border-input h-12",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => setQty((q) => Math.max(1, q - 1)),
											className: "grid h-full w-12 place-items-center hover:bg-muted transition-colors",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "h-4 w-4" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "w-10 text-center font-semibold text-sm",
											children: qty
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => setQty((q) => Math.min(p.stock, q + 1)),
											className: "grid h-full w-12 place-items-center hover:bg-muted transition-colors",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" })
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => {
										onAdd();
										navigate({ to: "/checkout" });
									},
									className: "flex-1 rounded-md bg-primary h-12 text-sm font-bold text-primary-foreground hover:bg-primary/90 transition-colors uppercase tracking-wider active:scale-[0.98]",
									children: "Buy It Now"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => {
										if (toggleWishlist(p.id)) toast.success("Added to wishlist!");
										else toast.info("Removed from wishlist");
									},
									className: `grid shrink-0 h-12 w-12 place-items-center rounded-md border transition-all active:scale-90 ${hasWishlist(p.id) ? "bg-rose-50 text-rose-500 border-rose-200 hover:bg-rose-100 scale-105" : "border-input hover:bg-muted"}`,
									title: hasWishlist(p.id) ? "Remove from Wishlist" : "Add to Wishlist",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
										xmlns: "http://www.w3.org/2000/svg",
										width: "20",
										height: "20",
										viewBox: "0 0 24 24",
										fill: hasWishlist(p.id) ? "currentColor" : "none",
										stroke: "currentColor",
										strokeWidth: "2",
										strokeLinecap: "round",
										strokeLinejoin: "round",
										className: `lucide lucide-heart transition-transform ${hasWishlist(p.id) ? "scale-110" : ""}`,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" })
									})
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: onAdd,
							className: "w-full rounded-md bg-foreground h-12 text-sm font-bold text-background hover:opacity-90 transition-colors active:scale-[0.99]",
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
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-8 border-b border-border text-sm font-semibold overflow-x-auto no-scrollbar",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: `pb-3 border-b-2 whitespace-nowrap transition-colors ${activeTab === "sizeGuide" ? "border-foreground text-foreground" : "border-transparent text-muted-foreground hover:text-foreground"}`,
							onClick: () => setActiveTab("sizeGuide"),
							children: "Size Guide"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: `pb-3 border-b-2 whitespace-nowrap transition-colors ${activeTab === "description" ? "border-foreground text-foreground" : "border-transparent text-muted-foreground hover:text-foreground"}`,
							onClick: () => setActiveTab("description"),
							children: "Description"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: `pb-3 border-b-2 whitespace-nowrap transition-colors ${activeTab === "reviews" ? "border-foreground text-foreground" : "border-transparent text-muted-foreground hover:text-foreground"}`,
							onClick: () => setActiveTab("reviews"),
							children: "Reviews"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "py-8 min-h-[300px]",
					children: [
						activeTab === "sizeGuide" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "animate-in fade-in duration-300",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-bold text-lg mb-4",
								children: "Standard Jersey Size Guide"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "overflow-x-auto",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
									className: "w-full text-left text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
										className: "bg-secondary/50",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												className: "p-4 font-semibold rounded-tl-lg",
												children: "Size"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												className: "p-4 font-semibold",
												children: "Chest"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												className: "p-4 font-semibold rounded-tr-lg",
												children: "Length"
											})
										] })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
											className: "border-b border-border",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "p-4",
													children: "S"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "p-4",
													children: "38 INCH"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "p-4",
													children: "26 INCH"
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
											className: "border-b border-border",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "p-4",
													children: "M"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "p-4",
													children: "40 INCH"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "p-4",
													children: "27 INCH"
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
											className: "border-b border-border",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "p-4",
													children: "L"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "p-4",
													children: "42 INCH"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "p-4",
													children: "28 INCH"
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
											className: "border-b border-border",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "p-4",
													children: "XL"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "p-4",
													children: "44 INCH"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "p-4",
													children: "29 INCH"
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "p-4",
												children: "XXL"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "p-4",
												children: "46 INCH"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "p-4",
												children: "30 INCH"
											})
										] })
									] })]
								})
							})]
						}),
						activeTab === "description" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "animate-in fade-in duration-300",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-bold text-lg mb-4",
								children: "Product Details"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-foreground/80 text-base leading-relaxed max-w-3xl",
								children: p.description
							})]
						}),
						activeTab === "reviews" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "animate-in fade-in duration-300",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reviews, {
								rating: p.rating,
								count: p.reviewsCount
							})
						})
					]
				})]
			}),
			related.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-end justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl",
						children: "Related products"
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
