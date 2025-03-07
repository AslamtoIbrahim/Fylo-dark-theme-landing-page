import React from "react";

const Links = () => {
  return (
    <div className="text-white font-open-sans py-12 flex flex-col gap-8">
      <section className="flex flex-col gap-4">
        <a className="lin" href="#">About Us</a>
        <a className="lin" href="#">Jobs</a>
        <a className="lin" href="#">Press</a>
        <a className="lin" href="#">Blog</a>
      </section>
      <section className="flex flex-col gap-4">
        <a className="lin" href="#">Contact Us</a>
        <a className="lin" href="#">Terms</a>
        <a className="lin" href="#">Privacy</a>
      </section>
    </div>
  );
};

export default Links;
