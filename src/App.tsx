import { useEffect, useRef } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import Waitlist from "./pages/Waitlist";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

const useGATracking = () => {
  const location = useLocation();
  const lastEventRef = useRef<Record<string, number>>({});
  const waitlistAttemptRef = useRef(false);

  const fireEvent = (name: string, params: Record<string, any>) => {
    const now = Date.now();
    const last = lastEventRef.current[name] || 0;
    if (now - last < 2000) return;
    window.gtag?.("event", name, params);
    lastEventRef.current[name] = now;
  };

  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function (...args: any[]) {
      window.dataLayer.push(args);
    };

    const calendlyTexts = [
      "try one month for free",
      "schedule demo",
      "schedule meeting",
    ];
    const waitlistTexts = ["join waitlist", "join the waitlist"];

    const handleClick = (e: MouseEvent) => {
      let el = e.target as HTMLElement | null;
      while (el && el !== document.body) {
        if (el.tagName === "BUTTON") {
          const text = el.textContent?.toLowerCase() || "";
          if (calendlyTexts.some((t) => text.includes(t))) {
            fireEvent("calendly_open", {
              event_category: "engagement",
              event_label: "Book 15-min Setup",
            });
            return;
          }
          if (waitlistTexts.some((t) => text.includes(t))) {
            fireEvent("waitlist_open", {
              event_category: "engagement",
              event_label: "Join Waitlist",
            });
            return;
          }
        }
        el = el.parentElement;
      }
    };

    const handleSubmit = (e: Event) => {
      const form = e.target as HTMLElement;
      if (form.matches && form.matches("form.space-y-6")) {
        waitlistAttemptRef.current = true;
      }
    };

    const observer = new MutationObserver(() => {
      if (waitlistAttemptRef.current) {
        const marker = Array.from(
          document.querySelectorAll("h1")
        ).find((h1) =>
          h1.textContent?.toLowerCase().includes("you're on the list!")
        );
        if (marker) {
          fireEvent("waitlist_submit", { value: 1 });
          waitlistAttemptRef.current = false;
        }
      }
    });

    document.addEventListener("click", handleClick);
    document.addEventListener("submit", handleSubmit, true);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("submit", handleSubmit, true);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    fireEvent("page_view", {
      page_location: window.location.href,
      page_path: location.pathname + location.search,
      page_title: document.title,
    });

    if (["/thank-you", "/booked"].includes(location.pathname)) {
      fireEvent("calendly_booked", { value: 1 });
    }

    if (location.pathname === "/waitlist") {
      const marker = Array.from(document.querySelectorAll("h1")).find((h1) =>
        h1.textContent?.toLowerCase().includes("you're on the list!")
      );
      if (marker) {
        fireEvent("waitlist_submit", { value: 1 });
      }
    }
  }, [location]);
};

const RoutesWithTracking = () => {
  useGATracking();
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/waitlist" element={<Waitlist />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-of-service" element={<TermsOfService />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <RoutesWithTracking />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
