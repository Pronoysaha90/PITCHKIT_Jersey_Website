import { s as productBySlug } from "./cart-store-CoxaE1M5.mjs";
import { f as lazyRouteComponent, j as notFound, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products._slug-BKUl41Fn.js
var $$splitNotFoundComponentImporter = () => import("./products._slug-DJX7J8Vr.mjs");
var $$splitComponentImporter = () => import("./products._slug-D10rnJ31.mjs");
var Route = createFileRoute("/products/$slug")({
	loader: ({ params }) => {
		const product = productBySlug(params.slug);
		if (!product) throw notFound();
		return { product };
	},
	head: ({ loaderData }) => {
		const p = loaderData?.product;
		if (!p) return { meta: [{ title: "Jersey — PITCHKIT" }] };
		return { meta: [
			{ title: `${p.name} — PITCHKIT` },
			{
				name: "description",
				content: p.description
			},
			{
				property: "og:title",
				content: `${p.name} — PITCHKIT`
			},
			{
				property: "og:description",
				content: p.description
			},
			{
				property: "og:image",
				content: p.image
			}
		] };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent")
});
//#endregion
export { Route as t };
