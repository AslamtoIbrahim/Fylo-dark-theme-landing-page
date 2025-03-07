import React from "react";
import { features } from "./data";
import Feat from "./Feat";

const Features = () => {
  return (
    <div className="padx bg-primary-main-bg flex flex-col gap-12 py-14">
      {features.map((item, i) => {
        return <Feat key={i} feat={item} />;
      })}
    </div>
  );
};

export default Features;
