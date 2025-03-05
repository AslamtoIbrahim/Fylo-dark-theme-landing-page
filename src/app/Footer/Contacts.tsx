import React from "react";
import { locations, links } from "../Main/data";
import ItemContact from "./ItemContact";
const Contacts = () => {
  return (
    <div className="flex flex-col gap-8">
      <section className="flex flex-col gap-4">
        {locations.map((item, i) => {
          return <ItemContact key={i} links={item} />;
        })}
      </section>
      <section className="flex flex-col gap-4">
        {links.map((item, i) => {
          return <a className="hover:underline" key={i}>{item}</a>;
        })}
      </section>
    </div>
  );
};

export default Contacts;
