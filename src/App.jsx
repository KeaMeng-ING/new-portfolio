import NavBar from "./components/NavBar";
import Contact from "./sections/Contact";
import ExperienceSection from "./sections/ExperienceSection";
import FeatureCard from "./sections/FeatureCard";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import LogoShowcase from "./sections/LogoShowcase";
import ShowcaseSection from "./sections/ShowcaseSection";
import Testimonials from "./sections/Testimonials";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <ShowcaseSection />
      <LogoShowcase />
      <FeatureCard />
      <ExperienceSection />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
