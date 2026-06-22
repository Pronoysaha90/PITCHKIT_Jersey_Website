import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products._slug-DJX7J8Vr.js
var import_jsx_runtime = require_jsx_runtime();
var SplitNotFoundComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
	className: "container-x py-20 text-center",
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
		className: "font-display text-4xl",
		children: "Jersey not found"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/shop",
		className: "mt-4 inline-block text-primary hover:underline",
		children: "Back to shop"
	})]
});
//#endregion
export { SplitNotFoundComponent as notFoundComponent };
