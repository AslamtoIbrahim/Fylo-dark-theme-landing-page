import React from "react";
import Image from "next/image";

interface Component {
  title: string;
  description: string;
  image: string;
}

type prop = {
  component: Component;
};

const Card = ({ component }: prop) => {
  return (
    <div className="rounded-xl  shadow flex flex-col items-center text-center gap-8 py-10 px-6">
      <Image src={component.image} alt={component.title} width={1078} height={813} />
      <div className="flex flex-col gap-2">
        <h2 className="text-very-dark-cyan text-2xl font-bold">{component.title}</h2>
        <p className="text-grayish-blue">{component.description}</p>
      </div>
    </div>
  );
};

export default Card;
