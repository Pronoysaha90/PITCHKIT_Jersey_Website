import { createFileRoute, Link } from "@tanstack/react-router";
import { toast } from "sonner";
import { bundles, productById, SIZES } from "@/lib/products";
import { useCart } from "@/lib/cart-store";

export const Route = createFileRoute("/bundles")({
  head: () => ({
    meta: [
      { title: "Bundle deals — PITCHKIT" },
      { name: "description", content: "Curated jersey bundles. Buy more, save up to 18%." },
      { property: "og:title", content: "Bundle deals — PITCHKIT" },
      { property: "og:description", content: "Curated football jersey bundles with automatic discounts." },
    ],
  }),
  component: BundlesPage,
});

function BundlesPage() {
  const add = useCart((s) => s.add);

  const addBundle = (ids: string[], name: string) => {
    ids.forEach((id) => add(id, "M", 1));
    toast.success(`${name} added to cart (size M — change in cart)`);
  };

  return (
    <div className="container-x py-10">
      <div className="max-w-2xl">
        <span className="chip bg-accent/10 text-accent">Bundle & save</span>
        <h1 className="mt-3 font-display text-5xl">Pre-built kit bundles</h1>
        <p className="mt-3 text-muted-foreground">
          Save more when you grab two or more kits at once. Discounts apply automatically at checkout. Sizes default to Medium — adjust anytime in your cart.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {bundles.map((b) => {
          const items = b.productIds.map((id) => productById(id)!).filter(Boolean);
          const total = items.reduce((s, p) => s + p.price, 0);
          const discounted = +(total * (1 - b.discountPct / 100)).toFixed(2);
          return (
            <div key={b.id} className="overflow-hidden rounded-2xl border border-border bg-card flex flex-col">
              <div className="grid grid-cols-3 gap-1 bg-secondary/40 p-2">
                {items.map((p) => (
                  <img key={p.id} src={p.image} alt={p.name} loading="lazy" width={300} height={400} className="aspect-[3/4] w-full rounded-md object-cover" />
                ))}
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-2xl">{b.name}</h3>
                  <span className="chip bg-accent text-accent-foreground">-{b.discountPct}%</span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{b.description}</p>
                <ul className="mt-3 space-y-1 text-sm">
                  {items.map((p) => <li key={p.id} className="flex justify-between"><span>{p.name}</span><span className="text-muted-foreground">${p.price}</span></li>)}
                </ul>
                <div className="mt-auto pt-5 flex items-end justify-between">
                  <div>
                    <div className="text-xs text-muted-foreground line-through">${total}</div>
                    <div className="font-display text-3xl">${discounted}</div>
                  </div>
                  <button
                    onClick={() => addBundle(b.productIds, b.name)}
                    className="rounded-md bg-foreground px-4 py-2 text-sm font-semibold text-background hover:opacity-90"
                  >
                    Add bundle
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-12 rounded-2xl border border-dashed border-border p-6 text-sm text-muted-foreground">
        Tip: spend ৳150 to get an extra 5% off, ৳250 for 10% off — applied automatically at checkout. Available sizes: {SIZES.join(", ")}. <Link to="/shop" className="text-primary hover:underline">Browse all kits →</Link>
      </div>
    </div>
  );
}
