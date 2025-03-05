import React from "react";
import { locations, links } from "../Main/data";
import ItemContact from "./ItemContact";
const Contacts = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-1">
      <section className="flex flex-col gap-4">
        {locations.map((item, i) => {
          return <ItemContact key={i} links={item} />;
        })}
      </section>
      {/* <section className="flex flex-col gap-4 lg:grid lg:grid-cols-2 lg:gap-6  ">
        {links.map((item, i) => {
          return <a className="hover:underline lg:whitespace-nowrap lg:px-6" key={i}>{item}</a>;
        })}
      </section> */}
      <section className="flex flex-col lg:flex-row lg:px-8 lg:items-start lg:justify-start lg:flex-wrap gap-6">
        <a className="line lg:order-1">About Us</a>
        <a className="line lg:order-3">What We Do</a>
        <a className="line lg:order-5">FAQ</a>
        <a className="line lg:order-2">Career</a>
        <a className="line lg:order-4">Blog</a>
        <a className="line lg:order-6">Contact Us</a>
      </section>
    </div>
  );
};

export default Contacts;
