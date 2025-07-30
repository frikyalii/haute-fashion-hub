import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-luxury-dark text-luxury-dark-foreground mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-luxury bg-clip-text text-transparent">
              LUXE
            </h3>
            <p className="text-muted-foreground text-sm">
              Your premier destination for authentic luxury fashion from the world's most prestigious brands.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-luxury-gold">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-luxury-gold">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-luxury-gold">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-luxury-gold">Quick Links</h4>
            <div className="space-y-2">
              <Button variant="ghost" className="h-auto p-0 justify-start text-muted-foreground hover:text-luxury-gold">
                About Us
              </Button>
              <Button variant="ghost" className="h-auto p-0 justify-start text-muted-foreground hover:text-luxury-gold">
                Brands
              </Button>
              <Button variant="ghost" className="h-auto p-0 justify-start text-muted-foreground hover:text-luxury-gold">
                New Arrivals
              </Button>
              <Button variant="ghost" className="h-auto p-0 justify-start text-muted-foreground hover:text-luxury-gold">
                Sale
              </Button>
            </div>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h4 className="font-semibold text-luxury-gold">Customer Service</h4>
            <div className="space-y-2">
              <Button variant="ghost" className="h-auto p-0 justify-start text-muted-foreground hover:text-luxury-gold">
                Contact Us
              </Button>
              <Button variant="ghost" className="h-auto p-0 justify-start text-muted-foreground hover:text-luxury-gold">
                Size Guide
              </Button>
              <Button variant="ghost" className="h-auto p-0 justify-start text-muted-foreground hover:text-luxury-gold">
                Shipping Info
              </Button>
              <Button variant="ghost" className="h-auto p-0 justify-start text-muted-foreground hover:text-luxury-gold">
                Returns
              </Button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-luxury-gold">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">123 Luxury Ave, Fashion District</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span className="text-sm">hello@luxe.com</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-luxury-gold/20" />
        
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-muted-foreground text-sm">
            © 2024 LUXE. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-muted-foreground">
            <Button variant="ghost" className="h-auto p-0 hover:text-luxury-gold">
              Privacy Policy
            </Button>
            <Button variant="ghost" className="h-auto p-0 hover:text-luxury-gold">
              Terms of Service
            </Button>
            <Button variant="ghost" className="h-auto p-0 hover:text-luxury-gold">
              Cookie Policy
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;