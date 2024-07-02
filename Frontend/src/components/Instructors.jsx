import React from 'react';
import instructor1 from '../assets/images/cards/i1.jpeg';
import instructor2 from '../assets/images/cards/i2.jpeg';
import instructor3 from '../assets/images/cards/i3.jpeg';
import instructor4 from '../assets/images/cards/i4.jpeg';
import instructor5 from '../assets/images/cards/i5.jpeg';

const Instructors = () => {
  return (
    <section id='instructors'>
      <h2 className="text-center mt-10 mb-none text-5xl">Our Instructors</h2>

      <div className="flex min-h-screen items-center justify-center bg-neutral-800">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-5">
          {/* Instructor 1 */}
          <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div className="h-96 w-72">
              <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={instructor1} alt="Instructor 1" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 className="font-dmserif text-3xl font-bold text-white">Head Coach</h1>
              <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Abhishek Kumar, pursuing PhD in Yoga from National Sanskrit University, Delhi. Has 7 years of yoga teaching experiences, organised various workshops in collaboration with government.</p>
              <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"><a>See More</a></button>
            </div>
          </div>

          {/* Instructor 2 */}
          <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div className="h-96 w-72">
              <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={instructor2} alt="Instructor 2" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 className="font-dmserif text-3xl font-bold text-white">Abhishek Singh</h1>
              <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Abhishek, one of our head coaches with over 6 years of teaching experience in Yoga and a Yoga research Scholar.</p>
              <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
            </div>
          </div>

          {/* Instructor 3 */}
          <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div className="h-96 w-72">
              <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={instructor3} alt="Instructor 3" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 className="font-dmserif text-3xl font-bold text-white">Ritu</h1>
              <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Ritu is a yoga enthusiast, she has expertise in Kid's Yoga and is a winner of the state-level Yoga championship.</p>
              <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
            </div>
          </div>

          {/* Instructor 4 */}
          <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div className="h-96 w-72">
              <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={instructor4} alt="Instructor 4" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 className="font-dmserif text-3xl font-bold text-white">Deepa Yadav</h1>
              <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Deepa is also one of our yoga coaches with over 5 years of teaching experience, she has a master's degree in Yoga.</p>
              <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
            </div>
          </div>

          {/* Instructor 5 */}
          <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div className="h-96 w-72">
              <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={instructor5} alt="Instructor 5" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 className="font-dmserif text-3xl font-bold text-white">Jaswant Kaur</h1>
              <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Jaswant Kaur, research scholar in Yoga with over 5 years of teaching experience and expertise.</p>
              <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instructors;
