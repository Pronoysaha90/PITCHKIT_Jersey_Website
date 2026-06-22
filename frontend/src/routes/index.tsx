import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Truck, BadgePercent, Star, Quote, Mail } from "lucide-react";
import banner from "@/assets/banner.png";
import red from "@/assets/jersey-red.jpg";
import blue from "@/assets/jersey-blue.jpg";
import white from "@/assets/jersey-white.jpg";
import yellow from "@/assets/jersey-yellow.jpg";
import { products, bundles, productById } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";
import { useState } from "react";
import { toast } from "sonner";
import { motion } from "framer-motion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PITCHKIT — Football jerseys for every league" },
      { name: "description", content: "Premium home, away and retro football jerseys. Free shipping over ৳12,000. COD & bKash available." },
      { property: "og:title", content: "PITCHKIT — Football jerseys for every league" },
      { property: "og:description", content: "Premium home, away and retro football jerseys. COD & bKash available." },
    ],
  }),
  component: Home,
});

const leagues = [
  { name: "Premier League", image: red },
  { name: "La Liga", image: white },
  { name: "Serie A", image: blue },
  { name: "Bundesliga", image: yellow },
];

const reviews = [
  { name: "Rahim Ali", role: "Verified Buyer", rating: 5, text: "The quality of the Manchester away kit is unreal. Feels exactly like the player issue version. Fast delivery too!" },
  { name: "Sadman Sakib", role: "Verified Buyer", rating: 5, text: "Best place to buy jerseys in BD hands down. The COD option makes it super convenient and the sizing is perfect." },
  { name: "Fahim Rahman", role: "Verified Buyer", rating: 5, text: "Got the Retro Brazil kit. The fabric is premium and breathable. Excellent customer service when I needed to exchange size." },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

function Home() {
  const featured = products.slice(0, 8);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    toast.success("Thanks for subscribing! Check your email for your 10% discount code.");
    setEmail("");
  };

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border bg-background">
        <div className="container-x grid items-center gap-10 py-14 lg:grid-cols-2 lg:py-20">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="order-2 lg:order-1 text-center lg:text-left flex flex-col items-center lg:items-start">
            <span className="chip bg-primary/10 text-primary">25/26 Season Drop</span>
            <h1 className="mt-4 font-display text-5xl leading-[0.95] sm:text-6xl lg:text-7xl">
              Wear the badge.<br />Own the pitch.
            </h1>
            <p className="mt-5 max-w-lg text-base text-muted-foreground mx-auto lg:mx-0">
              Premium home, away and retro kits from every league — built with the same fabrics the pros wear. Free shipping in Bangladesh over ৳12,000.
            </p>
            <div className="mt-7 flex flex-wrap justify-center lg:justify-start gap-3">
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-pitch-deep transition-transform hover:scale-105"
              >
                Shop new arrivals <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/bundles"
                className="inline-flex items-center gap-2 rounded-md border border-foreground px-6 py-3 text-sm font-semibold hover:bg-foreground hover:text-background transition-transform hover:scale-105"
              >
                Build a bundle — save 18%
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap justify-center lg:justify-start items-center gap-6 text-xs text-muted-foreground">
              <div className="flex items-center gap-2"><Truck className="h-4 w-4 text-primary" /> Free shipping over ৳12,000</div>
              <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-primary" /> 30-day returns</div>
              <div className="hidden sm:flex items-center gap-2"><BadgePercent className="h-4 w-4 text-primary" /> COD + bKash</div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} className="relative order-1 lg:order-2">
            <div className="absolute -inset-6 -z-10 rounded-3xl pitch-stripe opacity-30" />
            <img
              src={banner}
              alt="Featured football jersey hanging in stadium tunnel"
              width={1600}
              height={1100}
              className="w-full rounded-2xl object-cover shadow-pop"
            />
            <div className="absolute -bottom-5 -left-5 hidden sm:block rounded-xl bg-background p-4 shadow-card border border-border">
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                <span className="font-bold text-sm">4.8/5</span>
                <span className="text-xs text-muted-foreground">· 3,200+ shipped</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SHOP BY LEAGUE */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className="container-x py-16 border-b border-border">
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="chip bg-accent/10 text-accent">Collections</span>
            <h2 className="mt-2 font-display text-4xl sm:text-5xl">Shop by League</h2>
          </div>
        </div>
        <motion.div variants={staggerContainer} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {leagues.map((league) => (
            <motion.div 
              variants={fadeInUp}
              key={league.name} 
              onClick={() => navigate({ to: "/shop" })}
              className="group relative h-64 overflow-hidden rounded-2xl cursor-pointer"
            >
              <img 
                src={league.image} 
                alt={league.name} 
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="font-display text-2xl mb-1">{league.name}</h3>
                <span className="text-sm font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  Explore <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* FEATURED */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className="container-x py-16">
        <div className="flex items-end justify-between">
          <div>
            <span className="chip bg-primary/10 text-primary">Top sellers</span>
            <h2 className="mt-2 font-display text-4xl sm:text-5xl">This week on the pitch</h2>
          </div>
          <Link to="/shop" className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold hover:text-primary">
            View all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <motion.div variants={staggerContainer} className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p) => (
            <motion.div variants={fadeInUp} key={p.id}>
              <ProductCard p={p} />
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* VALUE PROPOSITION / FEATURES */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="bg-foreground text-background py-20">
        <div className="container-x">
          <motion.div variants={staggerContainer} className="grid sm:grid-cols-3 gap-10 text-center">
            <motion.div variants={fadeInUp} className="flex flex-col items-center">
              <div className="h-16 w-16 rounded-full bg-background/10 flex items-center justify-center mb-6 hover:scale-110 transition-transform">
                <ShieldCheck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Authentic Quality</h3>
              <p className="text-background/70 text-sm leading-relaxed max-w-xs">
                Player-issue grade fabrics with breathable technology. You won't find better quality anywhere else.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} className="flex flex-col items-center">
              <div className="h-16 w-16 rounded-full bg-background/10 flex items-center justify-center mb-6 hover:scale-110 transition-transform">
                <Truck className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">Nationwide Delivery</h3>
              <p className="text-background/70 text-sm leading-relaxed max-w-xs">
                We deliver to your doorstep anywhere in Bangladesh. Cash on Delivery is always available.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} className="flex flex-col items-center">
              <div className="h-16 w-16 rounded-full bg-background/10 flex items-center justify-center mb-6 hover:scale-110 transition-transform">
                <BadgePercent className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Bundle & Save</h3>
              <p className="text-background/70 text-sm leading-relaxed max-w-xs">
                Mix and match your favorite kits to build a bundle and get an automatic 18% discount on your order.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* BUNDLES PROMO */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className="container-x py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="chip bg-accent/10 text-accent">Offers</span>
            <h2 className="mt-2 font-display text-4xl sm:text-5xl">Featured Bundles</h2>
          </div>
          <Link to="/bundles" className="inline-flex items-center gap-1 text-sm font-semibold hover:text-primary">
            View all bundles <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-3">
          {bundles.map((b) => {
            const firstProduct = productById(b.productIds[0]);
            return (
              <motion.div 
                whileHover={{ y: -5 }}
                key={b.id} 
                className="group flex flex-col rounded-2xl border border-border bg-card overflow-hidden cursor-pointer"
                onClick={() => navigate({ to: "/bundles" })}
              >
                <div className="relative h-48 bg-secondary/30 overflow-hidden">
                  {firstProduct && (
                    <img 
                      src={firstProduct.image} 
                      alt={b.name} 
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105" 
                    />
                  )}
                  <div className="absolute top-3 left-3">
                    <span className="chip bg-primary text-primary-foreground shadow-md">-{b.discountPct}% OFF</span>
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="font-display text-xl">{b.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground flex-1">{b.description}</p>
                  <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-primary group-hover:underline">
                    View Bundle <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.section>

      {/* REVIEWS */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="container-x py-20 border-t border-border">
        <div className="text-center mb-12">
          <span className="chip bg-accent/10 text-accent">Testimonials</span>
          <h2 className="mt-2 font-display text-4xl sm:text-5xl">Trusted by Fans</h2>
        </div>
        <motion.div variants={staggerContainer} className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <motion.div variants={fadeInUp} key={i} className="bg-muted rounded-2xl p-8 relative hover:shadow-lg transition-shadow">
              <Quote className="absolute top-6 right-6 h-8 w-8 text-primary/20" />
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <p className="text-foreground/80 mb-6 italic">"{review.text}"</p>
              <div>
                <div className="font-semibold">{review.name}</div>
                <div className="text-xs text-muted-foreground">{review.role}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* NEWSLETTER */}
      <section className="bg-muted py-24">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="container-x max-w-3xl text-center">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-background mb-6 shadow-sm hover:rotate-12 transition-transform">
            <Mail className="h-8 w-8 text-primary" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl mb-4">Join the Club</h2>
          <p className="text-muted-foreground mb-8">
            Subscribe to our newsletter and get 10% off your first order. Be the first to know about new season drops and exclusive retro releases.
          </p>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address" 
              className="flex-1 rounded-md border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none"
              required
            />
            <button 
              type="submit"
              className="rounded-md bg-foreground px-6 py-3 text-sm font-semibold text-background hover:bg-foreground/90 transition-transform active:scale-95"
            >
              Subscribe
            </button>
          </form>
        </motion.div>
      </section>
    </div>
  );
}
