import { create } from "zustand";
import { persist } from "zustand/middleware";

interface WishlistState {
  items: string[];
  toggle: (productId: string) => boolean;
  clear: () => void;
  has: (productId: string) => boolean;
}

export const useWishlist = create<WishlistState>()(
  persist(
    (set, get) => ({
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
      has: (productId) => get().items.includes(productId),
    }),
    { name: "pitch-wishlist-v1" },
  ),
);
