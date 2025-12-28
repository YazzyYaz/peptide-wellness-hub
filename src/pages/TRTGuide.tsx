import Navbar from "@/components/landing/Navbar";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Flame, CheckCircle, XCircle } from "lucide-react";

const TRTGuide = () => {
  const scrollToPrice = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="font-body pt-20">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 py-16 md:py-24 gradient-warm overflow-hidden">
        <div className="absolute top-20 right-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />
        
        <div className="container max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card rounded-full shadow-warm mb-8 border border-border">
            <Flame className="w-4 h-4 text-accent" />
            <span className="text-sm font-body text-muted-foreground">The Complete TRT Education System</span>
          </div>
          
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6">
            Stop Guessing About TRT –{" "}
            <span className="text-gradient-warm">Master Your Hormones</span>
          </h1>
          
          <h2 className="font-heading text-xl md:text-2xl lg:text-3xl font-medium text-heading/80 mb-6">
            How To Navigate Testosterone Replacement Therapy And Optimize Your Performance In Just 30 Days
          </h2>
          
          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            (even if you're confused by conflicting advice and don't know where to start)
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
              "Confused by conflicting TRT protocols online",
              "Worried about side effects and long-term risks",
              "Don't know which labs to monitor or how often",
              "Frustrated by doctors who dismiss your concerns",
              "Overwhelmed by injection frequency debates",
              "Unsure if your dose is optimized for YOU"
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
              "Complete TRT fundamentals - understand how testosterone works",
              "Lab interpretation guide - know exactly what your numbers mean",
              "Dosing protocols for different goals (wellness vs performance)",
              "Injection technique with photos and site rotation schedules",
              "Managing estrogen, hematocrit, and other side effects",
              "When to use HCG and AI - and when to skip them",
              "Monitoring schedule - which labs, how often, red flags to watch"
            ].map((feature, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border/50 shadow-warm">
                <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
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
            Get The <span className="text-gradient-warm">TRT Blueprint</span> Today
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
          Always consult with a qualified healthcare provider before starting TRT.
        </p>
      </footer>
    </main>
  );
};

export default TRTGuide;
