import React from "react";
import GetStarted from "./GetStarted";
import Image from "next/image";
import image from '../../../public/sources/images/illustration-mockups.svg'

const Community = () => {
  return (
    <div className="bg-hero-mo md:bg-hero-de bg-no-repeat bg-contain bg-very-pale-cyan flex flex-col lg:flex-row items-center gap-8 pt-16 lg:pt-6 py-8 px-4
    text-very-dark-cyan font-poppins 
    md:px-8 lg:px-12">

      <section className='flex flex-col items-center gap-8 text-center lg:items-start lg:text-start'>
        <h1 className="text-2xl lg:text-3xl font-bold ">Build The Community Your Fans Will Love</h1>
        <p className="font-open lg:text-lg">
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as you engage
          in genuine discussion.
        </p>
        <GetStarted />
      </section>

      <Image src={image} alt="Illustration of mockups" width={512} height={512} />

    </div>
  );
};

export default Community;
