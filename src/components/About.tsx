import { Award, Users, Clock, ThumbsUp } from "lucide-react";

const stats = [
  { icon: Users, value: "500+", label: "Happy Customers" },
  { icon: Clock, value: "Fast", label: "Response Time" },
  { icon: Award, value: "Licensed", label: "& Insured" },
  { icon: ThumbsUp, value: "4.2★", label: "Google Rating" },
];

const About = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text */}
          <div className="space-y-6">
            <div>
              <p className="gold-text font-semibold mb-4">Why Choose Us</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Your Trusted Gippsland Electricians
              </h2>
            </div>

            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                Shields Electrical Contractors has been proudly serving Traralgon and the 
                greater Gippsland region with reliable, professional electrical services.
              </p>
              <p className="leading-relaxed">
                Our team of licensed electricians brings years of experience to every job, 
                whether it's a simple light fitting or a complete commercial fitout. We take 
                pride in our work and stand behind every job we complete.
              </p>
              <p className="leading-relaxed">
                Based right here in Traralgon at 5 McMahon Street, we understand the local 
                community and are committed to providing fast, friendly service at fair prices.
              </p>
            </div>

            <a href="tel:+61408512224" className="btn-outline inline-flex mt-4">
              Call Us Today
            </a>
          </div>

          {/* Right Column - Stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="glass-card rounded-xl p-6 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
