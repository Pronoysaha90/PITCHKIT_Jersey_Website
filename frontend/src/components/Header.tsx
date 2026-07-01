import { Link, useNavigate } from "@tanstack/react-router";
import { ShoppingBag, Search, Menu, Heart, User, LogIn, Mail, UserPen, Key, Package } from "lucide-react";
import { useCartTotals, useCart } from "@/lib/cart-store";
import { useWishlist } from "@/lib/wishlist-store";
import { useAuth } from "@/lib/auth-store";
import { products } from "@/lib/products";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";
import { toast } from "sonner";

import { AuthModal } from "@/components/AuthModal";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/bundles", label: "Bundles" },
  { to: "/about", label: "About Us" },
];

export function Header() {
  const { count } = useCartTotals();
  const cartItems = useCart((s) => s.items);
  const wishlistItems = useWishlist((s) => s.items);
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const [loginOpen, setLoginOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between gap-4">
        <a href="/" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-md bg-primary text-primary-foreground font-display text-lg">PK</span>
          <span className="font-display text-2xl tracking-wider">PITCHKIT</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-foreground/70 hover:text-foreground transition-colors"
              activeProps={{ className: "text-foreground" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button 
            onClick={() => setSearchOpen(true)}
            className="hidden sm:grid h-10 w-10 place-items-center rounded-md hover:bg-muted focus:outline-none"
            aria-label="Search"
          >
            <Search className="h-4 w-4" />
          </button>
          
          <CommandDialog open={searchOpen} onOpenChange={setSearchOpen}>
            <CommandInput placeholder="Search teams, kits, colors..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Products">
                {products.map((p) => (
                  <CommandItem 
                    key={p.id}
                    onSelect={() => {
                      setSearchOpen(false);
                      navigate({ to: "/products/$slug", params: { slug: p.id } });
                    }}
                    className="flex items-center gap-3 cursor-pointer data-[selected=true]:text-white"
                  >
                    <img src={p.image} alt={p.name} className="w-8 h-10 object-cover rounded-sm" />
                    <div className="flex flex-col">
                      <span className="font-semibold">{p.name}</span>
                      <span className="text-xs text-current opacity-80">{p.club} · ${p.price}</span>
                    </div>
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </CommandDialog>

          {/* WISHLIST DROPDOWN */}
          <div className="relative group hidden md:flex items-center h-16">
            <Link
              to="/wishlist"
              className="relative grid h-10 w-10 place-items-center rounded-md hover:bg-muted"
              aria-label="Wishlist"
            >
              <Heart className="h-5 w-5" />
              {wishlistItems.length > 0 && (
                <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-accent px-1 text-[10px] font-bold text-accent-foreground">
                  {wishlistItems.length}
                </span>
              )}
            </Link>
            
            {/* Wishlist Dropdown Content */}
            <div className="absolute top-[60px] right-0 w-80 bg-background border border-border rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 overflow-hidden transform group-hover:translate-y-0 translate-y-2">
              <div className="p-4 flex flex-col gap-3 max-h-[350px] overflow-y-auto no-scrollbar">
                {wishlistItems.length === 0 ? (
                  <p className="text-sm text-muted-foreground text-center py-6">Your wishlist is empty</p>
                ) : (
                  wishlistItems.slice(0, 3).map((id) => {
                    const p = products.find((x) => x.id === id);
                    if (!p) return null;
                    return (
                      <div key={id} className="flex items-center gap-3">
                        <img src={p.image} alt={p.name} className="w-14 h-[4.5rem] object-cover rounded-md border border-border" />
                        <div className="flex flex-col flex-1">
                          <span className="text-sm font-semibold line-clamp-2 leading-tight">{p.name}</span>
                          <span className="text-xs font-bold text-primary mt-1">৳{p.price}</span>
                        </div>
                      </div>
                    );
                  })
                )}
                {wishlistItems.length > 3 && (
                  <div className="text-xs font-semibold text-center text-muted-foreground pt-3 border-t border-border mt-1">
                    + {wishlistItems.length - 3} more items
                  </div>
                )}
              </div>
              {wishlistItems.length > 0 && (
                <div className="p-4 border-t border-border bg-secondary/30">
                  <Link to="/wishlist" className="flex items-center justify-center w-full py-2.5 text-sm font-bold bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors uppercase tracking-widest">
                    View Wishlist
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* CART DROPDOWN */}
          <div className="relative group hidden md:flex items-center h-16">
            <Link
              to="/cart"
              className="relative grid h-10 w-10 place-items-center rounded-md hover:bg-muted"
              aria-label="Cart"
            >
              <ShoppingBag className="h-5 w-5" />
              {count > 0 && (
                <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-accent px-1 text-[10px] font-bold text-accent-foreground">
                  {count}
                </span>
              )}
            </Link>

            {/* Cart Dropdown Content */}
            <div className="absolute top-[60px] right-0 w-80 bg-background border border-border rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 overflow-hidden transform group-hover:translate-y-0 translate-y-2">
              <div className="p-4 flex flex-col gap-3 max-h-[350px] overflow-y-auto no-scrollbar">
                {cartItems.length === 0 ? (
                  <p className="text-sm text-muted-foreground text-center py-6">Your cart is empty</p>
                ) : (
                  cartItems.slice(0, 3).map((item) => {
                    const p = products.find((x) => x.id === item.productId);
                    if (!p) return null;
                    return (
                      <div key={item.id} className="flex items-center gap-3">
                        <img src={p.image} alt={p.name} className="w-14 h-[4.5rem] object-cover rounded-md border border-border" />
                        <div className="flex flex-col flex-1">
                          <span className="text-sm font-semibold line-clamp-1">{p.name}</span>
                          <span className="text-xs text-muted-foreground mt-0.5">Size: {item.size} | Qty: {item.quantity}</span>
                          <span className="text-xs font-bold text-foreground mt-1">৳{(p.price * item.quantity).toFixed(2)}</span>
                        </div>
                      </div>
                    );
                  })
                )}
                {cartItems.length > 3 && (
                  <div className="text-xs font-semibold text-center text-muted-foreground pt-3 border-t border-border mt-1">
                    + {cartItems.length - 3} more items
                  </div>
                )}
              </div>
              {cartItems.length > 0 && (
                <div className="p-4 border-t border-border bg-secondary/30">
                  <div className="flex justify-between items-center mb-4 text-base font-bold">
                    <span>Subtotal</span>
                    <span>৳{cartItems.reduce((acc, item) => acc + (products.find((x) => x.id === item.productId)?.price || 0) * item.quantity, 0).toFixed(2)}</span>
                  </div>
                  <Link to="/checkout" className="flex items-center justify-center w-full py-3 text-sm font-bold bg-foreground text-background rounded-lg hover:bg-foreground/90 transition-colors uppercase tracking-widest">
                    Checkout Now
                  </Link>
                </div>
              )}
            </div>
          </div>
          
          {isLoggedIn ? (
            <button
              onClick={() => navigate({ to: "/profile" })}
              className="grid h-10 w-10 place-items-center rounded-md hover:bg-muted focus:outline-none"
              aria-label="Profile"
            >
              <User className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setLoginOpen(true)}
              className="grid h-10 w-10 place-items-center rounded-md hover:bg-muted focus:outline-none"
              aria-label="Login"
            >
              <User className="h-5 w-5" />
            </button>
          )}

          <AuthModal open={loginOpen} onOpenChange={setLoginOpen} />

          <Sheet>
            <SheetTrigger asChild>
              <button
                className="md:hidden grid h-10 w-10 place-items-center rounded-md hover:bg-muted"
                aria-label="Menu"
              >
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle className="text-left">
                  <a href="/" className="flex items-center gap-2">
                    <span className="grid h-9 w-9 place-items-center rounded-md bg-primary text-primary-foreground font-display text-lg">PK</span>
                    <span className="font-display text-2xl tracking-wider">PITCHKIT</span>
                  </a>
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-8">
                {navLinks.map((l) => (
                  <SheetTrigger asChild key={l.to}>
                    <Link
                      to={l.to}
                      className="text-lg font-medium text-foreground/80 hover:text-foreground transition-colors"
                      activeProps={{ className: "text-foreground font-semibold" }}
                    >
                      {l.label}
                    </Link>
                  </SheetTrigger>
                ))}
              </nav>

              <div className="mt-8 pt-8 border-t border-border flex flex-col gap-5">
                <SheetTrigger asChild>
                  <Link to="/wishlist" className="flex items-center gap-3 text-lg font-medium text-foreground/80 hover:text-foreground">
                    <div className="relative">
                      <Heart className="h-6 w-6" />
                      {wishlistItems.length > 0 && (
                        <span className="absolute -right-2 -top-2 grid h-5 min-w-5 place-items-center rounded-full bg-accent px-1 text-[10px] font-bold text-accent-foreground">
                          {wishlistItems.length}
                        </span>
                      )}
                    </div>
                    Wishlist
                  </Link>
                </SheetTrigger>
                <SheetTrigger asChild>
                  <Link to="/cart" className="flex items-center gap-3 text-lg font-medium text-foreground/80 hover:text-foreground">
                    <div className="relative">
                      <ShoppingBag className="h-6 w-6" />
                      {count > 0 && (
                        <span className="absolute -right-2 -top-2 grid h-5 min-w-5 place-items-center rounded-full bg-accent px-1 text-[10px] font-bold text-accent-foreground">
                          {count}
                        </span>
                      )}
                    </div>
                    Cart
                  </Link>
                </SheetTrigger>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
