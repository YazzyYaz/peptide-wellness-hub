import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

const HomeFooterSection = () => {
  return (
    <footer className="py-12 px-4 bg-card border-t border-border/50">
      <div className="container max-w-6xl mx-auto">
        {/* Brand and Links */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-warm">
                <span className="text-primary-foreground font-heading font-bold text-lg">F</span>
              </div>
              <span className="font-heading text-xl font-semibold text-foreground">Forged Protocol</span>
            </div>
            <p className="text-muted-foreground max-w-sm">
              Evidence-based optimization guides for people who want real answers, not marketing hype.
            </p>
          </div>
          
          <div>
            <h4 className="font-heading font-semibold text-heading mb-4">Guides</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/guides/peptides" className="text-muted-foreground hover:text-primary transition-colors">
                  Peptide Guide
                </Link>
              </li>
              <li>
                <Link to="/guides/trt" className="text-muted-foreground hover:text-primary transition-colors">
                  TRT Blueprint
                </Link>
              </li>
              <li>
                <Link to="/guides/glp1" className="text-muted-foreground hover:text-primary transition-colors">
                  GLP-1 Guide
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading font-semibold text-heading mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <Separator className="mb-8" />
        
        {/* Copyright */}
        <div className="text-center text-sm text-muted-foreground mb-8">
          <p>© 2025 Forged Protocol. All rights reserved.</p>
        </div>
        
        {/* Disclaimer */}
        <div className="text-xs text-muted-foreground/70 space-y-4">
          <p>
            <strong>DISCLAIMER:</strong> Please understand results are not typical. Your results will vary and depend on many factors 
            including but not limited to your background, health history, age, genetics, protocol adherence, and commitment level.
          </p>
          <p>
            <strong>MEDICAL DISCLAIMER:</strong> These guides are for educational and informational purposes only. They are not intended 
            to diagnose, treat, cure, or prevent any disease or replace professional medical advice. Always consult with a qualified 
            healthcare provider before starting any protocol.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default HomeFooterSection;
