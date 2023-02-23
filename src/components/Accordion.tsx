import { useState } from "react";
import arrow from "../assets/icon-arrow-down.svg";

const Accordion = () => {
  const [selected, setSelected] = useState<number | null>(null);
  type FaqItem = {
    question: string;
    answer: string;
  };
  const faq: FaqItem[] = [
    {
      question: "How many team members can I invite?",
      answer:
        "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
    },
    {
      question: "What is the maximum file upload size?",
      answer:
        "No more than 2GB. All files in your account must fit your allotted storage space.",
    },
    {
      question: "How do I reset my password?",
      answer:
        "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.",
    },
    {
      question: "Can I cancel my subscription?",
      answer:
        "Yes! Send us a message and we’ll process your request no questions asked.",
    },
    {
      question: "Do you provide additional support?",
      answer:
        "Chat and email support is available 24/7. Phone lines are open during normal business hours.",
    },
  ];

  const toggle = (i: number) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <div className="h-20 flex flex-col flex-shrink-0 mt-32">
      <h1 className="flex items-center justify-center text-[35px] font-bold tracking-wider uppercase">
        faq
      </h1>
      <div className="text-black text-sm p-2 ">
        {faq.map((item, i) => (
          <div key={i}>
            <div
              onClick={() => toggle(i)}
              className="cursor-pointer flex relative items-center justify-between p-3 h-15"
            >
              <h2
                className={`text-[14px] ${
                  selected === i ? "text-[13px] font-bold" : ""
                }`}
              >
                {item.question}
              </h2>
              <span>
                {selected === i ? (
                  <img src={arrow} alt="" className="rotate-180 duration-300" />
                ) : (
                  <img src={arrow} alt="" className="rotate-0 duration-300" />
                )}
              </span>
            </div>
            <div
              className={`text-[12px] text-gray-500 border-b-[1px] mx-3 transition-all duration-500 ease-in-out overflow-hidden ${
                selected === i ? "max-h-20" : "max-h-0 "
              }`}
            >
              <div className="mr-10 pb-5">{item.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
