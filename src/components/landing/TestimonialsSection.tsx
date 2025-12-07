import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "I had 2 separate patients today ask me my opinion on peptides... Is this an RFK thing? These weren't like...chronic joint pain patients either. Just people in for physicals. I literally don't know what they mean.",
    author: "Family Medicine Doctor",
    context: "realizing peptides are going mainstream"
  },
  {
    quote: "Lost 40lbs on reta, down to 19% bf. GHK-CU seemed to reverse some skin issues. Epithalon corrected bad sleep better than any of the dozen other supplements I've tried. That said they have changed my life.",
    author: "Biohacker",
    context: "who overcame initial safety concerns"
  },
  {
    quote: "Once you understand what peptides are you'll want them. They are chains of amino acids that act like hormones to program the body to do basically any function. I always pick up products with peptides and my skin is bouncy and wrinkle free at 41.",
    author: "41-year-old",
    context: "with visible anti-aging results"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-background">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-4">
            But don't take my word for it.
          </h2>
          <p className="font-body text-xl text-muted-foreground">
            Listen to these successful peptide users:
          </p>
        </div>
        
        <div className="grid gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl p-8 shadow-warm border border-border relative"
            >
              <Quote className="absolute top-6 left-6 w-8 h-8 text-primary/20" />
              <div className="pl-8">
                <p className="font-body text-lg text-foreground italic mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <span className="font-heading font-bold text-primary text-sm">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-body font-semibold text-heading">{testimonial.author}</p>
                    <p className="font-body text-sm text-muted-foreground">{testimonial.context}</p>
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

export default TestimonialsSection;
