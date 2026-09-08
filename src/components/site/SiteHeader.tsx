import { useState } from "react";
import { Menu, Search, User, Heart, ShoppingBag, Sparkles, ChevronRight } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import type { Audience } from "@/hooks/useAudience";

export type { Audience };

export const catalog: Record<Audience, { name: string; href: string }[]> = {
  adulti: [
    { name: "Mobilitate (scaune rulante)", href: "/categorie-produs/adulti/mobilitate/" },
    { name: "Verticalizatoare & Robotică", href: "/categorie-produs/adulti/verticalizatoare-robotica/" },
    { name: "Acces în locuință & transfer", href: "/categorie-produs/adulti/acces-transfer/" },
    { name: "Baie & Igienă", href: "/categorie-produs/adulti/baie-igiena/" },
    { name: "Paturi & Odihnă", href: "/categorie-produs/adulti/paturi-odihna/" },
    { name: "Orteze, proteze & suporturi", href: "/categorie-produs/adulti/orteze-proteze/" },
    { name: "Viață zilnică & servirea mesei", href: "/categorie-produs/adulti/viata-zilnica/" },
    { name: "Auz & comunicare", href: "/categorie-produs/adulti/auz-comunicare/" },
    { name: "IT Asistiv & Vedere Redusă", href: "/categorie-produs/adulti/it-asistiv/" },
    { name: "Îmbrăcăminte Adaptată", href: "/categorie-produs/adulti/imbracaminte-adaptata/" },
    { name: "Biciclete și triciclete adaptate", href: "/categorie-produs/adulti/biciclete-triciclete/" },
  ],
  copii: [
    { name: "Mobilitate (scaune rulante)", href: "/categorie-produs/copii/mobilitate/" },
    { name: "Verticalizatoare & Robotică", href: "/categorie-produs/copii/verticalizatoare-robotica/" },
    { name: "Acces în locuință & transfer", href: "/categorie-produs/copii/acces-transfer/" },
    { name: "Baie & Igienă", href: "/categorie-produs/copii/baie-igiena/" },
    { name: "Paturi & Odihnă", href: "/categorie-produs/copii/paturi-odihna/" },
    { name: "Orteze, proteze & suporturi", href: "/categorie-produs/copii/orteze-proteze/" },
    { name: "Viață zilnică & servirea mesei", href: "/categorie-produs/copii/viata-zilnica/" },
    { name: "Auz & comunicare", href: "/categorie-produs/copii/auz-comunicare/" },
    { name: "IT Asistiv & Vedere Redusă", href: "/categorie-produs/copii/it-asistiv/" },
    { name: "Îmbrăcăminte Adaptată", href: "/categorie-produs/copii/imbracaminte-adaptata/" },
    { name: "Biciclete și triciclete adaptate", href: "/categorie-produs/copii/biciclete-triciclete/" },
  ],
};

export function SiteHeader({
  audience,
  onAudienceChange,
}: {
  audience: Audience;
  onAudienceChange: (a: Audience) => void;
}) {
  const [open, setOpen] = useState(false);
  const categories = catalog[audience] ?? catalog.adulti;

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-navy text-navy-foreground">
        <div className="mx-auto flex max-w-7xl items-center justify-center px-4 py-2">
          <div
            role="tablist"
            aria-label="Selectează categoria de vârstă"
            className="flex gap-1 rounded-full bg-white/10 p-1"
          >
            {(["copii", "adulti"] as const).map((key) => (
              <button
                key={key}
                role="tab"
                aria-selected={audience === key}
                onClick={() => onAudienceChange(key)}
                className={`rounded-full px-7 py-1.5 text-xs font-semibold tracking-[0.18em] uppercase transition-colors ${
                  audience === key
                    ? "bg-brand text-primary-foreground"
                    : "text-navy-foreground/70 hover:text-navy-foreground"
                }`}
              >
                {key === "copii" ? "Copii" : "Adulți"}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="border-b border-border bg-background">
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-4">
          <div className="flex items-center gap-4">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger
                aria-label="Deschide meniul de produse"
                className="flex items-center gap-2 rounded-md border border-border px-3 py-2 text-base font-semibold transition-colors hover:bg-muted"
              >
                <Menu className="h-4 w-4" aria-hidden="true" />
                <span className="hidden sm:inline">Produse</span>
              </SheetTrigger>
              <SheetContent side="left" className="w-[340px] overflow-y-auto p-0">
                <div className="px-6 pt-8 pb-4">
                  <p className="text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                    Catalog {audience === "copii" ? "Copii" : "Adulți"}
                  </p>
                </div>
                <nav aria-label="Catalog de produse" className="flex flex-col pb-8">
                  {categories.map((c) => (
                    <a
                      key={c.name}
                      href={c.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between px-6 py-3.5 text-base transition-colors hover:bg-muted"
                    >
                      {c.name}
                      <ChevronRight className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                    </a>
                  ))}
                  <a
                    href="/eticheta-produs/tech-assist/"
                    onClick={() => setOpen(false)}
                    className="mx-4 mt-4 flex items-center gap-3 rounded-lg bg-accent px-4 py-4 text-base font-semibold text-accent-foreground"
                  >
                    <Sparkles className="h-5 w-5 shrink-0" aria-hidden="true" />
                    Programul TECH ASSIST — Produse Eligibile
                  </a>
                  <a
                    href="/magazin/"
                    onClick={() => setOpen(false)}
                    className="mx-4 mt-3 rounded-lg border border-border px-4 py-3.5 text-center text-base font-semibold transition-colors hover:bg-muted"
                  >
                    Vezi toate categoriile
                  </a>
                </nav>
              </SheetContent>
            </Sheet>

            <a href="/" className="flex items-center gap-2" aria-label="ViaLib — prima pagină">
              <span className="font-display text-lg font-bold tracking-tight">
                Via<span className="text-brand">Lib</span>
              </span>
            </a>
          </div>

          <form
            role="search"
            action="/cauta"
            className="relative mx-auto hidden w-full max-w-xl md:block"
          >
            <Search
              className="pointer-events-none absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden="true"
            />
            <Input
              type="search"
              name="s"
              aria-label="Caută în magazin"
              placeholder="Caută produse, afecțiuni sau branduri..."
              className="h-12 rounded-full border-border bg-surface pl-11 text-base"
            />
          </form>

          <div className="ml-auto flex items-center gap-1">
            {[
              { icon: User, label: "Contul meu", href: "/contul-meu" },
              { icon: Heart, label: "Lista de favorite", href: "/wishlist" },
              { icon: ShoppingBag, label: "Coș de cumpărături", href: "/cos" },
            ].map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="rounded-full p-2.5 transition-colors hover:bg-muted"
              >
                <Icon className="h-5 w-5" strokeWidth={1.6} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 pb-4 md:hidden">
          <form role="search" action="/cauta" className="relative">
            <Search
              className="pointer-events-none absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden="true"
            />
            <Input
              type="search"
              name="s"
              aria-label="Caută în magazin"
              placeholder="Caută produse, afecțiuni sau branduri..."
              className="h-11 rounded-full border-border bg-surface pl-11 text-base"
            />
          </form>
        </div>
      </div>
    </header>
  );
}
