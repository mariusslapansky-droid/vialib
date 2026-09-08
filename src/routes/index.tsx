import { createFileRoute } from "@tanstack/react-router";

import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { CookieConsent } from "@/components/site/CookieConsent";
import { useAudience } from "@/hooks/useAudience";
import {
  TrustBar,
  TechAssistBanner,
  CategoryGrid,
  ProductCarousel,
  SplitBanners,
  ConsultingSection,
} from "@/components/site/HomeSections";
import { Button } from "@/components/ui/button";

import heroAdults from "@/assets/hero-adults.jpg";
import heroKids from "@/assets/hero-kids.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ViaLib — Echipamente și tehnologie asistivă pentru autonomie" },
      {
        name: "description",
        content:
          "Scaune rulante, verticalizatoare, IT asistiv și îmbrăcăminte adaptată pentru copii și adulți. Consultanță gratuită, decontare CAS și voucher TECH ASSIST.",
      },
      {
        property: "og:title",
        content: "ViaLib — Echipamente și tehnologie asistivă pentru autonomie",
      },
      {
        property: "og:description",
        content:
          "Soluții de mobilitate și tehnologie asistivă pentru copii și adulți, cu sprijin pentru decontare CAS și TECH ASSIST.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://vialib.lovable.app/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://vialib.lovable.app/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "ViaLib",
          legalName: "SC 2 Q SRL",
          url: "https://vialib.lovable.app/",
          telephone: "+40729880770",
          email: "contact@vialib.ro",
          vatID: "RO19651883",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Sacoșu Turcesc 310",
            addressRegion: "Timiș",
            addressCountry: "RO",
          },
        }),
      },
    ],
  }),
  component: Index,
});

const heroContent = {
  adulti: {
    img: heroAdults,
    alt: "Adult activ într-un scaun rulant din carbon, într-un oraș modern",
    title: "Mai multă autonomie, în fiecare zi.",
    subtitle:
      "Echipamente și tehnologii asistive pentru mobilitate, siguranță, comunicare și confort.",
    cta: "Explorează soluțiile pentru adulți",
    href: "/categorie-produs/adulti/",
  },
  copii: {
    img: heroKids,
    alt: "Copil folosind o tricicletă adaptată într-un parc",
    title: "Sprijin pentru fiecare etapă a dezvoltării.",
    subtitle:
      "Echipamente pediatrice adaptate pentru mișcare, postură, comunicare și autonomie.",
    cta: "Explorează soluțiile pentru copii",
    href: "/categorie-produs/copii/",
  },
} as const;

function Index() {
  const { audience, setAudience } = useAudience();
  const hero = heroContent[audience];

  return (
    <div className="min-h-screen bg-background">
      <a href="#main-content" className="skip-link">
        Sari la conținut
      </a>

      <SiteHeader audience={audience} onAudienceChange={setAudience} />

      <main id="main-content">
        <section className="relative">
          <img
            src={hero.img}
            alt={hero.alt}
            width={1920}
            height={1080}
            className="h-[68vh] max-h-[660px] min-h-[420px] w-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3))]" />
          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto w-full max-w-7xl px-4">
              <div className="max-w-xl text-navy-foreground">
                <h1 className="text-4xl leading-[1.08] font-semibold md:text-5xl lg:text-6xl">
                  {hero.title}
                </h1>
                <p className="mt-6 max-w-md text-base text-navy-foreground/90 md:text-lg">
                  {hero.subtitle}
                </p>
                <Button
                  asChild
                  size="lg"
                  className="mt-9 h-13 rounded-full px-8 text-base font-semibold"
                >
                  <a href={hero.href}>{hero.cta}</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <TrustBar />
        <TechAssistBanner />
        <CategoryGrid audience={audience} />
        <ProductCarousel audience={audience} />
        <SplitBanners />
        <ConsultingSection />
      </main>

      <SiteFooter />
      <CookieConsent />
    </div>
  );
}
