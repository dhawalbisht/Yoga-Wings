import React from "react";

import { courses } from "../data";

import { BsStarFill, BsStarHalf } from "react-icons/bs";

const Instructor = () => {
  return (
    <section className="section-sm lg:section-lg">
      <div className="container mx-auto">
        {/* text */}
        <div>
          <h2 className="h2 mb-3 lg:mb-[18px]">Instructors for Yoga</h2>
          <p className="">
            Connect with our instructors, learn and practice yoga with us
            anywhere, anytime!
          </p>
        </div>
        <div>text</div>
        {/* instructor list */}
        <div>Our Instructors</div>
        {/* btn */}
        <div>
          <button>Browse all</button>
        </div>
      </div>
    </section>
  );
};

export default Instructor;
