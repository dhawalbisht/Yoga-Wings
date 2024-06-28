import React from "react";
import CardImage1 from "../assets/images/cards/card-1.png";
import CardImage2 from "../assets/images/cards/card-2.png";
import CardImage3 from "../assets/images/cards/card-3.png";

const Cards = () => {
  return (
    <section className="bg-cardsBg min-h-[260px] pb-[55px] lg:-mt-24">
      <div className="container mx-auto flex flex-col lg:flex-row gap-x-[32px] justify-center items-center">
        <div className="flex-1 flex flex-wrap justify-center gap-x-[15px] lg:gap-x-[38px] gap-y-[20px] lg:gap-y-[40px] -mt-[32px] z-10 lg:-mt-[77px] mx-auto">
          <div className="bg-white w-full flex-1 max-w-[282px] p-[14px] lg:p-[26px] shadow-2xl rounded-md max-h-[282px]">
            {/* card text */}
            <div className="flex items-center mb-[18px] lg:mb-[28px]">
              <h4 className="text-lg lg:text-2xl lg:leading-7 font-bold text-heading mr-8">
                Individual Personalised Sessions
              </h4>
              <h2 className="h2 text-stroke-2">1</h2>
            </div>
            <div>
              <img src={CardImage1} alt="Card 1" />
            </div>
          </div>

          <div className="bg-white w-full max-w-[282px] p-[14px] lg:p-[26px] shadow-2xl rounded-md max-h-[282px]">
            {/* card text */}
            <div className="flex items-center mb-[18px] lg:mb-[28px]">
              <h4 className="text-lg lg:text-2xl lg:leading-7 font-bold text-heading mr-8">
                Yoga Group Sessions and Kids Yoga
              </h4>
              <h2 className="h2 text-stroke-2">2</h2>
            </div>
            <div>
              <img src={CardImage2} alt="Card 2" />
            </div>
          </div>

          <div className="bg-white w-full max-w-[282px] p-[14px] lg:p-[26px] shadow-2xl rounded-md max-h-[282px]">
            {/* card text */}
            <div className="flex items-center mb-[18px] lg:mb-[28px]">
              <h4 className="text-lg lg:text-2xl lg:leading-7 font-bold text-heading mr-8">
                Recorded Videos to Learn Yoga
              </h4>
              <h2 className="h2 text-stroke-2">3</h2>
            </div>
            <div>
              <img src={CardImage2} alt="Card 3" />
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-white w-full max-w-[542px] mx-auto p-[14px] lg:p-[26px] mt-4 lg:-mt-[77px] z-10 shadow-2xl rounded-md flex justify-between items-start">
          <div className="max-w-[240px]">
            <div className="flex items-center mb-4 lg:mb-8">
              <h4 className="text-lg lg:text-2xl lg:leading-7 font-bold text-heading mr-8">
                Corporate Yoga Sessions and Disease Management
              </h4>
              <h2 className="h2 text-stroke-2">4</h2>
            </div>
            <p className="mb-4 lg:mb-3">
              We're boosting online yoga by enabling anyone in the world to
              learn from the best.
            </p>
            <a
              className="text-xs lg:text-sm font-bold uppercase text-heading"
              href="#"
            >
              Read more
            </a>
          </div>
          <div>
            <img src={CardImage3} alt="Card 4" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;
