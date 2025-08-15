import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Wifi, Wallet, ArrowUpRight, Sparkles } from "lucide-react";
import { useMemo } from "react";

type AdPopupProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const AdPopup = ({ open, onOpenChange }: AdPopupProps) => {
  const offerUrl = useMemo(() => "https://www.mtn.com/", []);

  const goToOffer = () => {
    window.open(offerUrl, "_blank", "noopener,noreferrer");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-none border-0 bg-transparent p-0 shadow-none">
        <div className="w-[min(92vw,560px)] mx-auto">
          <div className="relative rounded-3xl overflow-hidden bg-[#FFCB00] text-black ring-1 ring-black/10 shadow-2xl">
            {/* Decorative sparkles */}
            <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/25 blur-2xl" />
            <div className="pointer-events-none absolute -left-10 bottom-0 h-24 w-24 rounded-full bg-black/10 blur-xl" />

            {/* Header */}
            <div className="px-6 sm:px-7 pt-6 pb-16 sm:pb-20">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2">
                  {/* MTN chip logo style */}
                  <span className="inline-flex items-center justify-center rounded-full bg-white px-3 py-1 text-sm font-black tracking-wider">
                    MTN
                  </span>
                  <span className="hidden sm:inline-flex items-center rounded-full bg-black/10 px-2.5 py-0.5 text-xs font-semibold">
                    Sponsorisé
                  </span>
                </div>
                <div className="grid place-items-center rounded-xl bg-black/10 text-black size-10 sm:size-12">
                  <Sparkles className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
              </div>

              <h3 className="mt-5 text-2xl leading-tight font-poppins font-extrabold sm:text-3xl">
                Activez l’offre MTN et boostez votre expérience
              </h3>
              <p className="mt-2 text-sm sm:text-base/relaxed text-black/80">
                Profitez d’avantages exclusifs: plus de visibilité, plus de contacts, plus de simplicité avec MTN.
              </p>
            </div>

            {/* Body card */}
            <div className="relative -mt-12 sm:-mt-16 px-4 sm:px-6 pb-6 sm:pb-7">
              <div className="rounded-2xl border border-black/10 bg-white/60 backdrop-blur-md p-4 sm:p-5">
                {/* Feature grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 rounded-md bg-black/10 text-black p-2">
                      <Wifi className="h-4 w-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="font-semibold">Connexion rapide</div>
                      <p className="text-sm text-black/70">Restez joignable et accélérez vos échanges.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-1 rounded-md bg-black/10 text-black p-2">
                      <ShieldCheck className="h-4 w-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="font-semibold">Fiable et sécurisé</div>
                      <p className="text-sm text-black/70">Un réseau solide pour vos démarches.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-1 rounded-md bg-black/10 text-black p-2">
                      <Wallet className="h-4 w-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="font-semibold">Paiements faciles</div>
                      <p className="text-sm text-black/70">Simplifiez vos transactions avec MTN MoMo.</p>
                    </div>
                  </div>
                </div>

                {/* CTA zone */}
                <div className="mt-5 flex flex-col sm:flex-row gap-3">
                  <Button
                    aria-label="Activer l’offre MTN"
                    className="group relative flex-1 rounded-xl bg-black text-white shadow-lg transition-transform duration-200 hover:scale-[1.02] active:scale-[0.99]"
                    onClick={goToOffer}
                  >
                    <span className="mr-2">Activer l’offre MTN</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Button>

                  <Button
                    variant="outline"
                    className="flex-1 rounded-xl border-black/20 bg-white/70 text-black hover:bg-white"
                    onClick={() => onOpenChange(false)}
                  >
                    Plus tard
                  </Button>
                </div>

                <p className="mt-3 text-center text-[11px] uppercase tracking-wider text-black/60">Publicité · MTN</p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AdPopup;