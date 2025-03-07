import React from "react";
import Image from "next/image";

interface tests {
  quote: string;
  name: string;
  position: string;
  image: string;
}

type prop = {
  data: tests;
};
const Testimonial = ({ data }: prop) => {
  return (
    <div className="bg-primary-testimonials-bg rounded-md p-4 flex flex-col gap-4
    text-white font-open-sans font-light text-[12px]">
      <p>{data.quote}</p>
      <div className="flex items-center gap-2">
        <Image
        className="h-auto w-8 rounded-full"
          src={data.image}
          alt={data.name}
          width={128}
          height={128}
          objectFit="cover"
        />
        <div>
            <h3 className="font-semibold">{data.name}</h3>
            <p>{data.position}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
