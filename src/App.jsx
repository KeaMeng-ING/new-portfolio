import NavBar from "./components/NavBar";
import AboutMe from "./sections/AboutMe";
import Contact from "./sections/Contact";
import EducationSection from "./sections/EducationSection";
import ExperienceSection from "./sections/ExperienceSection";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import Testimonials from "./sections/Testimonials";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <AboutMe />
      <ShowcaseSection />
      <ExperienceSection />
      <EducationSection />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
