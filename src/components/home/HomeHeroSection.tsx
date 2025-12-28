import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, BookOpen, Users } from "lucide-react";
import { Link } from "react-router-dom";

const HomeHeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center px-4 py-16 md:py-24 gradient-warm overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-56 h-56 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/3 rounded-full blur-3xl" />
      
      <div className="container max-w-5xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-card rounded-full shadow-warm mb-8 border border-border">
          <Shield className="w-4 h-4 text-primary" />
          <span className="text-sm font-body text-muted-foreground">Science-Backed Optimization Protocols</span>
        </div>
        
        <h1 className="font-heading text-4xl md:text-5xl lg:text-7xl font-semibold leading-tight mb-6">
          Your Body Deserves{" "}
          <span className="text-gradient-warm">Better Answers</span>
        </h1>
        
        <p className="font-body text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10">
          Evidence-based guides for peptides, hormone optimization, and metabolic health. 
          Cut through the confusion and start your transformation with protocols that actually work.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Link to="/guides/peptides">
            <Button 
              size="lg" 
              className="group text-lg px-8 py-6 rounded-xl shadow-warm-lg hover:shadow-warm transition-all duration-300"
            >
              Explore Our Guides
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <a href="#products">
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6 rounded-xl border-border/50 hover:bg-card"
            >
              See What's Included
            </Button>
          </a>
        </div>
        
        {/* Trust indicators */}
        <div className="flex flex-wrap items-center justify-center gap-8 text-muted-foreground">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">Research-Backed</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-accent" />
            <span className="text-sm font-medium">Safety-First Protocols</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-gold" />
            <span className="text-sm font-medium">Community Trusted</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHeroSection;
