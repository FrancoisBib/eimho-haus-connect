import apartmentImage from "@/assets/apartment-1.jpg";
import houseImage from "@/assets/house-1.jpg";
import landImage from "@/assets/land-1.jpg";

export interface SurroundingStructure {
  id: string;
  name: string;
  type: "School" | "Hospital" | "Shopping" | "Transport" | "Park" | "Gym" | "Restaurant" | "Other";
  description: string;
  distanceMeters?: number;
}

export interface Property {
  id: string;
  images: string[];
  price: string;
  title: string;
  location: string;
  type: string;
  surface: string;
  bedrooms?: number;
  bathrooms?: number;
  isRental?: boolean;
  ownerName: string;
  lat: number;
  lng: number;
  surroundings: SurroundingStructure[];
  description?: string;
}

const mkStructures = (seed: number): SurroundingStructure[] => [
  {
    id: `s-${seed}-1`,
    name: "École Primaire",
    type: "School",
    description: "École réputée à proximité immédiate",
    distanceMeters: 450,
  },
  {
    id: `s-${seed}-2`,
    name: "Centre Commercial",
    type: "Shopping",
    description: "Commerces, restaurants et services",
    distanceMeters: 900,
  },
  {
    id: `s-${seed}-3`,
    name: "Parc Municipal",
    type: "Park",
    description: "Grand espace vert pour loisirs et détente",
    distanceMeters: 650,
  },
  {
    id: `s-${seed}-4`,
    name: "Arrêt de Bus",
    type: "Transport",
    description: "Ligne directe vers le centre-ville",
    distanceMeters: 200,
  },
];

