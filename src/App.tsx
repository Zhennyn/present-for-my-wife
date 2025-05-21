
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import HomePage from "./pages/Home";
import TimelinePage from "./pages/TimelinePage";
import GalleryPage from "./pages/GalleryPage";
import ReasonsPage from "./pages/ReasonsPage";
import ProposalGamePage from "./pages/ProposalGamePage"; // Adicionada a nova página
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="timeline" element={<TimelinePage />} />
            <Route path="gallery" element={<GalleryPage />} />
            <Route path="reasons" element={<ReasonsPage />} />
            <Route path="proposal-game" element={<ProposalGamePage />} /> {/* Nova rota */}
            {/* A rota "capsule" foi removida */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
