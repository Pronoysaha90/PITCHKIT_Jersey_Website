import { o as __toESM } from "../_runtime.mjs";
import { t as jersey_blue_default } from "./jersey-blue-Cg7MS2wI.mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { r as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { E as Mail, M as BadgePercent, N as ArrowRight, m as ShieldCheck, o as Truck, u as Star, v as Quote } from "../_libs/lucide-react.mjs";
import { a as jersey_yellow_default, c as products, i as jersey_white_default, n as bundles, o as productById, r as jersey_red_default } from "./cart-store-CoxaE1M5.mjs";
import { g as useNavigate, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as ProductCard } from "./ProductCard-69up3jhp.mjs";
import { t as motion } from "../_libs/framer-motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CrPsWBg2.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var banner_default = "/assets/banner-s1Le8QYU.png";
var leagues = [
	{
		name: "Premier League",
		image: jersey_red_default
	},
	{
		name: "La Liga",
		image: jersey_white_default
	},
	{
		name: "Serie A",
		image: jersey_blue_default
	},
	{
		name: "Bundesliga",
		image: jersey_yellow_default
	}
];
var reviews = [
	{
		name: "Rahim Ali",
		role: "Verified Buyer",
		rating: 5,
		text: "The quality of the Manchester away kit is unreal. Feels exactly like the player issue version. Fast delivery too!"
	},
	{
		name: "Sadman Sakib",
		role: "Verified Buyer",
		rating: 5,
		text: "Best place to buy jerseys in BD hands down. The COD option makes it super convenient and the sizing is perfect."
	},
	{
		name: "Fahim Rahman",
		role: "Verified Buyer",
		rating: 5,
		text: "Got the Retro Brazil kit. The fabric is premium and breathable. Excellent customer service when I needed to exchange size."
	}
];
var fadeInUp = {
	hidden: {
		opacity: 0,
		y: 40
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: .6,
			ease: "easeOut"
		}
	}
};
var staggerContainer = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { staggerChildren: .1 }
	}
};
function Home() {
	const featured = products.slice(0, 8);
	const navigate = useNavigate();
	const [email, setEmail] = (0, import_react.useState)("");
	const handleSubscribe = (e) => {
		e.preventDefault();
		if (!email) return;
		toast.success("Thanks for subscribing! Check your email for your 10% discount code.");
		setEmail("");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "relative overflow-hidden border-b border-border bg-background",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x grid items-center gap-10 py-14 lg:grid-cols-2 lg:py-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: "hidden",
					animate: "visible",
					variants: fadeInUp,
					className: "order-2 lg:order-1 text-center lg:text-left flex flex-col items-center lg:items-start",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "chip bg-primary/10 text-primary",
							children: "25/26 Season Drop"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-4 font-display text-5xl leading-[0.95] sm:text-6xl lg:text-7xl",
							children: [
								"Wear the badge.",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"Own the pitch."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-lg text-base text-muted-foreground mx-auto lg:mx-0",
							children: "Premium home, away and retro kits from every league — built with the same fabrics the pros wear. Free shipping in Bangladesh over ৳12,000."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-7 flex flex-wrap justify-center lg:justify-start gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/shop",
								className: "inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-pitch-deep transition-transform hover:scale-105",
								children: ["Shop new arrivals ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/bundles",
								className: "inline-flex items-center gap-2 rounded-md border border-foreground px-6 py-3 text-sm font-semibold hover:bg-foreground hover:text-background transition-transform hover:scale-105",
								children: "Build a bundle — save 18%"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap justify-center lg:justify-start items-center gap-6 text-xs text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Truck, { className: "h-4 w-4 text-primary" }), " Free shipping over ৳12,000"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-4 w-4 text-primary" }), " 30-day returns"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "hidden sm:flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BadgePercent, { className: "h-4 w-4 text-primary" }), " COD + bKash"]
								})
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						scale: .9
					},
					animate: {
						opacity: 1,
						scale: 1
					},
					transition: { duration: .7 },
					className: "relative order-1 lg:order-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-6 -z-10 rounded-3xl pitch-stripe opacity-30" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: banner_default,
							alt: "Featured football jersey hanging in stadium tunnel",
							width: 1600,
							height: 1100,
							className: "w-full rounded-2xl object-cover shadow-pop"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute -bottom-5 -left-5 hidden sm:block rounded-xl bg-background p-4 shadow-card border border-border",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-4 w-4 fill-amber-500 text-amber-500" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-bold text-sm",
										children: "4.8/5"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs text-muted-foreground",
										children: "· 3,200+ shipped"
									})
								]
							})
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.section, {
			initial: "hidden",
			whileInView: "visible",
			viewport: {
				once: true,
				margin: "-100px"
			},
			variants: fadeInUp,
			className: "container-x py-16 border-b border-border",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-end justify-between mb-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "chip bg-accent/10 text-accent",
					children: "Collections"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-4xl sm:text-5xl",
					children: "Shop by League"
				})] })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				variants: staggerContainer,
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
				children: leagues.map((league) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					variants: fadeInUp,
					onClick: () => navigate({ to: "/shop" }),
					className: "group relative h-64 overflow-hidden rounded-2xl cursor-pointer",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: league.image,
							alt: league.name,
							className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute bottom-6 left-6 text-white",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-2xl mb-1",
								children: league.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-sm font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity",
								children: ["Explore ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
							})]
						})
					]
				}, league.name))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.section, {
			initial: "hidden",
			whileInView: "visible",
			viewport: {
				once: true,
				margin: "-100px"
			},
			variants: fadeInUp,
			className: "container-x py-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-end justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "chip bg-primary/10 text-primary",
					children: "Top sellers"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-4xl sm:text-5xl",
					children: "This week on the pitch"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/shop",
					className: "hidden sm:inline-flex items-center gap-1 text-sm font-semibold hover:text-primary",
					children: ["View all ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				variants: staggerContainer,
				className: "mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
				children: featured.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					variants: fadeInUp,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { p })
				}, p.id))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.section, {
			initial: "hidden",
			whileInView: "visible",
			viewport: { once: true },
			variants: fadeInUp,
			className: "bg-foreground text-background py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-x",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					variants: staggerContainer,
					className: "grid sm:grid-cols-3 gap-10 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							variants: fadeInUp,
							className: "flex flex-col items-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-16 w-16 rounded-full bg-background/10 flex items-center justify-center mb-6 hover:scale-110 transition-transform",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-8 w-8 text-primary" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-xl font-bold mb-3",
									children: "Authentic Quality"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-background/70 text-sm leading-relaxed max-w-xs",
									children: "Player-issue grade fabrics with breathable technology. You won't find better quality anywhere else."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							variants: fadeInUp,
							className: "flex flex-col items-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-16 w-16 rounded-full bg-background/10 flex items-center justify-center mb-6 hover:scale-110 transition-transform",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Truck, { className: "h-8 w-8 text-accent" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-xl font-bold mb-3",
									children: "Nationwide Delivery"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-background/70 text-sm leading-relaxed max-w-xs",
									children: "We deliver to your doorstep anywhere in Bangladesh. Cash on Delivery is always available."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							variants: fadeInUp,
							className: "flex flex-col items-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-16 w-16 rounded-full bg-background/10 flex items-center justify-center mb-6 hover:scale-110 transition-transform",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BadgePercent, { className: "h-8 w-8 text-primary" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-xl font-bold mb-3",
									children: "Bundle & Save"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-background/70 text-sm leading-relaxed max-w-xs",
									children: "Mix and match your favorite kits to build a bundle and get an automatic 18% discount on your order."
								})
							]
						})
					]
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.section, {
			initial: "hidden",
			whileInView: "visible",
			viewport: {
				once: true,
				margin: "-100px"
			},
			variants: fadeInUp,
			className: "container-x py-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-end justify-between mb-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "chip bg-accent/10 text-accent",
					children: "Offers"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-4xl sm:text-5xl",
					children: "Featured Bundles"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/bundles",
					className: "inline-flex items-center gap-1 text-sm font-semibold hover:text-primary",
					children: ["View all bundles ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-6 sm:grid-cols-3",
				children: bundles.map((b) => {
					const firstProduct = productById(b.productIds[0]);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						whileHover: { y: -5 },
						className: "group flex flex-col rounded-2xl border border-border bg-card overflow-hidden cursor-pointer",
						onClick: () => navigate({ to: "/bundles" }),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative h-48 bg-secondary/30 overflow-hidden",
							children: [firstProduct && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: firstProduct.image,
								alt: b.name,
								className: "w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute top-3 left-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "chip bg-primary text-primary-foreground shadow-md",
									children: [
										"-",
										b.discountPct,
										"% OFF"
									]
								})
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-5 flex-1 flex flex-col",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-xl",
									children: b.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted-foreground flex-1",
									children: b.description
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 flex items-center gap-2 text-sm font-semibold text-primary group-hover:underline",
									children: ["View Bundle ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
								})
							]
						})]
					}, b.id);
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.section, {
			initial: "hidden",
			whileInView: "visible",
			viewport: { once: true },
			variants: fadeInUp,
			className: "container-x py-20 border-t border-border",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center mb-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "chip bg-accent/10 text-accent",
					children: "Testimonials"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-4xl sm:text-5xl",
					children: "Trusted by Fans"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				variants: staggerContainer,
				className: "grid md:grid-cols-3 gap-6",
				children: reviews.map((review, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					variants: fadeInUp,
					className: "bg-muted rounded-2xl p-8 relative hover:shadow-lg transition-shadow",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, { className: "absolute top-6 right-6 h-8 w-8 text-primary/20" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex gap-1 mb-4",
							children: [...Array(review.rating)].map((_, j) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-4 w-4 fill-amber-500 text-amber-500" }, j))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-foreground/80 mb-6 italic",
							children: [
								"\"",
								review.text,
								"\""
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-semibold",
							children: review.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs text-muted-foreground",
							children: review.role
						})] })
					]
				}, i))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-muted py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: "hidden",
				whileInView: "visible",
				viewport: { once: true },
				variants: fadeInUp,
				className: "container-x max-w-3xl text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "inline-flex h-16 w-16 items-center justify-center rounded-full bg-background mb-6 shadow-sm hover:rotate-12 transition-transform",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-8 w-8 text-primary" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-4xl sm:text-5xl mb-4",
						children: "Join the Club"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground mb-8",
						children: "Subscribe to our newsletter and get 10% off your first order. Be the first to know about new season drops and exclusive retro releases."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleSubscribe,
						className: "flex flex-col sm:flex-row gap-3 max-w-md mx-auto",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "email",
							value: email,
							onChange: (e) => setEmail(e.target.value),
							placeholder: "Enter your email address",
							className: "flex-1 rounded-md border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none",
							required: true
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							className: "rounded-md bg-foreground px-6 py-3 text-sm font-semibold text-background hover:bg-foreground/90 transition-transform active:scale-95",
							children: "Subscribe"
						})]
					})
				]
			})
		})
	] });
}
//#endregion
export { Home as component };
