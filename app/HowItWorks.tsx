import React from "react";

const HowItWorks = () => {
  return (
    <div className="mx-auto flex w-2/3 flex-col gap-8">
      <h3 className="text-center">HOW IT WORKS</h3>
      {/* three divs with icon on top, a subheading and text in a column */}
      <section className="flex gap-4">
        <div>
          <h4>FIND A MENTOR</h4>
          <p>Find a mentor who can help you with your career</p>
        </div>
        <div>
          <h4>CONNECT WITH THEM</h4>
          <p>Connect with them and learn from their experience</p>
        </div>
        <div>
          <h4>GROW TOGETHER</h4>
          <p>Grow together and become a better developer</p>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
