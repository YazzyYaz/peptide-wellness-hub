import { Gift, FileText, CheckCircle, Syringe, Store, Calendar } from "lucide-react";

const bonuses = [
  {
    icon: CheckCircle,
    number: 1,
    title: '"The Peptide Safety Checklist"',
    description: "Step-by-step verification process for evaluating any peptide source, reading COAs, spotting red flags, and ensuring you're not buying contaminated or mislabeled products",
    value: "$27"
  },
  {
    icon: FileText,
    number: 2,
    title: '"Top 5 Beginner-Friendly Anti-Aging Peptides"',
    description: "Detailed breakdown of the safest, most effective peptides for skin health, recovery, and longevity with evidence-based dosing protocols and realistic result timelines",
    value: "$37"
  },
  {
    icon: Syringe,
    number: 3,
    title: '"The Injection Anxiety Solution"',
    description: "Complete guide to painless subcutaneous injection technique with photos, needle selection, site rotation, reconstitution instructions, and sterility protocols so you can confidently self-administer",
    value: "$27"
  },
  {
    icon: Store,
    number: 4,
    title: '"Peptide Vendor Directory & Rating System"',
    description: "Curated list of reputable suppliers (pharmaceutical, compounding, and research-grade) with pros, cons, price comparisons, and testing requirements for each category",
    value: "$47"
  },
  {
    icon: Calendar,
    number: 5,
    title: '"30-Day Anti-Aging Results Tracker"',
    description: "Structured journal for documenting baseline measurements, tracking daily protocols, monitoring side effects, and photographing visible improvements so you know exactly what's working",
    value: "$17"
  }
];

const WhatYouGetSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-background">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-4">
            Here's Everything You Get With The Peptide Anti-Aging Starter Guide Today!
          </h2>
        </div>
        
        {/* Main Product */}
        <div className="bg-card rounded-2xl p-8 shadow-warm-lg border border-border mb-12">
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              <FileText className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h3 className="font-heading text-2xl font-semibold text-heading mb-2">
                The Complete Peptide Anti-Aging Starter Guide
              </h3>
              <p className="font-body text-muted-foreground">
                50 pages of clear, no-BS information that cuts through the confusion and gives you a proven roadmap for starting peptide therapy safely and effectively
              </p>
            </div>
          </div>
        </div>
        
        {/* Bonuses Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 rounded-full mb-4">
            <Gift className="w-5 h-5 text-gold" />
            <span className="font-body font-semibold text-gold">Plus These 5 Game-Changing Bonuses</span>
            <Gift className="w-5 h-5 text-gold" />
          </div>
        </div>
        
        {/* Bonuses */}
        <div className="space-y-4">
          {bonuses.map((bonus) => (
            <div 
              key={bonus.number}
              className="bg-card rounded-xl p-6 shadow-warm border border-border hover:shadow-warm-lg transition-shadow duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <bonus.icon className="w-6 h-6 text-accent" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-body text-sm text-primary font-semibold mb-1">
                        BONUS #{bonus.number}:
                      </p>
                      <h4 className="font-heading text-lg font-semibold text-heading mb-2">
                        {bonus.title}
                      </h4>
                      <p className="font-body text-muted-foreground text-sm">
                        {bonus.description}
                      </p>
                    </div>
                    <span className="font-body text-sm text-muted-foreground whitespace-nowrap">
                      ({bonus.value} value)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatYouGetSection;
