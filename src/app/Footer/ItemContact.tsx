import React from "react";
import Image from "next/image";

interface links {
  icon: string;
  text: string;
}

type prop = {
  links: links;
};

const ItemContact = ({ links }: prop) => {
  return (
    <div className="flex items-start gap-4 ">
      <Image className="mt-1" src={links.icon} alt={links.text} width={20} height={16} />
      <p>{links.text}</p>
    </div>
  );
};

export default ItemContact;
