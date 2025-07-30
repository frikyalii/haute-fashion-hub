import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import brandLogos from "@/assets/brand-logos.jpg";

const brands = [
  { name: "Versace", description: "Italian luxury and glamour" },
  { name: "Prada", description: "Innovative luxury since 1913" },
  { name: "Gucci", description: "Contemporary Italian luxury" },
  { name: "Hermès", description: "French artisanal excellence" },
  { name: "Bottega Veneta", description: "Intrecciato luxury craftsmanship" },
  { name: "Saint Laurent", description: "Parisian elegance and rock chic" },
];

const BrandShowcase = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Premium Brands</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Shop from the world's most prestigious luxury fashion houses
          </p>
        </div>

        {/* Brand Logos Banner */}
        <div className="mb-12 relative overflow-hidden rounded-2xl">
          <div 
            className="h-32 md:h-48 bg-cover bg-center bg-no-repeat flex items-center justify-center"
            style={{ backgroundImage: `url(${brandLogos})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-luxury-dark/80 to-luxury-dark/40" />
            <div className="relative z-10 text-center text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">Exclusive Collections</h3>
              <p className="text-white/90">From the most coveted luxury brands</p>
            </div>
          </div>
        </div>

        {/* Brand Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {brands.map((brand, index) => (
            <Card key={brand.name} className="group hover:shadow-luxury transition-all duration-300 hover:-translate-y-1 border-border/50">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-luxury-gold/10 rounded-full flex items-center justify-center group-hover:bg-luxury-gold/20 transition-colors">
                  <span className="text-2xl font-bold text-luxury-gold">
                    {brand.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-luxury-gold transition-colors">
                  {brand.name}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {brand.description}
                </p>
                <Button 
                  variant="ghost" 
                  className="text-luxury-gold hover:bg-luxury-gold hover:text-luxury-gold-foreground"
                >
                  Explore Collection
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="luxury" size="lg">
            View All Brands
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BrandShowcase;