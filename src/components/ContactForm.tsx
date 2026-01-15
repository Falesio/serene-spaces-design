import { useState } from "react";
import { Send } from "lucide-react";
import { toast } from "sonner";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thanks for your message! We'll be in touch shortly.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="glass-card rounded-xl p-6 md:p-8">
      <h3 className="text-xl font-bold text-foreground mb-2">Get a Free Quote</h3>
      <p className="text-muted-foreground text-sm mb-6">
        Tell us about your electrical needs and we'll get back to you promptly.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="Your Name"
            required
            className="input-field"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Email Address"
            required
            className="input-field"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
        <div>
          <input
            type="tel"
            placeholder="Phone Number"
            required
            className="input-field"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
        </div>
        <div>
          <textarea
            placeholder="How can we help?"
            rows={4}
            className="input-field resize-none"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
        </div>
        <button type="submit" className="btn-primary w-full gap-2">
          <Send className="w-4 h-4" />
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
