import { Star } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface Review {
  id: string;
  author: string;
  rating: number;
  body: string;
  date: string;
}

const seed: Review[] = [
  { id: "r1", author: "Tanvir A.", rating: 5, body: "Stitching is sharp and the colors match the official kit. Fast COD delivery in Dhaka.", date: "2 weeks ago" },
  { id: "r2", author: "Sadia R.", rating: 4, body: "Great fit. Slightly snug on shoulders for a Large — went up a size and it's perfect.", date: "1 month ago" },
  { id: "r3", author: "Rafi K.", rating: 5, body: "Crest looks legit and the fabric breathes well during 5-a-side. Worth every taka.", date: "3 weeks ago" },
];

export function Reviews({ rating, count }: { rating: number; count: number }) {
  const [reviews, setReviews] = useState<Review[]>(seed);
  const [name, setName] = useState("");
  const [body, setBody] = useState("");
  const [stars, setStars] = useState(5);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !body.trim()) {
      toast.error("Please add your name and review");
      return;
    }
    setReviews((r) => [
      { id: crypto.randomUUID(), author: name, rating: stars, body, date: "just now" },
      ...r,
    ]);
    setName("");
    setBody("");
    setStars(5);
    toast.success("Thanks — review submitted");
  };

  return (
    <section className="mt-16">
      <div className="flex items-end justify-between border-b border-border pb-3">
        <h2 className="font-display text-3xl">Customer reviews</h2>
        <div className="flex items-center gap-2 text-sm">
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${i < Math.round(rating) ? "fill-amber-500 text-amber-500" : "text-muted-foreground"}`}
              />
            ))}
          </div>
          <span className="font-medium">{rating.toFixed(1)}</span>
          <span className="text-muted-foreground">({count}+ reviews)</span>
        </div>
      </div>

      <div className="mt-6 grid gap-8 md:grid-cols-[1fr_360px]">
        <ul className="space-y-5">
          {reviews.map((r) => (
            <li key={r.id} className="rounded-lg border border-border p-4">
              <div className="flex items-center justify-between">
                <span className="font-semibold">{r.author}</span>
                <span className="text-xs text-muted-foreground">{r.date}</span>
              </div>
              <div className="mt-1 flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-3.5 w-3.5 ${i < r.rating ? "fill-amber-500 text-amber-500" : "text-muted-foreground"}`}
                  />
                ))}
              </div>
              <p className="mt-2 text-sm text-foreground/80">{r.body}</p>
            </li>
          ))}
        </ul>

        <form onSubmit={submit} className="h-fit rounded-lg border border-border p-4">
          <h3 className="font-display text-xl">Leave a review</h3>
          <div className="mt-3 flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setStars(i + 1)}
                aria-label={`${i + 1} stars`}
              >
                <Star
                  className={`h-5 w-5 ${i < stars ? "fill-amber-500 text-amber-500" : "text-muted-foreground"}`}
                />
              </button>
            ))}
          </div>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="mt-3 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary"
          />
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="What did you think?"
            rows={4}
            className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary"
          />
          <button className="mt-3 w-full rounded-md bg-foreground py-2 text-sm font-semibold text-background hover:opacity-90">
            Submit review
          </button>
        </form>
      </div>
    </section>
  );
}
