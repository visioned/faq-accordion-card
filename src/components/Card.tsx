import Accordion from "./Accordion";
import bgMobile from "../assets/bg-pattern-mobile.svg";
import desktop from "../assets/illustration-woman-online-desktop.svg";
import shadow from "../assets/bg-pattern-desktop.svg";

export const Card = () => {
  return (
    <div className="relative flex flex-col lg:flex-row lg:items-start items-center lg:h-[509px] lg:w-[920px] h-[535px] w-[327px] bg-[#fff] rounded-[23px] shadow-2xl overflow-hidden z-10">
      <div className="absolute lg:left-[485px] lg:pt-1">
        <Accordion />
      </div>
      <div className="lg:hidden flex flex-col items-center">
        <img
          src={bgMobile}
          alt=""
          className="absolute w-52 z-10 animate-scale"
        />
      </div>

      <div className="lg:flex-1 lg:relative">
        <img
          src={desktop}
          alt=""
          className="absolute top-[52px] right-[510px] w-[500px] h-auto z-30"
        />
        <img
          src={shadow}
          alt=""
          className="absolute bottom-[-630px] right-[510px] w-[975px] h-auto z-20"
        />
      </div>
    </div>
  );
};
