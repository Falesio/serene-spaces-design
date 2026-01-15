import { Home, Building2, Zap, Lightbulb, ShieldCheck, Wrench } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential Electrical",
    description: "Complete home electrical services including installations, repairs, and upgrades for your family's safety and comfort.",
  },
  {
    icon: Building2,
    title: "Commercial Electrical",
    description: "Comprehensive electrical solutions for offices, retail spaces, and industrial facilities throughout Gippsland.",
  },
  {
    icon: Zap,
    title: "Emergency Call-Outs",
    description: "Fast response electrical emergency services when you need help urgently. Available for urgent situations.",
  },
  {
    icon: Lightbulb,
    title: "Lighting Installation",
    description: "Expert LED upgrades, downlight installations, and outdoor lighting design to enhance your space.",
  },
  {
    icon: ShieldCheck,
    title: "Safety Inspections",
    description: "Thorough electrical safety checks and compliance certificates for homes and businesses.",
  },
  {
    icon: Wrench,
    title: "Maintenance & Repairs",
    description: "Regular maintenance programs and prompt repairs to keep your electrical systems running smoothly.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="gold-text font-semibold mb-4">Our Services</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Complete Electrical Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            From simple repairs to complex installations, we deliver quality workmanship 
            across all residential and commercial electrical services.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="service-card p-6 border border-border/50">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
