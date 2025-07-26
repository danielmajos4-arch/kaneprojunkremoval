import Navigation from "./Navigation";
import FloatingCTA from "./FloatingCTA";
import Footer from "./Footer";
import ServiceAreaMap from "./ServiceAreaMap";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="flex-1">
        {children}
      </main>
      <ServiceAreaMap />
      <FloatingCTA />
      <Footer />
    </div>
  );
}
