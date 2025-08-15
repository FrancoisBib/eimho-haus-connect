import PropertyCard from "./PropertyCard";
import { ChevronRight } from "lucide-react";

interface PropertySectionProps {
  title: string;
  subtitle: string;
  properties: Array<{
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
  }>;
}

const PropertySection = ({ title, subtitle, properties }: PropertySectionProps) => {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-poppins font-bold text-foreground mb-2">
              {title}
            </h2>
            <p className="text-muted-foreground">
              {subtitle}
            </p>
          </div>
          
          <button className="hidden md:flex items-center gap-2 text-primary hover:text-primary-glow transition-colors duration-200 font-medium">
            Voir tout
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        {/* Properties Grid */}
        <div className="grid items-stretch grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {properties.map((property) => (
            <PropertyCard
              key={property.id}
              {...property}
            />
          ))}
        </div>

        {/* Mobile See More Button */}
        <div className="mt-8 text-center md:hidden">
          <button className="btn-hero">
            Voir plus de biens
          </button>
        </div>
      </div>
    </section>
  );
};

export default PropertySection;