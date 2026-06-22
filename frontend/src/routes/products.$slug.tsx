import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { toast } from "sonner";
import { Minus, Plus, ShieldCheck, Truck, RotateCcw, ArrowRight } from "lucide-react";
import { productBySlug, products, SIZES, type Size } from "@/lib/products";
import { useCart } from "@/lib/cart-store";
import { ProductCard } from "@/components/ProductCard";
import { Reviews } from "@/components/Reviews";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = productBySlug(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.product;
    if (!p) return { meta: [{ title: "Jersey — PITCHKIT" }] };
    return {
      meta: [
        { title: `${p.name} — PITCHKIT` },
        { name: "description", content: p.description },
        { property: "og:title", content: `${p.name} — PITCHKIT` },
        { property: "og:description", content: p.description },
        { property: "og:image", content: p.image },
      ],
    };
  },
  component: ProductPage,
  notFoundComponent: () => (
    <div className="container-x py-20 text-center">
      <h1 className="font-display text-4xl">Jersey not found</h1>
      <Link to="/shop" className="mt-4 inline-block text-primary hover:underline">Back to shop</Link>
    </div>
  ),
});

function ProductPage() {
  const { product: p } = Route.useLoaderData();
  const [size, setSize] = useState<Size>("M");
  const [qty, setQty] = useState(1);
  const [activeIndex, setActiveIndex] = useState(0);
  const add = useCart((s) => s.add);

  useEffect(() => {
    setActiveIndex(0);
  }, [p.id]);

  const gallery = [p.image, p.image, p.image, p.image];

  const related = products.filter((x) => x.league === p.league && x.id !== p.id).slice(0, 4);
  const off = p.compareAt ? Math.round(((p.compareAt - p.price) / p.compareAt) * 100) : 0;

  const onAdd = () => {
    add(p.id, size, qty);
    toast.success(`Added ${qty} × ${p.name} (${size}) to cart`);
  };

  const imgRef = useRef<HTMLImageElement>(null);
  const [showZoom, setShowZoom] = useState(false);
  const [zoomPos, setZoomPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imgRef.current) return;
    const { left, top, width, height } = imgRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomPos({ x, y });
  };

  return (
    <div className="container-x py-10">
      <nav className="mb-6 text-xs text-muted-foreground">
        <Link to="/" className="hover:text-foreground">Home</Link> / <Link to="/shop" className="hover:text-foreground">Shop</Link> / <span className="text-foreground">{p.name}</span>
      </nav>

      <div className="grid gap-10 lg:grid-cols-2 relative">
        <div className="flex flex-col gap-4">
          <div 
            className="rounded-2xl border border-border bg-secondary/30 overflow-hidden relative cursor-crosshair group"
            onMouseEnter={() => setShowZoom(true)}
            onMouseLeave={() => setShowZoom(false)}
            onMouseMove={handleMouseMove}
          >
            <img ref={imgRef} src={gallery[activeIndex]} alt={p.name} width={900} height={1100} className="aspect-[4/5] w-full object-cover transition-all duration-300 group-hover:opacity-90" />
            
            {/* The Lens (Desktop only) */}
            {showZoom && (
              <div 
                className="pointer-events-none absolute hidden lg:block border border-border bg-white/20 backdrop-brightness-110"
                style={{
                  width: "40%",
                  height: "40%",
                  left: `calc(${zoomPos.x}% - 20%)`,
                  top: `calc(${zoomPos.y}% - 20%)`,
                }}
              />
            )}
          </div>
          
          {/* Zoomed Output Pane (Desktop only, overlays right column) */}
          {showZoom && (
            <div 
              className="pointer-events-none absolute left-[calc(50%+1.25rem)] top-0 z-50 hidden lg:block h-[calc(100%-120px)] w-[calc(50%-1.25rem)] rounded-2xl border border-border bg-background shadow-2xl overflow-hidden"
              style={{
                backgroundImage: `url(${gallery[activeIndex]})`,
                backgroundPosition: `${zoomPos.x}% ${zoomPos.y}%`,
                backgroundSize: "250%",
                backgroundRepeat: "no-repeat",
              }}
            />
          )}

          <div className="grid grid-cols-4 gap-4">
            {gallery.map((img, i) => (
              <button 
                key={i} 
                onClick={() => setActiveIndex(i)}
                className={`rounded-lg overflow-hidden border-2 transition-all ${activeIndex === i ? 'border-primary' : 'border-transparent hover:border-primary/50'}`}
              >
                <img src={img} alt={`${p.name} view ${i + 1}`} className="aspect-square w-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div>
          <div className="flex flex-wrap gap-2">
            <span className="chip bg-primary/10 text-primary">{p.league}</span>
            <span className="chip bg-secondary text-foreground">{p.kind}</span>
            <span className="chip bg-secondary text-foreground">{p.season}</span>
            {p.badges?.map((b: string) => (
              <span key={b} className="chip bg-accent text-accent-foreground">{b}</span>
            ))}
          </div>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl">{p.name}</h1>
          <div className="mt-2 text-sm text-muted-foreground">{p.club}</div>

          <div className="mt-5 flex items-baseline gap-3">
            <span className="font-display text-4xl">৳{p.price}</span>
            {p.compareAt && (
              <>
                <span className="text-lg text-muted-foreground line-through">৳{p.compareAt}</span>
                <span className="chip bg-accent text-accent-foreground">Save {off}%</span>
              </>
            )}
          </div>

          <p className="mt-5 text-foreground/80">{p.description}</p>

          <div className="mt-7">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">Size</span>
              <button className="text-xs text-primary hover:underline">Size guide</button>
            </div>
            <div className="mt-2 flex flex-wrap gap-2">
              {SIZES.map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`h-11 min-w-[3rem] rounded-md border px-3 text-sm font-semibold transition ${
                    size === s ? "border-primary bg-primary text-primary-foreground" : "border-border hover:border-foreground"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 flex items-center gap-3">
            <div className="flex items-center rounded-md border border-input">
              <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="grid h-11 w-11 place-items-center hover:bg-muted">
                <Minus className="h-4 w-4" />
              </button>
              <span className="w-10 text-center font-semibold">{qty}</span>
              <button onClick={() => setQty((q) => Math.min(p.stock, q + 1))} className="grid h-11 w-11 place-items-center hover:bg-muted">
                <Plus className="h-4 w-4" />
              </button>
            </div>
            <button
              onClick={onAdd}
              className="flex-1 rounded-md bg-foreground py-3 text-sm font-semibold text-background hover:opacity-90"
            >
              Add to cart — ৳{(p.price * qty).toFixed(2)}
            </button>
          </div>

          <div className="mt-3 text-xs text-muted-foreground">
            {p.stock <= 10 ? <span className="text-accent font-semibold">Only {p.stock} left · selling fast</span> : <span>In stock · {p.stock} units</span>}
          </div>

          <div className="mt-8 grid grid-cols-3 gap-3 border-t border-border pt-6 text-xs">
            <Info icon={<Truck className="h-4 w-4" />} title="Fast delivery" body="2-4 days nationwide" />
            <Info icon={<RotateCcw className="h-4 w-4" />} title="30-day returns" body="Tags on, hassle-free" />
            <Info icon={<ShieldCheck className="h-4 w-4" />} title="Quality assured" body="Authentic-grade fabric" />
          </div>
        </div>
      </div>

      <Reviews rating={p.rating} count={p.reviewsCount} />

      {related.length > 0 && (
        <section className="mt-20">
          <div className="flex items-end justify-between">
            <h2 className="font-display text-3xl">More from {p.league}</h2>
            <Link to="/shop" className="inline-flex items-center gap-1 text-sm font-semibold hover:text-primary">
              View all <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((r) => <ProductCard key={r.id} p={r} />)}
          </div>
        </section>
      )}
    </div>
  );
}

function Info({ icon, title, body }: { icon: React.ReactNode; title: string; body: string }) {
  return (
    <div className="rounded-md bg-secondary/50 p-3">
      <div className="flex items-center gap-2 text-foreground">{icon}<span className="font-semibold">{title}</span></div>
      <div className="mt-1 text-muted-foreground">{body}</div>
    </div>
  );
}
