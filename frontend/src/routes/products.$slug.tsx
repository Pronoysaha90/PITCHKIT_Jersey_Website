import { createFileRoute, notFound, Link, useNavigate } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { toast } from "sonner";
import { Minus, Plus, ShieldCheck, Truck, RotateCcw, ArrowRight } from "lucide-react";
import { productBySlug, products, SIZES, type Size } from "@/lib/products";
import { useCart } from "@/lib/cart-store";
import { useWishlist } from "@/lib/wishlist-store";
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
  const toggleWishlist = useWishlist((s) => s.toggle);
  const hasWishlist = useWishlist((s) => s.has);
  const navigate = useNavigate();

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
  const [zoomStyle, setZoomStyle] = useState({});

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomStyle({
      transformOrigin: `${x}% ${y}%`,
      transform: "scale(2.5)",
    });
  };

  const [activeTab, setActiveTab] = useState<"sizeGuide" | "description" | "reviews">("sizeGuide");

  return (
    <div className="container-x py-10">
      <nav className="mb-6 text-xs text-muted-foreground">
        <Link to="/" className="hover:text-foreground">Home</Link> / <Link to="/shop" className="hover:text-foreground">Shop</Link> / <span className="text-foreground">{p.name}</span>
      </nav>

      <div className="grid gap-10 lg:grid-cols-2">
        {/* Left: Image Gallery */}
        <div className="flex gap-4 h-[600px]">
          {/* Vertical Thumbnails */}
          <div className="flex flex-col gap-3 w-20 overflow-y-auto no-scrollbar shrink-0">
            {gallery.map((img, i) => (
              <button 
                key={i} 
                onClick={() => setActiveIndex(i)}
                className={`rounded-lg overflow-hidden border-2 transition-all ${activeIndex === i ? 'border-primary' : 'border-transparent hover:border-primary/50'}`}
              >
                <img src={img} alt={`${p.name} view ${i + 1}`} className="aspect-[4/5] w-full object-cover" />
              </button>
            ))}
          </div>

          {/* Main Image with Zoom */}
          <div 
            className="flex-1 rounded-2xl border border-border bg-secondary/30 overflow-hidden relative cursor-crosshair group"
            onMouseEnter={() => setShowZoom(true)}
            onMouseLeave={() => {
              setShowZoom(false);
              setZoomStyle({ transform: "scale(1)" });
            }}
            onMouseMove={handleMouseMove}
          >
            <img 
              src={gallery[activeIndex]} 
              alt={p.name} 
              className="w-full h-full object-cover transition-transform duration-100 ease-out" 
              style={showZoom ? zoomStyle : { transform: "scale(1)" }}
            />
          </div>
        </div>

        {/* Right: Product Details */}
        <div>
          <div className="flex flex-wrap gap-2">
            <span className="chip bg-primary/10 text-primary">{p.league}</span>
            <span className="chip bg-secondary text-foreground">{p.kind}</span>
            <span className="chip bg-secondary text-foreground">{p.season}</span>
            {p.badges?.map((b: string) => (
              <span key={b} className="chip bg-accent text-accent-foreground">{b}</span>
            ))}
          </div>
          <h1 className="mt-5 font-display text-4xl sm:text-5xl tracking-wide">{p.name}</h1>
          <div className="mt-2 text-sm text-muted-foreground">{p.club}</div>

          <div className="mt-5 flex items-baseline gap-3">
            <span className="font-display text-4xl">৳{p.price}</span>
            {p.compareAt && (
              <>
                <span className="text-lg text-muted-foreground line-through">৳{p.compareAt}</span>
                <span className="chip bg-primary text-primary-foreground font-bold">Save {off}%</span>
              </>
            )}
          </div>

          <div className="mt-8">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">Size</span>
              <button onClick={() => setActiveTab("sizeGuide")} className="text-xs text-primary hover:underline">Size guide</button>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
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

          <div className="mt-6 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="flex items-center rounded-md border border-input h-12">
                <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="grid h-full w-12 place-items-center hover:bg-muted transition-colors">
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-10 text-center font-semibold text-sm">{qty}</span>
                <button onClick={() => setQty((q) => Math.min(p.stock, q + 1))} className="grid h-full w-12 place-items-center hover:bg-muted transition-colors">
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <button
                onClick={() => {
                  onAdd();
                  navigate({ to: "/checkout" });
                }}
                className="flex-1 rounded-md bg-primary h-12 text-sm font-bold text-primary-foreground hover:bg-primary/90 transition-colors uppercase tracking-wider active:scale-[0.98]"
              >
                Buy It Now
              </button>
              <button 
                onClick={() => {
                  const added = toggleWishlist(p.id);
                  if (added) {
                    toast.success("Added to wishlist!");
                  } else {
                    toast.info("Removed from wishlist");
                  }
                }}
                className={`grid shrink-0 h-12 w-12 place-items-center rounded-md border transition-all active:scale-90 ${hasWishlist(p.id) ? 'bg-rose-50 text-rose-500 border-rose-200 hover:bg-rose-100 scale-105' : 'border-input hover:bg-muted'}`}
                title={hasWishlist(p.id) ? "Remove from Wishlist" : "Add to Wishlist"}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill={hasWishlist(p.id) ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`lucide lucide-heart transition-transform ${hasWishlist(p.id) ? 'scale-110' : ''}`}><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
              </button>
            </div>
            
            <button
              onClick={onAdd}
              className="w-full rounded-md bg-foreground h-12 text-sm font-bold text-background hover:opacity-90 transition-colors active:scale-[0.99]"
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

      {/* TABS SECTION */}
      <div className="mt-20">
        <div className="flex gap-8 border-b border-border text-sm font-semibold overflow-x-auto no-scrollbar">
          <button 
            className={`pb-3 border-b-2 whitespace-nowrap transition-colors ${activeTab === 'sizeGuide' ? 'border-foreground text-foreground' : 'border-transparent text-muted-foreground hover:text-foreground'}`}
            onClick={() => setActiveTab('sizeGuide')}
          >Size Guide</button>
          <button 
            className={`pb-3 border-b-2 whitespace-nowrap transition-colors ${activeTab === 'description' ? 'border-foreground text-foreground' : 'border-transparent text-muted-foreground hover:text-foreground'}`}
            onClick={() => setActiveTab('description')}
          >Description</button>
          <button 
            className={`pb-3 border-b-2 whitespace-nowrap transition-colors ${activeTab === 'reviews' ? 'border-foreground text-foreground' : 'border-transparent text-muted-foreground hover:text-foreground'}`}
            onClick={() => setActiveTab('reviews')}
          >Reviews</button>
        </div>
        
        <div className="py-8 min-h-[300px]">
          {activeTab === 'sizeGuide' && (
            <div className="animate-in fade-in duration-300">
              <h3 className="font-bold text-lg mb-4">Standard Jersey Size Guide</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="bg-secondary/50">
                    <tr>
                      <th className="p-4 font-semibold rounded-tl-lg">Size</th>
                      <th className="p-4 font-semibold">Chest</th>
                      <th className="p-4 font-semibold rounded-tr-lg">Length</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border"><td className="p-4">S</td><td className="p-4">38 INCH</td><td className="p-4">26 INCH</td></tr>
                    <tr className="border-b border-border"><td className="p-4">M</td><td className="p-4">40 INCH</td><td className="p-4">27 INCH</td></tr>
                    <tr className="border-b border-border"><td className="p-4">L</td><td className="p-4">42 INCH</td><td className="p-4">28 INCH</td></tr>
                    <tr className="border-b border-border"><td className="p-4">XL</td><td className="p-4">44 INCH</td><td className="p-4">29 INCH</td></tr>
                    <tr><td className="p-4">XXL</td><td className="p-4">46 INCH</td><td className="p-4">30 INCH</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
          {activeTab === 'description' && (
            <div className="animate-in fade-in duration-300">
              <h3 className="font-bold text-lg mb-4">Product Details</h3>
              <p className="text-foreground/80 text-base leading-relaxed max-w-3xl">{p.description}</p>
            </div>
          )}
          {activeTab === 'reviews' && (
            <div className="animate-in fade-in duration-300">
              <Reviews rating={p.rating} count={p.reviewsCount} />
            </div>
          )}
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-10">
          <div className="flex items-end justify-between">
            <h2 className="font-display text-3xl">Related products</h2>
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
