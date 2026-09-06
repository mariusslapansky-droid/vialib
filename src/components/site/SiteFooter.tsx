import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function SiteFooter() {
  const support = [
    "Contact",
    "Urmărire Comandă",
    "Politică Retur",
    "Garanții și Service",
    "Parteneriate — Partener autorizat RAR pentru adaptări auto",
  ];
  const info = [
    "Ghiduri de cumpărare",
    "Cum obțin finanțare CAS / Tech Assist",
    "Blog",
  ];

  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-16 md:grid-cols-4">
        <div>
          <span className="font-display text-lg font-bold">
            Via<span className="text-brand-soft">Lib</span>
          </span>
          <p className="mt-4 max-w-xs text-sm text-navy-foreground/70">
            Lideri în soluții de mobilitate și tehnologie asistivă pentru o viață independentă.
          </p>
          <div className="mt-6 flex gap-3">
            {[Facebook, Instagram, Youtube, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social media"
                className="rounded-full bg-white/10 p-2.5 transition-colors hover:bg-white/20"
              >
                <Icon className="h-4 w-4" strokeWidth={1.6} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-[0.16em] uppercase">Suport Clienți</h3>
          <ul className="mt-5 space-y-3 text-sm text-navy-foreground/70">
            {support.map((s) => (
              <li key={s}>
                <a href="#" className="transition-colors hover:text-navy-foreground">
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-[0.16em] uppercase">Informații Utile</h3>
          <ul className="mt-5 space-y-3 text-sm text-navy-foreground/70">
            {info.map((s) => (
              <li key={s}>
                <a href="#" className="transition-colors hover:text-navy-foreground">
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-[0.16em] uppercase">Newsletter</h3>
          <p className="mt-5 text-sm text-navy-foreground/70">
            Fii la curent cu noile tehnologii asistive.
          </p>
          <form
            className="mt-5 flex gap-2"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <Input
              type="email"
              required
              aria-label="Adresa ta de email"
              placeholder="Adresa ta de email"
              className="h-11 border-white/20 bg-white/10 text-navy-foreground placeholder:text-navy-foreground/50"
            />
            <Button type="submit" className="h-11 shrink-0 px-5 font-semibold">
              Abonează-te
            </Button>
          </form>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 text-xs text-navy-foreground/60 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} ViaLib. Toate drepturile rezervate.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-navy-foreground">
              Termeni și Condiții
            </a>
            <a href="#" className="hover:text-navy-foreground">
              Politica de Confidențialitate
            </a>
          </div>
          <div className="flex gap-2">
            {["VISA", "Mastercard", "Apple Pay", "SSL"].map((p) => (
              <span key={p} className="rounded border border-white/20 px-2.5 py-1 text-[10px]">
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
