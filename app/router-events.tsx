"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function RouterEvents() {
  const pathname = usePathname();
  // const searchParams = useSearchParams()

  useEffect(() => {
    // Prefetch common routes that users might navigate to
    const prefetchRoutes = ["/", "/about", "/services", "/blog", "/contact"];

    // Don't prefetch the current route
    const routesToPrefetch = prefetchRoutes.filter(
      (route) => route !== pathname
    );

    // Use the fetch API to prefetch routes
    routesToPrefetch.forEach((route) => {
      const prefetchLink = document.createElement("link");
      prefetchLink.rel = "prefetch";
      prefetchLink.href = route;
      document.head.appendChild(prefetchLink);
    });

    return () => {
      // Clean up prefetch links when component unmounts
      document
        .querySelectorAll('link[rel="prefetch"]')
        .forEach((el) => el.remove());
    };
  }, [pathname]);

  return null;
}
