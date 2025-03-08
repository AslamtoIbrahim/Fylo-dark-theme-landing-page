import React from "react";
import Image from "next/image";

interface features {
  title: string;
  description: string;
  image: string;
}

type prop = {
    feat: features;
}
const Feat = ({feat}: prop) => {
  return <div className="w-full flex flex-col gap-8 items-center lg:justify-center text-center text-white font-raleway">
    <Image className="w-16 lg:w-18" src={feat.image} alt={feat.title} width={86} height={71} />
    <section className="flex flex-col gap-3 lg:items-center lg:justify-center xl:px-24">
      <h2 className="font-semibold text-lg lg:text-xl xl:text-2xl">{feat.title}</h2>
      <p className="xl:text-lg">{feat.description}</p>
    </section>
  </div>;
};

export default Feat;
