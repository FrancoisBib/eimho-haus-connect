import { MapPin, Mail, Phone, Facebook, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-border/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-poppins font-bold gradient-text">Eimho</h2>
            <p className="mt-3 text-sm text-muted-foreground max-w-md">
              Trouvez, louez et vendez des biens immobiliers au Congo-Brazzaville en toute simplicité.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <a href="#" className="inline-flex items-center justify-center h-9 w-9 rounded-full border border-border hover:bg-accent hover:text-accent-foreground transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="inline-flex items-center justify-center h-9 w-9 rounded-full border border-border hover:bg-accent hover:text-accent-foreground transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="inline-flex items-center justify-center h-9 w-9 rounded-full border border-border hover:bg-accent hover:text-accent-foreground transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">Liens rapides</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="/" className="hover:text-primary transition-colors">Accueil</a></li>
              <li><a href="/categories" className="hover:text-primary transition-colors">Catégories</a></li>
              <li><a href="/favoris" className="hover:text-primary transition-colors">Favoris</a></li>
              <li><a href="/faq" className="hover:text-primary transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">Contact</h3>
            <ul className="mt-3 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                contact@eimho.com
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                +242 06 00 00 00
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Brazzaville, Congo
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border/20 text-xs text-muted-foreground flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>&copy; {new Date().getFullYear()} Eimho. Tous droits réservés.</span>
          <div className="flex items-center gap-4">
            <a href="/cgu" className="hover:text-primary transition-colors">CGU</a>
            <a href="/confidentialite" className="hover:text-primary transition-colors">Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;