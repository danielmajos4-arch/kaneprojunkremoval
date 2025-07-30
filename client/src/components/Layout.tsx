import Navigation from "./Navigation";
import FloatingCTA from "./FloatingCTA";
import Footer from "./Footer";
import OptimizedAssets from "./OptimizedAssets";
import PerformanceReport from "./PerformanceReport";
import { memo } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = memo(function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      <OptimizedAssets />
      <Navigation />
      <main className="flex-1">
        {children}
      </main>
      <FloatingCTA />
      <Footer />
      <PerformanceReport />
    </div>
  );
});

export default Layout;
