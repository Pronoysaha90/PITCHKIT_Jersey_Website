import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck, Truck, Headphones, ThumbsUp } from "lucide-react";
import heroImage from "@/assets/hero-jersey.jpg";
import greenJersey from "@/assets/jersey-green.jpg";
import blueJersey from "@/assets/jersey-blue.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — PITCHKIT" },
      { name: "description", content: "Learn more about PITCHKIT, your trusted source for premium football jerseys in Bangladesh." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border bg-foreground text-background">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Football jerseys stadium"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground to-transparent" />
        </div>
        <div className="container-x relative py-20 lg:py-32 text-center">
          <span className="chip bg-background/20 text-background border border-background/20 mb-4">Who We Are</span>
          <h1 className="font-display text-5xl sm:text-7xl mb-6">More than just a jersey.</h1>
          <p className="text-background/80 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            At PITCHKIT, we believe that wearing your team's colors is a badge of honor. 
            We are dedicated to bringing the highest quality football kits to passionate fans across Bangladesh.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="container-x py-20 grid gap-12 lg:grid-cols-2 items-center">
        <div>
          <h2 className="font-display text-4xl mb-6">Our Story</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              It all started with a simple frustration: finding authentic-feeling, premium quality football jerseys locally was too difficult. We were tired of settling for low-quality replicas that faded after a few washes.
            </p>
            <p>
              In 2023, PITCHKIT was born. Our mission was clear — to bridge the gap between global football culture and local fans. We partnered with top-tier manufacturers to source fabrics that breathe, stretch, and feel exactly like what the pros wear on the pitch.
            </p>
            <p>
              Today, PITCHKIT is trusted by thousands of fans. Whether you're playing 5-a-side on a Friday night or cheering from your living room, we make sure you wear the badge with pride.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-2xl bg-muted aspect-square p-6 flex flex-col justify-end relative overflow-hidden group">
             <img src={greenJersey} alt="Jerseys Delivered" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
             <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
             <div className="relative z-10">
               <div className="font-display text-5xl text-foreground drop-shadow-md">10k+</div>
               <div className="text-sm font-semibold text-foreground/80 drop-shadow-md">Jerseys Delivered</div>
             </div>
          </div>
          <div className="rounded-2xl bg-muted aspect-square p-6 flex flex-col justify-end mt-8 relative overflow-hidden group">
             <img src={blueJersey} alt="Clubs and Nations" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
             <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
             <div className="relative z-10">
               <div className="font-display text-5xl text-foreground drop-shadow-md">50+</div>
               <div className="text-sm font-semibold text-foreground/80 drop-shadow-md">Clubs & Nations</div>
             </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="border-t border-border bg-foreground py-20 text-background">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-4xl sm:text-5xl mb-4">Why Choose PITCHKIT?</h2>
            <p className="text-background/70">
              We don't just sell shirts; we deliver an experience. Here is what makes us the number one choice for football fans.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-background/5 rounded-2xl p-6 border border-background/10">
              <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                <ThumbsUp className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">Premium Quality</h3>
              <p className="text-sm text-background/70 leading-relaxed">
                Breathable, sweat-wicking fabrics that match player-issue quality. No cheap prints.
              </p>
            </div>
            
            <div className="bg-background/5 rounded-2xl p-6 border border-background/10">
              <div className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center mb-6">
                <Truck className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-bold mb-2">Fast Nationwide Delivery</h3>
              <p className="text-sm text-background/70 leading-relaxed">
                We deliver to every corner of Bangladesh. Cash on Delivery and bKash payments accepted.
              </p>
            </div>

            <div className="bg-background/5 rounded-2xl p-6 border border-background/10">
              <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                <ShieldCheck className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">Easy Returns</h3>
              <p className="text-sm text-background/70 leading-relaxed">
                Size didn't fit? Found a defect? We offer a hassle-free 7-day exchange policy.
              </p>
            </div>

            <div className="bg-background/5 rounded-2xl p-6 border border-background/10">
              <div className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center mb-6">
                <Headphones className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-bold mb-2">24/7 Fan Support</h3>
              <p className="text-sm text-background/70 leading-relaxed">
                Our support team are football fans just like you, ready to help with your orders anytime.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
