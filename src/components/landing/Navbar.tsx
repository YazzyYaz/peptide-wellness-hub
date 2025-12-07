import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-warm">
              <span className="text-primary-foreground font-heading font-bold text-lg">F</span>
            </div>
            <span className="font-heading text-xl md:text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
              Forged Protocol
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#benefits" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Benefits
            </a>
            
            
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-warm">
              Get Access – $47
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <div className="md:hidden mt-4 pb-4 border-t border-border/50 pt-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              <a href="#benefits" className="text-muted-foreground hover:text-primary transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
                Benefits
              </a>
              <a href="#modules" className="text-muted-foreground hover:text-primary transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
                What's Inside
              </a>
              <a href="#testimonials" className="text-muted-foreground hover:text-primary transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
                Results
              </a>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-warm w-full">
                Get Access – $47
              </Button>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navbar;