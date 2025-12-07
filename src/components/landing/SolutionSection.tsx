import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Clock, Sparkles } from "lucide-react";

const benefits = [
  "Navigate the peptide landscape with confidence instead of fear and confusion",
  "Identify which peptides have legitimate anti-aging benefits backed by real science (not just marketing hype)",
  "Understand sourcing hierarchy – which peptides must be pharmaceutical-grade vs which research peptides are relatively safe when properly tested",
  "Learn proper protocols for dosing, cycling, reconstitution, and administration without risking my health",
  "See actual results – improved skin elasticity, faster recovery, better sleep, reduced inflammation – within 30 days of starting my first protocol"
];

const SolutionSection = () => {
  const scrollToPrice = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-16 md:py-24 px-4 bg-card">
      <div className="container max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-body font-medium text-accent">The Breakthrough</span>
          </div>
          
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-4">
            I call it the{" "}
            <span className="text-gradient-warm">"Peptide Anti-Aging Clarity System"</span>
          </h2>
        </div>
        
        <p className="font-body text-lg text-foreground mb-8 text-center">
          By understanding the science, safety protocols, sourcing standards, and practical application methods, I was able to:
        </p>
        
        <div className="space-y-4 mb-12">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="flex items-start gap-4 bg-background rounded-xl p-5 shadow-warm border border-border"
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                <Check className="w-5 h-5 text-accent" />
              </div>
              <p className="font-body text-foreground font-medium">{benefit}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-secondary/50 rounded-2xl p-8 mb-12 border border-border">
          <p className="font-body text-lg text-foreground text-center leading-relaxed">
            After helping dozens of other confused peptide beginners cut through the noise and start their anti-aging journey safely, I've refined this system into a step-by-step guide that anyone can use…
          </p>
          <p className="font-body text-lg text-foreground text-center mt-4 font-medium">
            ...even if you've never injected anything before and are completely overwhelmed by the information overload.
          </p>
        </div>
        
        <div className="flex flex-col items-center gap-4">
          <Button 
            onClick={scrollToPrice}
            size="lg" 
            className="group text-lg px-8 py-6 rounded-xl shadow-warm-lg hover:shadow-warm transition-all duration-300"
          >
            GET INSTANT ACCESS
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <p className="font-body font-semibold text-heading">Just $47</p>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-warning/10 text-warning-foreground rounded-lg border border-warning/20">
            <Clock className="w-4 h-4 text-warning" />
            <span className="text-sm font-body font-medium">Limited Time: Only 97 Copies At This Price (Regular $197)</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
