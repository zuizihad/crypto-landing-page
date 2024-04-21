import Image from "next/image";
import BannerImage from "../assets/illustration (1).png";
import CountdownTimer from "./count-down-timer/count-down-timer";

const CreditIdentity = () => {
  const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

  return (
    <section className="flex justify-between items-start flex-col md:flex-row gap-12 my-2 md:my-12">
      <div className="flex-1">
        <h1 className="text-[rgb(2,_7,_62)] font-[Archivo] text-[32px] md:text-[48px] font-normal leading-normal md:leading-[70px] tracking-[-1px] text-left">
          Take control of your <br /> credit and identity.
        </h1>
        <p className="text-[rgb(2,_7,_62)] font-[DM_Sans] text-[16px] font-normal leading-normal md:leading-[40px] tracking-[0px] text-left my-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod
          tempor incididunt labore dolore magna aliqua minim Lorem ipsum dolor
          sit amet consectetur.
        </p>
        <CountdownTimer targetDate={dateTimeAfterThreeDays} />
        <button className="px-4 py-2 mt-8 rounded-[5px] bg-[rgb(22,_23,_24)] text-[rgb(255,_255,_255)] font-[DM_Sans] text-[15px] font-bold leading-[24px] tracking-[0px] text-center uppercase">
          BUY TOKENS
        </button>
      </div>
      <div className="flex-1">
        <Image src={BannerImage} alt="image" width={700} height={500} />
      </div>
    </section>
  );
};

export default CreditIdentity;
