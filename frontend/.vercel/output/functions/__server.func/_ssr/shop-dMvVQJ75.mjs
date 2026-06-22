import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { r as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { f as SlidersHorizontal, g as Search, n as X } from "../_libs/lucide-react.mjs";
import { c as products } from "./cart-store-CoxaE1M5.mjs";
import { t as ProductCard } from "./ProductCard-69up3jhp.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shop-dMvVQJ75.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var LEAGUES = [
	"Premier League",
	"La Liga",
	"Serie A",
	"Bundesliga",
	"Ligue 1",
	"International"
];
var KINDS = [
	"Home",
	"Away",
	"Third",
	"Retro",
	"Training"
];
var COLORS = [
	"red",
	"green",
	"blue",
	"white",
	"black",
	"yellow"
];
function Shop() {
	const [q, setQ] = (0, import_react.useState)("");
	const [league, setLeague] = (0, import_react.useState)([]);
	const [kind, setKind] = (0, import_react.useState)([]);
	const [color, setColor] = (0, import_react.useState)([]);
	const [maxPrice, setMaxPrice] = (0, import_react.useState)(1200);
	const [sort, setSort] = (0, import_react.useState)("featured");
	const [openFilters, setOpenFilters] = (0, import_react.useState)(false);
	const [page, setPage] = (0, import_react.useState)(1);
	const ITEMS_PER_PAGE = 9;
	const filtered = (0, import_react.useMemo)(() => {
		let list = products.filter((p) => {
			if (q && !`${p.name} ${p.club}`.toLowerCase().includes(q.toLowerCase())) return false;
			if (league.length && !league.includes(p.league)) return false;
			if (kind.length && !kind.includes(p.kind)) return false;
			if (color.length && !color.includes(p.color)) return false;
			if (p.price > maxPrice) return false;
			return true;
		});
		if (sort === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
		if (sort === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
		if (sort === "rating") list = [...list].sort((a, b) => b.rating - a.rating);
		return list;
	}, [
		q,
		league,
		kind,
		color,
		maxPrice,
		sort
	]);
	(0, import_react.useEffect)(() => {
		setPage(1);
	}, [
		q,
		league,
		kind,
		color,
		maxPrice,
		sort
	]);
	const toggle = (arr, set, v) => set(arr.includes(v) ? arr.filter((x) => x !== v) : [...arr, v]);
	const reset = () => {
		setQ("");
		setLeague([]);
		setKind([]);
		setColor([]);
		setMaxPrice(1200);
		setSort("featured");
	};
	const FilterPanel = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: "space-y-7 text-sm",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterBlock, {
				label: "League",
				children: LEAGUES.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
					checked: league.includes(l),
					onChange: () => toggle(league, setLeague, l),
					label: l
				}, l))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterBlock, {
				label: "Kit type",
				children: KINDS.map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
					checked: kind.includes(k),
					onChange: () => toggle(kind, setKind, k),
					label: k
				}, k))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterBlock, {
				label: "Color",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-2",
					children: COLORS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => toggle(color, setColor, c),
						"aria-label": c,
						className: `h-8 w-8 rounded-full border-2 transition ${color.includes(c) ? "border-primary scale-110" : "border-border"}`,
						style: { backgroundColor: c === "white" ? "#f4f4f5" : c }
					}, c))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterBlock, {
				label: `Max price: ৳${maxPrice}`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "range",
					min: 50,
					max: 1200,
					value: maxPrice,
					onChange: (e) => setMaxPrice(+e.target.value),
					className: "w-full accent-primary"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: reset,
				className: "text-xs font-medium text-primary hover:underline",
				children: "Reset filters"
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container-x py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-4xl sm:text-5xl",
					children: "All jerseys"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-muted-foreground",
					children: [
						filtered.length,
						" of ",
						products.length,
						" products"
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: q,
								onChange: (e) => setQ(e.target.value),
								placeholder: "Search teams, kits...",
								className: "w-64 rounded-md border border-input bg-background pl-9 pr-3 py-2 text-sm outline-none focus:border-primary"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							value: sort,
							onChange: (e) => setSort(e.target.value),
							className: "rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "featured",
									children: "Featured"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "price-asc",
									children: "Price: low to high"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "price-desc",
									children: "Price: high to low"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "rating",
									children: "Top rated"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setOpenFilters(true),
							className: "md:hidden inline-flex items-center gap-2 rounded-md border border-input px-3 py-2 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlidersHorizontal, { className: "h-4 w-4" }), " Filters"]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid gap-8 md:grid-cols-[240px_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden md:block",
					children: FilterPanel
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "rounded-lg border border-border p-10 text-center text-muted-foreground",
					children: "No jerseys match your filters."
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
					children: filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE).map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { p }, p.id))
				}), Math.ceil(filtered.length / ITEMS_PER_PAGE) > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 flex justify-center items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => {
								setPage((p) => Math.max(1, p - 1));
								window.scrollTo({
									top: 0,
									behavior: "smooth"
								});
							},
							disabled: page === 1,
							className: "px-3 py-2 rounded-md border border-input text-sm font-medium hover:bg-muted disabled:opacity-50",
							children: "Previous"
						}),
						Array.from({ length: Math.ceil(filtered.length / ITEMS_PER_PAGE) }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => {
								setPage(i + 1);
								window.scrollTo({
									top: 0,
									behavior: "smooth"
								});
							},
							className: `h-9 w-9 rounded-md text-sm font-medium transition-colors ${page === i + 1 ? "bg-primary text-primary-foreground" : "border border-input hover:bg-muted"}`,
							children: i + 1
						}, i)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => {
								setPage((p) => Math.min(Math.ceil(filtered.length / ITEMS_PER_PAGE), p + 1));
								window.scrollTo({
									top: 0,
									behavior: "smooth"
								});
							},
							disabled: page === Math.ceil(filtered.length / ITEMS_PER_PAGE),
							className: "px-3 py-2 rounded-md border border-input text-sm font-medium hover:bg-muted disabled:opacity-50",
							children: "Next"
						})
					]
				})] }) })]
			}),
			openFilters && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-50 bg-foreground/40",
				onClick: () => setOpenFilters(false),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute right-0 top-0 h-full w-[88%] max-w-sm bg-background p-6 overflow-y-auto",
					onClick: (e) => e.stopPropagation(),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl",
							children: "Filters"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setOpenFilters(false),
							className: "grid h-9 w-9 place-items-center rounded-md hover:bg-muted",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" })
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6",
						children: FilterPanel
					})]
				})
			})
		]
	});
}
function FilterBlock({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
		className: "mb-3 text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-2",
		children
	})] });
}
function Check({ checked, onChange, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "flex cursor-pointer items-center gap-2 text-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			type: "checkbox",
			checked,
			onChange,
			className: "h-4 w-4 accent-primary"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label })]
	});
}
//#endregion
export { Shop as component };
