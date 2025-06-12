import TitleHeader from "../components/TitleHeader";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      }
    );
  }, []);

  return (
    <section
      id="about"
      className="flex-center section-padding flex-col"
      ref={sectionRef}
    >
      <div className="w-full flex justify-center">
        <TitleHeader title="About Me" sub="🤖 Get To Know Me" />
      </div>
      <div className="w-full h-full md:px-10 px-5">
        <div className="relative z-10 mt-25 gap-30 flex xl:items-start items-start justify-start">
          <div className="flex w-[30%] h-[60%] items-center justify-center gap-10 ml-30">
            <img
              src="/images/my-photo.JPG"
              alt="Your Name"
              className="rounded-2xl w-full h-full object-cover shadow-lg"
            />
          </div>
          <div className="flex-1 flex flex-col justify-start h-full gap-3">
            <div className="flex flex-col justify-start gap-3">
              <h2 className="text-purple-50 text-4xl font-black">Who Am I?</h2>
              <p className="w-[80%] text-2xl/loose">
                Hi! My name is Ing Kea Meng, currently a junior student majoring
                in Software Development at American University of Phnom Penh.
                With a strong passion for Web Development, I am currently
                seeking an internship opportunity to apply my skills, gain
                hands-on experience, and contribute to real-world projects.
              </p>
            </div>
            <div>
              <button className="px-5 py-3 rounded-lg bg-white text-black group-hover:bg-black-50 transition-colors duration-300">
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
