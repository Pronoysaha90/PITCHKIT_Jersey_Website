import { n as create, t as persist } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/wishlist-store-CA4unLzC.js
var useWishlist = create()(persist((set, get) => ({
	items: [],
	toggle: (productId) => {
		const current = get().items;
		if (current.includes(productId)) {
			set({ items: current.filter((id) => id !== productId) });
			return false;
		} else {
			set({ items: [...current, productId] });
			return true;
		}
	},
	clear: () => set({ items: [] }),
	has: (productId) => get().items.includes(productId)
}), { name: "pitch-wishlist-v1" }));
//#endregion
export { useWishlist as t };
