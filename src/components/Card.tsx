import mobile from "../assets/illustration-woman-online-mobile.svg";
import Accordion from "./Accordion";
import bgMobile from "../assets/bg-pattern-mobile.svg"

export const Card = () => {
  return (
    <div className="flex flex-col items-center h-[535px] w-[327px] bg-[#fff] rounded-[23px] shadow-2xl">
        <div className="flex flex-col items-center">
          <img src={mobile} alt="" className="absolute top-[82px] h-52 w-52" />
          <img src={bgMobile} alt="" className="absolute w-52 z-10" />
        </div>
      <Accordion />
    </div>
  );
};
