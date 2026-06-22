import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Truck, BadgePercent, Star, Quote, Mail, ChevronRight, ChevronLeft } from "lucide-react";
import banner from "@/assets/banner.png";
import red from "@/assets/jersey-red.jpg";
import blue from "@/assets/jersey-blue.jpg";
import white from "@/assets/jersey-white.jpg";
import yellow from "@/assets/jersey-yellow.jpg";
import { products, bundles, productById } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";

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

const heroImages = [
  { src: banner, alt: "Featured football jersey in stadium" },
  { src: red, alt: "Premium Red Home Kit" },
  { src: blue, alt: "Classic Blue Away Kit" },
  { src: white, alt: "Clean White Third Kit" },
];

function Home() {
  const featured = products.slice(0, 8);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    toast.success("Thanks for subscribing! Check your email for your 10% discount code.");
    setEmail("");
  };

  const nextSlide = () => setCurrentHeroIndex((prev) => (prev + 1) % heroImages.length);
  const prevSlide = () => setCurrentHeroIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border bg-background/50">
        {/* Subtle animated background gradients */}
        <div className="absolute top-0 -left-1/4 w-[150%] h-[150%] -z-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
        <motion.div 
          animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }} 
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10" 
        />
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }} 
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-40 left-20 w-80 h-80 bg-accent/20 rounded-full blur-3xl -z-10" 
        />

        <div className="container-x grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="order-2 lg:order-1 text-center lg:text-left flex flex-col items-center lg:items-start">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ delay: 0.2 }}
              className="chip bg-primary/10 text-primary border border-primary/20 backdrop-blur-sm"
            >
              25/26 Season Drop
            </motion.div>
            <h1 className="mt-6 font-display text-5xl leading-[1.05] sm:text-6xl lg:text-7xl xl:text-[5rem] tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-foreground to-foreground/70">
              Wear the badge.<br />
              <span className="text-primary italic pr-2">Own the pitch.</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg text-muted-foreground mx-auto lg:mx-0 leading-relaxed">
              Premium home, away and retro kits from every league — built with the same fabrics the pros wear. Free shipping in Bangladesh over ৳12,000.
            </p>
            <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
              <Link
                to="/shop"
                className="group relative inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-bold text-primary-foreground overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(var(--primary),0.4)]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Shop new arrivals <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary via-pitch-deep to-primary opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </Link>
              <Link
                to="/bundles"
                className="inline-flex items-center gap-2 rounded-full border-2 border-foreground/10 bg-background/50 backdrop-blur-sm px-8 py-4 text-sm font-bold hover:border-foreground/30 hover:bg-foreground/5 transition-all hover:scale-105"
              >
                Build a bundle — save 18%
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap justify-center lg:justify-start items-center gap-6 text-sm font-medium text-muted-foreground">
              <div className="flex items-center gap-2 bg-background/50 px-3 py-1.5 rounded-full border border-border backdrop-blur-md shadow-sm"><Truck className="h-4 w-4 text-primary" /> Free shipping</div>
              <div className="flex items-center gap-2 bg-background/50 px-3 py-1.5 rounded-full border border-border backdrop-blur-md shadow-sm"><ShieldCheck className="h-4 w-4 text-primary" /> 30-day returns</div>
              <div className="hidden sm:flex items-center gap-2 bg-background/50 px-3 py-1.5 rounded-full border border-border backdrop-blur-md shadow-sm"><BadgePercent className="h-4 w-4 text-primary" /> COD available</div>
            </div>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="relative order-1 lg:order-2 perspective-1000">
            <div className="relative aspect-[4/3] sm:aspect-[4/5] lg:aspect-[3/4] w-full max-w-md mx-auto xl:max-w-lg">
              {/* Slider Controls */}
              <div className="absolute top-1/2 -translate-y-1/2 -left-4 z-20">
                <button onClick={prevSlide} className="p-2 rounded-full bg-background/80 backdrop-blur border border-border text-foreground hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all shadow-lg">
                  <ChevronLeft className="h-5 w-5" />
                </button>
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 -right-4 z-20">
                <button onClick={nextSlide} className="p-2 rounded-full bg-background/80 backdrop-blur border border-border text-foreground hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all shadow-lg">
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>

              {/* Slider Indicators */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                {heroImages.map((_, idx) => (
                  <button 
                    key={idx} 
                    onClick={() => setCurrentHeroIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${idx === currentHeroIndex ? 'w-6 bg-primary' : 'w-2 bg-white/50 hover:bg-white/80'}`}
                  />
                ))}
              </div>

              {/* Decorative Frame */}
              <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-border/50 to-transparent border border-border/50 backdrop-blur-sm transform rotate-3" />
              <div className="absolute -inset-4 -z-20 rounded-[2.5rem] bg-accent/5 transform -rotate-2" />
              
              <div className="w-full h-full rounded-[2rem] overflow-hidden border border-border/50 shadow-2xl relative bg-card">
                <AnimatePresence mode="popLayout">
                  <motion.img
                    key={currentHeroIndex}
                    src={heroImages[currentHeroIndex].src}
                    alt={heroImages[currentHeroIndex].alt}
                    initial={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                    transition={{ duration: 0.7, ease: "anticipate" }}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </AnimatePresence>
                
                {/* Image Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-4 rounded-2xl bg-background/90 backdrop-blur-xl p-4 shadow-xl border border-border z-20"
              >
                <div className="flex -space-x-3">
                  <div className="h-10 w-10 rounded-full bg-blue-100 border-2 border-background flex items-center justify-center overflow-hidden"><img src={blue} className="h-full w-full object-cover" /></div>
                  <div className="h-10 w-10 rounded-full bg-red-100 border-2 border-background flex items-center justify-center overflow-hidden"><img src={red} className="h-full w-full object-cover" /></div>
                  <div className="h-10 w-10 rounded-full bg-yellow-100 border-2 border-background flex items-center justify-center overflow-hidden"><img src={yellow} className="h-full w-full object-cover" /></div>
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
                    <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
                    <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
                    <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
                    <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
                    <span className="font-bold text-sm ml-1">4.9/5</span>
                  </div>
                  <div className="text-xs text-muted-foreground font-medium">Over 3,200+ jerseys shipped</div>
                </div>
              </motion.div>
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
