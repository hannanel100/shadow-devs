import React from "react";
import { MdOutlineNaturePeople } from "react-icons/md";
import { FaPeopleArrows } from "react-icons/fa";
import { GiGrowth } from "react-icons/gi";
import { VscFeedback } from "react-icons/vsc";
const HowItWorks = () => {
  return (
    <div className="mx-auto flex w-2/3 flex-col  gap-8">
      <h3 className="text-center text-xl font-bold">HOW IT WORKS</h3>
      {/* three divs with icon on top, a subheading and text in a column */}
      <section className="flex flex-wrap items-start gap-4">
        <div className="flex flex-1 flex-col items-center justify-center gap-2">
          <MdOutlineNaturePeople
            className="text-center text-5xl"
            color="#9AC2C5"
          />
          <h4 className=" font-bold">FIND A MENTOR</h4>
          <p>Find a mentor who can help you with your career</p>
        </div>
        <div className="flex flex-1 flex-col items-center justify-center gap-2">
          <FaPeopleArrows className="text-center text-5xl" color="#9AC2C5" />
          <h4 className=" font-bold">CONNECT WITH THEM</h4>
          <p>Connect with them and learn from their experience</p>
        </div>
        <div className="flex flex-1 flex-col items-center justify-center gap-2">
          <GiGrowth className="text-center text-5xl" color="#9AC2C5" />
          <h4 className=" font-bold">GROW TOGETHER</h4>
          <p>Grow together and become a better developer</p>
        </div>
        <div className="flex flex-1 flex-col items-center justify-center gap-2">
          <VscFeedback className="text-center text-5xl" color="#9AC2C5" />
          <h4 className=" font-bold">GIVE FEEDBACK</h4>
          <p>
            Give feedback for your experience shadowing your mentor and help him
            mentor more developers!
          </p>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
