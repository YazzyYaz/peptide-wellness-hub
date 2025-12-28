import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Sparkles, Flame, Scale } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const guides = [
  {
    name: "Peptide Anti-Aging Guide",
    href: "/guides/peptides",
    icon: Sparkles,
    description: "Master peptide therapy safely"
  },
  {
    name: "TRT Optimization Blueprint",
    href: "/guides/trt",
    icon: Flame,
    description: "Testosterone optimization protocols"
  },
  {
    name: "GLP-1 Weight Loss Guide",
    href: "/guides/glp1",
    icon: Scale,
    description: "Metabolic transformation system"
  }
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-warm">
              <span className="text-primary-foreground font-heading font-bold text-lg">F</span>
            </div>
            <span className="font-heading text-xl md:text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
              Forged Protocol
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {isHomePage && (
              <a href="#products" className="text-muted-foreground hover:text-primary transition-colors font-medium">
                Our Guides
              </a>
            )}
            
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors font-medium focus:outline-none">
                Guides
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-72 bg-card border border-border/50 shadow-warm-lg p-2" align="end">
                {guides.map((guide) => (
                  <DropdownMenuItem key={guide.href} asChild>
                    <Link 
                      to={guide.href}
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-background cursor-pointer"
                    >
                      <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <guide.icon className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{guide.name}</p>
                        <p className="text-sm text-muted-foreground">{guide.description}</p>
                      </div>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Link to="/guides/peptides">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-warm">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-foreground" 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border/50 pt-4 animate-fade-in">
            <div className="flex flex-col gap-2">
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider px-2 mb-2">Guides</p>
              {guides.map((guide) => (
                <Link 
                  key={guide.href}
                  to={guide.href}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-card transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                    <guide.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{guide.name}</p>
                    <p className="text-sm text-muted-foreground">{guide.description}</p>
                  </div>
                </Link>
              ))}
              <div className="mt-4 pt-4 border-t border-border/50">
                <Link to="/guides/peptides" onClick={() => setIsMenuOpen(false)}>
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-warm w-full">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
