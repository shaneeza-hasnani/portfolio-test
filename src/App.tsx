import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Index from "./pages/Index";
import FraudModel from "./pages/FraudModel";
import StudentRiskModel from "./pages/StudentRiskModel";
import StudentRiskShowcase from "./pages/StudentRiskShowcase";
import WireTransferModel from "./pages/WireTransferModel";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  // ✨ Subtle parallax drift effect for live background blobs
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      // Gentle movement multiplier (lower = more subtle)
      const x = (e.clientX / innerWidth - 0.5) * 25;
      const y = (e.clientY / innerHeight - 0.5) * 25;
      document.documentElement.style.setProperty("--blob-x", `${x}px`);
      document.documentElement.style.setProperty("--blob-y", `${y}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        <TooltipProvider>
          <Toaster />
          <Sonner />

          {/* 🌈 Global animated live background with parallax drift */}
          <div className="live-bg-blobs"></div>

          {/* Main content above background */}
          <div className="relative z-10">
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/fraud-model" element={<FraudModel />} />
                <Route path="/student-risk-model" element={<StudentRiskModel />} />
                <Route path="/student-risk-showcase" element={<StudentRiskShowcase />} />
                <Route path="/wire-transfer-model" element={<WireTransferModel />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </div>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
