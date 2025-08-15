import Navigation from "@/components/Navigation";
import SearchHero from "@/components/SearchHero";
import PropertySection from "@/components/PropertySection";
import AdBanner from "@/components/AdBanner";
import ChatBot from "@/components/ChatBot";

import { getSections } from "@/data/properties";

const Index = () => {
  const { housesForSale: saleProps, housesForRent: rentProps, availableLand: landProps } = getSections();

  const toCard = (p: any) => ({
    id: p.id,
    image: p.images[0],
    price: p.price,
    title: p.title,
    location: p.location,
    type: p.type,
    surface: p.surface,
    bedrooms: p.bedrooms,
    bathrooms: p.bathrooms,
    isRental: p.isRental,
  });

  const housesForSale = saleProps.map(toCard);
  const housesForRent = rentProps.map(toCard);
  const availableLand = landProps.map(toCard);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <SearchHero />
      
      <PropertySection 
        title="Maisons à vendre"
        subtitle="Découvrez nos meilleures offres de maisons"
        properties={housesForSale}
      />
      
      <AdBanner />
      
      <PropertySection
        title="Maisons à louer" 
        subtitle="Trouvez votre location idéale"
        properties={housesForRent}
      />
      
      <PropertySection
        title="Terrains disponibles"
        subtitle="Construisez la maison de vos rêves"
        properties={availableLand}
      />
      
      <ChatBot />
    </div>
  );
};

export default Index;
