import { ArrowLeft, Filter, Grid, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNavigation from "@/components/BottomNavigation";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "Versace Medusa Chain Necklace",
      brand: "Versace",
      price: "$1,250",
      originalPrice: "$1,500",
      image: "/placeholder.svg",
      discount: "17% OFF",
      rating: 4.8,
    },
    {
      id: 2,
      name: "Prada Saffiano Leather Bag",
      brand: "Prada", 
      price: "$2,890",
      originalPrice: "$3,200",
      image: "/placeholder.svg",
      discount: "10% OFF",
      rating: 4.9,
    },
    {
      id: 3,
      name: "Gucci GG Marmont Belt",
      brand: "Gucci",
      price: "$520",
      originalPrice: "$580",
      image: "/placeholder.svg",
      discount: "10% OFF",
      rating: 4.7,
    },
    {
      id: 4,
      name: "Louis Vuitton Neverfull MM",
      brand: "Louis Vuitton",
      price: "$1,760",
      originalPrice: "$2,000",
      image: "/placeholder.svg",
      discount: "12% OFF",
      rating: 4.8,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate(-1)}
              className="hover:bg-luxury-gold/20"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div>
              <h1 className="text-2xl font-bold">Premium Collection</h1>
              <p className="text-muted-foreground">
                {products.length} products found
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Grid className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-card rounded-lg overflow-hidden shadow-luxury hover:shadow-glow transition-all duration-300 transform hover:scale-105"
            >
              <div className="relative aspect-square bg-gradient-to-br from-muted/50 to-muted overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <Badge className="absolute top-3 left-3 bg-destructive text-destructive-foreground">
                  {product.discount}
                </Badge>
              </div>
              
              <div className="p-4 space-y-3">
                <div>
                  <p className="text-sm text-luxury-gold font-medium">
                    {product.brand}
                  </p>
                  <h3 className="font-semibold text-foreground group-hover:text-luxury-gold transition-colors">
                    {product.name}
                  </h3>
                </div>
                
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-bold text-foreground">
                    {product.price}
                  </span>
                  <span className="text-sm text-muted-foreground line-through">
                    {product.originalPrice}
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <span className="text-luxury-gold">★</span>
                    <span className="text-sm font-medium">{product.rating}</span>
                  </div>
                  <Button size="sm" variant="luxury" className="text-xs">
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
      <BottomNavigation />
      <div className="h-20 md:hidden" />
    </div>
  );
};

export default Products;