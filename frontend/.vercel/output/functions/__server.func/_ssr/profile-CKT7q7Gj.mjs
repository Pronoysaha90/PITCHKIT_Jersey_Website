import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { r as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { D as LogOut, O as LayoutDashboard, T as MapPin, a as UserPen, b as Package, i as User, k as Heart, u as Star, w as Map } from "../_libs/lucide-react.mjs";
import { g as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as useAuth } from "./auth-store-C6bWg3oj.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/profile-CKT7q7Gj.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ProfilePage() {
	const { isLoggedIn, user, logout } = useAuth();
	const navigate = useNavigate();
	const [activeTab, setActiveTab] = (0, import_react.useState)("dashboard");
	(0, import_react.useEffect)(() => {
		if (!isLoggedIn) navigate({ to: "/" });
	}, [isLoggedIn, navigate]);
	if (!isLoggedIn || !user) return null;
	const tabs = [
		{
			id: "dashboard",
			label: "Dashboard",
			icon: LayoutDashboard
		},
		{
			id: "orders",
			label: "Orders",
			icon: Package
		},
		{
			id: "track",
			label: "Track Order",
			icon: Map
		},
		{
			id: "wishlist",
			label: "Wishlist",
			icon: Heart
		},
		{
			id: "addresses",
			label: "Addresses",
			icon: MapPin
		},
		{
			id: "details",
			label: "Account details",
			icon: UserPen
		},
		{
			id: "points",
			label: "Points",
			icon: Star
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container-x py-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-4xl mb-10",
			children: "My account"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid md:grid-cols-[240px_1fr] gap-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "space-y-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 px-4 py-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-12 w-12 rounded-full bg-muted flex items-center justify-center border border-border",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "h-6 w-6 text-muted-foreground" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-semibold",
						children: user.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs text-muted-foreground cursor-pointer hover:text-foreground transition-colors",
						onClick: () => {
							logout();
							navigate({ to: "/" });
						},
						children: "Account / Log out"
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "flex flex-col space-y-1",
					children: [
						tabs.map((tab) => {
							const Icon = tab.icon;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => setActiveTab(tab.id),
								className: `flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors ${activeTab === tab.id ? "bg-primary text-primary-foreground rounded-md" : "hover:bg-muted rounded-md text-foreground/80 hover:text-foreground"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" }), tab.label]
							}, tab.id);
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "my-2 border-t border-border" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => {
								logout();
								navigate({ to: "/" });
							},
							className: "flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors hover:bg-muted rounded-md text-foreground/80 hover:text-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "h-4 w-4" }), "Log out"]
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "md:border-l md:border-border md:pl-8 min-h-[400px]",
				children: [activeTab === "dashboard" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-lg",
						children: [
							"Hello ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold",
								children: user.name
							}),
							" (not ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold",
								children: user.name
							}),
							"? ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => {
									logout();
									navigate({ to: "/" });
								},
								className: "text-muted-foreground underline hover:text-foreground",
								children: "Log out"
							}),
							")"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-muted-foreground leading-relaxed",
						children: [
							"From your account dashboard you can view your ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setActiveTab("orders"),
								className: "text-primary underline hover:text-primary/80",
								children: "recent orders"
							}),
							", ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setActiveTab("track"),
								className: "text-primary underline hover:text-primary/80",
								children: "track an order"
							}),
							", manage your ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setActiveTab("addresses"),
								className: "text-primary underline hover:text-primary/80",
								children: "shipping and billing addresses"
							}),
							", and ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setActiveTab("details"),
								className: "text-primary underline hover:text-primary/80",
								children: "edit your password and account details"
							}),
							"."
						]
					})]
				}), activeTab !== "dashboard" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center justify-center h-full border-2 border-dashed border-border rounded-lg p-12",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-xl font-semibold capitalize",
							children: tabs.find((t) => t.id === activeTab)?.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground mt-2",
							children: "This section is currently under construction."
						})]
					})
				})]
			})]
		})]
	});
}
//#endregion
export { ProfilePage as component };
