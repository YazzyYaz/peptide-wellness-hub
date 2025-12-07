import { AlertCircle } from "lucide-react";

const painPoints = [
  {
    title: "Drowning in conflicting information",
    description: "one Reddit thread says GHK-Cu is the holy grail, another says BPC-157 is essential, someone else swears by Epithalon, and you have NO idea where to start or what any of it even means"
  },
  {
    title: "Terrified of the safety risks",
    description: "you read \"supply chain concerns, sanitation concerns, legal concerns, basically zero rigorous long term data\" and now you're paralyzed with fear about putting something dangerous in your body"
  },
  {
    title: "Overwhelmed by the grey market",
    description: "some peptides are FDA-approved, others are \"research chemicals,\" compounding pharmacies charge insane prices, Chinese suppliers are sketchy, and you can't figure out who to trust or where to actually buy safe products"
  },
  {
    title: "Confused about application methods",
    description: "do you inject? Take orally? Use topically? How much? How often? What if you mess up the dosing? The reconstitution process sounds terrifying and you're scared you'll accidentally hurt yourself"
  },
  {
    title: "Frustrated by vague promises",
    description: "everyone says peptides work but nobody explains HOW they work, WHICH ones to use for YOUR specific aging concerns, or what realistic results actually look like (is this just marketing hype or real science?)"
  }
];

const PainPointsSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-background">
      <div className="container max-w-3xl mx-auto">
        <p className="font-body text-lg text-foreground mb-8 text-center">
          Now your daily struggle with peptide confusion includes:
        </p>
        
        <div className="space-y-4">
          {painPoints.map((point, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-6 shadow-warm border border-border hover:shadow-warm-lg transition-shadow duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center">
                  <AlertCircle className="w-5 h-5 text-destructive" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-heading mb-2">
                    {point.title}
                  </h3>
                  <p className="font-body text-muted-foreground">
                    – {point.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;
