
import { HeroSection } from "@/components/HeroSection";
import { ProductGrid } from "@/components/ProductGrid";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Recommended For You
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of premium products, tailored to your interests
            and preferences.
          </p>
        </div>
        <ProductGrid />
      </div>
    </div>
  );
};

export default Index;
