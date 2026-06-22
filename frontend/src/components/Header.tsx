import { Link, useNavigate } from "@tanstack/react-router";
import { ShoppingBag, Search, Menu, Heart, User, LogIn, Mail, UserPen, Key, Package } from "lucide-react";
import { useCartTotals } from "@/lib/cart-store";
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

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/bundles", label: "Bundles" },
  { to: "/about", label: "About Us" },
];

export function Header() {
  const { count } = useCartTotals();
  const wishlistItems = useWishlist((s) => s.items);
  const { isLoggedIn, login, signup } = useAuth();
  const navigate = useNavigate();
  const [loginOpen, setLoginOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [isSignupView, setIsSignupView] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleAuth = () => {
    if (isSignupView) {
      if (!email || !password || !name) {
        toast.error("Please fill in all fields");
        return;
      }
      const res = signup({ email, password, name });
      if (res.success) {
        toast.success("Account created successfully!");
        setLoginOpen(false);
        navigate({ to: "/profile" });
      } else {
        toast.error(res.error || "Failed to sign up");
      }
    } else {
      if (!email || !password) {
        toast.error("Please enter email and password");
        return;
      }
      const res = login(email, password);
      if (res.success) {
        toast.success("Logged in successfully!");
        setLoginOpen(false);
        navigate({ to: "/profile" });
      } else {
        toast.error(res.error || "Failed to log in");
      }
    }
  };

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

          <Link
            to="/wishlist"
            className="relative hidden md:grid h-10 w-10 place-items-center rounded-md hover:bg-muted"
            aria-label="Wishlist"
          >
            <Heart className="h-5 w-5" />
            {wishlistItems.length > 0 && (
              <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-accent px-1 text-[10px] font-bold text-accent-foreground">
                {wishlistItems.length}
              </span>
            )}
          </Link>
          <Link
            to="/cart"
            className="relative hidden md:grid h-10 w-10 place-items-center rounded-md hover:bg-muted"
            aria-label="Cart"
          >
            <ShoppingBag className="h-5 w-5" />
            {count > 0 && (
              <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-accent px-1 text-[10px] font-bold text-accent-foreground">
                {count}
              </span>
            )}
          </Link>
          
          {isLoggedIn ? (
            <button
              onClick={() => navigate({ to: "/profile" })}
              className="grid h-10 w-10 place-items-center rounded-md hover:bg-muted focus:outline-none"
              aria-label="Profile"
            >
              <User className="h-5 w-5" />
            </button>
          ) : (
            <Dialog open={loginOpen} onOpenChange={setLoginOpen}>
              <DialogTrigger asChild>
                <button
                  className="grid h-10 w-10 place-items-center rounded-md hover:bg-muted focus:outline-none"
                  aria-label="Login"
                >
                  <User className="h-5 w-5" />
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>{isSignupView ? "Create an Account" : "Welcome to PITCHKIT"}</DialogTitle>
                  <DialogDescription>
                    {isSignupView ? "Sign up to start shopping and tracking your orders." : "Sign in to your account to continue."}
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  {isSignupView && (
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
                      <input id="name" value={name} onChange={e => setName(e.target.value)} type="text" placeholder="John Doe" className="rounded-md border border-input bg-background px-3 py-2 text-sm focus:border-primary focus:outline-none" />
                    </div>
                  )}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                    <input id="email" value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="name@example.com" className="rounded-md border border-input bg-background px-3 py-2 text-sm focus:border-primary focus:outline-none" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="password" className="text-sm font-medium text-foreground">Password</label>
                    <input id="password" value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="••••••••" className="rounded-md border border-input bg-background px-3 py-2 text-sm focus:border-primary focus:outline-none" />
                    {!isSignupView && <button className="text-xs text-muted-foreground text-left hover:text-foreground underline w-fit">Forgot Password?</button>}
                  </div>
                  <button 
                    onClick={handleAuth}
                    className="mt-2 w-full rounded-md bg-foreground py-2.5 text-sm font-semibold text-background hover:bg-foreground/90 transition-colors"
                  >
                    {isSignupView ? "Sign up" : "Log In"}
                  </button>
                  
                  {!isSignupView && (
                    <>
                      <div className="relative my-4">
                        <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-border"></span></div>
                        <div className="relative flex justify-center text-xs uppercase"><span className="bg-background px-2 text-muted-foreground">Or continue with</span></div>
                      </div>
                      <button
                        onClick={() => {
                          const res = login("user@gmail.com", "", true);
                          if (res.success) {
                            toast.success("Logged in with Google!");
                            setLoginOpen(false);
                            navigate({ to: "/profile" });
                          }
                        }}
                        className="flex w-full items-center justify-center gap-2 rounded-md border border-input bg-background py-2.5 text-sm font-semibold hover:bg-muted transition-colors text-foreground"
                      >
                        <svg role="img" viewBox="0 0 24 24" className="h-4 w-4 fill-current"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/></svg>
                        Google
                      </button>
                    </>
                  )}
                  <p className="text-center text-sm text-muted-foreground mt-2">
                    {isSignupView ? "Already have an account?" : "Don't have an account?"} <button onClick={() => setIsSignupView(!isSignupView)} className="font-semibold text-foreground hover:underline">{isSignupView ? "Log In" : "Sign up"}</button>
                  </p>
                </div>
              </DialogContent>
            </Dialog>
          )}

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
