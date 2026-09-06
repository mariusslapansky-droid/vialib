import { useState } from "react";
import {
  Menu,
  Search,
  User,
  Heart,
  ShoppingBag,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";

export type Audience = "copii" | "adulti";

const categories = [
  "Mobilitate & Scaune Rulante",
  "Verticalizatoare & Robotică",
  "Baie și Igienă",
  "Paturi & Odihnă",
  "Îmbrăcăminte & Încălțăminte Adaptată",
  "IT Asistiv & Vedere Redusă",
  "Recuperare & Kinetoterapie",
  "Adaptări Auto",
  "Comunicare Augmentativă",
  "Accesorii & Consumabile",
];

export function SiteHeader({
  audience,
  onAudienceChange,
}: {
  audience: Audience;
  onAudienceChange: (a: Audience) => void;
}) {
  const [open, setOpen] = useState(false);

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
              <SheetTrigger className="flex items-center gap-2 rounded-md border border-border px-3 py-2 text-sm font-semibold transition-colors hover:bg-muted">
                <Menu className="h-4 w-4" />
                <span className="hidden sm:inline">Produse</span>
              </SheetTrigger>
              <SheetContent side="left" className="w-[340px] p-0">
                <div className="px-6 pt-8 pb-4">
                  <p className="text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                    Catalog
                  </p>
                </div>
                <nav className="flex flex-col pb-8">
                  {categories.map((c) => (
                    <a
                      key={c}
                      href="#categorii"
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between px-6 py-3.5 text-[15px] transition-colors hover:bg-muted"
                    >
                      {c}
                      <ChevronRight className="h-4 w-4 text-muted-foreground" />
                    </a>
                  ))}
                  <a
                    href="#tech-assist"
                    onClick={() => setOpen(false)}
                    className="mx-4 mt-4 flex items-center gap-3 rounded-lg bg-accent px-4 py-4 text-[15px] font-semibold text-accent-foreground"
                  >
                    <Sparkles className="h-5 w-5 shrink-0" />
                    Programul TECH ASSIST — Produse Eligibile
                  </a>
                </nav>
              </SheetContent>
            </Sheet>

            <a href="/" className="flex items-center gap-2">
              <span className="font-display text-lg font-bold tracking-tight">
                Via<span className="text-brand">Lib</span>
              </span>
            </a>
          </div>

          <div className="relative mx-auto hidden w-full max-w-xl md:block">
            <Search className="pointer-events-none absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              aria-label="Caută în magazin"
              placeholder="Caută produse, afecțiuni sau branduri..."
              className="h-12 rounded-full border-border bg-surface pl-11 text-[15px]"
            />
          </div>

          <div className="ml-auto flex items-center gap-1">
            {[
              { icon: User, label: "Cont" },
              { icon: Heart, label: "Wishlist" },
              { icon: ShoppingBag, label: "Coș de cumpărături" },
            ].map(({ icon: Icon, label }) => (
              <button
                key={label}
                aria-label={label}
                className="rounded-full p-2.5 transition-colors hover:bg-muted"
              >
                <Icon className="h-5 w-5" strokeWidth={1.6} />
              </button>
            ))}
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 pb-4 md:hidden">
          <div className="relative">
            <Search className="pointer-events-none absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              aria-label="Caută în magazin"
              placeholder="Caută produse, afecțiuni sau branduri..."
              className="h-11 rounded-full border-border bg-surface pl-11"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
