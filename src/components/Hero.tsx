import { Check, MapPin, Star } from "lucide-react";
import ContactForm from "./ContactForm";
import heroImage from "@/assets/hero-electrical.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text */}
          <div className="space-y-8">
            <div>
              <p className="gold-text font-semibold text-lg mb-4">Shields Electrical Contractors</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight text-balance">
                Trusted Local Electricians — Traralgon & Gippsland
              </h1>
            </div>

            <p className="text-lg text-muted-foreground max-w-lg">
              Reliable, professional electrical services for residential and commercial properties. 
              Quality workmanship you can depend on.
            </p>

            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <span className="text-foreground">Licensed & Fully Insured Electricians</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <span className="text-foreground">Fast Response Times Across Gippsland</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <span className="text-foreground">Upfront Pricing — No Hidden Costs</span>
              </li>
            </ul>

            {/* Trust Signals */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <span className="text-muted-foreground text-sm">4.2 Rating</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm">5 McMahon St, Traralgon</span>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:justify-self-end w-full max-w-md">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
