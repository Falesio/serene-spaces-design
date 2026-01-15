import { Phone, ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 lg:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Need an Electrician?
            <span className="block gold-text mt-2">We're Ready to Help</span>
          </h2>
          
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            Get in touch today for a free quote. Our friendly team is standing by 
            to assist with all your electrical needs.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="tel:+61408512224" 
              className="btn-primary text-lg px-8 py-4 gap-2"
            >
              <Phone className="w-5 h-5" />
              0408 512 224
            </a>
            <a 
              href="#contact" 
              className="btn-outline text-lg px-8 py-4 gap-2"
            >
              Send a Message
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
