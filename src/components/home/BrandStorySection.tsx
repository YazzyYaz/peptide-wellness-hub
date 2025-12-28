import { CheckCircle, Target, BookOpen, Shield } from "lucide-react";

const BrandStorySection = () => {
  return (
    <section className="py-20 md:py-28 px-4 gradient-warm">
      <div className="container max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Why Forged Protocol</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold mt-3 mb-6">
            Built for People Who Want <span className="text-gradient-warm">Real Answers</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              We're tired of the noise. The conflicting Reddit threads. The gym bro advice. 
              The sketchy vendors. The doctors who shrug when you ask about optimization.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Forged Protocol was created to cut through the confusion with <strong className="text-heading">evidence-based, 
              safety-first guides</strong> that actually help you understand what you're doing and why.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Every guide is built from real research, clinical protocols, and practical experience—
              not hype or marketing fluff.
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border/50 shadow-warm">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <BookOpen className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-heading mb-1">Research-Backed</h3>
                <p className="text-sm text-muted-foreground">Every protocol is grounded in clinical studies and real-world evidence.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border/50 shadow-warm">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                <Shield className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-heading mb-1">Safety-First</h3>
                <p className="text-sm text-muted-foreground">We prioritize your health with clear risk frameworks and quality standards.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border/50 shadow-warm">
              <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                <Target className="w-5 h-5 text-gold" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-heading mb-1">Actionable</h3>
                <p className="text-sm text-muted-foreground">Step-by-step protocols you can actually follow, not vague theory.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border/50 shadow-warm">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <CheckCircle className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-heading mb-1">Beginner-Friendly</h3>
                <p className="text-sm text-muted-foreground">No prior knowledge required. We explain everything from the ground up.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStorySection;
