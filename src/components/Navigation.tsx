import { Menu, Home, Grid3X3, Heart, HelpCircle, ChevronDown, Building2, LogOut } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { toast } from "sonner";

const Navigation = () => {
  const { isAuthenticated, user, logout } = useAuth();

  const menuItems = [
    { icon: Home, label: "Accueil", href: "/" },
    { icon: Grid3X3, label: "Catégories", href: "/categories" },
    { icon: Heart, label: "Favoris", href: "/favoris" },
    { icon: Building2, label: "Mes biens", href: "/mes-biens" },
    { icon: HelpCircle, label: "FAQ", href: "/faq" },
    { icon: LogOut, label: "Déconnexion", href: "/deconnexion" },
  ];

  return (
    <nav className="bg-white shadow-soft border-b border-border/10 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-poppins font-bold gradient-text">
              Eimho
            </Link>
          </div>

          {/* Desktop & Mobile Right Controls */}
          {!isAuthenticated ? (
            <div className="flex items-center gap-4">
              <Link
                to="/deposer-une-annonce"
                className="hidden lg:inline-block text-sm font-medium text-primary hover:underline"
              >
                Déposer une annonce
              </Link>
              <div className="flex items-center gap-2">
                <Button asChild variant="outline" className="rounded-full hidden sm:inline-flex">
                  <Link to="/inscription">S'inscrire</Link>
                </Button>
                <Button asChild className="px-4 py-2 rounded-full">
                  <Link to="/login">Connexion</Link>
                </Button>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <Link
                to="/deposer-une-annonce"
                className="hidden lg:inline-block text-sm font-medium text-primary hover:underline"
              >
                Déposer une annonce
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-white/80 text-foreground shadow-sm hover:bg-white hover:text-primary transition-all duration-200">
                  <Menu className="h-5 w-5" />
                  <span className="text-sm font-medium">Menu</span>
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-72 p-2 rounded-xl border shadow-xl bg-background/95 backdrop-blur supports-[backdrop-filter]:backdrop-blur-md">
                  <DropdownMenuLabel className="text-xs tracking-wide text-muted-foreground">{user?.email ?? "Utilisateur"}</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <div className="grid grid-cols-1 gap-1">
                    {menuItems.map((item) => (
                      <DropdownMenuItem key={item.label} asChild>
                        <a
                          href={item.href}
                          onClick={(e) => {
                            if (item.label === "Déconnexion") {
                              e.preventDefault();
                              logout();
                              toast.success("Déconnecté");
                            }
                          }}
                          className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors hover:bg-accent hover:text-accent-foreground"
                        >
                          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-primary/10 text-primary">
                            <item.icon className="h-4 w-4" />
                          </span>
                          <span>{item.label}</span>
                        </a>
                      </DropdownMenuItem>
                    ))}
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          )}
        </div>

      </div>
    </nav>
  );
};

export default Navigation;