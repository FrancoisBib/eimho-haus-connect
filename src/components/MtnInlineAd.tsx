import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

type MtnInlineAdProps = {
  className?: string;
};

const MtnInlineAd = ({ className = "" }: MtnInlineAdProps) => {
  const goToOffer = () => {
    window.open("https://www.mtn.com/", "_blank", "noopener,noreferrer");
  };

  return (
    <section className={`my-6 ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 rounded-xl overflow-hidden border border-black/10 bg-[#FFCB00] text-black px-4 py-3 sm:px-5 sm:py-3.5 shadow-sm">
          {/* Left: MTN badge and text */}
          <div className="flex items-start sm:items-center gap-3 min-w-0 w-full">
            <span className="inline-flex items-center justify-center rounded-full bg-white px-3 py-1 text-xs sm:text-sm font-black tracking-wider shrink-0">
              MTN
            </span>
            <div className="min-w-0">
              <div className="text-sm sm:text-base font-semibold leading-tight break-words whitespace-normal sm:whitespace-nowrap sm:truncate">
                MTN MoMo — simple, rapide et sécurisé
              </div>
              <p className="hidden sm:block text-sm text-black/75 leading-tight">
                Payez vos réservations de visites en toute simplicité.
              </p>
            </div>
          </div>

          {/* Right: CTA */}
          <div className="flex items-center gap-2 w-full sm:w-auto shrink-0">
            <Button
              aria-label="Découvrir l’offre MTN"
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

export default MtnInlineAd;