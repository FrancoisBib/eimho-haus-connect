import { useState } from "react";
import { Search, MapPin, DollarSign, Filter, Tag } from "lucide-react";
import heroImage from "@/assets/hero-house.jpg";

const SearchHero = () => {
  const [searchData, setSearchData] = useState({
    location: "",
    type: "",
    status: "",
    maxPrice: "",
  });

  const propertyTypes = [
    "Tous les types",
    "Maison",
    "Appartement", 
    "Terrain",
    "Villa",
    "Studio"
  ];

  const handleSearch = () => {
    console.log("Recherche:", searchData);
  };

  return (
    <div className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="mt-12 md:mt-0 text-4xl md:text-6xl font-poppins font-bold text-white mb-4">
          Trouvez votre 
          <span className="block text-accent"> maison idéale</span>
        </h1>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Achetez, vendez et louez des biens immobiliers en toute simplicité. 
          Votre futur chez vous vous attend.
        </p>

        {/* Search Bar */}
        <div className="bg-white rounded-2xl p-6 shadow-large max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
            {/* Location */}
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <input
                type="text"
                placeholder="Ville ou quartier"
                className="search-input pl-10 w-full"
                value={searchData.location}
                onChange={(e) => setSearchData({...searchData, location: e.target.value})}
              />
            </div>

            {/* Property Type */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <select
                className="search-input pl-10 w-full appearance-none"
                value={searchData.type}
                onChange={(e) => setSearchData({...searchData, type: e.target.value})}
              >
                {propertyTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            {/* Statut du bien */}
            <div className="relative">
              <Tag className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <select
                className="search-input pl-10 w-full appearance-none"
                value={searchData.status}
                onChange={(e) => setSearchData({ ...searchData, status: e.target.value })}
              >
                <option value="">Statut du bien</option>
                <option value="À louer">À louer</option>
                <option value="À vendre">À vendre</option>
              </select>
            </div>

            {/* Max Price */}
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <input
                type="text"
                placeholder="Prix max"
                className="search-input pl-10 w-full"
                value={searchData.maxPrice}
                onChange={(e) => setSearchData({...searchData, maxPrice: e.target.value})}
              />
            </div>
          </div>

          {/* Search Button */}
          <button
            onClick={handleSearch}
            className="btn-hero w-full md:w-auto px-8 py-3 flex items-center justify-center gap-2"
          >
            <Search className="h-5 w-5" />
            Rechercher
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchHero;