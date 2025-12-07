import { BookOpen, Shield, Search, Target, Wrench } from "lucide-react";

const modules = [
  {
    icon: BookOpen,
    number: 1,
    title: "Peptide Fundamentals Demystified",
    pages: "Pages 1-10",
    description: "Finally understand what peptides actually ARE and why they work – this foundation module helps you grasp the amino acid science while cutting through marketing BS.",
    highlights: [
      'The "peptides vs proteins vs hormones" breakdown that makes everything click',
      "Why your body stops producing key signaling peptides as you age (and why supplementing them works)",
      "The crucial difference between endogenous and exogenous peptides that determines safety and efficacy"
    ]
  },
  {
    icon: Shield,
    number: 2,
    title: "The Safety Framework",
    pages: "Pages 11-20",
    description: "Sleep better at night knowing exactly how to evaluate risks – our systematic approach helps you identify legitimate concerns while avoiding paranoia-inducing misinformation.",
    highlights: [
      "The immunogenicity and carcinogenicity factors you MUST understand before starting any protocol",
      "How to read scientific studies and clinical trials to separate evidence from hype",
      "The FDA approval hierarchy and what it actually means for peptide safety and legality"
    ]
  },
  {
    icon: Search,
    number: 3,
    title: "Sourcing & Quality Standards",
    pages: "Pages 21-30",
    description: "Never waste money on contaminated or fake peptides again – our quality verification system helps you identify trustworthy sources while avoiding expensive mistakes.",
    highlights: [
      "The exact specifications to look for in Certificates of Analysis from Janoshik and Chromate labs",
      'Red flags that instantly identify sketchy vendors trying to sell you garbage',
      'Price comparison framework that shows when you\'re overpaying and when "cheap" is actually dangerous'
    ]
  },
  {
    icon: Target,
    number: 4,
    title: "Anti-Aging Peptide Selection Guide",
    pages: "Pages 31-42",
    description: "Stop buying random peptides based on TikTok hype – our targeted selection method helps you choose protocols that actually address YOUR specific aging concerns.",
    highlights: [
      "The top 8 anti-aging peptides with evidence-based use cases, realistic timelines, and safety profiles",
      "How to match peptides to your goals (skin elasticity vs muscle recovery vs longevity vs cognitive function)",
      "Smart stacking strategies that amplify results without increasing risks or side effects"
    ]
  },
  {
    icon: Wrench,
    number: 5,
    title: "Practical Application Protocols",
    pages: "Pages 43-50",
    description: "Finally feel confident actually USING peptides – our step-by-step protocols help you reconstitute, dose, and administer peptides safely on your first try.",
    highlights: [
      "The complete injection technique guide with photos, needle selection, and site rotation schedules",
      "Reconstitution instructions that eliminate the fear and confusion around bacteriostatic water and vial preparation",
      "Dosing calculators and cycling schedules that prevent receptor desensitization while optimizing results"
    ]
  }
];

const ModulesSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-background">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="font-body text-sm uppercase tracking-widest text-accent mb-4">
            YOUR ANTI-AGING CLARITY PATH BEGINS HERE
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-4">
            The 5 Core Modules That Transform Your Understanding
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            Each module precisely designed to eliminate confusion through evidence-based education and practical protocols.
          </p>
        </div>
        
        <div className="space-y-6">
          {modules.map((module) => (
            <div 
              key={module.number}
              className="bg-card rounded-2xl p-6 md:p-8 shadow-warm border border-border hover:shadow-warm-lg transition-shadow duration-300"
            >
              <div className="flex items-start gap-4 md:gap-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center">
                    <module.icon className="w-7 h-7 text-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="font-body text-sm font-semibold text-primary">
                      MODULE {module.number}:
                    </span>
                    <span className="font-body text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                      {module.pages}
                    </span>
                  </div>
                  <h3 className="font-heading text-xl md:text-2xl font-semibold text-heading mb-3">
                    {module.title}
                  </h3>
                  <p className="font-body text-muted-foreground mb-4">
                    {module.description}
                  </p>
                  <ul className="space-y-2">
                    {module.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-accent font-bold mt-1">•</span>
                        <span className="font-body text-sm text-foreground">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;
