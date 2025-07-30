import { useState, useEffect } from "react";
import { MapPin, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/hooks/use-toast";

const LocationSelector = () => {
  const [selectedLocation, setSelectedLocation] = useState("Detect Location");
  const [isDetecting, setIsDetecting] = useState(false);
  const { toast } = useToast();

  const cities = [
    "New York, NY",
    "Los Angeles, CA", 
    "Chicago, IL",
    "Houston, TX",
    "Phoenix, AZ",
    "Philadelphia, PA",
    "San Antonio, TX",
    "San Diego, CA",
    "Dallas, TX",
    "San Jose, CA"
  ];

  const detectLocation = () => {
    setIsDetecting(true);
    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // In a real app, you'd reverse geocode these coordinates
          setSelectedLocation("New York, NY");
          setIsDetecting(false);
          toast({
            title: "Location detected",
            description: "Showing products available in your area",
          });
        },
        (error) => {
          setIsDetecting(false);
          toast({
            title: "Location access denied",
            description: "Please select your location manually",
            variant: "destructive",
          });
        }
      );
    } else {
      setIsDetecting(false);
      toast({
        title: "Geolocation not supported",
        description: "Please select your location manually",
        variant: "destructive",
      });
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="glass" 
          className="flex items-center space-x-2 text-white border-white/20"
        >
          <MapPin className="h-4 w-4" />
          <span className="text-sm">{selectedLocation}</span>
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-luxury-dark border-luxury-gold/20">
        <DropdownMenuItem 
          onClick={detectLocation}
          disabled={isDetecting}
          className="text-luxury-dark-foreground hover:bg-luxury-gold/20"
        >
          <MapPin className="h-4 w-4 mr-2" />
          {isDetecting ? "Detecting..." : "Detect My Location"}
        </DropdownMenuItem>
        <div className="border-t border-luxury-gold/20 my-1" />
        {cities.map((city) => (
          <DropdownMenuItem
            key={city}
            onClick={() => {
              setSelectedLocation(city);
              toast({
                title: "Location updated",
                description: `Now showing products available in ${city}`,
              });
            }}
            className="text-luxury-dark-foreground hover:bg-luxury-gold/20"
          >
            {city}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LocationSelector;