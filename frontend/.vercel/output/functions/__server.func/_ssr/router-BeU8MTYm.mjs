import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { r as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { A as LogIn, F as Eye, I as CircleCheck, N as Heart, O as Mail, T as Menu, _ as Search, a as UserPlus, f as Smartphone, g as Send, i as User, j as Lock, m as ShoppingBag, n as X, w as MessageSquare, x as Phone } from "../_libs/lucide-react.mjs";
import { c as products, l as useCart, u as useCartTotals } from "./cart-store-CoxaE1M5.mjs";
import { _ as useRouter, c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useNavigate, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as DialogOverlay$1, c as DialogTrigger, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { n as toast, t as Toaster } from "../_libs/sonner.mjs";
import { t as useWishlist } from "./wishlist-store-CA4unLzC.mjs";
import { t as Route$9 } from "./products._slug-BKUl41Fn.mjs";
import { t as useAuth } from "./auth-store-C6bWg3oj.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { t as _e } from "../_libs/cmdk.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { n as AnimatePresence, t as motion } from "../_libs/framer-motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-BeU8MTYm.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-CQxkXI8p.css";
var favicon_default = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj4KICA8cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgcng9IjIwIiBmaWxsPSIjMTZhMzRhIiAvPgogIDx0ZXh0IHg9IjUwJSIgeT0iNTMlIiBmb250LWZhbWlseT0ic3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iOTAwIiBmb250LXNpemU9IjQ4IiBmaWxsPSJ3aGl0ZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+UEs8L3RleHQ+Cjwvc3ZnPgo=";
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var Dialog = Dialog$1;
var DialogPortal = DialogPortal$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
DialogContent.displayName = DialogContent$1.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className),
	...props
});
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
DialogFooter.displayName = "DialogFooter";
var DialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("text-lg font-semibold leading-none tracking-tight", className),
	...props
}));
DialogTitle.displayName = DialogTitle$1.displayName;
var DialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
DialogDescription.displayName = DialogDescription$1.displayName;
var Command$1 = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(_e, {
	ref,
	className: cn("flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground", className),
	...props
}));
Command$1.displayName = _e.displayName;
var CommandDialog = ({ children, ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContent, {
			className: "overflow-hidden p-0",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Command$1, {
				className: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5",
				children
			})
		})
	});
};
var CommandInput = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
	className: "flex items-center border-b px-3",
	"cmdk-input-wrapper": "",
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(_e.Input, {
		ref,
		className: cn("flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50", className),
		...props
	})]
}));
CommandInput.displayName = _e.Input.displayName;
var CommandList = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(_e.List, {
	ref,
	className: cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className),
	...props
}));
CommandList.displayName = _e.List.displayName;
var CommandEmpty = import_react.forwardRef((props, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(_e.Empty, {
	ref,
	className: "py-6 text-center text-sm",
	...props
}));
CommandEmpty.displayName = _e.Empty.displayName;
var CommandGroup = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(_e.Group, {
	ref,
	className: cn("overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground", className),
	...props
}));
CommandGroup.displayName = _e.Group.displayName;
var CommandSeparator = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(_e.Separator, {
	ref,
	className: cn("-mx-1 h-px bg-border", className),
	...props
}));
CommandSeparator.displayName = _e.Separator.displayName;
var CommandItem = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(_e.Item, {
	ref,
	className: cn("relative flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", className),
	...props
}));
CommandItem.displayName = _e.Item.displayName;
var CommandShortcut = ({ className, ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("ml-auto text-xs tracking-widest text-muted-foreground", className),
		...props
	});
};
CommandShortcut.displayName = "CommandShortcut";
var Sheet = Dialog$1;
var SheetTrigger = DialogTrigger;
var SheetPortal = DialogPortal$1;
var SheetOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props,
	ref
}));
SheetOverlay.displayName = DialogOverlay$1.displayName;
var sheetVariants = cva("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out", {
	variants: { side: {
		top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
		bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
		left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
		right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
	} },
	defaultVariants: { side: "right" }
});
var SheetContent = import_react.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn(sheetVariants({ side }), className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	}), children]
})] }));
SheetContent.displayName = DialogContent$1.displayName;
var SheetHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-2 text-center sm:text-left", className),
	...props
});
SheetHeader.displayName = "SheetHeader";
var SheetFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
SheetFooter.displayName = "SheetFooter";
var SheetTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("text-lg font-semibold text-foreground", className),
	...props
}));
SheetTitle.displayName = DialogTitle$1.displayName;
var SheetDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
SheetDescription.displayName = DialogDescription$1.displayName;
function AuthModal({ open, onOpenChange }) {
	const [isLogin, setIsLogin] = (0, import_react.useState)(true);
	const [showPassword, setShowPassword] = (0, import_react.useState)(false);
	const { login, signup } = useAuth();
	const navigate = useNavigate();
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [name, setName] = (0, import_react.useState)("");
	const handleLogin = (e) => {
		e.preventDefault();
		if (!email || !password) {
			toast.error("Please enter email and password");
			return;
		}
		const res = login(email, password);
		if (res.success) {
			toast.success("Logged in successfully!");
			onOpenChange(false);
			navigate({ to: "/profile" });
		} else toast.error(res.error || "Failed to log in");
	};
	const handleSignup = (e) => {
		e.preventDefault();
		if (!email || !password || !name) {
			toast.error("Please fill in all required fields");
			return;
		}
		const res = signup({
			email,
			password,
			name
		});
		if (res.success) {
			toast.success("Account created successfully!");
			onOpenChange(false);
			navigate({ to: "/profile" });
		} else toast.error(res.error || "Failed to sign up");
	};
	const handleGoogleLogin = () => {
		toast.info("Google Login requires Firebase/Supabase API keys to function as a real popup.");
		const popup = window.open("", "Google Login", "width=500,height=600");
		if (popup) {
			popup.document.write("<h2>Google Sign In (Placeholder)</h2><p>Configure Firebase/Supabase to enable real OAuth flow.</p>");
			setTimeout(() => {
				popup.close();
				if (login("google-user@gmail.com", "", true).success) {
					toast.success("Mock Google Login successful!");
					onOpenChange(false);
					navigate({ to: "/profile" });
				}
			}, 2e3);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "p-0 border-none max-w-5xl overflow-hidden bg-transparent shadow-none [&>button]:hidden sm:rounded-[2rem]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "sr-only",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Authentication" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "Login or sign up for an account." })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "w-full bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[600px] relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden md:flex w-full md:w-1/2 relative overflow-hidden bg-primary text-primary-foreground p-10 flex-col justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
						mode: "wait",
						children: isLogin ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								x: -20
							},
							animate: {
								opacity: 1,
								x: 0
							},
							exit: {
								opacity: 0,
								x: 20
							},
							transition: { duration: .3 },
							className: "w-full max-w-md mx-auto",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "text-4xl lg:text-5xl font-display font-bold mb-4 tracking-wider",
									children: "Welcome to PITCHKIT"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-primary-foreground/90 text-lg mb-8",
									children: "Your one-stop shop for premium football jerseys."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "space-y-4",
									children: [
										"Fast & Secure Shopping",
										"Exclusive Deals & Offers",
										"24/7 Customer Support",
										"Easy Returns & Refunds"
									].map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.li, {
										initial: {
											opacity: 0,
											x: -10
										},
										animate: {
											opacity: 1,
											x: 0
										},
										transition: { delay: .1 * i + .2 },
										className: "flex items-center gap-3 font-medium text-primary-foreground/90",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "w-5 h-5 text-primary-foreground" }), item]
									}, item))
								})
							]
						}, "login-text") : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								x: -20
							},
							animate: {
								opacity: 1,
								x: 0
							},
							exit: {
								opacity: 0,
								x: 20
							},
							transition: { duration: .3 },
							className: "w-full max-w-md mx-auto",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "text-4xl lg:text-5xl font-display font-bold mb-4 tracking-wider",
									children: "Hello, Friend!"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-primary-foreground/90 text-lg mb-8",
									children: "Enter your personal details and start your journey with us."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "space-y-4",
									children: [
										"Fast & Secure Shopping",
										"Exclusive Deals & Offers",
										"24/7 Customer Support",
										"Easy Returns & Refunds"
									].map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.li, {
										initial: {
											opacity: 0,
											x: -10
										},
										animate: {
											opacity: 1,
											x: 0
										},
										transition: { delay: .1 * i + .2 },
										className: "flex items-center gap-3 font-medium text-primary-foreground/90",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "w-5 h-5 text-primary-foreground" }), item]
									}, item))
								})
							]
						}, "register-text")
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full md:w-1/2 bg-background p-8 lg:p-12 flex flex-col relative overflow-y-auto max-h-[90vh] md:max-h-none",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => onOpenChange(false),
						className: "absolute right-4 top-4 p-2 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-colors",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "w-5 h-5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "w-full max-w-md mx-auto",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-3xl font-display font-bold text-primary text-center mb-8 tracking-widest",
								children: "PITCHKIT"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "bg-muted p-1 rounded-full flex mb-8 relative",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
										className: "absolute top-1 bottom-1 w-[calc(50%-4px)] bg-primary rounded-full shadow-sm",
										animate: { left: isLogin ? "4px" : "calc(50%)" },
										transition: {
											type: "spring",
											stiffness: 300,
											damping: 30
										}
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => setIsLogin(true),
										className: `flex-1 py-2.5 text-sm font-bold z-10 transition-colors ${isLogin ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`,
										children: "Login"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => setIsLogin(false),
										className: `flex-1 py-2.5 text-sm font-bold z-10 transition-colors ${!isLogin ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`,
										children: "Sign Up"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-4 mb-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: handleGoogleLogin,
									className: "flex-1 flex items-center justify-center gap-2 py-2.5 border border-border rounded-xl hover:bg-muted transition-colors font-medium text-sm text-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-red-500 font-bold text-lg",
										children: "G"
									}), " Google"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									className: "flex-1 flex items-center justify-center gap-2 py-2.5 border border-border rounded-xl hover:bg-muted transition-colors font-medium text-sm text-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-blue-600 font-bold text-lg",
										children: "f"
									}), " Facebook"]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								className: "w-full flex items-center justify-center gap-2 py-2.5 bg-foreground text-background rounded-xl hover:bg-foreground/90 transition-colors font-medium text-sm mb-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Smartphone, { className: "w-4 h-4" }), " Login with Phone Number"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-4 mb-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "flex-1 h-px bg-border" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs font-semibold text-muted-foreground uppercase tracking-widest",
										children: "OR"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "flex-1 h-px bg-border" })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
									mode: "wait",
									children: isLogin ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.form, {
										initial: {
											opacity: 0,
											y: 10
										},
										animate: {
											opacity: 1,
											y: 0
										},
										exit: {
											opacity: 0,
											y: -10
										},
										transition: { duration: .2 },
										className: "space-y-4",
										onSubmit: handleLogin,
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "relative",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "email",
													placeholder: "Email address",
													value: email,
													onChange: (e) => setEmail(e.target.value),
													className: "w-full px-4 py-3 bg-background border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm text-foreground"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "absolute right-4 top-3.5 w-4 h-4 text-muted-foreground" })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "relative",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: showPassword ? "text" : "password",
													placeholder: "Password",
													value: password,
													onChange: (e) => setPassword(e.target.value),
													className: "w-full px-4 py-3 bg-background border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm text-foreground"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "button",
													onClick: () => setShowPassword(!showPassword),
													className: "absolute right-4 top-3.5",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: `w-4 h-4 transition-colors ${showPassword ? "text-primary" : "text-muted-foreground"}` })
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between pt-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
													className: "flex items-center gap-2 cursor-pointer",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														type: "checkbox",
														className: "w-4 h-4 rounded border-input text-primary focus:ring-primary"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-sm text-foreground",
														children: "Remember me"
													})]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "button",
													className: "text-sm text-primary font-medium hover:underline",
													children: "Forgot password?"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												type: "submit",
												className: "w-full py-3.5 bg-primary text-primary-foreground rounded-xl font-bold hover:bg-primary/90 transition-colors mt-6 flex items-center justify-center gap-2 shadow-lg shadow-primary/20",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogIn, { className: "w-4 h-4" }), " Login"]
											})
										]
									}, "login-form") : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.form, {
										initial: {
											opacity: 0,
											y: 10
										},
										animate: {
											opacity: 1,
											y: 0
										},
										exit: {
											opacity: 0,
											y: -10
										},
										transition: { duration: .2 },
										className: "space-y-4",
										onSubmit: handleSignup,
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "relative",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "text",
													placeholder: "Full Name",
													value: name,
													onChange: (e) => setName(e.target.value),
													className: "w-full px-4 py-3 bg-background border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm text-foreground"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "absolute right-4 top-3.5 w-4 h-4 text-muted-foreground" })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "relative",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "email",
													placeholder: "Email address",
													value: email,
													onChange: (e) => setEmail(e.target.value),
													className: "w-full px-4 py-3 bg-background border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm text-foreground"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "absolute right-4 top-3.5 w-4 h-4 text-muted-foreground" })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "relative",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "tel",
													placeholder: "Phone Number (Optional)",
													className: "w-full px-4 py-3 bg-background border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm text-foreground"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "absolute right-4 top-3.5 w-4 h-4 text-muted-foreground" })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "relative",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: showPassword ? "text" : "password",
													placeholder: "Password",
													value: password,
													onChange: (e) => setPassword(e.target.value),
													className: "w-full px-4 py-3 bg-background border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm text-foreground"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "button",
													onClick: () => setShowPassword(!showPassword),
													className: "absolute right-4 top-3.5",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: `w-4 h-4 transition-colors ${showPassword ? "text-primary" : "text-muted-foreground"}` })
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "relative",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "password",
													placeholder: "Confirm Password",
													className: "w-full px-4 py-3 bg-background border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm text-foreground"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "absolute right-4 top-3.5 w-4 h-4 text-muted-foreground" })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												type: "submit",
												className: "w-full py-3.5 bg-primary text-primary-foreground rounded-xl font-bold hover:bg-primary/90 transition-colors mt-6 flex items-center justify-center gap-2 shadow-lg shadow-primary/20",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserPlus, { className: "w-4 h-4" }), " Create Account"]
											})
										]
									}, "register-form")
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 text-center text-sm text-muted-foreground",
								children: [
									"By continuing, you agree to PITCHKIT's ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#",
										className: "text-primary hover:underline",
										children: "Terms of Service"
									}),
									" & ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#",
										className: "text-primary hover:underline",
										children: "Privacy Policy"
									})
								]
							})
						]
					})]
				})]
			})]
		})
	});
}
var navLinks = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/shop",
		label: "Shop"
	},
	{
		to: "/bundles",
		label: "Bundles"
	},
	{
		to: "/about",
		label: "About Us"
	}
];
function Header() {
	const { count } = useCartTotals();
	const cartItems = useCart((s) => s.items);
	const wishlistItems = useWishlist((s) => s.items);
	const { isLoggedIn } = useAuth();
	const navigate = useNavigate();
	const [loginOpen, setLoginOpen] = (0, import_react.useState)(false);
	const [searchOpen, setSearchOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x flex h-16 items-center justify-between gap-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "/",
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-9 w-9 place-items-center rounded-md bg-primary text-primary-foreground font-display text-lg",
						children: "PK"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-2xl tracking-wider",
						children: "PITCHKIT"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden md:flex items-center gap-8 text-sm font-medium",
					children: navLinks.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: l.to,
						className: "text-foreground/70 hover:text-foreground transition-colors",
						activeProps: { className: "text-foreground" },
						activeOptions: { exact: l.to === "/" },
						children: l.label
					}, l.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setSearchOpen(true),
							className: "hidden sm:grid h-10 w-10 place-items-center rounded-md hover:bg-muted focus:outline-none",
							"aria-label": "Search",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "h-4 w-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CommandDialog, {
							open: searchOpen,
							onOpenChange: setSearchOpen,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommandInput, { placeholder: "Search teams, kits, colors..." }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CommandList, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommandEmpty, { children: "No results found." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommandGroup, {
								heading: "Products",
								children: products.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CommandItem, {
									onSelect: () => {
										setSearchOpen(false);
										navigate({
											to: "/products/$slug",
											params: { slug: p.id }
										});
									},
									className: "flex items-center gap-3 cursor-pointer data-[selected=true]:text-white",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: p.image,
										alt: p.name,
										className: "w-8 h-10 object-cover rounded-sm"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-semibold",
											children: p.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-xs text-current opacity-80",
											children: [
												p.club,
												" · $",
												p.price
											]
										})]
									})]
								}, p.id))
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative group hidden md:flex items-center h-16",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/wishlist",
								className: "relative grid h-10 w-10 place-items-center rounded-md hover:bg-muted",
								"aria-label": "Wishlist",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "h-5 w-5" }), wishlistItems.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-accent px-1 text-[10px] font-bold text-accent-foreground",
									children: wishlistItems.length
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute top-[60px] right-0 w-80 bg-background border border-border rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 overflow-hidden transform group-hover:translate-y-0 translate-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-4 flex flex-col gap-3 max-h-[350px] overflow-y-auto no-scrollbar",
									children: [wishlistItems.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-muted-foreground text-center py-6",
										children: "Your wishlist is empty"
									}) : wishlistItems.slice(0, 3).map((id) => {
										const p = products.find((x) => x.id === id);
										if (!p) return null;
										return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: p.image,
												alt: p.name,
												className: "w-14 h-[4.5rem] object-cover rounded-md border border-border"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex flex-col flex-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-sm font-semibold line-clamp-2 leading-tight",
													children: p.name
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "text-xs font-bold text-primary mt-1",
													children: ["৳", p.price]
												})]
											})]
										}, id);
									}), wishlistItems.length > 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-xs font-semibold text-center text-muted-foreground pt-3 border-t border-border mt-1",
										children: [
											"+ ",
											wishlistItems.length - 3,
											" more items"
										]
									})]
								}), wishlistItems.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "p-4 border-t border-border bg-secondary/30",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/wishlist",
										className: "flex items-center justify-center w-full py-2.5 text-sm font-bold bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors uppercase tracking-widest",
										children: "View Wishlist"
									})
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative group hidden md:flex items-center h-16",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/cart",
								className: "relative grid h-10 w-10 place-items-center rounded-md hover:bg-muted",
								"aria-label": "Cart",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-5 w-5" }), count > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-accent px-1 text-[10px] font-bold text-accent-foreground",
									children: count
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute top-[60px] right-0 w-80 bg-background border border-border rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 overflow-hidden transform group-hover:translate-y-0 translate-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-4 flex flex-col gap-3 max-h-[350px] overflow-y-auto no-scrollbar",
									children: [cartItems.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-muted-foreground text-center py-6",
										children: "Your cart is empty"
									}) : cartItems.slice(0, 3).map((item) => {
										const p = products.find((x) => x.id === item.productId);
										if (!p) return null;
										return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: p.image,
												alt: p.name,
												className: "w-14 h-[4.5rem] object-cover rounded-md border border-border"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex flex-col flex-1",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-sm font-semibold line-clamp-1",
														children: p.name
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "text-xs text-muted-foreground mt-0.5",
														children: [
															"Size: ",
															item.size,
															" | Qty: ",
															item.quantity
														]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "text-xs font-bold text-foreground mt-1",
														children: ["৳", (p.price * item.quantity).toFixed(2)]
													})
												]
											})]
										}, item.id);
									}), cartItems.length > 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-xs font-semibold text-center text-muted-foreground pt-3 border-t border-border mt-1",
										children: [
											"+ ",
											cartItems.length - 3,
											" more items"
										]
									})]
								}), cartItems.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-4 border-t border-border bg-secondary/30",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between items-center mb-4 text-base font-bold",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Subtotal" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["৳", cartItems.reduce((acc, item) => acc + (products.find((x) => x.id === item.productId)?.price || 0) * item.quantity, 0).toFixed(2)] })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/checkout",
										className: "flex items-center justify-center w-full py-3 text-sm font-bold bg-foreground text-background rounded-lg hover:bg-foreground/90 transition-colors uppercase tracking-widest",
										children: "Checkout Now"
									})]
								})]
							})]
						}),
						isLoggedIn ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => navigate({ to: "/profile" }),
							className: "grid h-10 w-10 place-items-center rounded-md hover:bg-muted focus:outline-none",
							"aria-label": "Profile",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "h-5 w-5" })
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setLoginOpen(true),
							className: "grid h-10 w-10 place-items-center rounded-md hover:bg-muted focus:outline-none",
							"aria-label": "Login",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "h-5 w-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthModal, {
							open: loginOpen,
							onOpenChange: setLoginOpen
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sheet, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTrigger, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "md:hidden grid h-10 w-10 place-items-center rounded-md hover:bg-muted",
								"aria-label": "Menu",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetContent, {
							side: "right",
							className: "w-[300px] sm:w-[400px]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTitle, {
									className: "text-left",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "/",
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "grid h-9 w-9 place-items-center rounded-md bg-primary text-primary-foreground font-display text-lg",
											children: "PK"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-display text-2xl tracking-wider",
											children: "PITCHKIT"
										})]
									})
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
									className: "flex flex-col gap-4 mt-8",
									children: navLinks.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTrigger, {
										asChild: true,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: l.to,
											className: "text-lg font-medium text-foreground/80 hover:text-foreground transition-colors",
											activeProps: { className: "text-foreground font-semibold" },
											children: l.label
										})
									}, l.to))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-8 pt-8 border-t border-border flex flex-col gap-5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTrigger, {
										asChild: true,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/wishlist",
											className: "flex items-center gap-3 text-lg font-medium text-foreground/80 hover:text-foreground",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "relative",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "h-6 w-6" }), wishlistItems.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "absolute -right-2 -top-2 grid h-5 min-w-5 place-items-center rounded-full bg-accent px-1 text-[10px] font-bold text-accent-foreground",
													children: wishlistItems.length
												})]
											}), "Wishlist"]
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTrigger, {
										asChild: true,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/cart",
											className: "flex items-center gap-3 text-lg font-medium text-foreground/80 hover:text-foreground",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "relative",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-6 w-6" }), count > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "absolute -right-2 -top-2 grid h-5 min-w-5 place-items-center rounded-full bg-accent px-1 text-[10px] font-bold text-accent-foreground",
													children: count
												})]
											}), "Cart"]
										})
									})]
								})
							]
						})] })
					]
				})
			]
		})
	});
}
function Footer() {
	const [email, setEmail] = (0, import_react.useState)("");
	const onSubmit = (e) => {
		e.preventDefault();
		if (!/^\S+@\S+\.\S+$/.test(email)) {
			toast.error("Please enter a valid email");
			return;
		}
		toast.success("You're on the list — welcome to PITCHKIT.");
		setEmail("");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "mt-24 border-t border-border bg-secondary/40",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x py-14 grid gap-10 md:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							onClick: () => window.scrollTo({
								top: 0,
								behavior: "smooth"
							}),
							className: "flex items-center gap-2 hover:opacity-90 transition-opacity",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-9 w-9 place-items-center rounded-md bg-primary text-primary-foreground font-display text-lg",
								children: "PK"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-2xl tracking-wider",
								children: "PITCHKIT"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-md text-sm text-muted-foreground",
							children: "Official-style football jerseys from every league. Real fabrics, sharp prints, fast delivery across Bangladesh."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit,
							className: "mt-6 flex max-w-md items-stretch gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "email",
								value: email,
								onChange: (e) => setEmail(e.target.value),
								placeholder: "Get 10% off — drop your email",
								className: "flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "rounded-md bg-foreground px-4 text-sm font-semibold text-background hover:opacity-90",
								children: "Join"
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "font-display text-lg",
					children: "Shop"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-3 space-y-2 text-sm text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "New arrivals" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Premier League" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "La Liga" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "International" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Bundles" })
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "font-display text-lg",
					children: "Support"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-3 space-y-2 text-sm text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Shipping & returns" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Size guide" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Cash on delivery" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "bKash payment" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Contact us" })
					]
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" PITCHKIT. All rights reserved."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "flex items-center gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "chip bg-foreground text-background",
							children: "COD"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "chip bg-pink-600 text-white",
							children: "bKash"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "chip bg-secondary text-foreground",
							children: "Free shipping over ৳12,000"
						})
					]
				})]
			})
		})]
	});
}
function ChatBot() {
	const { isLoggedIn } = useAuth();
	const [isOpen, setIsOpen] = (0, import_react.useState)(false);
	const [messages, setMessages] = (0, import_react.useState)([{
		role: "ai",
		content: "Hi there! I'm PitchKit AI. How can I help you find the perfect jersey today?"
	}]);
	const [input, setInput] = (0, import_react.useState)("");
	const handleSend = () => {
		if (!input.trim()) return;
		setMessages((prev) => [...prev, {
			role: "user",
			content: input
		}]);
		setInput("");
		setTimeout(() => {
			setMessages((prev) => [...prev, {
				role: "ai",
				content: "That's a great question! Right now, our most popular kits are the new 2026 Argentina and Brazil editions. Would you like me to take you to them?"
			}]);
		}, 1e3);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed bottom-6 right-6 z-50",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: isOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: {
				opacity: 0,
				y: 20,
				scale: .95
			},
			animate: {
				opacity: 1,
				y: 0,
				scale: 1
			},
			exit: {
				opacity: 0,
				y: 20,
				scale: .95
			},
			className: "mb-4 flex flex-col w-[320px] h-[400px] bg-background border border-border shadow-xl rounded-2xl overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-primary p-4 flex items-center justify-between text-primary-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-8 w-8 place-items-center rounded-full bg-white text-primary font-bold text-xs",
							children: "AI"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-semibold text-sm",
							children: "PitchKit Assistant"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setIsOpen(false),
						className: "hover:bg-black/20 p-1 rounded",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex-1 overflow-y-auto p-4 flex flex-col gap-3 bg-secondary/20",
					children: messages.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `max-w-[85%] p-3 rounded-lg text-sm ${m.role === "ai" ? "bg-white border border-border self-start rounded-tl-none" : "bg-foreground text-background self-end rounded-tr-none"}`,
						children: m.content
					}, i))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-3 bg-background border-t border-border flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "text",
						value: input,
						onChange: (e) => setInput(e.target.value),
						onKeyDown: (e) => e.key === "Enter" && handleSend(),
						placeholder: "Ask me anything...",
						className: "flex-1 px-3 py-2 text-sm rounded-md border border-input outline-none focus:border-primary"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: handleSend,
						className: "bg-primary text-primary-foreground p-2 rounded-md hover:opacity-90",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-4 w-4" })
					})]
				})
			]
		}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
			whileHover: { scale: 1.05 },
			whileTap: { scale: .95 },
			onClick: () => {
				if (!isLoggedIn) {
					toast.error("Please Sign up first to talk with the AI");
					return;
				}
				setIsOpen(!isOpen);
			},
			className: "w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-lg flex items-center justify-center float-right",
			children: isOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-6 w-6" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "h-6 w-6" })
		})]
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$8 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "PITCHKIT — Premium football jerseys" },
			{
				name: "description",
				content: "Shop authentic-style football jerseys from every league. Cash on delivery and bKash across Bangladesh."
			},
			{
				property: "og:title",
				content: "PITCHKIT — Premium football jerseys"
			},
			{
				property: "og:description",
				content: "Shop authentic-style football jerseys from every league. Cash on delivery and bKash across Bangladesh."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "PITCHKIT — Premium football jerseys"
			},
			{
				name: "twitter:description",
				content: "Shop authentic-style football jerseys from every league. Cash on delivery and bKash across Bangladesh."
			}
		],
		links: [{
			rel: "icon",
			href: favicon_default
		}, {
			rel: "stylesheet",
			href: styles_default
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$8.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-h-screen flex-col",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
						className: "flex-1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChatBot, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
				position: "top-right",
				richColors: true,
				duration: 2e3,
				closeButton: true
			})
		]
	});
}
var $$splitComponentImporter$7 = () => import("./wishlist-DPY-Lv9i.mjs");
var Route$7 = createFileRoute("/wishlist")({
	head: () => ({ meta: [{ title: "Your Wishlist — PITCHKIT" }, {
		name: "description",
		content: "Review your saved football jerseys."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./shop-dMvVQJ75.mjs");
var Route$6 = createFileRoute("/shop")({
	head: () => ({ meta: [
		{ title: "Shop all jerseys — PITCHKIT" },
		{
			name: "description",
			content: "Browse 20+ official-style football jerseys. Filter by league, type, color, price and size."
		},
		{
			property: "og:title",
			content: "Shop all jerseys — PITCHKIT"
		},
		{
			property: "og:description",
			content: "Browse 20+ official-style football jerseys with smart filters."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./profile-CKT7q7Gj.mjs");
var Route$5 = createFileRoute("/profile")({
	head: () => ({ meta: [{ title: "My Account — PITCHKIT" }] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./checkout-BIhWzwzL.mjs");
var Route$4 = createFileRoute("/checkout")({
	head: () => ({ meta: [{ title: "Checkout — PITCHKIT" }, {
		name: "description",
		content: "Secure checkout. Cash on delivery and bKash available."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./cart-DKEhXZSt.mjs");
var Route$3 = createFileRoute("/cart")({
	head: () => ({ meta: [{ title: "Your cart — PITCHKIT" }, {
		name: "description",
		content: "Review your selected jerseys and head to checkout."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./bundles-qU6Rro3w.mjs");
var Route$2 = createFileRoute("/bundles")({
	head: () => ({ meta: [
		{ title: "Bundle deals — PITCHKIT" },
		{
			name: "description",
			content: "Curated jersey bundles. Buy more, save up to 18%."
		},
		{
			property: "og:title",
			content: "Bundle deals — PITCHKIT"
		},
		{
			property: "og:description",
			content: "Curated football jersey bundles with automatic discounts."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./about-Big1P0LX.mjs");
var Route$1 = createFileRoute("/about")({
	head: () => ({ meta: [{ title: "About Us — PITCHKIT" }, {
		name: "description",
		content: "Learn more about PITCHKIT, your trusted source for premium football jerseys in Bangladesh."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./routes-CSS1eoXn.mjs");
var Route = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "PITCHKIT — Football jerseys for every league" },
		{
			name: "description",
			content: "Premium home, away and retro football jerseys. Free shipping over ৳12,000. COD & bKash available."
		},
		{
			property: "og:title",
			content: "PITCHKIT — Football jerseys for every league"
		},
		{
			property: "og:description",
			content: "Premium home, away and retro football jerseys. COD & bKash available."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var WishlistRoute = Route$7.update({
	id: "/wishlist",
	path: "/wishlist",
	getParentRoute: () => Route$8
});
var ShopRoute = Route$6.update({
	id: "/shop",
	path: "/shop",
	getParentRoute: () => Route$8
});
var ProfileRoute = Route$5.update({
	id: "/profile",
	path: "/profile",
	getParentRoute: () => Route$8
});
var CheckoutRoute = Route$4.update({
	id: "/checkout",
	path: "/checkout",
	getParentRoute: () => Route$8
});
var CartRoute = Route$3.update({
	id: "/cart",
	path: "/cart",
	getParentRoute: () => Route$8
});
var BundlesRoute = Route$2.update({
	id: "/bundles",
	path: "/bundles",
	getParentRoute: () => Route$8
});
var AboutRoute = Route$1.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$8
});
var rootRouteChildren = {
	IndexRoute: Route.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$8
	}),
	AboutRoute,
	BundlesRoute,
	CartRoute,
	CheckoutRoute,
	ProfileRoute,
	ShopRoute,
	WishlistRoute,
	ProductsSlugRoute: Route$9.update({
		id: "/products/$slug",
		path: "/products/$slug",
		getParentRoute: () => Route$8
	})
};
var routeTree = Route$8._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
