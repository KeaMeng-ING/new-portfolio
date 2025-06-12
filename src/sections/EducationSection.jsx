import { useRef, useEffect } from "react";
import TitleHeader from "../components/TitleHeader";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const EducationSection = () => {
  const sectionRef = useRef(null);
  const imgRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      imgRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imgRef.current,
          start: "top 80%",
        },
      }
    );
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 120%",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      id="education"
      className="flex-center section-padding flex-col scroll-mt-30"
    >
      <div className="w-full flex justify-center">
        <TitleHeader title="My Education" sub="📚 My Education Overview" />
      </div>

      <div className="w-full h-full md:px-10 px-5">
        <div
          className="flex flex-col justify-center items-center mt-10 gap-10 mx-80 xl:mx-120"
          ref={imgRef}
        >
          <img
            src="/images/aupp-campus.JPG"
            alt="AUPP"
            className="stamp-border w-full h-100 xl:h-180 xl:object-bottom object-cover mx-auto "
          />
          <p className="text-3xl xl:text-4xl text-purple-50 font-bold text-center">
            American University of Phnom Penh
          </p>
        </div>
        <div ref={textRef}>
          <p className="w-full text-center mt-5 xl:text-xl">
            Forever grateful to be part of AUPP Community
          </p>
          <p className="w-full text-center mt-5 xl:text-xl">GPA: 3.67 / 4</p>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
