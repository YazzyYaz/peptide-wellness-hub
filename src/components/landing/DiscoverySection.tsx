import { AlertTriangle } from "lucide-react";

const mistakes = [
  {
    number: 1,
    text: 'They buy "research-grade" peptides not intended for human consumption with purity levels as low as 60%, exposing themselves to toxic impurities and unknown long-term risks'
  },
  {
    number: 2,
    text: 'They don\'t understand that "peptides" is a HUGE umbrella category – there are peptides for skin, gut healing, muscle recovery, immune function, longevity, and more – so they buy random ones that don\'t match their goals'
  },
  {
    number: 3,
    text: 'They follow gym bro advice instead of understanding which peptides have actual clinical evidence (like GLP-1s which are FDA-approved) vs which ones are purely experimental grey-market research chemicals'
  },
  {
    number: 4,
    text: 'They skip the critical step of getting independent third-party testing (Janoshik or Chromate labs) to confirm molecular composition, essentially injecting mystery substances into their bodies'
  }
];

const DiscoverySection = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-background">
      <div className="container max-w-3xl mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl font-semibold text-center mb-8">
          Then I Discovered Something That Changed Everything...
        </h2>
        
        <div className="space-y-6 font-body text-lg text-foreground leading-relaxed mb-12">
          <p>
            After months of researching scientific studies, interviewing functional medicine doctors who actually prescribe peptides, joining biohacker communities, and testing different protocols myself, I finally cracked the code.
          </p>
          
          <p className="font-medium text-heading">What I learned shocked me:</p>
          
          <p>
            According to recent longevity research and clinical peptide studies, <strong>most people are making 5 critical mistakes that either waste their money on useless peptides or put them at risk with dangerous sourcing</strong>:
          </p>
        </div>
        
        <div className="space-y-4 mb-12">
          {mistakes.map((mistake) => (
            <div 
              key={mistake.number}
              className="bg-card rounded-xl p-6 shadow-warm border border-border"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-warning/20 flex items-center justify-center">
                  <span className="font-heading font-bold text-warning">#{mistake.number}</span>
                </div>
                <p className="font-body text-foreground">{mistake.text}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-destructive/5 rounded-2xl p-8 border border-destructive/20 mb-12">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-8 h-8 text-destructive flex-shrink-0" />
            <div>
              <p className="font-body text-lg text-foreground font-medium mb-2">But most alarming of all:</p>
              <p className="font-body text-foreground">
                <strong>Most people interested in anti-aging peptides are unknowingly jumping into advanced protocols without understanding basic safety, dosing, cycling, reconstitution, or even WHICH peptides address their specific concerns</strong> – leading to wasted money, zero results, and potential health risks.
              </p>
            </div>
          </div>
        </div>
        
        <div className="space-y-6 font-body text-lg text-foreground leading-relaxed">
          <p>I know because I was making all these same mistakes...</p>
          
          <p>Through extensive research and consultation with:</p>
          
          <ul className="space-y-2 ml-6">
            <li className="flex items-start gap-2">
              <span className="text-accent font-bold">•</span>
              <span><strong>Functional medicine doctors specializing in peptide therapy</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent font-bold">•</span>
              <span><strong>Longevity researchers studying anti-aging compounds</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent font-bold">•</span>
              <span><strong>Experienced biohackers who've been safely using peptides for years</strong></span>
            </li>
          </ul>
          
          <p>
            I discovered WHY most beginners fail with peptides – and more importantly, what actually works safely and effectively for anti-aging.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DiscoverySection;
