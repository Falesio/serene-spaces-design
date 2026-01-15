import Header from "@/components/Header";
import Hero from "@/components/Hero";
import GoogleReviews from "@/components/GoogleReviews";
import Services from "@/components/Services";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <GoogleReviews />
      <Services />
      <About />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
