import { createFileRoute, notFound } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SlidersHorizontal } from "lucide-react";

import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { CookieConsent } from "@/components/site/CookieConsent";
import { ProductCard } from "@/components/site/ProductCard";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useAudience, type Audience } from "@/hooks/useAudience";
import { formatLei, getCategory, productsFor, type Product } from "@/data/catalog";

function isAudience(v: string): v is Audience {
  return v === "copii" || v === "adulti";
}

export const Route = createFileRoute("/categorie-produs/$audience/$categorie")({
  loader: ({ params }) => {
    const cat = getCategory(params.categorie);
    if (!cat || !isAudience(params.audience)) throw notFound();
    return { cat, audience: params.audience as Audience };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Categorie indisponibilă — ViaLib" }, { name: "robots", content: "noindex" }] };
    }
    const grup = loaderData.audience === "copii" ? "copii" : "adulți";
    const title = `${loaderData.cat.title} pentru ${grup} — ViaLib`;
    const description = loaderData.cat.description.slice(0, 155);
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: CategoryPage,
});

type Facet = { label: string; values: string[] };

function CategoryPage() {
  const { cat } = Route.useLoaderData();
  const { audience: paramAudience, categorie } = Route.useParams();
  const { setAudience } = useAudience();
  const [audience, setLocalAudience] = useState<Audience>(
    isAudience(paramAudience) ? paramAudience : "adulti",
  );
  const navigate = Route.useNavigate();

  const all = useMemo(() => productsFor(audience, categorie), [audience, categorie]);

  const brands = useMemo(
    () => Array.from(new Set(all.map((p) => p.brand))).sort((a, b) => a.localeCompare(b, "ro")),
    [all],
  );
  const hasTechAssist = all.some((p) => p.techAssist);
  const prices = all.map((p) => p.price).filter((v): v is number => v !== undefined);
  const minPrice = prices.length ? Math.min(...prices) : 0;
  const maxPrice = prices.length ? Math.max(...prices) : 0;

  const facets: Facet[] = useMemo(() => {
    const map = new Map<string, Set<string>>();
    all.forEach((p) =>
      Object.entries(p.attributes).forEach(([k, v]) => {
        if (!map.has(k)) map.set(k, new Set());
        map.get(k)!.add(v);
      }),
    );
    return Array.from(map.entries())
      .filter(([, values]) => values.size > 1)
      .map(([label, values]) => ({
        label,
        values: Array.from(values).sort((a, b) => a.localeCompare(b, "ro", { numeric: true })),
      }));
  }, [all]);

  const [selBrands, setSelBrands] = useState<string[]>([]);
  const [selAttrs, setSelAttrs] = useState<Record<string, string[]>>({});
  const [onlyTech, setOnlyTech] = useState(false);
  const [range, setRange] = useState<[number, number] | null>(null);

  const activeRange = range ?? [minPrice, maxPrice];

  const resetFilters = () => {
    setSelBrands([]);
    setSelAttrs({});
    setOnlyTech(false);
    setRange(null);
  };

  const switchAudience = (next: Audience) => {
    setLocalAudience(next);
    setAudience(next);
    resetFilters();
    navigate({
      to: "/categorie-produs/$audience/$categorie",
      params: { audience: next, categorie },
      replace: true,
    });
  };

  const toggle = (list: string[], value: string) =>
    list.includes(value) ? list.filter((v) => v !== value) : [...list, value];

  const filtered = all.filter((p: Product) => {
    if (selBrands.length && !selBrands.includes(p.brand)) return false;
    if (onlyTech && !p.techAssist) return false;
    if (p.price !== undefined && (p.price < activeRange[0] || p.price > activeRange[1]))
      return false;
    for (const [label, values] of Object.entries(selAttrs)) {
      if (values.length && !values.includes(p.attributes[label] ?? "")) return false;
    }
    return true;
  });

  const FiltersPanel = (
    <div className="space-y-8">
      {brands.length > 1 && (
        <fieldset>
          <legend className="text-sm font-semibold tracking-[0.14em] uppercase">Producător</legend>
          <div className="mt-3 space-y-2.5">
            {brands.map((b) => (
              <label key={b} className="flex items-center gap-3 text-base">
                <Checkbox
                  checked={selBrands.includes(b)}
                  onCheckedChange={() => setSelBrands((s) => toggle(s, b))}
                  aria-label={`Filtrează după producătorul ${b}`}
                />
                {b}
              </label>
            ))}
          </div>
        </fieldset>
      )}

      {maxPrice > minPrice && (
        <fieldset>
          <legend className="text-sm font-semibold tracking-[0.14em] uppercase">Preț</legend>
          <div className="mt-4 px-1">
            <Slider
              value={activeRange}
              min={minPrice}
              max={maxPrice}
              step={50}
              onValueChange={(v) => setRange([v[0], v[1]] as [number, number])}
              aria-label="Interval de preț"
            />
            <p className="mt-3 text-base text-muted-foreground">
              {formatLei(activeRange[0])} – {formatLei(activeRange[1])}
            </p>
          </div>
        </fieldset>
      )}

      {hasTechAssist && (
        <fieldset>
          <legend className="text-sm font-semibold tracking-[0.14em] uppercase">
            Eligibilitate
          </legend>
          <label className="mt-3 flex items-center gap-3 text-base">
            <Checkbox
              checked={onlyTech}
              onCheckedChange={(v) => setOnlyTech(v === true)}
              aria-label="Doar produse eligibile TECH ASSIST"
            />
            Doar produse eligibile TECH ASSIST
          </label>
        </fieldset>
      )}

      {facets.map((f) => (
        <fieldset key={f.label}>
          <legend className="text-sm font-semibold tracking-[0.14em] uppercase">{f.label}</legend>
          <div className="mt-3 space-y-2.5">
            {f.values.map((v) => (
              <label key={v} className="flex items-center gap-3 text-base">
                <Checkbox
                  checked={(selAttrs[f.label] ?? []).includes(v)}
                  onCheckedChange={() =>
                    setSelAttrs((s) => ({ ...s, [f.label]: toggle(s[f.label] ?? [], v) }))
                  }
                  aria-label={`${f.label}: ${v}`}
                />
                {v}
              </label>
            ))}
          </div>
        </fieldset>
      ))}

      <Button variant="outline" className="w-full rounded-full text-base" onClick={resetFilters}>
        Șterge filtrele
      </Button>
    </div>
  );

  const audienceLabel = audience === "copii" ? "Copii" : "Adulți";

  return (
    <div className="min-h-screen bg-background">
      <a href="#main-content" className="skip-link">
        Sari la conținut
      </a>

      <SiteHeader audience={audience} onAudienceChange={switchAudience} />

      <main id="main-content">
        <nav aria-label="Firimituri de navigare" className="border-b border-border bg-surface">
          <ol className="mx-auto flex max-w-7xl flex-wrap items-center gap-2 px-4 py-3 text-sm text-muted-foreground">
            <li>
              <a href="/" className="hover:text-foreground">
                Acasă
              </a>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <a href={`/categorie-produs/${audience}/`} className="hover:text-foreground">
                {audienceLabel}
              </a>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="font-medium text-foreground">
              {cat.title}
            </li>
          </ol>
        </nav>

        <header className="mx-auto max-w-7xl px-4 pt-10 pb-6">
          <h1 className="text-3xl font-semibold md:text-4xl">
            {cat.title} — {audienceLabel}
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">
            {cat.description}
          </p>
        </header>

        <div className="mx-auto grid max-w-7xl gap-10 px-4 pb-20 lg:grid-cols-[260px_1fr]">
          <aside aria-label="Filtre produse" className="hidden lg:block">
            <div className="sticky top-32">{FiltersPanel}</div>
          </aside>

          <div>
            <div className="mb-6 flex items-center justify-between gap-4">
              <p className="text-base text-muted-foreground" aria-live="polite">
                {filtered.length}{" "}
                {filtered.length === 1 ? "produs afișat" : "produse afișate"}
              </p>
              <Sheet>
                <SheetTrigger className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-base font-semibold lg:hidden">
                  <SlidersHorizontal className="h-4 w-4" aria-hidden="true" />
                  Filtrează
                </SheetTrigger>
                <SheetContent side="left" className="w-[320px] overflow-y-auto">
                  <div className="px-1 py-8">{FiltersPanel}</div>
                </SheetContent>
              </Sheet>
            </div>

            {filtered.length ? (
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {filtered.map((p) => (
                  <ProductCard key={p.slug} p={p} />
                ))}
              </div>
            ) : (
              <div className="rounded-2xl border border-border bg-surface p-10 text-center">
                <p className="text-base font-semibold">Niciun produs pentru filtrele alese.</p>
                <p className="mt-2 text-base text-muted-foreground">
                  Încearcă să elimini câteva filtre sau cere-ne o recomandare personalizată.
                </p>
                <Button className="mt-6 rounded-full text-base" onClick={resetFilters}>
                  Șterge filtrele
                </Button>
              </div>
            )}
          </div>
        </div>
      </main>

      <SiteFooter />
      <CookieConsent />
    </div>
  );
}
