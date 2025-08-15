import { ExternalLink } from "lucide-react";

const AdBanner = () => {
  return (
    <section className="py-8 bg-gradient-accent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-8 text-center shadow-medium">
          <h3 className="text-2xl font-poppins font-bold text-foreground mb-4">
            Vendez votre bien plus rapidement
          </h3>
          
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Profitez de notre service premium pour mettre en avant votre annonce 
            et atteindre plus d'acheteurs potentiels en 48h seulement.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="btn-hero">
              Booster mon annonce
            </button>
            
            <button className="flex items-center gap-2 text-primary hover:text-primary-glow transition-colors duration-200 font-medium">
              En savoir plus
              <ExternalLink className="h-4 w-4" />
            </button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-8 pt-8 border-t border-border/20">
            <div>
              <div className="text-2xl font-poppins font-bold text-primary">98%</div>
              <div className="text-sm text-muted-foreground">Taux de satisfaction</div>
            </div>
            <div>
              <div className="text-2xl font-poppins font-bold text-secondary">48h</div>
              <div className="text-sm text-muted-foreground">Délai moyen</div>
            </div>
            <div>
              <div className="text-2xl font-poppins font-bold text-accent">+50%</div>
              <div className="text-sm text-muted-foreground">De visibilité</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdBanner;