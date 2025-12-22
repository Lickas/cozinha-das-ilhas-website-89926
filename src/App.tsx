import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { useEffect } from "react";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LanguageSwitcher from "./components/LanguageSwitcher";
import Home from "./pages/Home";
import Contactos from "./pages/Contactos";
import Rooftop from "./pages/Rooftop";
import Eventos from "./pages/Eventos";
import SobreNos from "./pages/SobreNos";
import PequenoAlmoco from "./pages/PequenoAlmoco";
import Almoco from "./pages/Almoco";
import Pastelaria from "./pages/Pastelaria";
import MenuCompleto from "./pages/MenuCompleto";
import Galeria from "./pages/Galeria";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
          <ScrollToTop />
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contactos" element={<Contactos />} />
                <Route path="/rooftop" element={<Rooftop />} />
                <Route path="/eventos" element={<Eventos />} />
                <Route path="/sobre-nos" element={<SobreNos />} />
              <Route path="/pequeno-almoco" element={<PequenoAlmoco />} />
              <Route path="/almoco" element={<Almoco />} />
              <Route path="/pastelaria" element={<Pastelaria />} />
              <Route path="/menu-completo" element={<MenuCompleto />} />
              <Route path="/galeria" element={<Galeria />} />
              <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
            <LanguageSwitcher />
          </div>
        </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
