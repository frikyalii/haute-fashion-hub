import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingBag } from "lucide-react";
import productShowcase from "@/assets/product-showcase.jpg";

const products = [
  {
    id: 1,
    name: "Versace Medusa Handbag",
    brand: "Versace",
    price: 2850,
    originalPrice: 3200,
    image: productShowcase,
    isNew: true,
    isSale: true,
  },
  {
    id: 2,
    name: "Prada Re-Edition Bag",
    brand: "Prada",
    price: 1890,
    image: productShowcase,
    isNew: false,
    isSale: false,
  },
  {
    id: 3,
    name: "Gucci Ace Sneakers",
    brand: "Gucci",
    price: 650,
    image: productShowcase,
    isNew: true,
    isSale: false,
  },
  {
    id: 4,
    name: "Hermès Silk Scarf",
    brand: "Hermès",
    price: 425,
    image: productShowcase,
    isNew: false,
    isSale: false,
  },
  {
    id: 5,
    name: "Bottega Veneta Clutch",
    brand: "Bottega Veneta",
    price: 1200,
    originalPrice: 1450,
    image: productShowcase,
    isNew: false,
    isSale: true,
  },
  {
    id: 6,
    name: "Saint Laurent Sunglasses",
    brand: "Saint Laurent",
    price: 380,
    image: productShowcase,
    isNew: true,
    isSale: false,
  },
];

const ProductGrid = () => {
  return (
    <section className="py-16 bg-luxury-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Products</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Curated selection of the finest luxury items from renowned fashion houses
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="group overflow-hidden border-0 shadow-elevation hover:shadow-luxury transition-all duration-300 hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {product.isNew && (
                    <Badge className="bg-luxury-gold text-luxury-gold-foreground">
                      New
                    </Badge>
                  )}
                  {product.isSale && (
                    <Badge variant="destructive">
                      Sale
                    </Badge>
                  )}
                </div>

                {/* Wishlist Button */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 bg-white/90 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <Heart className="h-4 w-4" />
                </Button>

                {/* Quick Add Button */}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button className="w-full bg-luxury-dark hover:bg-luxury-dark/90 text-white">
                    <ShoppingBag className="mr-2 h-4 w-4" />
                    Quick Add
                  </Button>
                </div>
              </div>

              <CardContent className="p-4">
                <div className="space-y-2">
                  <p className="text-sm text-luxury-gold font-medium">{product.brand}</p>
                  <h3 className="font-semibold text-foreground group-hover:text-luxury-gold transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-gold-foreground">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;