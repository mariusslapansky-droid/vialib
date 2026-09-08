import {
  Headset,
  BadgeEuro,
  Truck,
  Sparkles,
  Accessibility,
  Bot,
  ShowerHead,
  BedDouble,
  Shirt,
  Eye,
  Bike,
  HandHelping,
  Ear,
  Utensils,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import type { Audience } from "@/hooks/useAudience";

import bannerClothing from "@/assets/banner-clothing.jpg";
import bannerIt from "@/assets/banner-it.jpg";
import consultant from "@/assets/consultant.jpg";

export function TrustBar() {
  const items = [
    { icon: Headset, text: "Consultanță gratuită" },
    { icon: BadgeEuro, text: "Sprijin pentru decontare CAS și voucher TECH ASSIST" },
    { icon: Truck, text: "Livrări și asistență la montaj" },
    { icon: Sparkles, text: "Tehnologii asistive atent selectate" },
  ];
  return (
    <section aria-label="De ce ViaLib" className="border-b border-border bg-surface">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 py-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(({ icon: Icon, text }) => (
          <div key={text} className="flex items-center gap-3">
            <Icon className="h-5 w-5 shrink-0 text-brand" strokeWidth={1.6} aria-hidden="true" />
            <span className="text-base text-muted-foreground">{text}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export function TechAssistBanner() {
  return (
    <section id="tech-assist" className="bg-navy px-4 py-16 text-navy-foreground">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.22em] text-brand-soft uppercase">
            Program guvernamental
          </p>
          <h2 className="mt-3 text-2xl leading-snug font-semibold md:text-3xl">
            Vrei să accesezi programul TECH ASSIST?
          </h2>
          <p className="mt-4 text-base text-navy-foreground/80">
            Descoperă echipamentele asistive și află cum poți utiliza voucherul de până la 39.900
            lei.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button
            asChild
            size="lg"
            className="h-12 rounded-full bg-background px-7 text-base font-semibold text-navy hover:bg-background/90"
          >
            <a href="/eticheta-produs/tech-assist/">Vezi echipamentele</a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-12 rounded-full border-navy-foreground/40 bg-transparent px-7 text-base font-semibold text-navy-foreground hover:bg-navy-foreground hover:text-navy"
          >
            <a href="/ghid-tech-assist/">Citește ghidul</a>
          </Button>
        </div>
      </div>
    </section>
  );
}

const categoriesByAudience: Record<
  Audience,
  { icon: typeof Accessibility; title: string; sub: string; href: string }[]
> = {
  adulti: [
    {
      icon: Accessibility,
      title: "Mobilitate",
      sub: "Scaune rulante manuale și electrice",
      href: "/categorie-produs/adulti/mobilitate/",
    },
    {
      icon: Bot,
      title: "Verticalizatoare & Robotică",
      sub: "Echipamente de verticalizare și mers asistat",
      href: "/categorie-produs/adulti/verticalizatoare-robotica/",
    },
    {
      icon: HandHelping,
      title: "Acces în locuință & transfer",
      sub: "Rampe, lifturi, elevatoare, mânere",
      href: "/categorie-produs/adulti/acces-transfer/",
    },
    {
      icon: ShowerHead,
      title: "Baie & Igienă",
      sub: "Siguranță în fiecare zi",
      href: "/categorie-produs/adulti/baie-igiena/",
    },
    {
      icon: Eye,
      title: "IT Asistiv & Vedere Redusă",
      sub: "Lupe electronice, Braille, software",
      href: "/categorie-produs/adulti/it-asistiv/",
    },
    {
      icon: Shirt,
      title: "Îmbrăcăminte Adaptată",
      sub: "Haine și încălțăminte ușor de purtat",
      href: "/categorie-produs/adulti/imbracaminte-adaptata/",
    },
  ],
  copii: [
    {
      icon: Accessibility,
      title: "Mobilitate",
      sub: "Scaune rulante active pediatrice",
      href: "/categorie-produs/copii/mobilitate/",
    },
    {
      icon: Bot,
      title: "Verticalizatoare & Robotică",
      sub: "Postură și mers asistat pentru copii",
      href: "/categorie-produs/copii/verticalizatoare-robotica/",
    },
    {
      icon: Bike,
      title: "Biciclete și triciclete adaptate",
      sub: "Mișcare și joacă în siguranță",
      href: "/categorie-produs/copii/biciclete-triciclete/",
    },
    {
      icon: Ear,
      title: "Auz & comunicare",
      sub: "Comunicare augmentativă și alternativă",
      href: "/categorie-produs/copii/auz-comunicare/",
    },
    {
      icon: Utensils,
      title: "Viață zilnică & servirea mesei",
      sub: "Autonomie la masă și acasă",
      href: "/categorie-produs/copii/viata-zilnica/",
    },
    {
      icon: BedDouble,
      title: "Paturi & Odihnă",
      sub: "Confort și îngrijire pe timpul nopții",
      href: "/categorie-produs/copii/paturi-odihna/",
    },
  ],
};

export function CategoryGrid({ audience }: { audience: Audience }) {
  const cats = categoriesByAudience[audience] ?? categoriesByAudience.adulti;
  return (
    <section id="categorii" className="px-4 py-14">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-2xl font-semibold md:text-3xl">Alege după nevoia ta</h2>
        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
          {cats.map(({ icon: Icon, title, sub, href }) => (
            <a
              key={title}
              href={href}
              className="group rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-0.5 hover:shadow-lift"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                <Icon className="h-6 w-6" strokeWidth={1.5} aria-hidden="true" />
              </span>
              <h3 className="mt-6 text-lg font-semibold">{title}</h3>
              <p className="mt-1 text-base text-muted-foreground">{sub}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-base font-semibold text-brand">
                Explorează
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </span>
            </a>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Button asChild size="lg" variant="outline" className="h-12 rounded-full px-8 text-base font-semibold">
            <a href="/magazin/">Vezi toate categoriile</a>
          </Button>
        </div>
      </div>
    </section>
  );
}

type Product = {
  name: string;
  brand: string;
  specs: string[];
  price?: string;
  priceFrom?: boolean;
  techAssist?: boolean;
  href: string;
};

const productsByAudience: Record<Audience, Product[]> = {
  adulti: [
    {
      name: "Scaun rulant ultraușor din carbon",
      brand: "Küschall",
      specs: ["Greutate: 8 kg", "Lățime șezut: 40 cm", "Cadru din fibră de carbon"],
      price: "18.400 lei",
      priceFrom: true,
      techAssist: true,
      href: "/produs/scaun-rulant-carbon/",
    },
    {
      name: "Exoschelet de mers asistat",
      brand: "ReWalk",
      specs: ["Mers asistat electric", "Baterie: 4 ore", "Reglabil pe utilizator"],
      href: "/produs/exoschelet-mers-asistat/",
    },
    {
      name: "Lupă electronică portabilă HD",
      brand: "Eschenbach",
      specs: ["Zoom: 2x–15x", "Ecran: 5 inch", "Greutate: 220 g"],
      price: "4.290 lei",
      techAssist: true,
      href: "/produs/lupa-electronica-hd/",
    },
    {
      name: "Display Braille 40 celule",
      brand: "HumanWare",
      specs: ["40 celule Braille", "Conectare Bluetooth", "Autonomie: 20 ore"],
      price: "16.900 lei",
      techAssist: true,
      href: "/produs/display-braille-40/",
    },
    {
      name: "Verticalizator electric",
      brand: "Vela",
      specs: ["Ridicare electrică", "Sarcină maximă: 135 kg", "Roți cu frână"],
      price: "12.750 lei",
      priceFrom: true,
      href: "/produs/verticalizator-electric/",
    },
    {
      name: "Cămașă cu prindere magnetică",
      brand: "MagniReady",
      specs: ["Închidere magnetică", "Bumbac 100%", "Mărimi: S–XXL"],
      price: "329 lei",
      href: "/produs/camasa-magnetica/",
    },
  ],
  copii: [
    {
      name: "Tricicletă adaptată reglabilă",
      brand: "Rifton",
      specs: ["Vârstă: 4–12 ani", "Suport trunchi reglabil", "Pedale cu fixare"],
      price: "6.480 lei",
      href: "/produs/tricicleta-adaptata/",
    },
    {
      name: "Scaun rulant activ pentru copii",
      brand: "Panthera",
      specs: ["Greutate: 4,9 kg", "Lățime șezut: 26–36 cm", "Cadru care crește cu copilul"],
      price: "14.200 lei",
      priceFrom: true,
      techAssist: true,
      href: "/produs/scaun-rulant-copii/",
    },
    {
      name: "Verticalizator pediatric",
      brand: "Leckey",
      specs: ["Poziții: stând / înclinat", "Înălțime: 80–130 cm", "Suporturi laterale"],
      price: "9.900 lei",
      href: "/produs/verticalizator-pediatric/",
    },
    {
      name: "Tabletă de comunicare augmentativă",
      brand: "Tobii Dynavox",
      specs: ["Control ocular", "Ecran: 12 inch", "Voce în limba română"],
      techAssist: true,
      href: "/produs/tableta-comunicare/",
    },
    {
      name: "Scaun de baie pediatric",
      brand: "Firefly",
      specs: ["Suport cap și trunchi", "Material antialunecare", "Pliabil"],
      price: "2.150 lei",
      href: "/produs/scaun-baie-pediatric/",
    },
    {
      name: "Încălțăminte adaptată cu fermoar",
      brand: "Billy Footwear",
      specs: ["Fermoar 180°", "Mărimi: 24–35", "Talpă flexibilă"],
      price: "289 lei",
      href: "/produs/incaltaminte-adaptata/",
    },
  ],
};

function ProductCard({ p }: { p: Product }) {
  return (
    <article className="flex w-[300px] shrink-0 snap-start flex-col rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-card">
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
        {p.specs.map((s) => (
          <li key={s} className="flex gap-2">
            <span aria-hidden="true">•</span>
            <span>{s}</span>
          </li>
        ))}
      </ul>
      <p className="mt-4 font-display text-lg font-semibold text-navy">
        {p.price ? (
          <>
            {p.priceFrom ? "Preț de la " : ""}
            {p.price}
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
        variant={p.price ? "default" : "outline"}
      >
        <a href={p.price ? p.href : `/cere-oferta/?produs=${encodeURIComponent(p.name)}`}>
          {p.price ? "Vezi produsul" : "Cere ofertă"}
        </a>
      </Button>
    </article>
  );
}

export function ProductCarousel({ audience }: { audience: Audience }) {
  const scroller = useRef<HTMLDivElement>(null);
  const products = productsByAudience[audience] ?? productsByAudience.adulti;

  const scrollBy = (dir: number) =>
    scroller.current?.scrollBy({ left: dir * 340, behavior: "smooth" });

  return (
    <section className="bg-surface px-4 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-end justify-between gap-4">
          <h2 className="max-w-lg text-2xl font-semibold md:text-3xl">
            Tehnologie de Top. Soluții Fără Limite.
          </h2>
          <div className="hidden gap-2 md:flex">
            <button
              aria-label="Produsul anterior"
              onClick={() => scrollBy(-1)}
              className="rounded-full border border-border bg-background p-3 transition-colors hover:bg-muted"
            >
              <ChevronLeft className="h-4 w-4" aria-hidden="true" />
            </button>
            <button
              aria-label="Produsul următor"
              onClick={() => scrollBy(1)}
              className="rounded-full border border-border bg-background p-3 transition-colors hover:bg-muted"
            >
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div
          ref={scroller}
          className="hide-scrollbar mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2"
        >
          {products.map((p) => (
            <ProductCard key={p.name} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function SplitBanners() {
  const banners = [
    {
      img: bannerClothing,
      title: "Stil și independență.",
      text: "Colecția nouă de îmbrăcăminte și încălțăminte adaptată.",
      href: "/categorie-produs/adulti/imbracaminte-adaptata/",
    },
    {
      img: bannerIt,
      title: "Comunicare și acces IT.",
      text: "Tehnologii pentru nevăzători și slab-văzători.",
      href: "/categorie-produs/adulti/it-asistiv/",
    },
  ];
  return (
    <section className="px-4 py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 md:grid-cols-2">
        {banners.map((b) => (
          <article key={b.title} className="group relative aspect-square overflow-hidden rounded-2xl">
            <img
              src={b.img}
              alt={b.title}
              loading="lazy"
              width={1024}
              height={1024}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.65),rgba(0,0,0,0.15)_60%)]" />
            <div className="absolute right-8 bottom-8 left-8 text-navy-foreground">
              <h3 className="text-2xl font-semibold">{b.title}</h3>
              <p className="mt-2 max-w-sm text-base text-navy-foreground/85">{b.text}</p>
              <Button
                asChild
                variant="outline"
                className="mt-6 rounded-full border-navy-foreground/40 bg-transparent text-base text-navy-foreground hover:bg-navy-foreground hover:text-navy"
              >
                <a href={b.href}>Descoperă</a>
              </Button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function ConsultingSection() {
  return (
    <section className="px-4 pb-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 overflow-hidden rounded-2xl bg-surface md:grid-cols-2">
        <img
          src={consultant}
          alt="Consultant discutând cu un client despre echipamente de mobilitate"
          loading="lazy"
          width={1400}
          height={1000}
          className="h-full max-h-[420px] w-full object-cover"
        />
        <div className="px-8 py-10 md:pr-14 md:pl-4">
          <p className="text-xs font-semibold tracking-[0.22em] text-brand uppercase">Expertiză</p>
          <h2 className="mt-4 text-2xl font-semibold md:text-3xl">Fiecare nevoie este unică.</h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Nu știi ce echipament să alegi? Echipa noastră de experți este aici să te ghideze spre
            soluția perfectă, inclusiv pentru documentația de decontare.
          </p>
          <Button asChild size="lg" className="mt-8 h-12 rounded-full px-7 text-base font-semibold">
            <a href="/consiliere-gratuita/">Programează o Consiliere Gratuită</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
