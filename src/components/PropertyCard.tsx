import { Heart, MapPin, Bed, Bath, Square } from "lucide-react";
import { useState } from "react";

interface PropertyCardProps {
  id: string;
  image: string;
  price: string;
  title: string;
  location: string;
  type: string;
  surface: string;
  bedrooms?: number;
  bathrooms?: number;
  isRental?: boolean;
}

const PropertyCard = ({ 
  id, 
  image, 
  price, 
  title, 
  location, 
  type, 
  surface, 
  bedrooms, 
  bathrooms, 
  isRental = false 
}: PropertyCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="property-card group cursor-pointer">
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Favorite Button */}
        <button
          onClick={toggleFavorite}
          className={`absolute top-3 right-3 p-2 rounded-full transition-all duration-200 ${
            isFavorite 
              ? "bg-red-500 text-white" 
              : "bg-white/80 text-foreground hover:bg-white"
          }`}
          aria-label="Ajouter aux favoris"
        >
          <Heart className={`h-4 w-4 ${isFavorite ? "fill-current" : ""}`} />
        </button>

        {/* Type Badge */}
        <div className="absolute top-3 left-3">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            isRental 
              ? "bg-secondary text-secondary-foreground" 
              : "bg-primary text-primary-foreground"
          }`}>
            {isRental ? "À louer" : "À vendre"}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Price */}
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-poppins font-semibold text-primary">
            {price}
          </h3>
          <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded">
            {type}
          </span>
        </div>

        {/* Title */}
        <h4 className="font-medium text-foreground mb-2 line-clamp-2">
          {title}
        </h4>

        {/* Location */}
        <div className="flex items-center gap-1 text-muted-foreground mb-3">
          <MapPin className="h-4 w-4" />
          <span className="text-sm">{location}</span>
        </div>

        {/* Property Details */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Square className="h-4 w-4" />
            <span>{surface}</span>
          </div>
          
          {bedrooms && (
            <div className="flex items-center gap-1">
              <Bed className="h-4 w-4" />
              <span>{bedrooms} ch</span>
            </div>
          )}
          
          {bathrooms && (
            <div className="flex items-center gap-1">
              <Bath className="h-4 w-4" />
              <span>{bathrooms} sdb</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;