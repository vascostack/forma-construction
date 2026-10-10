import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Halaman baru selalu mulai dari atas, dan link seperti /#contact menggulung ke section-nya
export default function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0 });
      return;
    }
    const t = setTimeout(() => {
      document
        .getElementById(hash.slice(1))
        ?.scrollIntoView({ behavior: "smooth" });
    }, 50);
    return () => clearTimeout(t);
  }, [pathname, hash]);

  return null;
}