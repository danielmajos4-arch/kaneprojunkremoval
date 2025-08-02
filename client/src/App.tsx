import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from "react";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import AboutPage from "./pages/AboutPage";
import ServiceAreasPage from "./pages/ServiceAreasPage";
import NotFound from "@/pages/not-found";
import { initializePerformanceOptimizations } from "@/utils/performance";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/services" component={ServicesPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/areas" component={ServiceAreasPage} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  // Initialize performance optimizations on app mount
  useEffect(() => {
    initializePerformanceOptimizations();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
