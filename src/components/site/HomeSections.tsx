import {
  Headset,
  BadgeEuro,
  Truck,
  Rocket,
  Accessibility,
  Bot,
  ShowerHead,
  BedDouble,
  Shirt,
  Eye,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import type { Audience } from "./SiteHeader";

import bannerClothing from "@/assets/banner-clothing.jpg";
import bannerIt from "@/assets/banner-it.jpg";
import consultant from "@/assets/consultant.jpg";

export function TrustBar() {
  const items = [
    { icon: Headset, text: "Consultanță specializată gratuită" },
    { icon: BadgeEuro, text: "Finanțare și decontare CAS / Tech Assist" },
    { icon: Truck, text: "Livrări sigure și asistență la montaj" },
    { icon: Rocket, text: "Produse inovatoare, unice în România" },
  ];
  return (
    <section className="border-b border-border bg-surface">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 py-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(({ icon: Icon, text }) => (
          <div key={text} className="flex items-center gap-3">
            <Icon className="h-5 w-5 shrink-0 text-brand" strokeWidth={1.6} />
            <span className="text-sm text-muted-foreground">{text}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export function TechAssistBanner() {
  return (
    <section id="tech-assist" className="px-4 py-10">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl bg-[linear-gradient(110deg,var(--navy)_0%,color-mix(in_oklab,var(--navy)_70%,var(--brand))_100%)] px-8 py-10 text-navy-foreground md:px-14">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.22em] text-brand-soft uppercase">
              Program guvernamental
            </p>
            <h2 className="mt-3 text-2xl leading-snug font-semibold md:text-3xl">
              Beneficiar al programului TECH ASSIST? Descoperă echipamentele eligibile de până la
              39.900 lei.
            </h2>
          </div>
          <Button
            size="lg"
            className="h-12 shrink-0 rounded-full bg-background px-7 text-base font-semibold text-navy hover:bg-background/90"
          >
            Vezi Catalogul Eligibil
          </Button>
        </div>
      </div>
    </section>
  );
}

export function CategoryGrid() {
  const cats = [
    { icon: Accessibility, title: "Mobilitate", sub: "Scaune rulante manuale și electrice" },
    { icon: Bot, title: "Verticalizatoare & Robotică", sub: "Echipamente premium" },
    { icon: ShowerHead, title: "Baie și Igienă", sub: "Siguranță în fiecare zi" },
    { icon: BedDouble, title: "Paturi & Odihnă", sub: "Confort și îngrijire" },
    { icon: Shirt, title: "Îmbrăcăminte Adaptată", sub: "Haine și încălțăminte" },
    { icon: Eye, title: "IT Asistiv & Vedere Redusă", sub: "Lupe, Braille, software" },
  ];
  return (
    <section id="categorii" className="px-4 py-14">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-2xl font-semibold md:text-3xl">Alege după nevoia ta</h2>
        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
          {cats.map(({ icon: Icon, title, sub }) => (
            <a
              key={title}
              href="#categorii"
              className="group rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-0.5 hover:shadow-lift"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                <Icon className="h-6 w-6" strokeWidth={1.5} />
              </span>
              <h3 className="mt-6 text-lg font-semibold">{title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{sub}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                Explorează
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

const productsByAudience: Record<
  Audience,
  { name: string; brand: string; price: string; tag?: string }[]
> = {
  adulti: [
    { name: "Scaun rulant ultraușor din carbon", brand: "Küschall", price: "18.400 lei", tag: "Eligibil Tech Assist" },
    { name: "Exoschelet de mers asistat", brand: "ReWalk", price: "Cere Ofertă", tag: "Nou" },
    { name: "Lupă electronică portabilă HD", brand: "Eschenbach", price: "4.290 lei", tag: "Eligibil Tech Assist" },
    { name: "Display Braille 40 celule", brand: "HumanWare", price: "16.900 lei", tag: "Eligibil Tech Assist" },
    { name: "Verticalizator electric", brand: "Vela", price: "12.750 lei" },
    { name: "Cămașă cu prindere magnetică", brand: "MagniReady", price: "329 lei", tag: "Nou" },
  ],
  copii: [
    { name: "Tricicletă adaptată reglabilă", brand: "Rifton", price: "6.480 lei", tag: "Nou" },
    { name: "Scaun rulant activ pentru copii", brand: "Panthera", price: "14.200 lei", tag: "Eligibil Tech Assist" },
    { name: "Verticalizator pediatric", brand: "Leckey", price: "9.900 lei" },
    { name: "Tabletă de comunicare augmentativă", brand: "Tobii Dynavox", price: "Cere Ofertă", tag: "Eligibil Tech Assist" },
    { name: "Scaun de baie pediatric", brand: "Firefly", price: "2.150 lei" },
    { name: "Încălțăminte adaptată cu fermoar", brand: "Billy Footwear", price: "289 lei", tag: "Nou" },
  ],
};

export function ProductCarousel({ audience }: { audience: Audience }) {
  const scroller = useRef<HTMLDivElement>(null);
  const products = productsByAudience[audience];

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
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              aria-label="Produsul următor"
              onClick={() => scrollBy(1)}
              className="rounded-full border border-border bg-background p-3 transition-colors hover:bg-muted"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div
          ref={scroller}
          className="hide-scrollbar mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2"
        >
          {products.map((p) => (
            <article
              key={p.name}
              className="w-[280px] shrink-0 snap-start rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-card"
            >
              <div className="relative flex aspect-square items-center justify-center rounded-xl bg-background">
                {p.tag && (
                  <span className="absolute top-3 left-3 rounded-full bg-accent px-2.5 py-1 text-[11px] font-semibold text-accent-foreground">
                    {p.tag}
                  </span>
                )}
                <Accessibility className="h-16 w-16 text-border" strokeWidth={1} />
              </div>
              <p className="mt-5 text-xs font-semibold tracking-[0.16em] text-muted-foreground uppercase">
                {p.brand}
              </p>
              <h3 className="mt-1.5 text-[15px] leading-snug font-semibold">{p.name}</h3>
              <p className="mt-3 font-display text-lg font-semibold text-navy">{p.price}</p>
            </article>
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
    },
    {
      img: bannerIt,
      title: "Comunicare și acces IT.",
      text: "Tehnologii pentru nevăzători și slab-văzători.",
    },
  ];
  return (
    <section className="px-4 py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 md:grid-cols-2">
        {banners.map((b) => (
          <article
            key={b.title}
            className="group relative aspect-square overflow-hidden rounded-2xl"
          >
            <img
              src={b.img}
              alt={b.title}
              loading="lazy"
              width={1024}
              height={1024}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_top,oklch(0.24_0.045_262/0.85),transparent_60%)]" />
            <div className="absolute right-8 bottom-8 left-8 text-navy-foreground">
              <h3 className="text-2xl font-semibold">{b.title}</h3>
              <p className="mt-2 max-w-sm text-sm text-navy-foreground/80">{b.text}</p>
              <Button
                variant="outline"
                className="mt-6 rounded-full border-navy-foreground/40 bg-transparent text-navy-foreground hover:bg-navy-foreground hover:text-navy"
              >
                Descoperă
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
          <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
            Nu știi ce echipament să alegi? Echipa noastră de experți este aici să te ghideze spre
            soluția perfectă, inclusiv pentru documentația de decontare.
          </p>
          <Button size="lg" className="mt-8 h-12 rounded-full px-7 text-base font-semibold">
            Programează o Consiliere Gratuită
          </Button>
        </div>
      </div>
    </section>
  );
}
