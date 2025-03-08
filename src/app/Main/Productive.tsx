import React from "react";
import Image from "next/image";
import prod from "../../../public/source/images/illustration-stay-productive.png";
import arrow from "../../../public/source/images/icon-arrow.svg";

const Productive = () => {
  return (
    <div className="bg-primary-main-bg padx py-12 flex flex-col lg:grid lg:grid-cols-2 xl:justify-items-center lg:items-center gap-4 
    font-raleway font-[400] text-white lg:text-lg">

      <Image className="h-auto lg:w-96 xl:[30rem]" src={prod} alt="productive" width={615} height={465} />

      <section className="flex flex-col gap-4">
        <h2 className="font-semibold text-lg lg:text-2xl xl:text-5xl">Stay productive, wherever you are</h2>
        <p>
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs.
        </p>
        <p>
          Securely share files and folders with friends, family and colleagues for
          live collaboration. No email attachments required.
        </p>
        <div className="w-fit flex items-center font-open-sans text-accent-cyan under 
        hover:opacity-85 cursor-pointer">
            <a href="#">See how Fylo works</a>
            <Image src={arrow} alt="arrow" className="ml-1" />
        </div>
      </section>
    </div>
  );
};

export default Productive;
