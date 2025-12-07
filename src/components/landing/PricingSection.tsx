import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, Zap } from "lucide-react";

const PricingSection = () => {
  return (
    <section id="pricing" className="py-16 md:py-24 px-4 gradient-warm">
      <div className="container max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="font-body text-sm uppercase tracking-widest text-accent mb-4">
            BREAK FREE FROM CONFUSION
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-4">
            Get The Peptide Anti-Aging Starter Guide Now
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            While other people stay paralyzed by information overload and safety fears, you'll be confidently implementing evidence-based anti-aging protocols using proven peptide strategies.
          </p>
        </div>
        
        {/* Pricing Card */}
        <div className="bg-card rounded-3xl p-8 md:p-12 shadow-warm-lg border border-border max-w-xl mx-auto">
          <div className="text-center">
            {/* Price */}
            <div className="mb-6">
              <p className="font-body text-muted-foreground line-through mb-1">Normally: $197</p>
              <div className="flex items-baseline justify-center gap-2">
                <span className="font-body text-lg text-muted-foreground">Today:</span>
                <span className="font-heading text-6xl font-bold text-heading">$47</span>
              </div>
            </div>
            
            {/* Urgency */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-warning/10 text-warning-foreground rounded-lg border border-warning/20 mb-8">
              <Clock className="w-4 h-4 text-warning" />
              <span className="text-sm font-body font-medium">Limited Time: Only 97 Copies At This Price</span>
            </div>
            
            {/* CTA Button */}
            <Button 
              size="lg" 
              className="w-full group text-lg py-7 rounded-xl shadow-warm-lg hover:shadow-warm transition-all duration-300 mb-6"
            >
              GET INSTANT ACCESS TODAY
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-accent" />
                <span className="font-body">Instant Digital Access</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-accent" />
                <span className="font-body">Secure Checkout</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
