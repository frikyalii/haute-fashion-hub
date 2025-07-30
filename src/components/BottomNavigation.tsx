import { Home, Search, ShoppingBag, User, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const BottomNavigation = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-t">
      <div className="flex items-center justify-around py-2">
        <Button variant="ghost" size="sm" className="flex flex-col gap-1 h-auto py-2">
          <Home className="h-5 w-5" />
          <span className="text-xs">Home</span>
        </Button>
        <Button variant="ghost" size="sm" className="flex flex-col gap-1 h-auto py-2">
          <Search className="h-5 w-5" />
          <span className="text-xs">Search</span>
        </Button>
        <Button variant="ghost" size="sm" className="flex flex-col gap-1 h-auto py-2 relative">
          <ShoppingBag className="h-5 w-5" />
          <span className="text-xs">Cart</span>
          <Badge className="absolute -top-1 -right-1 h-4 w-4 rounded-full p-0 flex items-center justify-center text-xs bg-luxury-gold text-luxury-gold-foreground">
            3
          </Badge>
        </Button>
        <Button variant="ghost" size="sm" className="flex flex-col gap-1 h-auto py-2">
          <Heart className="h-5 w-5" />
          <span className="text-xs">Wishlist</span>
        </Button>
        <Button variant="ghost" size="sm" className="flex flex-col gap-1 h-auto py-2">
          <User className="h-5 w-5" />
          <span className="text-xs">Profile</span>
        </Button>
      </div>
    </nav>
  );
};

export default BottomNavigation;