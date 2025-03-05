import React from "react";
import Image from "next/image";

interface Component {
  title: string;
  description: string;
  image: string;
}

type prop = {
  component: Component;
  index?: number;
};

const Card = ({ component, index }: prop) => {
  return (
    <div className={`rounded-xl  shadow flex flex-col items-center text-center gap-8 py-10 px-6 lg:px-8
     lg:gap-16 ${index == 1 ? `lg:flex-row` : `lg:flex-row-reverse`} `}>
      <Image className='lg:h-auto lg:w-82' src={component.image} alt={component.title} width={1078} height={813} />
      <div className="flex flex-col gap-2 lg:items-start lg:text-start ">
        <h2 className="text-very-dark-cyan text-2xl lg:text-3xl font-bold">{component.title}</h2>
        <p className="text-grayish-blue lg:text-lg">{component.description}</p>
      </div>
    </div>
  );
};

export default Card;
