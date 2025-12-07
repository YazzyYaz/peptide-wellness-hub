const IntroSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-card">
      <div className="container max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-4">
            The Guide That's Transforming Confused Peptide Beginners Into Confident Anti-Aging Biohackers In Just 30 Days
          </h2>
        </div>
        
        <div className="bg-secondary/50 rounded-2xl p-8 mb-12 shadow-warm border border-border">
          <p className="font-body text-lg italic text-muted-foreground text-center">
            "I've been seeing all these TikTok videos about peptides and how they're good for you. But are they really? Are they good and safe to use? Or is it just a social media myth?"
          </p>
        </div>
        
        <div className="space-y-6 font-body text-lg text-foreground leading-relaxed">
          <p>Sound familiar?</p>
          
          <p>
            You're tired of looking older than you feel. You've noticed the fine lines getting deeper. The skin that used to bounce back doesn't anymore. Recovery from workouts takes longer. You're slowing down and you can SEE it in the mirror every morning.
          </p>
          
          <p>
            Then you started hearing about peptides everywhere – Reddit threads, TikTok videos, biohacker podcasts, skincare communities. People talking about how they "changed my life" and reversed years of aging.
          </p>
          
          <p className="font-medium text-heading">
            But every time you try to research peptides, you hit a wall of confusion.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
