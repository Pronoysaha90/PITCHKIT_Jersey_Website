import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { CheckCircle2, Truck, Smartphone, Wallet } from "lucide-react";
import { useCart, useCartTotals } from "@/lib/cart-store";
import { productById } from "@/lib/products";

export const Route = createFileRoute("/checkout")({
  head: () => ({
    meta: [
      { title: "Checkout — PITCHKIT" },
      { name: "description", content: "Secure checkout. Cash on delivery and bKash available." },
    ],
  }),
  component: CheckoutPage,
});

type PayMethod = "cod" | "bkash";

function CheckoutPage() {
  const { items, subtotal, discount, shipping, total, count, shippingZone } = useCartTotals();
  const clear = useCart((s) => s.clear);
  const setShippingZone = useCart((s) => s.setShippingZone);
  const navigate = useNavigate();

  const [pay, setPay] = useState<PayMethod>("cod");
  const [bkash, setBkash] = useState("");
  const [trxId, setTrxId] = useState("");
  const [placed, setPlaced] = useState<string | null>(null);

  const [form, setForm] = useState({
    name: "", phone: "", email: "", address: "", city: "Dhaka", note: "",
  });
  const update = (k: keyof typeof form, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const place = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.address) {
      toast.error("Please fill in your delivery details");
      return;
    }
    if (pay === "bkash" && (!/^01\d{9}$/.test(bkash) || trxId.length < 6)) {
      toast.error("Enter a valid bKash number and transaction ID");
      return;
    }
    const orderId = "PK-" + Math.random().toString(36).slice(2, 8).toUpperCase();
    setPlaced(orderId);
    clear();
    toast.success("Order placed! Confirmation sent to your email.");
  };

  if (placed) {
    return (
      <div className="container-x py-20 max-w-2xl">
        <div className="rounded-2xl border border-border p-10 text-center">
          <CheckCircle2 className="mx-auto h-14 w-14 text-primary" />
          <h1 className="mt-4 font-display text-4xl">Order confirmed</h1>
          <p className="mt-2 text-muted-foreground">
            Order <span className="font-bold text-foreground">#{placed}</span> placed successfully. A confirmation email is on its way to {form.email || "you"}.
          </p>
          <div className="mt-6 grid gap-3 text-left text-sm">
            <Info label="Delivery" value={`${form.address}, ${form.city}`} />
            <Info label="Phone" value={form.phone} />
            <Info label="Payment" value={pay === "cod" ? "Cash on Delivery" : `bKash · ${bkash}`} />
            <Info label="ETA" value="2-4 business days" />
          </div>
          <button
            onClick={() => navigate({ to: "/shop" })}
            className="mt-8 inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-pitch-deep"
          >
            Keep shopping
          </button>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="container-x py-24 text-center">
        <h1 className="font-display text-4xl">Your cart is empty</h1>
        <p className="mt-2 text-muted-foreground">Add jerseys before checking out.</p>
      </div>
    );
  }

  return (
    <div className="container-x py-10">
      <h1 className="font-display text-5xl">Checkout</h1>

      <form onSubmit={place} className="mt-8 grid gap-10 lg:grid-cols-[1fr_400px]">
        <div className="space-y-8">
          <section>
            <h2 className="font-display text-2xl">Delivery details</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <Field label="Full name" value={form.name} onChange={(v) => update("name", v)} required />
              <Field label="Phone (01XXXXXXXXX)" value={form.phone} onChange={(v) => update("phone", v)} required />
              <Field label="Email" type="email" value={form.email} onChange={(v) => update("email", v)} className="sm:col-span-2" />
              <Field label="Address" value={form.address} onChange={(v) => update("address", v)} className="sm:col-span-2" required />
              <Field label="City" value={form.city} onChange={(v) => update("city", v)} />
              <Field label="Note (optional)" value={form.note} onChange={(v) => update("note", v)} />
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl">Payment method</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <PayCard active={pay === "cod"} onClick={() => setPay("cod")} icon={<Wallet className="h-5 w-5" />} title="Cash on Delivery" body="Pay when you receive. Available across Bangladesh." />
              <PayCard active={pay === "bkash"} onClick={() => setPay("bkash")} icon={<Smartphone className="h-5 w-5" />} title="bKash" body="Send Money to 01XXX-XXXXXX and enter your TrxID." />
            </div>
            {pay === "bkash" && (
              <div className="mt-4 grid gap-3 sm:grid-cols-2 rounded-md border border-border bg-secondary/40 p-4">
                <div className="sm:col-span-2 text-sm">
                  <p>Send <span className="font-bold">৳{total.toFixed(2)}</span> via bKash to <span className="font-bold">01711-000000</span> (Personal). Then enter your details below.</p>
                </div>
                <Field label="Your bKash number" value={bkash} onChange={setBkash} />
                <Field label="Transaction ID" value={trxId} onChange={setTrxId} />
              </div>
            )}
          </section>

          <section>
            <h2 className="font-display text-2xl">Shipping Zone</h2>
            <div className="mt-4 flex flex-col gap-2">
              <label className="flex items-center gap-3 cursor-pointer p-3 rounded-md border border-border hover:border-foreground transition-colors">
                <input 
                  type="radio" 
                  name="zone" 
                  checked={shippingZone === "dhaka"} 
                  onChange={() => setShippingZone("dhaka")} 
                  className="w-4 h-4 text-primary"
                />
                <span className="text-sm font-medium">Inside Dhaka (৳50)</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer p-3 rounded-md border border-border hover:border-foreground transition-colors">
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
          </section>
        </div>

        <aside className="h-fit rounded-2xl border border-border p-6">
          <h2 className="font-display text-2xl">Your order</h2>
          <p className="text-sm text-muted-foreground">{count} item{count > 1 ? "s" : ""}</p>
          <ul className="mt-4 space-y-3 max-h-72 overflow-y-auto pr-1">
            {items.map((i) => {
              const p = productById(i.productId);
              if (!p) return null;
              return (
                <li key={i.id} className="flex items-center gap-3">
                  <img src={p.image} alt={p.name} width={56} height={70} className="h-14 w-12 rounded object-cover" />
                  <div className="min-w-0 flex-1">
                    <div className="truncate text-sm font-semibold">{p.name}</div>
                    <div className="text-xs text-muted-foreground">Size {i.size} · Qty {i.quantity}</div>
                  </div>
                  <div className="text-sm font-semibold">৳{(p.price * i.quantity).toFixed(2)}</div>
                </li>
              );
            })}
          </ul>
          <dl className="mt-5 space-y-2 text-sm border-t border-border pt-4">
            <Row label="Subtotal" value={`৳${subtotal.toFixed(2)}`} />
            {discount > 0 && <Row label="Discounts" value={`-৳${discount.toFixed(2)}`} accent />}
            <Row label="Shipping" value={`৳${shipping.toFixed(2)}`} />
            <div className="border-t border-border pt-3 flex items-baseline justify-between">
              <span className="font-display text-xl">Total</span>
              <span className="font-display text-2xl">৳{total.toFixed(2)}</span>
            </div>
          </dl>
          <button className="mt-5 w-full rounded-md bg-primary py-3 text-sm font-semibold text-primary-foreground hover:bg-pitch-deep">
            Place order
          </button>
          <div className="mt-3 flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <Truck className="h-3.5 w-3.5" /> Delivery in 2-4 business days
          </div>
        </aside>
      </form>
    </div>
  );
}

function Field({
  label, value, onChange, type = "text", className = "", required,
}: {
  label: string; value: string; onChange: (v: string) => void;
  type?: string; className?: string; required?: boolean;
}) {
  return (
    <label className={`block text-sm ${className}`}>
      <span className="mb-1 block text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">{label}{required && " *"}</span>
      <input
        type={type}
        value={value}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary"
      />
    </label>
  );
}

function PayCard({
  active, onClick, icon, title, body,
}: { active: boolean; onClick: () => void; icon: React.ReactNode; title: string; body: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`text-left rounded-lg border p-4 transition ${
        active ? "border-primary ring-2 ring-primary/30 bg-primary/5" : "border-border hover:border-foreground"
      }`}
    >
      <div className="flex items-center gap-2 font-semibold">{icon}{title}</div>
      <p className="mt-1 text-xs text-muted-foreground">{body}</p>
    </button>
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

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between rounded-md bg-secondary/50 px-3 py-2">
      <span className="text-xs uppercase tracking-wider text-muted-foreground">{label}</span>
      <span className="font-semibold">{value}</span>
    </div>
  );
}
