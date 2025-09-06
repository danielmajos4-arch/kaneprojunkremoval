import Navigation from "./Navigation";
import FloatingCTA from "./FloatingCTA";
import Footer from "./Footer";
import { useScrollToTop } from "@/hooks/useScrollToTop";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  // Automatically scroll to top when route changes
  useScrollToTop();

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="flex-1">
        {children}
      </main>
      <FloatingCTA />
      <Footer />
    </div>
  );
}
