import { Separator } from "@/components/ui/separator";

const FooterSection = () => {
  return (
    <footer className="py-12 px-4 bg-card border-t border-border">
      <div className="container max-w-4xl mx-auto">
        {/* Copyright */}
        <div className="text-center mb-8">
          <p className="font-body text-sm text-muted-foreground">
            COPYRIGHT 2025 | FORGED PROTOCOL | PRIVACY POLICY | TERMS & CONDITIONS
          </p>
        </div>
        
        <Separator className="mb-8" />
        
        {/* Disclaimer */}
        <div className="space-y-6 font-body text-xs text-muted-foreground leading-relaxed">
          <div>
            <p className="font-semibold mb-2">DISCLAIMER</p>
            <p>
              Please understand results are not typical. Your results will vary and depend on many factors including but not limited to your background, health history, age, genetics, peptide selection, sourcing quality, protocol adherence, and commitment level. All peptide use entails risk as well as consistent effort and proper medical guidance.
            </p>
          </div>
          
          <div>
            <p className="font-semibold mb-2">NOT FACEBOOK:</p>
            <p>
              This site is not a part of the Facebook™ website or Facebook Inc. Additionally, This site is NOT endorsed by Facebook™ in any way. FACEBOOK is a trademark of FACEBOOK, Inc.
            </p>
          </div>
          
          <div>
            <p className="font-semibold mb-2">MEDICAL DISCLAIMER:</p>
            <p>
              This guide is for educational and informational purposes only. It is not intended to diagnose, treat, cure, or prevent any disease or replace professional medical advice. Always consult with a qualified healthcare provider before starting any peptide protocol. The information presented represents research findings and anecdotal reports from the peptide community and should not be considered medical advice. Peptide therapy involves risks, and individual results may vary significantly. Some peptides discussed may be "research chemicals" or "grey market" products not approved for human consumption by regulatory agencies.
            </p>
          </div>
          
          <p>
            Nothing on this page, any of our websites, or any of our content or curriculum is a promise or guarantee of results or future results, and we do not offer any legal, medical, tax or other professional advice. Any potential results referenced here, or on any of our sites, are illustrative of concepts only and should not be considered average results, exact results, or promises for actual or future performance. Use caution and always consult your accountant, lawyer, or professional advisor before acting on this or any information related to a lifestyle change or your health. You alone are responsible and accountable for your decisions, actions and results in life, and by your purchase here you agree not to attempt to hold us liable for your decisions, actions or results, at any time, under any circumstance.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
