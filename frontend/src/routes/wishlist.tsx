import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useWishlist } from "@/lib/wishlist-store";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";

export const Route = createFileRoute("/wishlist")({
  head: () => ({
    meta: [
      { title: "Your Wishlist — PITCHKIT" },
      { name: "description", content: "Review your saved football jerseys." },
    ],
  }),
  component: WishlistPage,
});

function WishlistPage() {
  const wishlistItems = useWishlist((s) => s.items);
  
  const savedProducts = products.filter((p) => wishlistItems.includes(p.id));

  if (savedProducts.length === 0) {
    return (
      <div className="container-x py-24 text-center">
        <h1 className="font-display text-5xl">Your wishlist is empty</h1>
        <p className="mt-2 text-muted-foreground">Save your favorite kits for later.</p>
        <Link to="/shop" className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-pitch-deep">
          Discover jerseys <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    );
  }

  return (
    <div className="container-x py-10">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h1 className="font-display text-5xl">Wishlist</h1>
          <p className="mt-2 text-muted-foreground">
            You have {savedProducts.length} {savedProducts.length === 1 ? 'item' : 'items'} saved.
          </p>
        </div>
      </div>
      
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {savedProducts.map((p) => (
          <ProductCard key={p.id} p={p} />
        ))}
      </div>
    </div>
  );
}
