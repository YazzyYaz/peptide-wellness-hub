import Navbar from "@/components/landing/Navbar";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Scale, CheckCircle, XCircle } from "lucide-react";

const GLP1Guide = () => {
  const scrollToPrice = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="font-body pt-20">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 py-16 md:py-24 gradient-warm overflow-hidden">
        <div className="absolute top-20 right-10 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />
        
        <div className="container max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card rounded-full shadow-warm mb-8 border border-border">
            <Scale className="w-4 h-4 text-gold" />
            <span className="text-sm font-body text-muted-foreground">The Complete GLP-1 Education System</span>
          </div>
          
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6">
            Stop Guessing About GLP-1s –{" "}
            <span className="text-gradient-warm">Transform Your Metabolism</span>
          </h1>
          
          <h2 className="font-heading text-xl md:text-2xl lg:text-3xl font-medium text-heading/80 mb-6">
            How To Navigate GLP-1 Medications And Achieve Sustainable Weight Loss In Just 30 Days
          </h2>
          
          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            (even if you've tried everything else and are overwhelmed by semaglutide vs tirzepatide debates)
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

      {/* Pain Points */}
      <section className="py-20 px-4 bg-card">
        <div className="container max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-center mb-12">
            Sound <span className="text-gradient-warm">Familiar?</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Confused by semaglutide vs tirzepatide differences",
              "Worried about muscle loss and nutritional deficiencies",
              "Don't know how to titrate doses properly",
              "Overwhelmed by compounding pharmacy options",
              "Terrified of side effects like nausea and gastroparesis",
              "Unsure what to eat or how to train while on GLP-1s"
            ].map((point, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-background rounded-xl border border-border/50">
                <XCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                <p className="text-foreground">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-20 px-4 gradient-warm">
        <div className="container max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-center mb-12">
            What's <span className="text-gradient-warm">Inside</span>
          </h2>
          
          <div className="space-y-4">
            {[
              "GLP-1 medication breakdown - semaglutide, tirzepatide, and beyond",
              "Dosing titration schedules for minimizing side effects",
              "Nutrition optimization - what to eat to preserve muscle",
              "Exercise protocols that work WITH your GLP-1",
              "Managing nausea, constipation, and other common sides",
              "Sourcing guide - brand vs compounding vs telehealth",
              "Maintenance protocols for keeping weight off long-term"
            ].map((feature, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border/50 shadow-warm">
                <CheckCircle className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <p className="text-foreground">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-4 bg-card">
        <div className="container max-w-xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-8">
            Get The <span className="text-gradient-warm">GLP-1 Guide</span> Today
          </h2>
          
          <div className="bg-background rounded-2xl border border-border/50 shadow-warm-lg p-8">
            <div className="flex items-baseline justify-center gap-3 mb-4">
              <span className="font-heading text-5xl font-bold text-heading">$47</span>
              <span className="text-xl text-muted-foreground line-through">$197</span>
            </div>
            
            <p className="text-muted-foreground mb-6">One-time payment • Instant access • Lifetime updates</p>
            
            <Button 
              size="lg"
              className="w-full text-lg py-6 rounded-xl shadow-warm-lg mb-4"
            >
              GET INSTANT ACCESS
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4 text-warning" />
              <span>Only 97 copies at this price</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-background border-t border-border/50 text-center text-sm text-muted-foreground">
        <p>© 2025 Forged Protocol. All rights reserved.</p>
        <p className="mt-4 text-xs max-w-2xl mx-auto">
          <strong>DISCLAIMER:</strong> This guide is for educational purposes only and is not medical advice. 
          Always consult with a qualified healthcare provider before starting GLP-1 medications.
        </p>
      </footer>
    </main>
  );
};

export default GLP1Guide;
