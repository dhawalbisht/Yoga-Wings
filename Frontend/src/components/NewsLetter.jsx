import React from 'react';
import { MdEmail } from 'react-icons/md';

const NewsLetter = () => {
  return (
    <section className='section-sm lg: section-lg bg-black min-h-[520px]' >
      <div className="container mx-auto">
        {/*text*/}
        <div className="border-[1.5px] border-black rounded-1g text-center pt-[70px] pb-12">

          <h4 className="text-[26px] text-white font-bold mb-[14px]">
            Subscribe Our Newsletter
          </h4>
          <p className="text-black-200 mb-12">
            Subscribe our newsletter for further updates about us
          </p>
          {/*form*/}
          <form className="max-w-[752px] mx-auto relative flex flex-col 1g:flex-row gap-y-6 p-4 1g:p-0 gap-x-4">

            <div className='w-full relative flex'>
              {/*icon*/}
              <div className="absolute left-2 h-full w-12 flex justify-center items-center text-2xl text-black">
                <MdEmail />
              </div>
              <input
                className="form-control w-full border border-black-300 bg-transparent outline-none placeholder-text-black-200 text-white pl-[60px]"
                placeholder='Enter your email address'
                type="text"
              />
            </div>
            <center>
              < button className='btn btn-lg btn-orange
              text-white w-full lg:max-w-[180px]'>
                Get started
              </button >
            </center>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
