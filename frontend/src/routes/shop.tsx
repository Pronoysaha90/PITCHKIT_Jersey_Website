import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState, useEffect } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { products, type League, type Kind } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop all jerseys — PITCHKIT" },
      { name: "description", content: "Browse 20+ official-style football jerseys. Filter by league, type, color, price and size." },
      { property: "og:title", content: "Shop all jerseys — PITCHKIT" },
      { property: "og:description", content: "Browse 20+ official-style football jerseys with smart filters." },
    ],
  }),
  component: Shop,
});

const LEAGUES: League[] = ["Premier League", "La Liga", "Serie A", "Bundesliga", "Ligue 1", "International"];
const KINDS: Kind[] = ["Home", "Away", "Third", "Retro", "Training"];
const COLORS = ["red", "green", "blue", "white", "black", "yellow"];

function Shop() {
  const [q, setQ] = useState("");
  const [league, setLeague] = useState<League[]>([]);
  const [kind, setKind] = useState<Kind[]>([]);
  const [color, setColor] = useState<string[]>([]);
  const [maxPrice, setMaxPrice] = useState(1200);
  const [sort, setSort] = useState<"featured" | "price-asc" | "price-desc" | "rating">("featured");
  const [openFilters, setOpenFilters] = useState(false);
  const [page, setPage] = useState(1);
  const ITEMS_PER_PAGE = 9;

  const filtered = useMemo(() => {
    let list = products.filter((p) => {
      if (q && !`${p.name} ${p.club}`.toLowerCase().includes(q.toLowerCase())) return false;
      if (league.length && !league.includes(p.league)) return false;
      if (kind.length && !kind.includes(p.kind)) return false;
      if (color.length && !color.includes(p.color)) return false;
      if (p.price > maxPrice) return false;
      return true;
    });
    if (sort === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
    if (sort === "rating") list = [...list].sort((a, b) => b.rating - a.rating);
    return list;
  }, [q, league, kind, color, maxPrice, sort]);

  useEffect(() => {
    setPage(1);
  }, [q, league, kind, color, maxPrice, sort]);

  const toggle = <T,>(arr: T[], set: (v: T[]) => void, v: T) =>
    set(arr.includes(v) ? arr.filter((x) => x !== v) : [...arr, v]);

  const reset = () => {
    setQ(""); setLeague([]); setKind([]); setColor([]); setMaxPrice(1200); setSort("featured");
  };

  const FilterPanel = (
    <aside className="space-y-7 text-sm">
      <FilterBlock label="League">
        {LEAGUES.map((l) => (
          <Check key={l} checked={league.includes(l)} onChange={() => toggle(league, setLeague, l)} label={l} />
        ))}
      </FilterBlock>
      <FilterBlock label="Kit type">
        {KINDS.map((k) => (
          <Check key={k} checked={kind.includes(k)} onChange={() => toggle(kind, setKind, k)} label={k} />
        ))}
      </FilterBlock>
      <FilterBlock label="Color">
        <div className="flex flex-wrap gap-2">
          {COLORS.map((c) => (
            <button
              key={c}
              onClick={() => toggle(color, setColor, c)}
              aria-label={c}
              className={`h-8 w-8 rounded-full border-2 transition ${color.includes(c) ? "border-primary scale-110" : "border-border"}`}
              style={{ backgroundColor: c === "white" ? "#f4f4f5" : c }}
            />
          ))}
        </div>
      </FilterBlock>
      <FilterBlock label={`Max price: ৳${maxPrice}`}>
        <input
          type="range"
          min={50}
          max={1200}
          value={maxPrice}
          onChange={(e) => setMaxPrice(+e.target.value)}
          className="w-full accent-primary"
        />
      </FilterBlock>
      <button onClick={reset} className="text-xs font-medium text-primary hover:underline">
        Reset filters
      </button>
    </aside>
  );

  return (
    <div className="container-x py-10">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="font-display text-4xl sm:text-5xl">All jerseys</h1>
          <p className="text-sm text-muted-foreground">{filtered.length} of {products.length} products</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search teams, kits..."
              className="w-64 rounded-md border border-input bg-background pl-9 pr-3 py-2 text-sm outline-none focus:border-primary"
            />
          </div>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as typeof sort)}
            className="rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary"
          >
            <option value="featured">Featured</option>
            <option value="price-asc">Price: low to high</option>
            <option value="price-desc">Price: high to low</option>
            <option value="rating">Top rated</option>
          </select>
          <button
            onClick={() => setOpenFilters(true)}
            className="md:hidden inline-flex items-center gap-2 rounded-md border border-input px-3 py-2 text-sm"
          >
            <SlidersHorizontal className="h-4 w-4" /> Filters
          </button>
        </div>
      </div>

      <div className="mt-8 grid gap-8 md:grid-cols-[240px_1fr]">
        <div className="hidden md:block">{FilterPanel}</div>
        <div>
          {filtered.length === 0 ? (
            <div className="rounded-lg border border-border p-10 text-center text-muted-foreground">
              No jerseys match your filters.
            </div>
          ) : (
            <>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE).map((p) => <ProductCard key={p.id} p={p} />)}
              </div>
              
              {Math.ceil(filtered.length / ITEMS_PER_PAGE) > 1 && (
                <div className="mt-12 flex justify-center items-center gap-2">
                  <button 
                    onClick={() => { setPage(p => Math.max(1, p - 1)); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    disabled={page === 1}
                    className="px-3 py-2 rounded-md border border-input text-sm font-medium hover:bg-muted disabled:opacity-50"
                  >
                    Previous
                  </button>
                  {Array.from({ length: Math.ceil(filtered.length / ITEMS_PER_PAGE) }).map((_, i) => (
                    <button
                      key={i}
                      onClick={() => { setPage(i + 1); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                      className={`h-9 w-9 rounded-md text-sm font-medium transition-colors ${page === i + 1 ? 'bg-primary text-primary-foreground' : 'border border-input hover:bg-muted'}`}
                    >
                      {i + 1}
                    </button>
                  ))}
                  <button 
                    onClick={() => { setPage(p => Math.min(Math.ceil(filtered.length / ITEMS_PER_PAGE), p + 1)); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    disabled={page === Math.ceil(filtered.length / ITEMS_PER_PAGE)}
                    className="px-3 py-2 rounded-md border border-input text-sm font-medium hover:bg-muted disabled:opacity-50"
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {openFilters && (
        <div className="fixed inset-0 z-50 bg-foreground/40" onClick={() => setOpenFilters(false)}>
          <div
            className="absolute right-0 top-0 h-full w-[88%] max-w-sm bg-background p-6 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <h2 className="font-display text-2xl">Filters</h2>
              <button onClick={() => setOpenFilters(false)} className="grid h-9 w-9 place-items-center rounded-md hover:bg-muted">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="mt-6">{FilterPanel}</div>
          </div>
        </div>
      )}
    </div>
  );
}

function FilterBlock({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">{label}</h3>
      <div className="space-y-2">{children}</div>
    </div>
  );
}

function Check({ checked, onChange, label }: { checked: boolean; onChange: () => void; label: string }) {
  return (
    <label className="flex cursor-pointer items-center gap-2 text-sm">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="h-4 w-4 accent-primary"
      />
      <span>{label}</span>
    </label>
  );
}
