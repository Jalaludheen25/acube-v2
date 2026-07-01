import { useEffect, useState } from "react";

/** True after the component has mounted on the client (SSR-safe guard). */
export function useMounted(): boolean {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
}
