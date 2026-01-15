import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">S</span>
              </div>
              <div>
                <span className="text-foreground font-bold text-lg">SHIELDS</span>
                <span className="text-primary font-bold text-lg ml-1">ELECTRICAL</span>
              </div>
            </div>
            <p className="text-muted-foreground max-w-sm mb-6">
              Professional electrical contractors serving Traralgon and the greater 
              Gippsland region. Quality workmanship, fair prices, and reliable service.
            </p>
            <p className="text-sm text-muted-foreground">
              Shields Electrical Contractors Pty Ltd
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="tel:+61408512224" 
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4 text-primary" />
                  0408 512 224
                </a>
              </li>
              <li>
                <a 
                  href="mailto:info@shieldselectrical.com.au" 
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4 text-primary" />
                  info@shieldselectrical.com.au
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-muted-foreground">
                  <MapPin className="w-4 h-4 text-primary mt-1" />
                  <span>
                    5 McMahon St<br />
                    Traralgon VIC 3844
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Residential Electrical
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Commercial Electrical
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Emergency Call-Outs
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Safety Inspections
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Shields Electrical Contractors Pty Ltd. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Licensed Electrical Contractors — Serving Gippsland
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
