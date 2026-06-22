import { useState } from "react";
import { toast } from "sonner";
import { Link } from "@tanstack/react-router";

export function Footer() {
  const [email, setEmail] = useState("");
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      toast.error("Please enter a valid email");
      return;
    }
    toast.success("You're on the list — welcome to PITCHKIT.");
    setEmail("");
  };
  return (
    <footer className="mt-24 border-t border-border bg-secondary/40">
      <div className="container-x py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link 
            to="/" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 hover:opacity-90 transition-opacity"
          >
            <span className="grid h-9 w-9 place-items-center rounded-md bg-primary text-primary-foreground font-display text-lg">PK</span>
            <span className="font-display text-2xl tracking-wider">PITCHKIT</span>
          </Link>
          <p className="mt-3 max-w-md text-sm text-muted-foreground">
            Official-style football jerseys from every league. Real fabrics, sharp prints, fast delivery across Bangladesh.
          </p>
          <form onSubmit={onSubmit} className="mt-6 flex max-w-md items-stretch gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Get 10% off — drop your email"
              className="flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary"
            />
            <button className="rounded-md bg-foreground px-4 text-sm font-semibold text-background hover:opacity-90">
              Join
            </button>
          </form>
        </div>
        <div>
          <h4 className="font-display text-lg">Shop</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>New arrivals</li>
            <li>Premier League</li>
            <li>La Liga</li>
            <li>International</li>
            <li>Bundles</li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-lg">Support</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>Shipping & returns</li>
            <li>Size guide</li>
            <li>Cash on delivery</li>
            <li>bKash payment</li>
            <li>Contact us</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-x py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} PITCHKIT. All rights reserved.</span>
          <span className="flex items-center gap-3">
            <span className="chip bg-foreground text-background">COD</span>
            <span className="chip bg-pink-600 text-white">bKash</span>
            <span className="chip bg-secondary text-foreground">Free shipping over ৳12,000</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
