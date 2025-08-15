import { Menu, Home, Grid3X3, Heart, User, HelpCircle, FileText, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {

  const menuItems = [
    { icon: Home, label: "Accueil", href: "/" },
    { icon: Grid3X3, label: "Catégories", href: "/categories" },
    { icon: Heart, label: "Favoris", href: "/favoris" },
    { icon: User, label: "Mon compte", href: "/compte" },
    { icon: HelpCircle, label: "FAQ", href: "/faq" },
    { icon: FileText, label: "CGU", href: "/cgu" },
  ];

  return (
    <nav className="bg-white shadow-soft border-b border-border/10 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-poppins font-bold gradient-text">
              Eimho
            </h1>
          </div>

          {/* Desktop & Mobile Dropdown Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-2 px-4 py-2 text-foreground hover:text-primary focus:outline-none transition-colors duration-200">
              <Menu className="h-5 w-5" />
              <span className="text-sm font-medium">Menu</span>
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              {menuItems.map((item) => (
                <DropdownMenuItem key={item.label} asChild>
                  <a
                    href={item.href}
                    className="flex items-center gap-3 px-2 py-2 text-sm font-medium cursor-pointer"
                  >
                    <item.icon className="h-4 w-4" />
                    {item.label}
                  </a>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

      </div>
    </nav>
  );
};

export default Navigation;