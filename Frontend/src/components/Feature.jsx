import React, {useState} from "react";

import ModalVideo from 'react-modal-video';
// import '../video.scss'


import {BsPlayCircleFill} from 'react-icons/bs';

const Features = () =>{
    const [isOpen, setIsOpen]=useState(false);
    return(
     <section className="bg-section min-h-[428px] pt-8 pb-[38px] lg:pb-[150px] mt-[120px] lg:mt-[130px]">
        <div className="container mx-auto">
            {/* {video bg} */}
            <div className="bg-video h-[310px]bg-cover bg-center bg-no-repeat lg:h-[622px] w-full flex justify-center items-center rounded-md lg:-mt-[150px] mb-[28px] lg:mb-20">
                <div onClick={()=>setIsOpen(!isOpen)} className="text-6xl  lg:text-[120px] cursor-pointer
                hover:scale-110 text-orange transition">
                    <BsPlayCircleFill/>
                </div>
            </div>
{/* text */}
<div className="flex flex-col lg:flex-row lg:gap-x-8">
    <div className="flex-1">
        {/* line */}
        <div className="w-9 h-[2px] bg-orange mb-2 lg:w-[70px] rounded-full"></div>
        <h2 className="h2 mb-3 lg:mb-0">The Better way to <br />Start Yoga</h2>

    </div>
    <div className="flex-1">

<p className="max-w-[360px] mb-[18px] lg:mb-[38px]">Practice anywhere at anytime!
    Learn and explore as we provide our best resouces.
</p>
<button className="btn btn-sm btn-orange">Get started</button>
</div>
</div>

        </div>
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} onClose={()=>setIsOpen(false)}
        videoId="k1mBssEYkdU"/>
        </section>
    );
};

export default Features;