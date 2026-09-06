import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { SiteHeader, type Audience } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
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
      { title: "ViaLib — Echipamente premium și tehnologie asistivă" },
      {
        name: "description",
        content:
          "Scaune rulante, verticalizatoare, IT asistiv și îmbrăcăminte adaptată. Consultanță gratuită și decontare CAS / Tech Assist.",
      },
      { property: "og:title", content: "ViaLib — Echipamente premium și tehnologie asistivă" },
      {
        property: "og:description",
        content:
          "Soluții de mobilitate și tehnologie asistivă pentru copii și adulți, cu finanțare CAS și Tech Assist.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [audience, setAudience] = useState<Audience>("adulti");
  const isKids = audience === "copii";

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader audience={audience} onAudienceChange={setAudience} />

      <main>
        <section className="relative">
          <img
            src={isKids ? heroKids : heroAdults}
            alt={
              isKids
                ? "Copil folosind o tricicletă adaptată într-un parc"
                : "Adult activ într-un scaun rulant din carbon într-un oraș modern"
            }
            width={1920}
            height={1080}
            className="h-[68vh] max-h-[660px] min-h-[420px] w-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,oklch(0.24_0.045_262/0.82),oklch(0.24_0.045_262/0.35)_55%,transparent)]" />
          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto w-full max-w-7xl px-4">
              <div className="max-w-xl text-navy-foreground">
                <h1 className="text-4xl leading-[1.08] font-semibold md:text-5xl lg:text-6xl">
                  Performanță și mobilitate fără compromisuri.
                </h1>
                <p className="mt-6 max-w-md text-base text-navy-foreground/80 md:text-lg">
                  Echipamente premium și tehnologie asistivă pentru o viață independentă.
                </p>
                <Button size="lg" className="mt-9 h-13 rounded-full px-8 text-base font-semibold">
                  Descoperă Soluțiile
                </Button>
              </div>
            </div>
          </div>
        </section>

        <TrustBar />
        <TechAssistBanner />
        <CategoryGrid />
        <ProductCarousel audience={audience} />
        <SplitBanners />
        <ConsultingSection />
      </main>

      <SiteFooter />
    </div>
  );
}
