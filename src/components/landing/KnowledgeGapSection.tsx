import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, BookOpen, Shield, Search, Target, Wrench, DollarSign, AlertTriangle } from "lucide-react";

const essentials = [
  {
    icon: BookOpen,
    title: "UNDERSTANDING THE BASICS",
    description: "What peptides actually ARE (amino acid chains that signal cells), how they differ from hormones, which ones occur naturally in your body vs lab-created versions – without this foundation, everything else is gibberish (and you'll waste money on peptides that don't match your goals)"
  },
  {
    icon: Shield,
    title: "SAFETY FRAMEWORK",
    description: "How to evaluate risk levels, understand immunogenicity and carcinogenicity concerns, identify which peptides have FDA approval vs research-only status, and know when pharmaceutical-grade is absolutely required vs when research peptides with proper testing are acceptable (and without this, you're playing Russian roulette with your health)"
  },
  {
    icon: Search,
    title: "SOURCING STANDARDS",
    description: 'The hierarchy of peptide sources (compounding pharmacies vs research suppliers), what third-party testing actually proves, how to read Certificates of Analysis from Janoshik and Chromate labs, red flags that scream "sketchy vendor" (and without knowing this, you\'ll either overpay 300% or inject contaminated garbage)'
  },
  {
    icon: Target,
    title: "ANTI-AGING PROTOCOL CLARITY",
    description: "Which specific peptides target collagen production, skin elasticity, tissue repair, immune function, sleep quality, and longevity – including realistic timelines for results and how to stack peptides safely (and without this roadmap, you'll buy random peptides based on hype and see zero results)"
  },
  {
    icon: Wrench,
    title: "PRACTICAL APPLICATION SKILLS",
    description: "How to reconstitute peptides properly, choose between injection/oral/topical methods, understand dosing, create cycling schedules to prevent receptor desensitization, track results and side effects (and without these skills, you'll be too afraid to even start or you'll mess up dosing dangerously)"
  },
  {
    icon: DollarSign,
    title: "COST-BENEFIT ANALYSIS",
    description: "Which peptides are worth the investment vs overhyped, how to balance pharmaceutical-grade pricing with research-grade options, when compounding pharmacies make sense vs going direct (and without this, you'll blow thousands on protocols that don't deliver)"
  },
  {
    icon: AlertTriangle,
    title: "RED FLAGS & WARNING SIGNS",
    description: "When to avoid peptides completely (cancer history, pregnancy), which peptides have serious safety concerns, how to identify immunogenic responses early, when grey-market experimentation crosses into reckless territory (and without knowing these boundaries, you'll put yourself at serious risk)"
  }
];

const KnowledgeGapSection = () => {
  const scrollToPrice = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-16 md:py-24 px-4 bg-card">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="font-body text-sm uppercase tracking-widest text-accent mb-4">
            THE KNOWLEDGE GAP THAT SEPARATES CONFUSED BEGINNERS FROM CONFIDENT PEPTIDE USERS
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-4">
            The 7 Essential Things Peptide-Curious People Need
          </h2>
          <p className="font-body text-xl text-muted-foreground">
            (That Google Searches and Reddit Threads Don't Provide)
          </p>
        </div>
        
        <div className="space-y-4 mb-12">
          {essentials.map((item, index) => (
            <div 
              key={index}
              className="bg-background rounded-xl p-6 shadow-warm border border-border hover:shadow-warm-lg transition-shadow duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-heading mb-2">
                    {item.title}
                  </h3>
                  <p className="font-body text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col items-center gap-4">
          <Button 
            onClick={scrollToPrice}
            size="lg" 
            className="group text-lg px-8 py-6 rounded-xl shadow-warm-lg hover:shadow-warm transition-all duration-300"
          >
            GET THE COMPLETE GUIDE NOW
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <p className="font-body font-semibold text-heading">Just $47</p>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-warning/10 text-warning-foreground rounded-lg border border-warning/20">
            <Clock className="w-4 h-4 text-warning" />
            <span className="text-sm font-body font-medium">Limited Time: Only 97 Copies At This Price (Regular $197)</span>
          </div>
          <p className="font-body text-sm text-muted-foreground uppercase tracking-wide">
            INSTANT ACCESS - START YOUR ANTI-AGING JOURNEY TODAY
          </p>
        </div>
      </div>
    </section>
  );
};

export default KnowledgeGapSection;
