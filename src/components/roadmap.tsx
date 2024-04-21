import React from "react";

const Roadmap = () => {
  return (
    <section className="my-12 flex flex-col items-center">
      <h1 className="text-[rgb(2,_7,_62)] font-[Archivo] text-[30px] font-normal leading-[48px] tracking-[0px] text-center">
        Meet the Roadmap
      </h1>
      <p className="text-[rgb(2,_7,_62)] font-[DM_Sans] text-[16px] font-normal leading-[24px] tracking-[0px] text-center opacity-60">
        Lorem ipsum dolor sit amet consectetur adipisicing
      </p>
      <div className="flex justify-between items-center flex-col md:flex-row gap-4 my-12">
        <div className="w-[300px] flex flex-col items-center flex-1">
          <h3 className="text-[rgb(2,_7,_62)] font-[DM_Sans] text-[20px] font-medium leading-[33px] tracking-[0px] text-center">
            Join new server hosting
          </h3>
          <p className="text-[rgb(2,_7,_62)] font-[DM_Sans] text-[15px] font-normal leading-[24px] tracking-[0px] text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod
            tempor labore dolore
          </p>
          <p className="text-[rgb(2,_7,_62)] font-[DM_Sans] text-[15px] font-normal leading-[33px] tracking-[0px] text-center">
            29 January 2019
          </p>
        </div>

        <div className="w-[300px] flex flex-col items-center flex-1">
          <h3 className="text-[rgb(2,_7,_62)] font-[DM_Sans] text-[20px] font-medium leading-[33px] tracking-[0px] text-center">
            Mining coin with latest gpu
          </h3>
          <p className="text-[rgb(2,_7,_62)] font-[DM_Sans] text-[15px] font-normal leading-[24px] tracking-[0px] text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod
            tempor labore dolore
          </p>
          <p className="text-[rgb(2,_7,_62)] font-[DM_Sans] text-[15px] font-normal leading-[33px] tracking-[0px] text-center">
            17 April 2019
          </p>
        </div>

        <div className="w-[300px] flex flex-col items-center flex-1">
          <h3 className="text-[rgb(2,_7,_62)] font-[DM_Sans] text-[20px] font-medium leading-[33px] tracking-[0px] text-center">
            Turn new website with design
          </h3>
          <p className="text-[rgb(2,_7,_62)] font-[DM_Sans] text-[15px] font-normal leading-[24px] tracking-[0px] text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod
            tempor labore dolore
          </p>
          <p className="text-[rgb(2,_7,_62)] font-[DM_Sans] text-[15px] font-normal leading-[33px] tracking-[0px] text-center">
            31 October 2019
          </p>
        </div>
      </div>
      <button className="w-fit px-4 py-2 rounded-[5px] opacity-50 bg-[rgb(238,_241,_244)] text-[rgb(2,_7,_62)] font-[DM_Sans] text-[15px] font-bold leading-[24px] tracking-[0px] text-center uppercase">
        SEE FULL Roadmap
      </button>
    </section>
  );
};

export default Roadmap;
