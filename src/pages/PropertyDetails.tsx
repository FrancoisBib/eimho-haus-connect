import { useMemo, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getPropertyById } from "@/data/properties";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AdBanner from "@/components/AdBanner";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Calendar } from "@/components/ui/calendar";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  MapPin,
  Calendar as CalendarIcon,
  Clock,
  CreditCard,
  Info,
  Flag,
  Bed,
  Bath,
  Square,
  Heart,
  Share2,
  Copy,
  Link as LinkIcon,
  Mail,
  MessageCircle,
} from "lucide-react";
import { toast } from "sonner";

const timeslots = ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00"];

const paymentMethods = [
  { id: "momo", label: "Mobile Money" },
  { id: "card", label: "Carte Bancaire" },
  { id: "cash", label: "Espèces à la visite" },
];

const PropertyDetails = () => {
  const { id } = useParams();
  const property = useMemo(() => (id ? getPropertyById(id) : undefined), [id]);

  // Reservation flow
  const [reserveOpen, setReserveOpen] = useState(false);
  const [reserveStep, setReserveStep] = useState<1 | 2 | 3>(1);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string | undefined>(undefined);
  const [selectedPay, setSelectedPay] = useState<string | undefined>(undefined);

  // Exact location gating
  const [locationDialogOpen, setLocationDialogOpen] = useState(false);
  const [locationPay, setLocationPay] = useState<string | undefined>(undefined);
  const [exactUnlocked, setExactUnlocked] = useState(false);

  // Surroundings modal
  const [surroundOpen, setSurroundOpen] = useState(false);

  // Report owner
  const [reportReason, setReportReason] = useState("fraud");
  const [reportOpen, setReportOpen] = useState(false);

  // Favorite / Save
  const [isFavorite, setIsFavorite] = useState(false);
  useEffect(() => {
    try {
      const raw = localStorage.getItem("favorites") || "[]";
      const arr = JSON.parse(raw) as string[];
      setIsFavorite(arr.includes(property.id));
    } catch {
      // ignore parse errors
    }
  }, [property.id]);

  // Scroll to top on page mount so details open at the top
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const toggleFavorite = () => {
    try {
      const raw = localStorage.getItem("favorites") || "[]";
      const arr: string[] = JSON.parse(raw);
      const exists = arr.includes(property.id);
      const next = exists ? arr.filter((x) => x !== property.id) : [...arr, property.id];
      localStorage.setItem("favorites", JSON.stringify(next));
      setIsFavorite(!exists);
      toast.success(exists ? "Retiré des favoris" : "Ajouté aux favoris");
    } catch {
      setIsFavorite((v) => !v);
    }
  };

  if (!property) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <div className="max-w-5xl mx-auto p-6 space-y-4">
          <h1 className="text-2xl font-semibold">Bien introuvable</h1>
          <p className="text-muted-foreground">
            Le bien demandé n'existe pas ou a été retiré.
          </p>
          <Link to="/" className="inline-block">
            <Button>Retour à l'accueil</Button>
          </Link>
        </div>
      </div>
    );
  }

  const {
    images,
    title,
    price,
    location,
    type,
    surface,
    bedrooms,
    bathrooms,
    ownerName,
    lat,
    lng,
    surroundings,
    description,
  } = property;

  const bboxDelta = 0.01;
  const bbox = `${(lng - bboxDelta).toFixed(6)},${(lat - bboxDelta).toFixed(
    6
  )},${(lng + bboxDelta).toFixed(6)},${(lat + bboxDelta).toFixed(6)}`;
  const embedApprox = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik`;
  const embedExact = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat},${lng}`;

  const resetReservation = () => {
    setReserveStep(1);
    setSelectedDate(undefined);
    setSelectedTime(undefined);
    setSelectedPay(undefined);
  };

  const confirmReservation = () => {
    const when = selectedDate ? selectedDate.toLocaleDateString() : "";
    toast.success("Visite réservée", {
      description: `${when} à ${selectedTime} • Paiement: ${
        paymentMethods.find((p) => p.id === selectedPay)?.label ?? ""
      }`,
    });
    setReserveOpen(false);
    resetReservation();
  };

  const confirmUnlockLocation = () => {
    setExactUnlocked(true);
    setLocationDialogOpen(false);
    toast.success("Localisation exacte débloquée");
  };

  // Share helpers
  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareMessage = `${title} • ${price} • ${location} - ${shareUrl}`;

  const shareNative = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title, text: `${title} • ${price}`, url: shareUrl });
      } catch {
        // user cancelled or unsupported
      }
    } else {
      toast.info("Partage système non disponible");
    }
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      toast.success("Lien copié");
    } catch {
      toast.error("Impossible de copier le lien");
    }
  };

  const openShare = (url: string) => window.open(url, "_blank", "noopener,noreferrer");
  const shareWhatsApp = () => openShare(`https://wa.me/?text=${encodeURIComponent(shareMessage)}`);
  const shareTwitter = () =>
    openShare(
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(
        `${title} • ${price}`
      )}`
    );
  const shareFacebook = () =>
    openShare(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`);
  const shareEmail = () =>
    openShare(
      `mailto:?subject=${encodeURIComponent(`À propos: ${title}`)}&body=${encodeURIComponent(shareMessage)}`
    );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8">
        

        {/* Title and price */}
        <div className="w-full lg:max-w-4xl flex flex-col md:flex-row md:items-end md:justify-between gap-2 mb-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold font-poppins">
              {title}
            </h1>
            <div className="flex items-center gap-2 text-muted-foreground mt-1">
              <MapPin className="h-4 w-4" />
              <span>{location}</span>
            </div>
          </div>
          <div className="text-primary text-2xl font-bold">{price}</div>
        </div>

        {/* Image carousel */}
        <div className="relative w-full lg:max-w-4xl">
          <Carousel className="w-full">
            <CarouselContent>
              {images.map((src, idx) => (
                <CarouselItem key={idx}>
                  <div className="aspect-[16/9] w-full overflow-hidden rounded-lg bg-muted">
                    <img
                      src={src}
                      alt={`${title} - image ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 top-1/2 -translate-y-1/2 bg-background/70 hover:bg-background shadow-md" />
            <CarouselNext className="right-4 top-1/2 -translate-y-1/2 bg-background/70 hover:bg-background shadow-md" />
          </Carousel>
        </div>

        {/* Summary chips */}
        <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-1 bg-muted px-3 py-1 rounded-full">
            <Square className="h-4 w-4" /> {surface}
          </span>
          {typeof bedrooms === "number" && (
            <span className="inline-flex items-center gap-1 bg-muted px-3 py-1 rounded-full">
              <Bed className="h-4 w-4" /> {bedrooms} ch
            </span>
          )}
          {typeof bathrooms === "number" && (
            <span className="inline-flex items-center gap-1 bg-muted px-3 py-1 rounded-full">
              <Bath className="h-4 w-4" /> {bathrooms} sdb
            </span>
          )}
          <span className="inline-flex items-center gap-1 bg-muted px-3 py-1 rounded-full">
            {type}
          </span>
        </div>

        {/* Actions row */}
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          {/* Réserver une visite */}
          <Dialog
            open={reserveOpen}
            onOpenChange={(o) => {
              setReserveOpen(o);
              if (!o) resetReservation();
            }}
          >
            <DialogTrigger asChild>
              <Button className="w-full sm:w-auto">
                <CalendarIcon className="h-4 w-4" /> Réserver une visite
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Réserver une visite</DialogTitle>
                <DialogDescription>
                  Sélectionnez une date, une heure, puis la méthode de paiement.
                </DialogDescription>
              </DialogHeader>

              {reserveStep === 1 && (
                <div className="space-y-4">
                  <h4 className="font-medium">
                    <CalendarIcon className="inline h-4 w-4 mr-2" /> Choisissez
                    une date
                  </h4>
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    fromDate={new Date()}
                  />
                  <DialogFooter>
                    <Button variant="secondary" onClick={() => setReserveOpen(false)}>
                      Annuler
                    </Button>
                    <Button disabled={!selectedDate} onClick={() => setReserveStep(2)}>
                      Suivant
                    </Button>
                  </DialogFooter>
                </div>
              )}

              {reserveStep === 2 && (
                <div className="space-y-4">
                  <h4 className="font-medium">
                    <Clock className="inline h-4 w-4 mr-2" /> Sélectionnez une
                    heure
                  </h4>
                  <div className="grid grid-cols-3 gap-2">
                    {timeslots.map((t) => (
                      <Button
                        key={t}
                        variant={selectedTime === t ? "default" : "outline"}
                        onClick={() => setSelectedTime(t)}
                      >
                        {t}
                      </Button>
                    ))}
                  </div>
                  <DialogFooter>
                    <Button variant="secondary" onClick={() => setReserveStep(1)}>
                      Retour
                    </Button>
                    <Button disabled={!selectedTime} onClick={() => setReserveStep(3)}>
                      Suivant
                    </Button>
                  </DialogFooter>
                </div>
              )}

              {reserveStep === 3 && (
                <div className="space-y-4">
                  <h4 className="font-medium">
                    <CreditCard className="inline h-4 w-4 mr-2" /> Méthode de
                    paiement
                  </h4>
                  <RadioGroup value={selectedPay} onValueChange={setSelectedPay}>
                    {paymentMethods.map((pm) => (
                      <label
                        key={pm.id}
                        className="flex items-center gap-3 p-3 border rounded-md cursor-pointer"
                      >
                        <RadioGroupItem value={pm.id} id={`pm-${pm.id}`} />
                        <span>{pm.label}</span>
                      </label>
                    ))}
                  </RadioGroup>
                  <DialogFooter>
                    <Button variant="secondary" onClick={() => setReserveStep(2)}>
                      Retour
                    </Button>
                    <Button disabled={!selectedPay} onClick={confirmReservation}>
                      Confirmer la réservation
                    </Button>
                  </DialogFooter>
                </div>
              )}
            </DialogContent>
          </Dialog>

          {/* Voir la localisation exacte */}
          <Dialog open={locationDialogOpen} onOpenChange={setLocationDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" className="w-full sm:w-auto">
                <MapPin className="h-4 w-4" /> Voir la localisation exacte
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Débloquer la localisation exacte</DialogTitle>
                <DialogDescription>
                  Sélectionnez une méthode de paiement pour accéder à la position
                  précise.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <RadioGroup value={locationPay} onValueChange={setLocationPay}>
                  {paymentMethods.map((pm) => (
                    <label
                      key={pm.id}
                      className="flex items-center gap-3 p-3 border rounded-md cursor-pointer"
                    >
                      <RadioGroupItem value={pm.id} id={`loc-${pm.id}`} />
                      <span>{pm.label}</span>
                    </label>
                  ))}
                </RadioGroup>
              </div>
              <DialogFooter>
                <Button variant="secondary" onClick={() => setLocationDialogOpen(false)}>
                  Annuler
                </Button>
                <Button disabled={!locationPay} onClick={confirmUnlockLocation}>
                  Continuer
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <Button
            variant="outline"
            className={`w-full sm:w-auto ${isFavorite ? "text-red-600 border-red-300" : ""}`}
            onClick={toggleFavorite}
          >
            <Heart className={`h-4 w-4 ${isFavorite ? "fill-current" : ""}`} />{" "}
            {isFavorite ? "Enregistré" : "Enregistrer"}
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-full sm:w-auto">
                <Share2 className="h-4 w-4" /> Partager
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem onClick={shareNative}>
                <Share2 className="h-4 w-4 mr-2" /> Partage système
              </DropdownMenuItem>
              <DropdownMenuItem onClick={shareWhatsApp}>
                <MessageCircle className="h-4 w-4 mr-2" /> WhatsApp
              </DropdownMenuItem>
              <DropdownMenuItem onClick={shareFacebook}>
                <Share2 className="h-4 w-4 mr-2" /> Facebook
              </DropdownMenuItem>
              <DropdownMenuItem onClick={shareTwitter}>
                <Share2 className="h-4 w-4 mr-2" /> Twitter
              </DropdownMenuItem>
              <DropdownMenuItem onClick={shareEmail}>
                <Mail className="h-4 w-4 mr-2" /> Email
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={copyLink}>
                <Copy className="h-4 w-4 mr-2" /> Copier le lien
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Owner row with report */}
        <div className="mt-4 w-full lg:max-w-4xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border rounded-lg p-4">
          <div>
            <div className="text-sm text-muted-foreground">Propriétaire</div>
            <div className="text-lg font-medium">{ownerName}</div>
          </div>

          <AlertDialog open={reportOpen} onOpenChange={setReportOpen}>
            <AlertDialogTrigger asChild>
              <Button variant="destructive" className="w-full sm:w-auto">
                <Flag className="h-4 w-4" /> Signaler le propriétaire
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Signaler ce propriétaire</AlertDialogTitle>
                <AlertDialogDescription>
                  Sélectionnez un motif de signalement.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <div className="space-y-2">
                <RadioGroup value={reportReason} onValueChange={setReportReason}>
                  <label className="flex items-center gap-3 p-2 border rounded-md cursor-pointer">
                    <RadioGroupItem value="fraud" />
                    <span>Fraude / Annonce trompeuse</span>
                  </label>
                  <label className="flex items-center gap-3 p-2 border rounded-md cursor-pointer">
                    <RadioGroupItem value="abuse" />
                    <span>Comportement abusif</span>
                  </label>
                  <label className="flex items-center gap-3 p-2 border rounded-md cursor-pointer">
                    <RadioGroupItem value="other" />
                    <span>Autre</span>
                  </label>
                </RadioGroup>
              </div>
              <AlertDialogFooter>
                <AlertDialogCancel>Annuler</AlertDialogCancel>
                <AlertDialogAction
                  onClick={() => {
                    toast.success("Signalement envoyé");
                    setReportOpen(false);
                  }}
                >
                  Envoyer
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>

        {/* Description */}
        {description && (
          <div className="mt-6 space-y-2">
            <h3 className="text-xl font-semibold">Description</h3>
            <p className="text-muted-foreground leading-relaxed">{description}</p>
          </div>
        )}

        {/* Map + surroundings */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-semibold">Carte</h3>
              <div className="text-muted-foreground text-sm flex items-center gap-2">
                <Info className="h-4 w-4" />
                {exactUnlocked ? "Localisation exacte affichée" : "Localisation approximative"}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg border">
              {!exactUnlocked && (
                <div className="absolute inset-0 z-10 backdrop-blur-[2px] bg-background/20 pointer-events-none" />
              )}
              <iframe title="map" className="w-full h-[360px]" src={exactUnlocked ? embedExact : embedApprox} />
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold">Structures autour</h3>
              <Dialog open={surroundOpen} onOpenChange={setSurroundOpen}>
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm">
                    Voir les détails
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Structures à proximité</DialogTitle>
                    <DialogDescription>
                      Description des structures autour du bien.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-3 max-h-[60vh] overflow-y-auto">
                    {surroundings.map((s) => (
                      <div key={s.id} className="border rounded-lg p-3">
                        <div className="font-medium">{s.name}</div>
                        <div className="text-sm text-muted-foreground">
                          Type: {s.type}
                          {typeof s.distanceMeters === "number" ? ` • ${s.distanceMeters} m` : ""}
                        </div>
                        <p className="text-sm mt-2">{s.description}</p>
                      </div>
                    ))}
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            <div className="space-y-2">
              {surroundings.slice(0, 5).map((s) => (
                <div key={s.id} className="flex items-center justify-between border rounded-md px-3 py-2">
                  <div className="truncate">{s.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {s.distanceMeters ? `${s.distanceMeters} m` : ""}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <AdBanner />
      <Footer />
    </div>
  );
};

export default PropertyDetails;