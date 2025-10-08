import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import EventSelection from "./pages/EventSelection";
import ShortfilmRegistration from "./pages/ShortfilmRegistration";
// Make sure the file exists at the specified path, or update the path if necessary
import RampwalkRegistration from "./pages/RampwalkRegistration";
import ContestRegistration from "./pages/ContestRegistration";
// import PhotographyRegistration from "./pages/PhotographyRegistration";
import PhotographyRegistration from "./pages/PhotographyRegistration";
// TODO: Uncomment and fix the path once the file exists
import Confirmation from "./pages/Confirmation";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/events" element={<EventSelection />} />
          <Route path="/register/shortfilm" element={<ShortfilmRegistration />} />
          <Route path="/register/rampwalk" element={<RampwalkRegistration />} />
          <Route path="/register/contest" element={<ContestRegistration />} />
          <Route path="/register/photography" element={<PhotographyRegistration />} />
          <Route path="/confirmation" element={<Confirmation />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
