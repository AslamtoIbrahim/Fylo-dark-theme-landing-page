import React from "react";
import Input from "./Input";

const SingUp = () => {
  return (
    <div className="bg-primary-intro-bg rounded-lg shad p-8 mx-4 text-center text-white font-open-sans
    flex flex-col gap-4 text-[12px] xy-12 -mb-16 relative z-10 ">

      <h2 className="text-lg">Get early access today</h2>
      <p>
        It only takes a minute to sign up and our free starter tier is extremely
        generous. If you have any questions, our support team would be happy to
        help you.
      </p>
      <Input />
      
    </div>
  );
};

export default SingUp;
