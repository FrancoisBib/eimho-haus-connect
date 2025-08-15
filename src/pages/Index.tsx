import Navigation from "@/components/Navigation";
import SearchHero from "@/components/SearchHero";
import PropertySection from "@/components/PropertySection";
import AdBanner from "@/components/AdBanner";
import ChatBot from "@/components/ChatBot";

// Import images
import apartmentImage from "@/assets/apartment-1.jpg";
import houseImage from "@/assets/house-1.jpg";
import landImage from "@/assets/land-1.jpg";

const Index = () => {
  // Mock data for properties
  const housesForSale = [
    {
      id: "1",
      image: houseImage,
      price: "450 000 €",
      title: "Belle maison familiale avec jardin",
      location: "Toulouse, Haute-Garonne",
      type: "Maison",
      surface: "150 m²",
      bedrooms: 4,
      bathrooms: 2,
      isRental: false
    },
    {
      id: "2", 
      image: apartmentImage,
      price: "280 000 €",
      title: "Appartement moderne en centre-ville",
      location: "Lyon, Rhône",
      type: "Appartement",
      surface: "85 m²",
      bedrooms: 3,
      bathrooms: 1,
      isRental: false
    },
    {
      id: "3",
      image: houseImage,
      price: "650 000 €",
      title: "Villa contemporaine avec piscine", 
      location: "Nice, Alpes-Maritimes",
      type: "Villa",
      surface: "200 m²",
      bedrooms: 5,
      bathrooms: 3,
      isRental: false
    },
    {
      id: "4",
      image: apartmentImage,
      price: "195 000 €",
      title: "Studio lumineux proche métro",
      location: "Paris, Île-de-France", 
      type: "Studio",
      surface: "35 m²",
      bathrooms: 1,
      isRental: false
    }
  ];

  const housesForRent = [
    {
      id: "5",
      image: apartmentImage,
      price: "1 200 €/mois",
      title: "Appartement meublé T3",
      location: "Bordeaux, Gironde",
      type: "Appartement", 
      surface: "75 m²",
      bedrooms: 2,
      bathrooms: 1,
      isRental: true
    },
    {
      id: "6",
      image: houseImage,
      price: "1 800 €/mois", 
      title: "Maison avec terrasse",
      location: "Nantes, Loire-Atlantique",
      type: "Maison",
      surface: "120 m²",
      bedrooms: 3,
      bathrooms: 2,
      isRental: true
    },
    {
      id: "7",
      image: apartmentImage,
      price: "900 €/mois",
      title: "Appartement récent T2",
      location: "Montpellier, Hérault",
      type: "Appartement",
      surface: "55 m²", 
      bedrooms: 1,
      bathrooms: 1,
      isRental: true
    },
    {
      id: "8",
      image: houseImage,
      price: "2 200 €/mois",
      title: "Villa avec jardin privé",
      location: "Aix-en-Provence, Bouches-du-Rhône",
      type: "Villa",
      surface: "180 m²",
      bedrooms: 4, 
      bathrooms: 2,
      isRental: true
    }
  ];

  const availableLand = [
    {
      id: "9",
      image: landImage,
      price: "85 000 €",
      title: "Terrain constructible viabilisé",
      location: "Rennes, Ille-et-Vilaine",
      type: "Terrain",
      surface: "800 m²"
    },
    {
      id: "10", 
      image: landImage,
      price: "120 000 €",
      title: "Grande parcelle en zone pavillonnaire",
      location: "Orléans, Loiret",
      type: "Terrain",
      surface: "1200 m²"
    },
    {
      id: "11",
      image: landImage,
      price: "65 000 €",
      title: "Terrain plat avec CU accordé", 
      location: "Dijon, Côte-d'Or",
      type: "Terrain",
      surface: "600 m²"
    },
    {
      id: "12",
      image: landImage,
      price: "95 000 €",
      title: "Parcelle en lotissement neuf",
      location: "Clermont-Ferrand, Puy-de-Dôme",
      type: "Terrain", 
      surface: "900 m²"
    }
  ];

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
