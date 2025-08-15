import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

type JumiaInlineAdProps = {
  className?: string;
};

const JumiaInlineAd = ({ className = "" }: JumiaInlineAdProps) => {
  const goToOffer = () => {
    window.open("https://www.jumia.com/", "_blank", "noopener,noreferrer");
  };

  return (
    <section className={`my-6 ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="w-full flex flex-col sm:flex-row items-center sm:items-center justify-between gap-3 sm:gap-4 rounded-xl overflow-hidden border border-black/10 bg-[#F68B1E] text-black px-3.5 py-2.5 sm:px-5 sm:py-3.5 shadow-sm">
          {/* Left: Jumia badge and text */}
          <div className="flex items-start sm:items-center gap-3 min-w-0 w-full sm:w-auto">
            <span className="inline-flex items-center justify-center rounded-full bg-white px-2.5 py-1 text-xs sm:text-sm font-extrabold tracking-wider shrink-0">
              JUMIA
            </span>
            <div className="min-w-0">
              <div className="text-sm sm:text-base font-semibold leading-tight break-words whitespace-normal sm:whitespace-nowrap sm:truncate">
                Jumia — tout pour la maison, au meilleur prix
              </div>
              <p className="hidden sm:block text-sm text-black/75 leading-tight">
                Équipez-vous facilement pour vos nouveaux logements.
              </p>
            </div>
          </div>

          {/* Right: CTA */}
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <Button
              aria-label="Découvrir Jumia"
              size="sm"
              className="h-8 sm:h-9 w-full sm:w-auto rounded-lg bg-black text-white hover:bg-black/90"
              onClick={goToOffer}
            >
              <span className="mr-1.5">Découvrir</span>
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JumiaInlineAd;