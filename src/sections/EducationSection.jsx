import TitleHeader from "../components/TitleHeader";

const EducationSection = () => {
  return (
    <section className="flex-center section-padding flex-col">
      <div className="w-full flex justify-center">
        <TitleHeader title="My Education" sub="📚 My Education Overview" />
      </div>

      <div className="w-full h-full md:px-10 px-5">
        <div className=" flex flex-col justify-center items-center mt-10 gap-10 mx-80 ">
          <img
            src="/images/aupp-campus.JPG"
            alt="AUPP"
            className="stamp-border w-full h-100 object-cover mx-auto"
          />
          <p className="text-3xl text-purple-50 font-bold text-center">
            American University of Phnom Penh
          </p>
        </div>
        <p className=" w-full text-center mt-5">
          Forever grateful to be part of AUPP Community
        </p>
        <p className=" w-full text-center mt-5">GPA: 3.67 / 4</p>
      </div>
    </section>
  );
};

export default EducationSection;
