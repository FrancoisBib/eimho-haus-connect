import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PropertyCard from "@/components/PropertyCard";
import { getSections, type Property } from "@/data/properties";
import { useParams } from "react-router-dom";

const toCard = (p: Property) => ({
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

const Listings = () => {
  const { category } = useParams();

  const { housesForSale, housesForRent, availableLand } = getSections();

  const datasetMap: Record<string, Property[]> = {
    "a-vendre": housesForSale,
    "a-louer": housesForRent,
    "terrains": availableLand,
  };

  const titleMap: Record<string, string> = {
    "a-vendre": "Toutes les maisons à vendre",
    "a-louer": "Toutes les maisons à louer",
    "terrains": "Tous les terrains disponibles",
  };

  const subtitleMap: Record<string, string> = {
    "a-vendre": "Parcourez l'ensemble de nos offres de vente",
    "a-louer": "Découvrez toutes nos offres de location",
    "terrains": "Trouvez le terrain idéal pour votre projet",
  };

  const data = datasetMap[category ?? ""] ?? [];
  const title = titleMap[category ?? ""] ?? "Biens immobiliers";
  const subtitle = subtitleMap[category ?? ""] ?? "Parcourez tous nos biens disponibles";
  const properties = data.map(toCard);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-poppins font-bold text-foreground mb-2">{title}</h1>
            <p className="text-muted-foreground">{subtitle}</p>
          </div>

          {properties.length === 0 ? (
            <div className="flex items-center justify-center py-24">
              <div className="text-center">
                <p className="text-lg text-muted-foreground">Aucun bien trouvé pour cette catégorie.</p>
              </div>
            </div>
          ) : (
            <div className="grid items-stretch grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {properties.map((property) => (
                <PropertyCard key={property.id} {...property} />
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Listings;