import React from "react";
import { features } from "./data";
import Feat from "./Feat";

const Features = () => {
  return (
    <div className="px-4 md:px-22 lg:px-30 bg-primary-main-bg flex flex-col gap-12 py-14 lg:py-18
    lg:grid lg:grid-cols-2 ">
      {features.map((item, i) => {
        return <Feat key={i} feat={item} />;
      })}
    </div>
  );
};

export default Features;
