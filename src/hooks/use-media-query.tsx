import { useState, useEffect } from "react";

export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const handler = () => setMatches(mediaQuery.matches);
    handler(); 
    mediaQuery.addEventListener("change", handler);

    return () => mediaQuery.removeEventListener("change", handler);
  }, [query]);

  return matches;
};