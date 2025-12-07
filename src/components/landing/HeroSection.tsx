import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Sparkles } from "lucide-react";

const HeroSection = () => {
  const scrollToPrice = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-4 py-16 md:py-24 gradient-warm overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-card rounded-full shadow-warm mb-8 border border-border">
          <Sparkles className="w-4 h-4 text-gold" />
          <span className="text-sm font-body text-muted-foreground">The Complete Peptide Education System</span>
        </div>
        
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6">
          Stop Guessing About Peptides –{" "}
          <span className="text-gradient-warm">Finally Get Real Answers</span>
        </h1>
        
        <h2 className="font-heading text-xl md:text-2xl lg:text-3xl font-medium text-heading/80 mb-6">
          How To Navigate The Confusing World of Peptide Therapy And Actually See Anti-Aging Results In Just 30 Days
        </h2>
        
        <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          (even if you're overwhelmed by all the conflicting information online and don't know who to trust)
        </p>
        
        <div className="flex flex-col items-center gap-4 mb-8">
          <Button 
            onClick={scrollToPrice}
            size="lg" 
            className="group text-lg px-8 py-6 rounded-xl shadow-warm-lg hover:shadow-warm transition-all duration-300"
          >
            GET INSTANT ACCESS
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <p className="font-body font-semibold text-heading">Just $47</p>
        </div>
        
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-warning/10 text-warning-foreground rounded-lg border border-warning/20">
          <Clock className="w-4 h-4 text-warning" />
          <span className="text-sm font-body font-medium">Limited Time: Only 97 Copies At This Price (Regular $197)</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
