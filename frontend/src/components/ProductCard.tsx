import { Link, useNavigate } from "@tanstack/react-router";
import { Star, ShoppingBag, Heart, Zap } from "lucide-react";
import type { Product } from "@/lib/products";
import { useCart } from "@/lib/cart-store";
import { useWishlist } from "@/lib/wishlist-store";
import { toast } from "sonner";

export function ProductCard({ p }: { p: Product }) {
  const off = p.compareAt ? Math.round(((p.compareAt - p.price) / p.compareAt) * 100) : 0;
  
  const addToCart = useCart((s) => s.add);
  const toggleWishlist = useWishlist((s) => s.toggle);
  const isWishlisted = useWishlist((s) => s.has(p.id));
  const navigate = useNavigate();

  const handleBuyNow = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(p.id, "M", 1);
    navigate({ to: "/checkout" });
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(p.id, "M", 1);
    toast.success(`Added ${p.name} to cart`);
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const added = toggleWishlist(p.id);
    if (added) {
      toast.success(`Added ${p.name} to wishlist`);
    } else {
      toast.success(`Removed from wishlist`);
    }
  };

  return (
    <Link
      to="/products/$slug"
      params={{ slug: p.slug }}
      className="group block overflow-hidden rounded-lg border border-border bg-card transition-shadow hover:shadow-card"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-secondary/40">
        <img
          src={p.image}
          alt={p.name}
          loading="lazy"
          width={900}
          height={1100}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute left-3 top-3 flex flex-col gap-1">
          {p.badges?.map((b) => (
            <span
              key={b}
              className={`chip ${
                b === "Hot" || b === "Bestseller"
                  ? "bg-accent text-accent-foreground"
                  : b === "Limited"
                    ? "bg-foreground text-background"
                    : "bg-primary text-primary-foreground"
              }`}
            >
              {b}
            </span>
          ))}
          {off > 0 && <span className="chip bg-foreground text-background">-{off}%</span>}
        </div>
        {p.stock <= 10 && (
          <span className="absolute right-3 top-3 z-10 chip bg-background/95 text-foreground border border-border">
            Only {p.stock} left
          </span>
        )}

        {/* Hover Actions Overlay */}
        <div className="absolute inset-x-0 bottom-0 z-20 flex translate-y-full flex-col gap-2 bg-gradient-to-t from-black/60 via-black/30 to-transparent p-4 pt-16 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <button 
            onClick={handleBuyNow}
            className="flex w-full items-center justify-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-md transition-colors hover:bg-pitch-deep"
          >
            <Zap className="h-4 w-4" />
            Buy Now
          </button>
          <div className="flex gap-2">
            <button 
              onClick={handleAddToCart}
              className="flex flex-1 items-center justify-center gap-2 rounded-md bg-background px-4 py-2.5 text-sm font-semibold text-foreground shadow-md transition-colors hover:bg-muted"
            >
              <ShoppingBag className="h-4 w-4" />
              Add to Cart
            </button>
            <button 
              onClick={handleWishlist}
              className={`flex items-center justify-center rounded-md bg-background px-4 py-2.5 text-foreground shadow-md transition-colors hover:bg-muted ${isWishlisted ? 'text-accent' : 'hover:text-accent'}`}
              aria-label="Add to wishlist"
            >
              <Heart className={`h-4 w-4 ${isWishlisted ? 'fill-accent text-accent' : ''}`} />
            </button>
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between text-[11px] uppercase tracking-wider text-muted-foreground">
          <span>{p.league}</span>
          <span>{p.kind} · {p.season}</span>
        </div>
        <h3 className="mt-1 font-semibold text-foreground line-clamp-1">{p.name}</h3>
        <div className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
          <Star className="h-3.5 w-3.5 fill-current text-amber-500" />
          {p.rating.toFixed(1)} <span>· {p.reviewsCount} reviews</span>
        </div>
        <div className="mt-3 flex items-baseline gap-2">
          <span className="text-lg font-bold">৳{p.price}</span>
          {p.compareAt && (
            <span className="text-sm text-muted-foreground line-through">৳{p.compareAt}</span>
          )}
        </div>
      </div>
    </Link>
  );
}
