import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import ProductGrid from "@/components/ProductGrid";
import BrandShowcase from "@/components/BrandShowcase";
import BottomNavigation from "@/components/BottomNavigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroBanner />
        <ProductGrid />
        <BrandShowcase />
      </main>
      <BottomNavigation />
      {/* Add bottom padding to prevent content from hiding behind bottom navigation on mobile */}
      <div className="h-20 md:hidden" />
    </div>
  );
};

export default Index;
