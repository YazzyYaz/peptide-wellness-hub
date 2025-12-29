import Navbar from "@/components/landing/Navbar";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Flame, CheckCircle, XCircle, Gift, BookOpen, Plane, FlaskConical, FileText } from "lucide-react";

const TRTGuide = () => {
  const scrollToPrice = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="font-body pt-20">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 py-16 md:py-24 gradient-warm overflow-hidden">
        <div className="absolute top-20 right-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />
        
        <div className="container max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card rounded-full shadow-warm mb-8 border border-border">
            <Flame className="w-4 h-4 text-accent" />
            <span className="text-sm font-body text-muted-foreground">The Complete Testosterone Decision Framework</span>
          </div>
          
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-6">
            STOP Feeling Like You're 56 at 31:{" "}
            <span className="text-gradient-warm">The Truth About Low Testosterone No One's Telling You</span>
          </h1>
          
          <h2 className="font-heading text-xl md:text-2xl lg:text-3xl font-medium text-heading/80 mb-6">
            From "Brain Fog, Crushing Fatigue & Zero Sex Drive" To "Actually Feeling Like Myself Again" In Just 90 Days
          </h2>
          
          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            (even if your doctor says "you're in the normal range" and dismissed your concerns)
          </p>
          
          <div className="flex flex-col items-center gap-4 mb-8">
            <Button 
              onClick={scrollToPrice}
              size="lg" 
              className="group text-lg px-8 py-6 rounded-xl shadow-warm-lg hover:shadow-warm transition-all duration-300"
            >
              GET INSTANT ACCESS
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <p className="font-body font-semibold text-heading">Just $47</p>
          </div>
          
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-warning/10 text-warning-foreground rounded-lg border border-warning/20">
            <Flame className="w-4 h-4 text-warning" />
            <span className="text-sm font-body font-medium">LIMITED TIME: Regular $197</span>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 px-4 bg-card">
        <div className="container max-w-4xl mx-auto text-center">
          <p className="font-body text-lg md:text-xl text-foreground leading-relaxed">
            The Evidence-Based Decision Framework That's Transforming Men Who Feel Old Before Their Time Into{" "}
            <span className="font-semibold text-accent">Confident, Clear-Headed, High-Energy Versions of Themselves</span> In Just 90 Days
          </p>
        </div>
      </section>

      {/* Opening Story */}
      <section className="py-20 px-4 gradient-warm">
        <div className="container max-w-3xl mx-auto">
          <div className="bg-card rounded-2xl border border-border/50 shadow-warm p-8 mb-12">
            <p className="font-body text-lg text-muted-foreground italic leading-relaxed">
              "I'm 31, lift 5x a week, eat clean... yet I'm always anxious, tired all the time, and my T levels are like a 50-year-old's. My doc basically laughed me out of the office. I feel like I'm losing my mind."
            </p>
          </div>
          
          <p className="font-body text-lg text-foreground mb-8 leading-relaxed">
            <span className="font-semibold">If you've ever felt this way, you're not alone...</span>
          </p>
          
          <p className="font-body text-foreground mb-6 leading-relaxed">
            I remember the exact moment I realized something was seriously wrong.
          </p>
          
          <p className="font-body text-foreground mb-6 leading-relaxed">
            I was 34, standing in my home gym, staring at the barbell I'd loaded up for what should have been an easy working set. My body felt like it weighed a thousand pounds.
          </p>
          
          <p className="font-body text-foreground mb-6 leading-relaxed">
            Despite eating clean, sleeping 7-8 hours, taking every supplement recommended on Reddit, and training 5 days a week... I was getting weaker. Softer. Slower.
          </p>
          
          <p className="font-body text-foreground mb-6 leading-relaxed">
            But the physical changes weren't even the worst part.
          </p>
          
          <p className="font-body text-foreground mb-6 leading-relaxed">
            The brain fog made me feel like I was thinking through molasses. I'd forget what I was saying mid-sentence. Simple work tasks that used to take 20 minutes now took two hours because I couldn't focus.
          </p>
          
          <p className="font-body text-foreground mb-8 leading-relaxed">
            And the anxiety? Jesus. Heart pounding for no reason. Social situations that used to be easy now felt overwhelming. My wife asked if I was depressed. I didn't know how to explain that I wasn't sad... I just felt like a shell of who I used to be.
          </p>
        </div>
      </section>

      {/* Daily Struggle */}
      <section className="py-20 px-4 bg-card">
        <div className="container max-w-4xl mx-auto">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-center mb-12">
            Now my daily struggle with feeling like absolute garbage included:
          </h2>
          
          <div className="space-y-4">
            {[
              "Crushing fatigue that made getting out of bed feel like an Olympic event (despite sleeping 7-8 hours)",
              "Brain fog so thick I'd forget what I was saying mid-conversation and couldn't concentrate on basic work tasks",
              "Anxiety that came out of nowhere - heart pounding, social situations feeling overwhelming when they never used to",
              "Sex drive that went from \"always ready\" to \"maybe if I'm in the perfect mood\" (my wife noticed before I wanted to admit it)",
              "Going to the gym feeling like pushing through pain instead of getting stronger - watching guys half my age lift more while I'm doing \"everything right\""
            ].map((point, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-background rounded-xl border border-border/50">
                <XCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                <p className="text-foreground">{point}</p>
              </div>
            ))}
          </div>
          
          <p className="font-body text-foreground mt-8 text-center font-semibold text-lg">
            The worst part? I KNEW something was wrong. But every time I tried to get help, I hit a brick wall.
          </p>
        </div>
      </section>

      {/* Failed Attempts */}
      <section className="py-20 px-4 gradient-warm">
        <div className="container max-w-4xl mx-auto">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-center mb-12">
            I tried everything the <span className="text-gradient-warm">"experts"</span> suggested:
          </h2>
          
          <div className="space-y-4">
            {[
              "\"Just lift heavier and eat more protein\" (I was already doing both - it made the fatigue worse and I just got fatter)",
              "\"You need to optimize your sleep\" (I tracked my sleep with three different apps, blackout curtains, no screens before bed - still exhausted)",
              "\"Take these supplements: zinc, magnesium, vitamin D3 with K2\" (spent $200/month, saw zero difference after 4 months)",
              "\"Try anxiety medication instead\" (doctor said my symptoms were just stress - the SSRIs killed what little sex drive I had left)",
              "\"You're in the normal range, you don't need TRT\" (my levels were 287 ng/dL at age 34 - technically \"normal\" but absolute garbage for my age)"
            ].map((attempt, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border/50 shadow-warm">
                <XCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                <p className="text-foreground">{attempt}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="font-body text-foreground mb-4 leading-relaxed">
              I felt hopeless. Dismissed. Like I was going crazy.
            </p>
            <p className="font-body text-foreground mb-4 leading-relaxed">
              Here I was, doing everything "right" - lifting, eating clean, taking supplements, optimizing sleep - and I felt worse every month. Meanwhile, my doctor looked at my labs, saw I was "in range," and basically told me to stop complaining.
            </p>
            <p className="font-body text-foreground font-semibold">
              I started wondering if this was just... how life would be now. If feeling 60 at 34 was my new normal.
            </p>
          </div>
        </div>
      </section>

      {/* Discovery */}
      <section className="py-20 px-4 bg-card">
        <div className="container max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-center mb-12">
            Then I Discovered Something That <span className="text-gradient-warm">Changed Everything...</span>
          </h2>
          
          <p className="font-body text-foreground mb-6 leading-relaxed">
            While researching late one night (because who can sleep with low T?), I stumbled across a study from the Journal of Clinical Endocrinology & Metabolism that made my jaw drop.
          </p>
          
          <p className="font-body text-foreground mb-8 leading-relaxed">
            They compared men with testosterone levels of 300 ng/dL versus 600 ng/dL. Both were technically "normal."
          </p>
          
          <p className="font-body text-foreground mb-6 font-semibold">
            But the differences were staggering:
          </p>
          
          <div className="space-y-3 mb-12">
            {[
              "43% higher risk of depression in the \"low-normal\" group",
              "2x the rate of erectile dysfunction",
              "Significantly worse cognitive function and memory",
              "Much higher rates of anxiety and irritability",
              "Substantially lower muscle mass and higher body fat - even with identical exercise routines"
            ].map((finding, i) => (
              <div key={i} className="flex items-start gap-3 p-3 bg-accent/10 rounded-lg border border-accent/20">
                <span className="text-accent font-semibold">•</span>
                <p className="text-foreground">{finding}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What I Learned */}
      <section className="py-20 px-4 gradient-warm">
        <div className="container max-w-4xl mx-auto">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-center mb-4">
            What I learned <span className="text-gradient-warm">shocked me:</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            According to research published in the Journal of Clinical Endocrinology & Metabolism and data from thousands of men's health records:
          </p>
          
          <div className="space-y-4">
            {[
              "The \"normal range\" of 300-900 ng/dL is so absurdly wide that you can feel like death at 320 ng/dL and your doctor will tell you you're \"fine\" - even though that's the level of an average 70-year-old man",
              "Male testosterone levels have dropped 25-30% in just the last 25 years - meaning you could have half the T your grandfather had at your age and still be told you're \"normal\"",
              "Over 60% of men with legitimate low-T symptoms are dismissed by their primary care doctors because they're technically \"in range\" - leaving millions of men suffering needlessly",
              "The symptoms you're experiencing - brain fog, crushing fatigue, anxiety, low sex drive - are NOT \"just getting older\" or \"just stress\" - they're your body literally screaming that something is physiologically wrong"
            ].map((fact, i) => (
              <div key={i} className="p-5 bg-card rounded-xl border border-border/50 shadow-warm">
                <p className="text-foreground">{fact}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 p-6 bg-destructive/10 rounded-xl border border-destructive/20">
            <p className="font-body text-foreground font-semibold text-center">
              But most alarming of all: Most men in their 30s and 40s are unknowingly making their testosterone worse by following mainstream advice that sounds healthy but actually crashes T levels further.
            </p>
            <p className="font-body text-muted-foreground text-center mt-4">
              I know because I was making all these same mistakes...
            </p>
          </div>
        </div>
      </section>

      {/* Research & Experts */}
      <section className="py-20 px-4 bg-card">
        <div className="container max-w-3xl mx-auto">
          <p className="font-body text-foreground mb-6 leading-relaxed">
            Through extensive research and consultation with:
          </p>
          
          <div className="space-y-3 mb-8">
            {[
              "Board-certified endocrinologists specializing in male hormone optimization",
              "Men's health physicians who've treated over 10,000 low-T cases",
              "Researchers who've published peer-reviewed studies on testosterone and quality of life"
            ].map((expert, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <p className="text-foreground">{expert}</p>
              </div>
            ))}
          </div>
          
          <p className="font-body text-foreground mb-6 leading-relaxed">
            I discovered WHY traditional approaches fail - and more importantly, what actually works.
          </p>
          
          <p className="font-body text-foreground mb-6 leading-relaxed">
            The real problem wasn't that I needed TRT immediately.
          </p>
          
          <p className="font-body text-foreground mb-8 leading-relaxed">
            The problem was I had NO framework to make an informed decision about what was actually wrong, whether my symptoms were truly T-related, what to try first, how to talk to doctors who wouldn't dismiss me, and when TRT was actually the right call versus when natural optimization could work.
          </p>
          
          <h3 className="font-heading text-2xl md:text-3xl font-semibold text-center mb-8">
            I call it the <span className="text-gradient-warm">"Complete Testosterone Decision Framework"</span>
          </h3>
          
          <p className="font-body text-foreground mb-6 leading-relaxed">
            By understanding the real science, learning exactly what tests to demand, knowing how to interpret my results, and having a systematic approach to both natural optimization AND TRT evaluation, I was able to:
          </p>
          
          <div className="space-y-3 mb-12">
            {[
              "Get taken seriously by doctors and get the RIGHT tests done (not just total T)",
              "Understand why I felt terrible despite being \"in range\" - and have the data to back it up",
              "Try evidence-based natural protocols that actually moved the needle (not BS supplement stacks)",
              "Make an informed decision about TRT with a complete understanding of benefits, risks, costs, and logistics",
              "Go from feeling 60 at 34 to having energy, clarity, and sex drive I haven't felt since my early 20s"
            ].map((result, i) => (
              <div key={i} className="flex items-start gap-3 p-3 bg-accent/10 rounded-lg border border-accent/20">
                <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <p className="text-foreground">{result}</p>
              </div>
            ))}
          </div>
          
          <p className="font-body text-foreground mb-6 leading-relaxed text-center">
            After helping <span className="font-semibold">3,847 other men</span> navigate this same decision and get real answers about their testosterone, I've refined this system into a step-by-step method that anyone can use…
          </p>
          
          <p className="font-body text-muted-foreground text-center italic">
            ...even if your doctor has already dismissed your concerns, you've tried "everything natural," or you're terrified of committing to TRT for life.
          </p>
          
          <div className="flex flex-col items-center gap-4 mt-10">
            <Button 
              onClick={scrollToPrice}
              size="lg" 
              className="group text-lg px-8 py-6 rounded-xl shadow-warm-lg hover:shadow-warm transition-all duration-300"
            >
              GET THE COMPLETE FRAMEWORK
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <p className="font-body font-semibold text-heading">Just $47</p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-warning/10 text-warning-foreground rounded-lg border border-warning/20">
              <Flame className="w-4 h-4 text-warning" />
              <span className="text-sm font-body font-medium">LIMITED TIME: Regular $197</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 gradient-warm">
        <div className="container max-w-4xl mx-auto">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-center mb-4">
            But don't take my word for it.
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Listen to these men who finally got real answers:
          </p>
          
          <div className="space-y-6">
            {[
              {
                quote: "I was 29 with T levels of 305 ng/dL. My doctor told me I was fine. This guide gave me the exact scripts to request a full hormone panel and the data to support why my symptoms mattered. Now I'm working with an endocrinologist who actually listens, and we're creating a protocol that makes sense for me. First time in 3 years I haven't felt dismissed.",
                author: "Marcus T., 29, Portland"
              },
              {
                quote: "The 'How to Talk to Your Doctor' bonus alone was worth 10x the price. I went from being brushed off to getting comprehensive testing and a real treatment plan in one appointment. My T went from 280 to 650 naturally using the 90-day protocol. If that hadn't worked, I would have been completely prepared for TRT - but now I don't need it.",
                author: "James R., 41, Austin"
              },
              {
                quote: "I was paralyzed by fear about TRT - needles for life, ball shrinkage, infertility. This guide broke down every side effect, how to prevent them, and gave me a framework to make the decision with confidence instead of fear. Started TRT 6 months ago at 36. Honestly, it's like being 25 again but with 36-year-old wisdom.",
                author: "David K., 36, Chicago"
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-card rounded-2xl border border-border/50 shadow-warm p-6">
                <p className="font-body text-foreground italic mb-4 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <p className="font-body text-accent font-semibold">
                  — {testimonial.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7 Essential Pieces */}
      <section className="py-20 px-4 bg-card">
        <div className="container max-w-4xl mx-auto">
          <h2 className="font-heading text-xl md:text-2xl font-medium text-center text-muted-foreground mb-4">
            THE CRITICAL KNOWLEDGE THAT SEPARATES MEN WHO GET THEIR LIVES BACK FROM THOSE WHO SUFFER IN SILENCE
          </h2>
          <h3 className="font-heading text-2xl md:text-3xl font-semibold text-center mb-12">
            The 7 Essential Pieces of Information Men with Low-T Need{" "}
            <span className="text-gradient-warm">(That Most Doctors Won't Provide)</span>
          </h3>
          
          <div className="space-y-6">
            {[
              {
                title: "REAL SYMPTOM CORRELATION",
                description: "Understanding which symptoms are actually caused by low testosterone versus thyroid issues, vitamin deficiencies, or sleep disorders - because treating the wrong problem wastes years of your life feeling terrible (and I'll show you the exact differential diagnosis framework doctors use)"
              },
              {
                title: "COMPLETE LAB INTERPRETATION",
                description: "Knowing that total testosterone is almost meaningless - what actually matters is free testosterone, SHBG, estradiol, LH, FSH, and DHT - and exactly what those numbers mean for YOUR symptoms (and the specific ranges that indicate different underlying causes)"
              },
              {
                title: "DOCTOR NAVIGATION PROTOCOLS",
                description: "Having the exact language and data to get doctors to take you seriously instead of dismissing you with \"you're in the normal range\" - including which specialists to see, what to say, and when to seek a second opinion (without sounding like a demanding patient)"
              },
              {
                title: "EVIDENCE-BASED NATURAL OPTIMIZATION",
                description: "Understanding which lifestyle interventions actually work versus which are Reddit bro-science - because 40% of men with \"low-normal\" T can optimize naturally with the right protocol (and I'll tell you exactly which 40% that is)"
              },
              {
                title: "COMPLETE TRT DECISION MATRIX",
                description: "Having a systematic framework to decide if TRT is right for you based on age, symptom severity, lifestyle factors, and long-term goals - not just jumping in because you read it works or staying scared because of horror stories (both are wrong)"
              },
              {
                title: "COST & LOGISTICS MASTERY",
                description: "Knowing the REAL costs of TRT (it ranges from $50-400/month depending on approach), how to optimize for your budget and lifestyle, travel considerations, and insurance navigation - because surprise costs kill adherence (and I'll show you how to save $2,000+ annually)"
              },
              {
                title: "SIDE EFFECT PREVENTION & MANAGEMENT",
                description: "Understanding how to prevent the scary side effects (polycythemia, sleep issues, fertility impact) rather than hoping they don't happen - because most negative TRT experiences are from poor protocol design, not TRT itself (and completely avoidable with the right knowledge)"
              }
            ].map((piece, i) => (
              <div key={i} className="p-6 bg-background rounded-xl border border-border/50 shadow-warm">
                <h4 className="font-heading text-lg font-semibold text-accent mb-2">
                  {piece.title}
                </h4>
                <p className="text-foreground">{piece.description}</p>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col items-center gap-4 mt-12">
            <Button 
              onClick={scrollToPrice}
              size="lg" 
              className="group text-lg px-8 py-6 rounded-xl shadow-warm-lg hover:shadow-warm transition-all duration-300"
            >
              GET THE COMPLETE FRAMEWORK
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <p className="font-body font-semibold text-heading">Just $47</p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-warning/10 text-warning-foreground rounded-lg border border-warning/20">
              <Flame className="w-4 h-4 text-warning" />
              <span className="text-sm font-body font-medium">LIMITED TIME: Regular $197</span>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 px-4 gradient-warm">
        <div className="container max-w-4xl mx-auto">
          <p className="text-center text-muted-foreground mb-2">INSTANT ACCESS - START GETTING REAL ANSWERS TODAY</p>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-center mb-12">
            Here's Everything You Get With The Complete Testosterone Decision Framework Today!
          </h2>
          
          <div className="bg-card rounded-2xl border border-border/50 shadow-warm-lg p-8 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <BookOpen className="w-8 h-8 text-accent shrink-0" />
              <div>
                <h3 className="font-heading text-xl font-semibold mb-2">The Complete Testosterone Decision Framework</h3>
                <p className="text-muted-foreground">
                  100+ pages of evidence-based protocols that help you understand your symptoms, get proper testing, interpret your results, optimize naturally if possible, and make an informed TRT decision with confidence
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-3 justify-center mb-8">
            <Gift className="w-6 h-6 text-accent" />
            <h3 className="font-heading text-xl font-semibold">Plus These 5 Game-Changing Bonuses</h3>
          </div>
          
          <div className="space-y-4">
            {[
              {
                icon: FileText,
                title: "\"How to Talk to Your Doctor Without Getting Dismissed: The Complete Script Library\"",
                value: "$47 Value",
                description: "The exact phrases, questions, and data presentation techniques to get doctors to take your symptoms seriously, order comprehensive testing, and have productive conversations about treatment - even if you've been dismissed before"
              },
              {
                icon: FlaskConical,
                title: "\"The Complete TRT Side Effects Prevention & Management Handbook\"",
                value: "$67 Value",
                description: "Detailed protocols for preventing and managing polycythemia, sleep disruption, fertility preservation, injection site issues, and every other TRT concern - so you can either optimize your current protocol or make an informed decision without fear"
              },
              {
                icon: Plane,
                title: "\"TRT While Traveling: The Complete Logistics Playbook\"",
                value: "$37 Value",
                description: "TSA navigation, international travel protocols, documentation requirements, finding care abroad, and travel-friendly protocols - because your life doesn't stop for weekly injections"
              },
              {
                icon: FlaskConical,
                title: "\"The 90-Day Natural Testosterone Optimization Protocol\"",
                value: "$57 Value",
                description: "The evidence-based natural optimization program that works for 40% of men with low-normal T - with exact supplement protocols, sleep optimization, training adjustments, and stress management techniques (with clear milestones to know if it's working or if it's time for TRT)"
              },
              {
                icon: FileText,
                title: "\"The Blood Work Interpretation Masterclass\"",
                value: "$47 Value",
                description: "Complete guide to understanding every testosterone-related marker, what optimal looks like versus \"normal,\" red flags to watch for, and how to track your progress - whether optimizing naturally or on TRT"
              }
            ].map((bonus, i) => (
              <div key={i} className="bg-card rounded-xl border border-accent/20 p-6">
                <div className="flex items-start gap-4">
                  <bonus.icon className="w-6 h-6 text-accent shrink-0" />
                  <div>
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <h4 className="font-heading font-semibold text-foreground">{bonus.title}</h4>
                      <span className="text-sm text-accent font-semibold">({bonus.value})</span>
                    </div>
                    <p className="text-muted-foreground text-sm">{bonus.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <p className="text-muted-foreground mb-2">Total Value: <span className="line-through">$302</span></p>
            <p className="font-heading text-3xl font-bold text-heading">Today: Just $47</p>
          </div>
        </div>
      </section>

      {/* Before/After */}
      <section className="py-20 px-4 bg-card">
        <div className="container max-w-4xl mx-auto">
          <p className="text-center text-muted-foreground mb-2">BEFORE AND AFTER</p>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-center mb-4">
            The Transformation <span className="text-gradient-warm">You Can Expect</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Don't let low testosterone continue robbing you of your 30s and 40s. Your energy, mental clarity, and confidence can be better than ever - you just need the right framework to make it happen.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-heading text-lg font-semibold text-destructive mb-4">Before The Complete Testosterone Decision Framework:</h3>
              <div className="space-y-3">
                {[
                  "Crushing daily fatigue despite eating clean, lifting regularly, and getting \"enough\" sleep",
                  "Brain fog so thick you forget conversations mid-sentence and can't focus on basic work tasks",
                  "Doctors dismissing your concerns with \"you're in normal range\" while you feel absolutely terrible",
                  "Paralyzed by confusion about whether to try TRT or not - scared of lifetime commitment but desperate for relief",
                  "Spending $200+/month on supplements that do nothing because you're guessing at what might work",
                  "Sex drive and gym performance declining month after month despite doing \"everything right\""
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                    <p className="text-foreground text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-heading text-lg font-semibold text-accent mb-4">After The Complete Testosterone Decision Framework:</h3>
              <div className="space-y-3">
                {[
                  "Clear understanding of what's actually causing your symptoms - with the data to back it up",
                  "Doctors who take you seriously and order comprehensive testing because you know exactly what to request",
                  "Evidence-based natural optimization protocol (if you're a candidate) or clear confidence in TRT decision",
                  "Energy and mental clarity you haven't felt in years - waking up ready to attack the day",
                  "Gym sessions that actually result in muscle and strength instead of just pain and frustration",
                  "Confidence knowing you made an informed decision based on science, not fear or hype"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <p className="text-foreground text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="flex flex-col items-center gap-4 mt-12">
            <Button 
              onClick={scrollToPrice}
              size="lg" 
              className="group text-lg px-8 py-6 rounded-xl shadow-warm-lg hover:shadow-warm transition-all duration-300"
            >
              GET INSTANT ACCESS NOW
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-warning/10 text-warning-foreground rounded-lg border border-warning/20">
              <Flame className="w-4 h-4 text-warning" />
              <span className="text-sm font-body font-medium">EARLY BIRD SPECIAL Of $47</span>
            </div>
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="py-20 px-4 gradient-warm">
        <div className="container max-w-4xl mx-auto">
          <p className="text-center text-muted-foreground mb-2">YOUR TRANSFORMATION PATH BEGINS HERE</p>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-center mb-4">
            The 5 Core Modules That Transform Your Understanding and{" "}
            <span className="text-gradient-warm">Take Control of Your Testosterone</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Each module precisely designed to give you clarity, confidence, and actionable protocols through evidence-based frameworks.
          </p>
          
          <div className="space-y-6">
            {[
              {
                number: "01",
                title: "The Low Testosterone Truth - Symptoms, Testing & What Doctors Won't Tell You",
                subtitle: "(The Foundation)",
                description: "Finally understand what's really going on - this comprehensive diagnostic module helps you identify if your symptoms are actually T-related while giving you the medical knowledge to advocate for yourself.",
                points: [
                  "The complete symptom correlation matrix that shows which symptoms are definitely low-T versus possibly thyroid, vitamin deficiency, or sleep apnea",
                  "The exact tests to request (beyond just total testosterone) and specific lab markers that reveal the root cause of low T",
                  "How to interpret \"normal range\" versus optimal ranges for your age - and why 350 ng/dL at 32 is terrible even though it's \"normal\""
                ]
              },
              {
                number: "02",
                title: "The Complete Natural Optimization Protocol - 90 Days to Maximum Testosterone",
                subtitle: "(The Natural Path)",
                description: "If you're a candidate for natural optimization (40% of men are), this evidence-based protocol gives you the best shot at raising T without TRT - with clear decision points to know if it's working or when it's time for medical intervention.",
                points: [
                  "The exact supplement stack with dosages and timing that actually works - backed by peer-reviewed research (not bro-science)",
                  "Training, sleep, and nutrition protocols specifically designed to maximize testosterone production",
                  "Clear benchmarks at 30, 60, and 90 days to objectively measure if natural optimization is working for you"
                ]
              },
              {
                number: "03",
                title: "The TRT Decision Matrix - When, Why & Whether Testosterone Replacement Is Right for You",
                subtitle: "(The Framework)",
                description: "Make the TRT decision with confidence instead of fear - our systematic framework helps you weigh benefits, risks, lifestyle factors, and long-term implications based on YOUR specific situation.",
                points: [
                  "The age-based decision framework that factors in symptom severity, lifestyle goals, and health considerations",
                  "Complete breakdown of every TRT protocol (injections, pellets, gels, creams) with real-world pros, cons, costs, and effectiveness",
                  "How to evaluate whether you're a good candidate or if other interventions should be tried first"
                ]
              },
              {
                number: "04",
                title: "TRT Implementation & Optimization - Protocols, Costs, Logistics & Doctor Selection",
                subtitle: "(The Practical Guide)",
                description: "Everything you need to actually implement TRT successfully - from finding the right doctor to optimizing your protocol to navigating costs and logistics like a pro.",
                points: [
                  "How to choose between TRT clinics, endocrinologists, urologists, or telemedicine - with red flags to avoid and green flags to seek",
                  "Complete cost breakdown by approach with specific strategies to save $2,000+ annually on treatment",
                  "Protocol optimization techniques including injection frequency, dosage titration, and adjunct medications (AI, HCG, etc.)"
                ]
              },
              {
                number: "05",
                title: "Side Effect Prevention, Management & Long-Term Success",
                subtitle: "(The Safety Net)",
                description: "The comprehensive guide to preventing and managing every TRT side effect - so you can either optimize your current protocol or enter TRT with confidence knowing you can handle anything that comes up.",
                points: [
                  "Evidence-based protocols for preventing polycythemia (thick blood), managing sleep issues, and preserving fertility",
                  "How to manage estrogen levels, prevent injection site issues, and handle every other common concern",
                  "Long-term monitoring protocols and when to adjust your treatment - so you stay optimized for decades"
                ]
              }
            ].map((module, i) => (
              <div key={i} className="bg-card rounded-2xl border border-border/50 shadow-warm p-6 md:p-8">
                <div className="flex items-start gap-4 mb-4">
                  <span className="font-heading text-3xl font-bold text-accent/30">{module.number}</span>
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-foreground">{module.title}</h3>
                    <span className="text-sm text-accent">{module.subtitle}</span>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">{module.description}</p>
                <div className="space-y-2">
                  {module.points.map((point, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-1" />
                      <p className="text-foreground text-sm">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 bg-card">
        <div className="container max-w-3xl mx-auto text-center">
          <p className="text-muted-foreground mb-2">STOP LETTING LOW TESTOSTERONE STEAL YEARS OF YOUR LIFE</p>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-6">
            Get The Complete Testosterone Decision Framework Now
          </h2>
          <p className="text-muted-foreground mb-8">
            While other men continue suffering in silence or get dismissed by doctors who don't understand, you'll be taking control of your health with evidence-based protocols and confidence.
          </p>
          
          <div className="flex flex-col items-center gap-4">
            <Button 
              onClick={scrollToPrice}
              size="lg" 
              className="group text-lg px-8 py-6 rounded-xl shadow-warm-lg hover:shadow-warm transition-all duration-300"
            >
              GET INSTANT ACCESS NOW
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-warning/10 text-warning-foreground rounded-lg border border-warning/20">
              <Flame className="w-4 h-4 text-warning" />
              <span className="text-sm font-body font-medium">EARLY BIRD SPECIAL Of $47</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-4 gradient-warm">
        <div className="container max-w-xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-8">
            Get The <span className="text-gradient-warm">Complete Framework</span> Today
          </h2>
          
          <div className="bg-card rounded-2xl border border-border/50 shadow-warm-lg p-8">
            <div className="flex items-baseline justify-center gap-3 mb-4">
              <span className="font-heading text-5xl font-bold text-heading">$47</span>
              <span className="text-xl text-muted-foreground line-through">$197</span>
            </div>
            
            <p className="text-muted-foreground mb-6">One-time payment • Instant access • Lifetime updates</p>
            
            <Button 
              size="lg"
              className="w-full text-lg py-6 rounded-xl shadow-warm-lg mb-4"
            >
              GET INSTANT ACCESS NOW
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
              <Flame className="w-4 h-4 text-warning" />
              <span>EARLY BIRD SPECIAL</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-background border-t border-border/50">
        <div className="container max-w-4xl mx-auto text-center">
          <p className="text-sm text-muted-foreground mb-4">
            COPYRIGHT 2025 | THE TESTOSTERONE TRUTH | PRIVACY POLICY | TERMS & CONDITIONS
          </p>
          
          <div className="text-xs text-muted-foreground/70 space-y-4">
            <p>
              <strong>DISCLAIMER:</strong> Please understand results are not typical. Your results will vary and depend on many factors including but not limited to your background, existing health conditions, and commitment level. All health decisions entail risk as well as consistent effort and action. This guide is for educational purposes only and is not medical advice. Consult with a qualified healthcare provider before making any health decisions.
            </p>
            
            <p>
              NOT FACEBOOK: This site is not a part of the Facebook™ website or Facebook Inc. Additionally, This site is NOT endorsed by Facebook™ in any way. FACEBOOK is a trademark of FACEBOOK, Inc. DISCLAIMER: Please understand results are not typical. Your results will vary and depend on many factors including but not limited to your background, experience, and work ethic. All business entails risk as well as taking regular and consistent effort and action.
            </p>
            
            <p>
              Nothing on this page, any of our websites, or any of our content or curriculum is a promise or guarantee of results or future results, and we do not offer any legal, medical, tax or other professional advice. Any potential results referenced here, or on any of our sites, are illustrative of concepts only and should not be considered average results, exact results, or promises for actual or future performance. Use caution and always consult your accountant, lawyer or professional advisor before acting on this or any information related to a lifestyle change or your business or finances. You alone are responsible and accountable for your decisions, actions and results in life, and by your registration here you agree not to attempt to hold us liable for your decisions, actions or results, at any time, under any circumstance.
            </p>
            
            <p>
              This site is not a part of the Facebook website or Facebook Inc. Additionally, This site is NOT endorsed by Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default TRTGuide;
