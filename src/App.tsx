
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout"; // Nosso novo Layout
import HomePage from "./pages/Home"; // Renomeado para HomePage para clareza
import TimelinePage from "./pages/TimelinePage";
import GalleryPage from "./pages/GalleryPage";
import ReasonsPage from "./pages/ReasonsPage";
import CapsulePage from "./pages/CapsulePage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}> {/* Layout envolve todas as páginas */}
            <Route index element={<HomePage />} /> {/* Rota inicial */}
            <Route path="timeline" element={<TimelinePage />} />
            <Route path="gallery" element={<GalleryPage />} />
            <Route path="reasons" element={<ReasonsPage />} />
            <Route path="capsule" element={<CapsulePage />} />
            {/* Adicionar rota para música aqui no futuro */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

