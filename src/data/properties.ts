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
    name: "École Primaire Jean Moulin",
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
    price: "450 000 €",
    title: "Belle maison familiale avec jardin",
    location: "Toulouse, Haute-Garonne",
    type: "Maison",
    surface: "150 m²",
    bedrooms: 4,
    bathrooms: 2,
    isRental: false,
    ownerName: "Jean Dupont",
    lat: 43.6045,
    lng: 1.4440,
    surroundings: mkStructures(1),
    description: "Charmante maison familiale avec grand jardin arboré, proche des commodités et transports."
  },
  {
    id: "2",
    images: [apartmentImage, apartmentImage, apartmentImage],
    price: "280 000 €",
    title: "Appartement moderne en centre-ville",
    location: "Lyon, Rhône",
    type: "Appartement",
    surface: "85 m²",
    bedrooms: 3,
    bathrooms: 1,
    isRental: false,
    ownerName: "Sophie Martin",
    lat: 45.7640,
    lng: 4.8357,
    surroundings: mkStructures(2),
    description: "Appartement lumineux au coeur de la ville, idéal pour une vie urbaine dynamique."
  },
  {
    id: "3",
    images: [houseImage, houseImage, houseImage],
    price: "650 000 €",
    title: "Villa contemporaine avec piscine",
    location: "Nice, Alpes-Maritimes",
    type: "Villa",
    surface: "200 m²",
    bedrooms: 5,
    bathrooms: 3,
    isRental: false,
    ownerName: "Alain Bernard",
    lat: 43.7102,
    lng: 7.2620,
    surroundings: mkStructures(3),
    description: "Villa moderne avec piscine et belles prestations, proche des plages."
  },
  {
    id: "4",
    images: [apartmentImage, apartmentImage],
    price: "195 000 €",
    title: "Studio lumineux proche métro",
    location: "Paris, Île-de-France",
    type: "Studio",
    surface: "35 m²",
    bathrooms: 1,
    isRental: false,
    ownerName: "Camille Laurent",
    lat: 48.8566,
    lng: 2.3522,
    surroundings: mkStructures(4),
    description: "Studio optimisé et lumineux, à deux pas du métro et des commerces."
  },
  // Rentals
  {
    id: "5",
    images: [apartmentImage, apartmentImage],
    price: "1 200 €/mois",
    title: "Appartement meublé T3",
    location: "Bordeaux, Gironde",
    type: "Appartement",
    surface: "75 m²",
    bedrooms: 2,
    bathrooms: 1,
    isRental: true,
    ownerName: "Pierre Leblanc",
    lat: 44.8378,
    lng: -0.5792,
    surroundings: mkStructures(5),
    description: "T3 meublé, au calme, proche tram et services."
  },
  {
    id: "6",
    images: [houseImage, houseImage],
    price: "1 800 €/mois",
    title: "Maison avec terrasse",
    location: "Nantes, Loire-Atlantique",
    type: "Maison",
    surface: "120 m²",
    bedrooms: 3,
    bathrooms: 2,
    isRental: true,
    ownerName: "Lucie Perrin",
    lat: 47.2184,
    lng: -1.5536,
    surroundings: mkStructures(6),
    description: "Maison agréable avec terrasse et belle exposition."
  },
  {
    id: "7",
    images: [apartmentImage],
    price: "900 €/mois",
    title: "Appartement récent T2",
    location: "Montpellier, Hérault",
    type: "Appartement",
    surface: "55 m²",
    bedrooms: 1,
    bathrooms: 1,
    isRental: true,
    ownerName: "Nadia Cohen",
    lat: 43.6110,
    lng: 3.8767,
    surroundings: mkStructures(7),
    description: "T2 récent, balcon, résidence sécurisée."
  },
  {
    id: "8",
    images: [houseImage, houseImage],
    price: "2 200 €/mois",
    title: "Villa avec jardin privé",
    location: "Aix-en-Provence, Bouches-du-Rhône",
    type: "Villa",
    surface: "180 m²",
    bedrooms: 4,
    bathrooms: 2,
    isRental: true,
    ownerName: "Thomas Garcia",
    lat: 43.5297,
    lng: 5.4474,
    surroundings: mkStructures(8),
    description: "Villa spacieuse avec jardin clos et prestations de qualité."
  },
  // Land
  {
    id: "9",
    images: [landImage],
    price: "85 000 €",
    title: "Terrain constructible viabilisé",
    location: "Rennes, Ille-et-Vilaine",
    type: "Terrain",
    surface: "800 m²",
    ownerName: "SCI Armor",
    lat: 48.1173,
    lng: -1.6778,
    surroundings: mkStructures(9),
    description: "Terrain prêt à construire, quartier résidentiel."
  },
  {
    id: "10",
    images: [landImage],
    price: "120 000 €",
    title: "Grande parcelle en zone pavillonnaire",
    location: "Orléans, Loiret",
    type: "Terrain",
    surface: "1200 m²",
    ownerName: "SCI Val de Loire",
    lat: 47.9029,
    lng: 1.9093,
    surroundings: mkStructures(10),
    description: "Belle parcelle plane, environnement calme."
  },
  {
    id: "11",
    images: [landImage],
    price: "65 000 €",
    title: "Terrain plat avec CU accordé",
    location: "Dijon, Côte-d'Or",
    type: "Terrain",
    surface: "600 m²",
    ownerName: "SCI Côte d'Or",
    lat: 47.3220,
    lng: 5.0415,
    surroundings: mkStructures(11),
    description: "CU accordé, accès facile, proche commodités."
  },
  {
    id: "12",
    images: [landImage],
    price: "95 000 €",
    title: "Parcelle en lotissement neuf",
    location: "Clermont-Ferrand, Puy-de-Dôme",
    type: "Terrain",
    surface: "900 m²",
    ownerName: "SCI Auvergne",
    lat: 45.7772,
    lng: 3.0870,
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