import React from "react";
import MobileOne from "../assets/Phone 1.png";
import MobileTwo from "../assets/google-pixel2-xl 1.png";
import Image from "next/image";
import logoOne from "../assets/logo_one.png";
import logoThree from "../assets/logo_two.png";
import logoTwo from "../assets/logo_three.png";
import AppleLogo from "../assets/apple_logo.png";
import PlayStoreLogo from "../assets/gplay_logo.png";

const Wallet = () => {
  return (
    <section className="my-24 flex justify-between items-center flex-col md:flex-row gap-6">
      <div className="flex-1 relative">
        <Image src={MobileTwo} alt="mobile 2" width={350} height={500} className='w-[250px] md:w-[350px]'/>
        <Image src={MobileOne} alt="mobile 1" width={380} height={500} className='w-[200px] md:w-[380px] absolute bottom-0 left-1/3'/>
      </div>
      <div className="flex-1">
        <h1 className="text-[rgb(2,_7,_62)] font-[Archivo] text-[32px] md:text-[48px] font-normal leading-normal md:leading-[60px] tracking-[-1.2px] text-left">
          Our wallet is built-in <br />
          for the cryptocurrency <br /> customers
        </h1>
        <p className="mt-6 text-[rgb(2,_7,_62)] font-[DM_Sans] text-[16px] font-normal leading-normal md:leading-[33px] tracking-[0px] text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod
          tempor incididunt labore dolore magna aliqua minim Lorem ipsum dolor
          sit amet consectetur.
        </p>

        <div className="py-8 flex flex-col gap-6">
          <div className="flex justify-start items-center gap-6 text-[rgb(2,_7,_62)] font-[DM_Sans] text-[16px] font-normal leading-normal md:leading-[60px] tracking-[0px] text-left">
            <Image src={logoOne} alt="logo one" width={30} height={30} />
            <p>Secure transfers with verified Casinos.</p>
          </div>
          <div className="flex justify-start items-center gap-6 text-[rgb(2,_7,_62)] font-[DM_Sans] text-[16px] font-normal leading-normal md:leading-[60px]leading-[60px] tracking-[0px] text-left">
            <Image src={logoTwo} alt="logo two" width={30} height={30} />
            <p>Easily buy and sell CLV within the wallet.</p>
          </div>
          <div className="flex justify-start items-center gap-6 text-[rgb(2,_7,_62)] font-[DM_Sans] text-[16px] font-normal leading-normal md:leading-[60px]leading-[60px] tracking-[0px] text-left">
            <Image src={logoThree} alt="logo three" width={30} height={30} />
            <p>Pay for Gas in CLV.</p>
          </div>
        </div>

        <div className="flex justify-start items-center gap-4">
          <button className='rounded px-4 py-2 flex justify-center items-center gap-3 box-border border-[1px] border-[solid] border-[rgb(255,255,255)] bg-[rgb(22,_23,_24)] text-[rgb(255,_255,_255)] font-[DM_Sans] text-[14px] font-bold leading-[24px] tracking-[0.14px] text-center uppercase'>
            <Image src={AppleLogo} alt="apple" width={20} height={20} />
            APP STORE
          </button>
          <button className='rounded px-4 py-2 flex justify-center items-center gap-3 box-border border-[1px] border-[solid] border-[rgb(255,255,255)] bg-[rgb(22,_23,_24)] text-[rgb(255,_255,_255)] font-[DM_Sans] text-[14px] font-bold leading-[24px] tracking-[0.14px] text-center uppercase'>
            <Image src={PlayStoreLogo} alt="google play" width={20} height={20} />
            PLAY STORE
          </button>
        </div>
        <p className='mt-3 text-[rgb(2,_7,_62)] font-[DM_Sans] text-[14px] font-normal leading-[33px] tracking-[0px] text-left opacity-50'>*Windows app coming soon</p>
      </div>
    </section>
  );
};

export default Wallet;
