import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Trash2, Minus, Plus, ArrowRight, Tag } from "lucide-react";
import { toast } from "sonner";
import { useCart, useCartTotals } from "@/lib/cart-store";
import { productById } from "@/lib/products";

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [
      { title: "Your cart — PITCHKIT" },
      { name: "description", content: "Review your selected jerseys and head to checkout." },
    ],
  }),
  component: CartPage,
});

function CartPage() {
  const { items, coupon, subtotal, couponPct, volumeDiscountPct, discount, shipping, total, shippingZone } = useCartTotals();
  const setQty = useCart((s) => s.setQty);
  const remove = useCart((s) => s.remove);
  const applyCoupon = useCart((s) => s.applyCoupon);
  const removeCoupon = useCart((s) => s.removeCoupon);
  const setShippingZone = useCart((s) => s.setShippingZone);
  const [code, setCode] = useState("");

  if (items.length === 0) {
    return (
      <div className="container-x py-24 text-center">
        <h1 className="font-display text-5xl">Your cart is empty</h1>
        <p className="mt-2 text-muted-foreground">Time to grab a kit and back your team.</p>
        <Link to="/shop" className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-pitch-deep">
          Shop jerseys <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    );
  }

  return (
    <div className="container-x py-10">
      <h1 className="font-display text-5xl">Cart</h1>
      <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_380px]">
        <ul className="divide-y divide-border border-y border-border">
          {items.map((i) => {
            const p = productById(i.productId);
            if (!p) return null;
            return (
              <li key={i.id} className="grid grid-cols-[96px_1fr_auto] gap-4 py-5">
                <img src={p.image} alt={p.name} width={96} height={120} className="aspect-[4/5] w-24 rounded-md object-cover" />
                <div className="min-w-0">
                  <div className="font-semibold truncate">{p.name}</div>
                  <div className="text-sm text-muted-foreground">{p.club} · Size {i.size}</div>
                  <div className="mt-2 flex items-center gap-3">
                    <div className="flex items-center rounded-md border border-input">
                      <button onClick={() => setQty(i.id, i.quantity - 1)} className="grid h-9 w-9 place-items-center hover:bg-muted"><Minus className="h-3.5 w-3.5" /></button>
                      <span className="w-8 text-center text-sm font-semibold">{i.quantity}</span>
                      <button onClick={() => setQty(i.id, i.quantity + 1)} className="grid h-9 w-9 place-items-center hover:bg-muted"><Plus className="h-3.5 w-3.5" /></button>
                    </div>
                    <button onClick={() => remove(i.id)} className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-accent">
                      <Trash2 className="h-3.5 w-3.5" /> Remove
                    </button>
                  </div>
                </div>
                <div className="text-right font-semibold">৳{(p.price * i.quantity).toFixed(2)}</div>
              </li>
            );
          })}
        </ul>

        <aside className="h-fit rounded-2xl border border-border p-6">
          <h2 className="font-display text-2xl">Order summary</h2>

          <div className="mt-4">
            {coupon ? (
              <div className="flex items-center justify-between rounded-md bg-primary/10 px-3 py-2 text-sm">
                <span className="inline-flex items-center gap-2 font-semibold text-primary"><Tag className="h-4 w-4" /> {coupon} applied</span>
                <button onClick={removeCoupon} className="text-xs text-muted-foreground hover:text-foreground">Remove</button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const r = applyCoupon(code);
                  r.ok ? toast.success(r.message) : toast.error(r.message);
                  if (r.ok) setCode("");
                }}
                className="flex gap-2"
              >
                <input
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  placeholder="Coupon code"
                  className="flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary"
                />
                <button className="rounded-md bg-foreground px-4 text-sm font-semibold text-background hover:opacity-90">Apply</button>
              </form>
            )}
            <p className="mt-2 text-[11px] text-muted-foreground">Try WELCOME10, PITCH15 or GOALS20.</p>
          </div>

          <div className="mt-8">
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">Shipping Zone</h3>
            <div className="flex flex-col gap-2 mb-6">
              <label className="flex items-center gap-3 cursor-pointer">
                <input 
                  type="radio" 
                  name="zone" 
                  checked={shippingZone === "dhaka"} 
                  onChange={() => setShippingZone("dhaka")} 
                  className="w-4 h-4 text-primary"
                />
                <span className="text-sm font-medium">Inside Dhaka (৳50)</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input 
                  type="radio" 
                  name="zone" 
                  checked={shippingZone === "outside"} 
                  onChange={() => setShippingZone("outside")}
                  className="w-4 h-4 text-primary"
                />
                <span className="text-sm font-medium">Outside Dhaka (৳100)</span>
              </label>
            </div>
          </div>

          <div className="mt-4 rounded-xl border border-border bg-secondary/30 p-6">
            <dl className="mt-6 space-y-2 text-sm">
              <Row label="Subtotal" value={`৳${subtotal.toFixed(2)}`} />
              {volumeDiscountPct > 0 && <Row label={`Volume discount (-${volumeDiscountPct}%)`} value={`-৳${(subtotal * volumeDiscountPct / 100).toFixed(2)}`} accent />}
              {couponPct > 0 && <Row label={`Coupon (-${couponPct}%)`} value={`-৳${(subtotal * couponPct / 100).toFixed(2)}`} accent />}
              <Row label="Shipping" value={`৳${shipping.toFixed(2)}`} />
              <div className="border-t border-border pt-3 flex items-baseline justify-between">
                <span className="font-display text-xl">Total</span>
                <span className="font-display text-2xl">৳{total.toFixed(2)}</span>
              </div>
              {discount > 0 && <div className="text-xs text-primary font-semibold">You saved ৳{discount.toFixed(2)}!</div>}
            </dl>
          </div>

          <Link
            to="/checkout"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary py-3 text-sm font-semibold text-primary-foreground hover:bg-pitch-deep"
          >
            Checkout <ArrowRight className="h-4 w-4" />
          </Link>
          <Link to="/shop" className="mt-2 inline-block w-full text-center text-xs text-muted-foreground hover:text-foreground">
            Continue shopping
          </Link>
        </aside>
      </div>
    </div>
  );
}

function Row({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className="flex justify-between">
      <dt className="text-muted-foreground">{label}</dt>
      <dd className={accent ? "text-primary font-semibold" : "font-medium"}>{value}</dd>
    </div>
  );
}
