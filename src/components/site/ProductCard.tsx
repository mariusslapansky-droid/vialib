import { Button } from "@/components/ui/button";
import { formatLei, type Product } from "@/data/catalog";

export function ProductCard({ p, className = "" }: { p: Product; className?: string }) {
  const priceLabel = p.price !== undefined ? formatLei(p.price) : undefined;

  return (
    <article
      className={`flex flex-col rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-card ${className}`}
    >
      <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-xl bg-white">
        {p.techAssist && (
          <span className="absolute top-3 left-3 z-10 rounded-full bg-accent px-2.5 py-1 text-xs font-semibold text-accent-foreground">
            TECH ASSIST
          </span>
        )}
        <img
          src={`https://placehold.co/600x600/ffffff/0A192F?text=${encodeURIComponent(p.brand)}`}
          alt={`${p.brand} — ${p.name}`}
          loading="lazy"
          width={600}
          height={600}
          className="h-full w-full object-contain"
        />
      </div>
      <p className="mt-5 text-xs font-semibold tracking-[0.16em] text-muted-foreground uppercase">
        {p.brand}
      </p>
      <h3 className="mt-1.5 text-base leading-snug font-semibold">{p.name}</h3>
      <ul className="mt-3 space-y-1 text-base text-muted-foreground">
        {p.specs.slice(0, 3).map((s) => (
          <li key={s} className="flex gap-2">
            <span aria-hidden="true">•</span>
            <span>{s}</span>
          </li>
        ))}
      </ul>
      <p className="font-display mt-4 text-lg font-semibold text-navy">
        {priceLabel ? (
          <>
            {p.priceFrom ? "Preț de la " : ""}
            {priceLabel}
            {!p.priceFrom && (
              <span className="ml-1 text-sm font-normal text-muted-foreground">(TVA inclus)</span>
            )}
          </>
        ) : (
          "Preț la cerere"
        )}
      </p>
      <Button
        asChild
        className="mt-5 h-11 w-full rounded-full text-base font-semibold"
        variant={priceLabel ? "default" : "outline"}
      >
        <a
          href={
            priceLabel
              ? `/produs/${p.slug}/`
              : `/cere-oferta/?produs=${encodeURIComponent(p.name)}`
          }
        >
          {priceLabel ? "Vezi produsul" : "Cere ofertă"}
        </a>
      </Button>
    </article>
  );
}
