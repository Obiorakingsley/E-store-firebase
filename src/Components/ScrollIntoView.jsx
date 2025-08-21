// ScrollToHashElement.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToHashElement() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const id = hash.replace("#", "");
    let getId = document.getElementById(id);

    if (getId) {
      // If element exist
      getId.scrollIntoView({ behavior: "smooth" });
      return;
    }

    // Waits for Suspense/await to rnder element and observe DOM
    const observer = new MutationObserver(() => {
      getId = document.getElementById(id);
      if (getId) {
        getId.scrollIntoView({ behavior: "smooth" });
        observer.disconnect();
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, [hash]);

  return null;
}

export default ScrollToHashElement;
