import { useCallback, useEffect, useState } from "react";

export type Audience = "copii" | "adulti";

const STORAGE_KEY = "vialib-audience";

function isAudience(value: unknown): value is Audience {
  return value === "copii" || value === "adulti";
}

export function useAudience() {
  const [audience, setAudienceState] = useState<Audience>("adulti");

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (isAudience(stored)) setAudienceState(stored);
    } catch {
      /* stocare indisponibilă */
    }
  }, []);

  const setAudience = useCallback((next: Audience) => {
    setAudienceState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
      document.cookie = `${STORAGE_KEY}=${next};path=/;max-age=31536000;samesite=lax`;
    } catch {
      /* stocare indisponibilă */
    }
  }, []);

  return { audience, setAudience };
}
