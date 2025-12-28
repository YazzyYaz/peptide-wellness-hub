import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Flame, Scale } from "lucide-react";
import { Link } from "react-router-dom";

const products = [
  {
    id: "peptides",
    title: "Peptide Anti-Aging Starter Guide",
    subtitle: "The Complete Education System",
    description: "Navigate the confusing world of peptide therapy and see anti-aging results in 30 days. Covers safety, sourcing, protocols, and practical application.",
    icon: Sparkles,
    price: 47,
    originalPrice: 197,
    features: [
      "50+ page comprehensive guide",
      "5 bonus resources included",
      "Safety & sourcing frameworks",
      "Beginner-friendly protocols"
    ],
    color: "primary",
    href: "/guides/peptides"
  },
  {
    id: "trt",
    title: "TRT Optimization Blueprint",
    subtitle: "Testosterone Mastery System",
    description: "Understand testosterone replacement therapy from the ground up. Learn protocols, monitoring, and optimization strategies for peak performance.",
    icon: Flame,
    price: 47,
    originalPrice: 197,
    features: [
      "Complete TRT fundamentals",
      "Lab interpretation guide",
      "Dosing & cycling protocols",
      "Side effect management"
    ],
    color: "accent",
    href: "/guides/trt"
  },
  {
    id: "glp1",
    title: "GLP-1 Weight Loss Guide",
    subtitle: "Metabolic Transformation System",
    description: "Everything you need to know about GLP-1 medications for sustainable weight loss. From semaglutide to tirzepatide, master the science.",
    icon: Scale,
    price: 47,
    originalPrice: 197,
    features: [
      "GLP-1 medication breakdown",
      "Dosing titration schedules",
      "Nutrition optimization tips",
      "Managing side effects"
    ],
    color: "gold",
    href: "/guides/glp1"
  }
];

const ProductCardsSection = () => {
  return (
    <section id="products" className="py-20 md:py-28 px-4 bg-card">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Our Guides</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold mt-3 mb-6">
            Choose Your <span className="text-gradient-warm">Transformation Path</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Each guide is designed to take you from confused beginner to confident practitioner 
            with clear, actionable protocols.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div 
              key={product.id}
              className="group bg-background rounded-2xl border border-border/50 shadow-warm hover:shadow-warm-lg transition-all duration-300 overflow-hidden flex flex-col"
            >
              {/* Header */}
              <div className={`p-6 bg-${product.color}/5 border-b border-border/30`}>
                <div className={`w-12 h-12 rounded-xl bg-${product.color}/10 flex items-center justify-center mb-4`}>
                  <product.icon className={`w-6 h-6 text-${product.color}`} />
                </div>
                <p className="text-sm text-muted-foreground font-medium mb-1">{product.subtitle}</p>
                <h3 className="font-heading text-xl font-semibold text-heading">{product.title}</h3>
              </div>
              
              {/* Body */}
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-muted-foreground mb-6 flex-1">{product.description}</p>
                
                <ul className="space-y-3 mb-6">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm">
                      <div className={`w-1.5 h-1.5 rounded-full bg-${product.color}`} />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Pricing */}
                <div className="flex items-baseline gap-3 mb-6">
                  <span className="font-heading text-3xl font-bold text-heading">${product.price}</span>
                  <span className="text-muted-foreground line-through">${product.originalPrice}</span>
                  <span className="text-xs px-2 py-1 bg-warning/10 text-warning-foreground rounded-full font-medium">
                    Save ${product.originalPrice - product.price}
                  </span>
                </div>
                
                <Link to={product.href} className="block">
                  <Button 
                    className="w-full group/btn shadow-warm"
                    variant={product.color === "primary" ? "default" : "outline"}
                  >
                    View Guide
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bundle offer hint */}
        <div className="mt-12 text-center p-6 bg-background rounded-2xl border border-primary/20 shadow-warm">
          <p className="text-muted-foreground mb-2">Want all three guides?</p>
          <p className="font-heading text-xl font-semibold text-heading">
            Get the <span className="text-gradient-warm">Complete Bundle</span> and save 40%
          </p>
          <Button variant="outline" className="mt-4 border-primary/30 hover:bg-primary/5">
            View Bundle Deal
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductCardsSection;
