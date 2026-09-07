import { useState } from "react";
import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function SiteFooter() {
  const [consent, setConsent] = useState(false);
  const [sent, setSent] = useState(false);

  const support = [
    { label: "Contact", href: "/contact/" },
    { label: "Urmărire comandă", href: "/urmarire-comanda/" },
    { label: "Politică de retur", href: "/politica-de-retur/" },
    { label: "Garanții și service", href: "/garantii-si-service/" },
    { label: "Parteneriate — Partener autorizat RAR pentru adaptări auto", href: "/parteneriate/" },
  ];
  const info = [
    { label: "Ghiduri de cumpărare", href: "/ghiduri-de-cumparare/" },
    { label: "Cum obțin finanțare CAS / Tech Assist", href: "/ghid-tech-assist/" },
    { label: "Blog", href: "/blog/" },
  ];

  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-16 md:grid-cols-4">
        <div>
          <span className="font-display text-lg font-bold">
            Via<span className="text-brand-soft">Lib</span>
          </span>
          <p className="mt-4 max-w-xs text-base text-navy-foreground/70">
            Soluții de mobilitate și tehnologie asistivă pentru o viață mai independentă.
          </p>
          <address className="mt-5 space-y-1 text-base not-italic text-navy-foreground/70">
            <p>SC 2 Q SRL</p>
            <p>Sacoșu Turcesc 310, jud. Timiș</p>
            <p>CUI: RO19651883</p>
            <p>ONRC: J35/4033/2006</p>
            <p>
              <a href="tel:+40729880770" className="hover:text-navy-foreground">
                0729 880 770
              </a>
            </p>
            <p>
              <a href="mailto:contact@vialib.ro" className="hover:text-navy-foreground">
                contact@vialib.ro
              </a>
            </p>
          </address>
          <div className="mt-6 flex gap-3">
            {[
              { Icon: Facebook, label: "ViaLib pe Facebook" },
              { Icon: Instagram, label: "ViaLib pe Instagram" },
              { Icon: Youtube, label: "ViaLib pe YouTube" },
              { Icon: Linkedin, label: "ViaLib pe LinkedIn" },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="/contact/"
                aria-label={label}
                className="rounded-full bg-white/10 p-2.5 transition-colors hover:bg-white/20"
              >
                <Icon className="h-4 w-4" strokeWidth={1.6} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Suport clienți">
          <h2 className="text-sm font-semibold tracking-[0.16em] uppercase">Suport Clienți</h2>
          <ul className="mt-5 space-y-3 text-base text-navy-foreground/70">
            {support.map((s) => (
              <li key={s.label}>
                <a href={s.href} className="transition-colors hover:text-navy-foreground">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Informații utile">
          <h2 className="text-sm font-semibold tracking-[0.16em] uppercase">Informații Utile</h2>
          <ul className="mt-5 space-y-3 text-base text-navy-foreground/70">
            {info.map((s) => (
              <li key={s.label}>
                <a href={s.href} className="transition-colors hover:text-navy-foreground">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold tracking-[0.16em] uppercase">Newsletter</h2>
          <p className="mt-5 text-base text-navy-foreground/70">
            Fii la curent cu noile tehnologii asistive.
          </p>
          <form
            className="mt-5 space-y-3"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <div className="flex gap-2">
              <Input
                type="email"
                required
                aria-label="Adresa ta de email"
                placeholder="Adresa ta de email"
                className="h-11 border-white/20 bg-white/10 text-base text-navy-foreground placeholder:text-navy-foreground/50"
              />
              <Button type="submit" className="h-11 shrink-0 px-5 text-base font-semibold">
                Abonează-te
              </Button>
            </div>
            <label className="flex items-start gap-2 text-sm text-navy-foreground/70">
              <input
                type="checkbox"
                required
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-1 h-4 w-4 shrink-0 accent-[var(--brand)]"
              />
              <span>
                Sunt de acord cu prelucrarea datelor conform{" "}
                <a href="/politica-de-confidentialitate/" className="underline">
                  Politicii de Confidențialitate
                </a>
                .
              </span>
            </label>
            {sent && (
              <p role="status" className="text-sm text-brand-soft">
                Îți mulțumim! Te-ai abonat la newsletter.
              </p>
            )}
          </form>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://anpc.ro/ce-este-sal/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded border border-white/20 px-3 py-2 text-sm hover:bg-white/10"
            >
              ANPC — SAL
            </a>
            <a
              href="https://ec.europa.eu/consumers/odr"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded border border-white/20 px-3 py-2 text-sm hover:bg-white/10"
            >
              SOL — Litigii online
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 text-sm text-navy-foreground/60 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} ViaLib — SC 2 Q SRL. Toate drepturile rezervate.</p>
          <nav aria-label="Informații legale" className="flex flex-wrap gap-5">
            <a href="/termeni-si-conditii/" className="hover:text-navy-foreground">
              Termeni și Condiții
            </a>
            <a href="/politica-de-confidentialitate/" className="hover:text-navy-foreground">
              Politica de Confidențialitate
            </a>
            <a href="/politica-de-cookies/" className="hover:text-navy-foreground">
              Politica de Cookies
            </a>
          </nav>
          <div className="flex gap-2">
            {["Netopia Payments", "VISA", "Mastercard", "Sameday"].map((p) => (
              <span key={p} className="rounded border border-white/20 px-2.5 py-1 text-xs">
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