const properties: Property[] = [
  {
    id: "1",
    images: [houseImage, houseImage, houseImage],
    price: "450 000 F CFA",
    title: "Belle maison familiale avec jardin",
    location: "Brazzaville, Poto-Poto",
    type: "Maison",
    surface: "150 m²",
    bedrooms: 4,
    bathrooms: 2,
    isRental: false,
    ownerName: "Jean Dupont",
    lat: -4.262,
    lng: 15.247,
    surroundings: mkStructures(1),
    description: "Charmante maison familiale avec grand jardin arboré, proche des commodités et transports."
  },
  {
    id: "2",
    images: [apartmentImage, apartmentImage, apartmentImage],
    price: "280 000 F CFA",
    title: "Appartement moderne en centre-ville",
    location: "Brazzaville, Bacongo",
    type: "Appartement",
    surface: "85 m²",
    bedrooms: 3,
    bathrooms: 1,
    isRental: false,
    ownerName: "Sophie Martin",
    lat: -4.3,
    lng: 15.27,
    surroundings: mkStructures(2),
    description: "Appartement lumineux au coeur de la ville, idéal pour une vie urbaine dynamique."
  },
  {
    id: "3",
    images: [houseImage, houseImage, houseImage],
    price: "650 000 F CFA",
    title: "Villa contemporaine avec piscine",
    location: "Pointe-Noire, Côte Sauvage",
    type: "Villa",
    surface: "200 m²",
    bedrooms: 5,
    bathrooms: 3,
    isRental: false,
    ownerName: "Alain Bernard",
    lat: -4.794,
    lng: 11.853,
    surroundings: mkStructures(3),
    description: "Villa moderne avec piscine et belles prestations, proche des plages."
  },
  {
    id: "4",
    images: [apartmentImage, apartmentImage],
    price: "195 000 F CFA",
    title: "Studio lumineux proche transport",
    location: "Brazzaville, Talangaï",
    type: "Studio",
    surface: "35 m²",
    bathrooms: 1,
    isRental: false,
    ownerName: "Camille Laurent",
    lat: -4.202,
    lng: 15.317,
    surroundings: mkStructures(4),
    description: "Studio optimisé et lumineux, à deux pas des transports et des commerces."
  },
  // Rentals
  {
    id: "5",
    images: [apartmentImage, apartmentImage],
    price: "1 200 F CFA/mois",
    title: "Appartement meublé T3",
    location: "Pointe-Noire, Tié-Tié",
    type: "Appartement",
    surface: "75 m²",
    bedrooms: 2,
    bathrooms: 1,
    isRental: true,
    ownerName: "Pierre Leblanc",
    lat: -4.788,
    lng: 11.873,
    surroundings: mkStructures(5),
    description: "T3 meublé, au calme, proche transports et services."
  },
  {
    id: "6",
    images: [houseImage, houseImage],
    price: "1 800 F CFA/mois",
    title: "Maison avec terrasse",
    location: "Brazzaville, Moungali",
    type: "Maison",
    surface: "120 m²",
    bedrooms: 3,
    bathrooms: 2,
    isRental: true,
    ownerName: "Lucie Perrin",
    lat: -4.271,
    lng: 15.251,
    surroundings: mkStructures(6),
    description: "Maison agréable avec terrasse et belle exposition."
  },
  {
    id: "7",
    images: [apartmentImage],
    price: "900 F CFA/mois",
    title: "Appartement récent T2",
    location: "Dolisie, Loubomo",
    type: "Appartement",
    surface: "55 m²",
    bedrooms: 1,
    bathrooms: 1,
    isRental: true,
    ownerName: "Nadia Cohen",
    lat: -4.2,
    lng: 12.668,
    surroundings: mkStructures(7),
    description: "T2 récent, balcon, résidence sécurisée."
  },
  {
    id: "8",
    images: [houseImage, houseImage],
    price: "2 200 F CFA/mois",
    title: "Villa avec jardin privé",
    location: "Oyo, Centre",
    type: "Villa",
    surface: "180 m²",
    bedrooms: 4,
    bathrooms: 2,
    isRental: true,
    ownerName: "Thomas Garcia",
    lat: -1.374,
    lng: 15.117,
    surroundings: mkStructures(8),
    description: "Villa spacieuse avec jardin clos et prestations de qualité."
  },
  // Land
  {
    id: "9",
    images: [landImage],
    price: "85 000 F CFA",
    title: "Terrain constructible viabilisé",
    location: "Nkayi, Kingouari",
    type: "Terrain",
    surface: "800 m²",
    ownerName: "SCI Armor",
    lat: -4.186,
    lng: 13.286,
    surroundings: mkStructures(9),
    description: "Terrain prêt à construire, quartier résidentiel."
  },
  {
    id: "10",
    images: [landImage],
    price: "120 000 F CFA",
    title: "Grande parcelle en zone pavillonnaire",
    location: "Owando, Centre",
    type: "Terrain",
    surface: "1200 m²",
    ownerName: "SCI Val de Loire",
    lat: -0.482,
    lng: 15.9,
    surroundings: mkStructures(10),
    description: "Belle parcelle plane, environnement calme."
  },
  {
    id: "11",
    images: [landImage],
    price: "65 000 F CFA",
    title: "Terrain plat avec CU accordé",
    location: "Impfondo, Centre",
    type: "Terrain",
    surface: "600 m²",
    ownerName: "SCI Côte d'Or",
    lat: 1.617,
    lng: 18.057,
    surroundings: mkStructures(11),
    description: "CU accordé, accès facile, proche commodités."
  },
  {
    id: "12",
    images: [landImage],
    price: "95 000 F CFA",
    title: "Parcelle en lotissement neuf",
    location: "Kintélé, Brazzaville",
    type: "Terrain",
    surface: "900 m²",
    ownerName: "SCI Auvergne",
    lat: -4.132,
    lng: 15.222,
    surroundings: mkStructures(12),
    description: "Lotissement récent, viabilisation en bordure."
  },
];

export const getAllProperties = (): Property[] => properties;

export const getPropertyById = (id: string): Property | undefined =>
  properties.find((p) => p.id === id);

export const getSections = () => {
  const all = getAllProperties();
  const housesForSale = all.filter((p) => !p.isRental && p.type !== "Terrain");
  const housesForRent = all.filter((p) => p.isRental);
  const availableLand = all.filter((p) => p.type === "Terrain");
  return { housesForSale, housesForRent, availableLand };
};