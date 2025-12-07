import { X, Check } from "lucide-react";

const beforeItems = [
  "Paralyzed by information overload – drowning in Reddit threads, scientific papers, and conflicting advice with no clear path forward",
  "Terrified of safety risks – reading horror stories about contaminated peptides, immunogenic responses, and \"zero long-term data\" keeping you frozen in fear",
  "Wasting money on useless products – buying random peptide serums or sketchy research chemicals that deliver zero results because you don't know what actually works",
  "Frustrated by unhelpful doctors – getting blank stares or dismissive responses when asking about peptides, leaving you completely on your own",
  "Confused about the basics – can't tell the difference between GHK-Cu, BPC-157, Epithalon, and GLP-1s or which ones address YOUR specific aging concerns",
  "Missing out on anti-aging benefits – watching others get incredible results while you stay stuck in analysis paralysis, looking older every year"
];

const afterItems = [
  "Crystal-clear understanding of what peptides are, how they work, and which ones target your specific anti-aging goals",
  "Confident about safety because you understand risk levels, sourcing standards, and exactly what to look for in vendors and testing",
  "Making informed purchasing decisions based on evidence, not hype – saving hundreds or thousands on protocols that actually work",
  "Empowered with practical skills for reconstitution, dosing, injection technique, cycling protocols, and results tracking",
  "Seeing visible improvements in skin elasticity, recovery time, inflammation, sleep quality, and overall vitality within 30 days",
  "Becoming the go-to resource in your friend group for peptide advice because YOU cracked the code while everyone else is still confused"
];

const BeforeAfterSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-card">
      <div className="container max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="font-body text-sm uppercase tracking-widest text-accent mb-4">
            BEFORE AND AFTER
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-4">
            The Transformation You Can Expect
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't let peptide confusion continue dominating your anti-aging journey. Your confidence and clarity can be stronger than ever - you just need the right system to make it happen.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Before */}
          <div className="bg-background rounded-2xl p-6 md:p-8 border border-border">
            <h3 className="font-heading text-xl font-semibold text-heading mb-6 text-center">
              Before The Guide:
            </h3>
            <div className="space-y-4">
              {beforeItems.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center mt-0.5">
                    <X className="w-4 h-4 text-destructive" />
                  </div>
                  <p className="font-body text-sm text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* After */}
          <div className="bg-accent/5 rounded-2xl p-6 md:p-8 border border-accent/20">
            <h3 className="font-heading text-xl font-semibold text-heading mb-6 text-center">
              After The Guide:
            </h3>
            <div className="space-y-4">
              {afterItems.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-accent" />
                  </div>
                  <p className="font-body text-sm text-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
