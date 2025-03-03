import React from "react";
import GetStarted from "./GetStarted";
import Image from "next/image";
import image from '../../../public/sources/images/illustration-mockups.svg'

const Community = () => {
  return (
    <div className="bg-hero-mo bg-no-repeat bg-contain bg-very-pale-cyan flex flex-col items-center gap-8 text-center pt-16 py-8 px-4
    text-very-dark-cyan font-poppins  ">

      <h1 className="text-2xl font-bold ">Build The Community Your Fans Will Love</h1>

      <p className="font-open">
        Huddle re-imagines the way we build communities. You have a voice, but
        so does your audience. Create connections with your users as you engage
        in genuine discussion.
      </p>

      <GetStarted />

      <Image src={image} alt="Illustration of mockups" width={512} height={512} />

    </div>
  );
};

export default Community;
