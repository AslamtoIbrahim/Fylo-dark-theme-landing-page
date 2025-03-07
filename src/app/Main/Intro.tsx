import React from "react";
import Image from "next/image";
import img from "../../../public/source/images/illustration-intro.png";
import Button from "./Button";

const Intro = () => {
  return (
    <div className="padx bgd font-raleway text-center flex flex-col items-center gap-4 py-8 ">
      <Image src={img} alt="inro image" width={720} height={534} />
      <h1 className="text-white text-xl font-semibold">All your files in one secure location, accessible anywhere.</h1>
      <p className="text-white ">
        Fylo stores all your most important files in one secure location. Access
        them wherever you need, share and collaborate with friends family, and
        co-workers.
      </p>
      <Button styles="px-20" />
    </div>
  );
};

export default Intro;
