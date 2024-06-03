import React from 'react'
import course from "../assets/images/blogs/course.png";


const Courses = () => {
  return (
    <section>
      {/* <div className="flex flex-col bg-orange m-auto p-auto">
    <h1 className="flex py-5 lg:px-20 md:px-10 px-5 lg:mx-40 md:mx-20 mx-5 font-bold text-4xl text-gray-800" >
            Our Instructors
          </h1>
          <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
            <div
             className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 group"
            >
              <div className="inline-block px-3">
                <div
                 className="group-hover:blur-sm hover:!blur-none cursor-pointer w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                ><img src={course} className='w-64 h-64 overflow-hidden rounded-lg shadow-md' alt="" /></div>
              </div>
              <div className="inline-block px-3">
                <div
                 className="group-hover:blur-sm hover:!blur-none cursor-pointer w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                ><img src={course} className='w-64 h-64 overflow-hidden rounded-lg shadow-md' alt="" /></div>
              </div>
              <div className="inline-block px-3">
                <div
                 className="group-hover:blur-sm hover:!blur-none cursor-pointer w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                ><img src={course} className='w-64 h-64 overflow-hidden rounded-lg shadow-md' alt="" /></div>
              </div>
              <div className="inline-block px-3">
                <div
                 className="group-hover:blur-sm hover:!blur-none cursor-pointer w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                ><img src={course} className='w-64 h-64 overflow-hidden rounded-lg shadow-md' alt="" /></div>
              </div>
              <div className="inline-block px-3">
                <div
                 className="group-hover:blur-sm hover:!blur-none cursor-pointer w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                ><img src={course} className='w-64 h-64 overflow-hidden rounded-lg shadow-md' alt="" /></div>
              </div>
              <div className="inline-block px-3">
                <div
                 className="group-hover:blur-sm hover:!blur-none cursor-pointer w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                ><img src={course} className='w-64 h-64 overflow-hidden rounded-lg shadow-md' alt="" /></div>
              </div>
              <div className="inline-block px-3">
                <div
                 className="group-hover:blur-sm hover:!blur-none cursor-pointer w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                ><img src={course} className='w-64 h-64 overflow-hidden rounded-lg shadow-md' alt="" /></div>
              </div>
              <div className="inline-block px-3">
                <div
                 className="group-hover:blur-sm hover:!blur-none cursor-pointer w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                ><img src={course} className='w-64 h-64 overflow-hidden rounded-lg shadow-md' alt="" /></div>
              </div>
            </div>
          </div>
    </div>
    <style > 
  <div className='hide-scroll-bar'></div>
</style> */} <h2 class="text-center mt-10 mb-none text-5xl">Our Instructors</h2>

      <div class="flex min-h-screen items-center justify-center bg-neutral-800">

        <div class="grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-5">

          <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div class="h-96 w-72">
              <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="..//src/assets/images/cards/i1.jpeg" alt="" />
            </div>
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 class="font-dmserif text-3xl font-bold text-white">Head Coach</h1>
              <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Abhishek Kumar, pursuing PhD in Yoga from National Sanskrit University, Delhi. Has 7 years of yoga teaching experiences, organised various workshops in collaboration with government.</p>
              <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"><a>See More</a></button>
            </div>
          </div>
          <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div class="h-96 w-72">
              <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="..//src/assets/images/cards/i2.jpeg" alt="" />
            </div>
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 class="font-dmserif text-3xl font-bold text-white">Abhishek Singh</h1>
              <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Abhishek, one of our heaad coach with over 6 years of teaching experience in Yoga and a Yoga research Scholar.</p>
              <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
            </div>
          </div>
          <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div class="h-96 w-72">
              <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="..//src/assets/images/cards/i3.jpeg" alt="" />
            </div>
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 class="font-dmserif text-3xl font-bold text-white">Ritu</h1>
              <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Ritu is a yoga enthusiast, she has expertise in Kid's Yoga and is a winner of state level Yoga championship.</p>
              <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
            </div>
          </div>
          <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div class="h-96 w-72">
              <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="..//src/assets/images/cards/i4.jpeg" alt="" />
            </div>
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 class="font-dmserif text-3xl font-bold text-white">Deepa Yadav</h1>
              <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Deepa is also one of our yoga coach with over 5 years of teaching experience, she has a master degree in Yoga.</p>
              <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
            </div>
          </div>
          <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div class="h-96 w-72">
              <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="..//src/assets/images/cards/i5.jpeg" alt="" />
            </div>
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 class="font-dmserif text-3xl font-bold text-white">Jaswant Kaur</h1>
              <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Jaswant Kaur, research scholar in Yoga with over 5 years of teaching experience and expertise.</p>
              <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
};
export default Courses;