import { create } from "zustand";
import { persist } from "zustand/middleware";
import { COUPONS, productById, type Size } from "./products";

export interface CartItem {
  id: string;          // line id
  productId: string;
  size: Size;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  coupon?: string;
  shippingZone: "dhaka" | "outside";
  add: (productId: string, size: Size, quantity?: number) => void;
  remove: (lineId: string) => void;
  setQty: (lineId: string, qty: number) => void;
  clear: () => void;
  applyCoupon: (code: string) => { ok: boolean; message: string };
  removeCoupon: () => void;
  setShippingZone: (zone: "dhaka" | "outside") => void;
}

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      coupon: undefined,
      shippingZone: "dhaka",
      add: (productId, size, quantity = 1) => {
        const existing = get().items.find((i) => i.productId === productId && i.size === size);
        if (existing) {
          set({
            items: get().items.map((i) =>
              i.id === existing.id ? { ...i, quantity: i.quantity + quantity } : i,
            ),
          });
        } else {
          set({
            items: [
              ...get().items,
              { id: `${productId}-${size}-${Date.now()}`, productId, size, quantity },
            ],
          });
        }
      },
      remove: (lineId) => set({ items: get().items.filter((i) => i.id !== lineId) }),
      setQty: (lineId, qty) =>
        set({
          items: get()
            .items.map((i) => (i.id === lineId ? { ...i, quantity: Math.max(1, qty) } : i))
            .filter((i) => i.quantity > 0),
        }),
      clear: () => set({ items: [], coupon: undefined }),
      applyCoupon: (code) => {
        const key = code.trim().toUpperCase();
        if (!COUPONS[key]) return { ok: false, message: "Invalid coupon code" };
        set({ coupon: key });
        return { ok: true, message: `Applied — ${COUPONS[key].label}` };
      },
      removeCoupon: () => set({ coupon: undefined }),
      setShippingZone: (zone) => set({ shippingZone: zone }),
    }),
    { name: "pitch-cart-v1" },
  ),
);

export function useCartTotals() {
  const items = useCart((s) => s.items);
  const coupon = useCart((s) => s.coupon);
  const shippingZone = useCart((s) => s.shippingZone);
  const subtotal = items.reduce((sum, i) => {
    const p = productById(i.productId);
    return sum + (p ? p.price * i.quantity : 0);
  }, 0);
  const couponPct = coupon ? COUPONS[coupon]?.pct ?? 0 : 0;
  // updated volume discount to be proportional to BDT (say > 2500 for 10%, > 1500 for 5%)
  const volumeDiscountPct = subtotal >= 2500 ? 10 : subtotal >= 1500 ? 5 : 0;
  const totalDiscountPct = Math.min(couponPct + volumeDiscountPct, 35);
  const discount = +(subtotal * (totalDiscountPct / 100)).toFixed(2);
  const shipping = subtotal === 0 ? 0 : shippingZone === "dhaka" ? 50 : 100;
  const total = Math.max(0, +(subtotal - discount + shipping).toFixed(2));
  const count = items.reduce((n, i) => n + i.quantity, 0);
  return { items, coupon, shippingZone, subtotal, couponPct, volumeDiscountPct, totalDiscountPct, discount, shipping, total, count };
}
