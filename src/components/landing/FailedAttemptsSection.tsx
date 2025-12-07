import { X } from "lucide-react";

const failedAttempts = [
  {
    title: "Expensive anti-aging creams",
    description: "(just surface-level moisturizing, no real collagen stimulation happening deeper in the skin)"
  },
  {
    title: "Retinol-only routines",
    description: "(helped a little but not enough, and the irritation was brutal – plus I wanted something that worked FROM THE INSIDE)"
  },
  {
    title: "Random peptide serums",
    description: "(bought a Mary & May serum someone recommended... it was kinda meh, no noticeable results, probably just humectants with peptide marketing buzz)"
  },
  {
    title: 'Googling "are peptides safe"',
    description: "(fell down a rabbit hole of contradictory forum posts, terrifying warnings, sketchy vendors, and NO clear answers about what's actually legit)"
  },
  {
    title: "Asking my regular doctor",
    description: '(they had zero information, looked at me like I was crazy, said they "aren\'t specifically educated in peptides," and couldn\'t give me any guidance whatsoever)'
  }
];

const FailedAttemptsSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-card">
      <div className="container max-w-3xl mx-auto">
        <p className="font-body text-lg text-foreground mb-8 text-center">
          I tried everything the "experts" suggested:
        </p>
        
        <div className="space-y-3 mb-12">
          {failedAttempts.map((attempt, index) => (
            <div 
              key={index}
              className="flex items-start gap-3 bg-background rounded-lg p-4 border border-border"
            >
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-muted flex items-center justify-center mt-0.5">
                <X className="w-4 h-4 text-muted-foreground" />
              </div>
              <p className="font-body text-foreground">
                <span className="font-semibold">{attempt.title}</span>{" "}
                <span className="text-muted-foreground">{attempt.description}</span>
              </p>
            </div>
          ))}
        </div>
        
        <div className="bg-secondary/50 rounded-2xl p-8 text-center border border-border">
          <p className="font-body text-lg text-foreground leading-relaxed">
            I was stuck in analysis paralysis. Too afraid to try anything because of safety concerns. Too confused to know where to even begin. Too frustrated by the lack of trustworthy, beginner-friendly information.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FailedAttemptsSection;
