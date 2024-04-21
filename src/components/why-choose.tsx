import Image from "next/image";
import MarketValueIcon from "../assets/marketvalue.png";
import MinerIcon from "../assets/miner.png";
import MiningIcon from "../assets/mining.png";
import TransactionIcon from "../assets/transaction.png";

const WhyChoose = () => {
  return (
    <section className='my-12'>
      <h1 className='text-[rgb(2,_7,_62)] font-[Archivo] text-[30px] font-normal leading-[48px] tracking-[0px] text-center'>Why you choose TheCoin</h1>
      <p className='text-[rgb(2,_7,_62)] font-[DM_Sans] text-[16px] font-normal leading-[24px] tracking-[0px] text-center'>Lorem ipsum dolor sit amet consectetur adipisicing</p>

      <div className="flex justify-between items-center flex-col md:flex-row gap-4 my-12">
        <div className="flex flex-col items-center flex-1">
          <Image
            src={MarketValueIcon}
            alt="market-value-icon"
            width={87}
            height={80}
            style={{marginBottom: '18px'}}
          />
          <h3 className='text-[rgb(2,_7,_62)] font-[DM_Sans] text-[20px] font-medium leading-[48px] tracking-[-0.5px] text-center'>Great Market Value</h3>
          <p className='text-[rgb(2,_7,_62)] font-[DM_Sans] text-[15px] font-normal leading-[30px] tracking-[0px] text-center'>
            Lorem ipsum dolor sit amet with consectetur adipisicing elit the
            help eiusmod tempor.
          </p>
        </div>
        <div className="flex flex-col items-center flex-1">
          <Image
            src={MiningIcon}
            alt="market-value-icon"
            width={97}
            height={78}
            style={{marginBottom: '18px'}}
          />
          <h3 className='text-[rgb(2,_7,_62)] font-[DM_Sans] text-[20px] font-medium leading-[48px] tracking-[-0.5px] text-center'>Verified Mining Process</h3>
          <p className='text-[rgb(2,_7,_62)] font-[DM_Sans] text-[15px] font-normal leading-[30px] tracking-[0px] text-center'>
            Lorem ipsum dolor sit amet with consectetur adipisicing elit the
            help eiusmod tempor.
          </p>
        </div>
        <div className="flex flex-col items-center flex-1">
          <Image
            src={MinerIcon}
            alt="market-value-icon"
            width={83}
            height={78}
            style={{marginBottom: '18px'}}
          />
          <h3 className='text-[rgb(2,_7,_62)] font-[DM_Sans] text-[20px] font-medium leading-[48px] tracking-[-0.5px] text-center'>Fastest Miner</h3>
          <p className='text-[rgb(2,_7,_62)] font-[DM_Sans] text-[15px] font-normal leading-[30px] tracking-[0px] text-center'>
            Lorem ipsum dolor sit amet with consectetur adipisicing elit the
            help eiusmod tempor.
          </p>
        </div>
        <div className="flex flex-col items-center flex-1">
          <Image
            src={TransactionIcon}
            alt="market-value-icon"
            width={67}
            height={83}
            style={{marginBottom: '18px'}}
          />
          <h3 className='text-[rgb(2,_7,_62)] font-[DM_Sans] text-[20px] font-medium leading-[48px] tracking-[-0.5px] text-center'>Secure Transaction</h3>
          <p className='text-[rgb(2,_7,_62)] font-[DM_Sans] text-[15px] font-normal leading-[30px] tracking-[0px] text-center'>
            Lorem ipsum dolor sit amet with consectetur adipisicing elit the
            help eiusmod tempor.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
