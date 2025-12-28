import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import RagSystem from "./pages/RagSystem";
import RealEstateApp from "./pages/RealEstateApp";
import NotFound from "./pages/NotFound";
import AIAutomation from "./pages/services/AIAutomation";
import WebDevelopment from "./pages/services/WebDevelopment";
import ProcessOptimization from "./pages/services/ProcessOptimization";
import MachineLearning from "./pages/services/MachineLearning";
import MobileApps from "./pages/services/MobileApps";
import TechConsulting from "./pages/services/TechConsulting";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sistema-rag" element={<RagSystem />} />
          <Route path="/app-inmobiliaria" element={<RealEstateApp />} />
          <Route path="/servicios/automatizacion-ia" element={<AIAutomation />} />
          <Route path="/servicios/desarrollo-web" element={<WebDevelopment />} />
          <Route path="/servicios/optimizacion-procesos" element={<ProcessOptimization />} />
          <Route path="/servicios/machine-learning" element={<MachineLearning />} />
          <Route path="/servicios/apps-moviles" element={<MobileApps />} />
          <Route path="/servicios/consultoria-tecnologica" element={<TechConsulting />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
