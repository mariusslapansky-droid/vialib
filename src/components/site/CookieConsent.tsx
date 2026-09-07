import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const KEY = "vialib-cookie-consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!window.localStorage.getItem(KEY)) setVisible(true);
    } catch {
      /* stocare indisponibilă */
    }
  }, []);

  const decide = (value: "all" | "essential") => {
    try {
      window.localStorage.setItem(KEY, value);
    } catch {
      /* stocare indisponibilă */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Consimțământ cookies"
      className="fixed inset-x-0 bottom-0 z-[60] border-t border-border bg-background p-4 shadow-lift"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="max-w-3xl text-base text-muted-foreground">
          Folosim cookies pentru funcționarea magazinului, statistici și personalizare. Poți accepta
          toate cookies-urile sau doar pe cele esențiale. Detalii în{" "}
          <a href="/politica-de-cookies/" className="underline">
            Politica de Cookies
          </a>
          .
        </p>
        <div className="flex shrink-0 gap-3">
          <Button
            variant="outline"
            className="h-11 rounded-full px-6 text-base font-semibold"
            onClick={() => decide("essential")}
          >
            Doar esențiale
          </Button>
          <Button
            className="h-11 rounded-full px-6 text-base font-semibold"
            onClick={() => decide("all")}
          >
            Accept toate
          </Button>
        </div>
      </div>
    </div>
  );
}
