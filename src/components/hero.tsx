import Image from 'next/image'
import HeroImage from '../assets/illustration.png'
import PlayIcon from '../assets/Vector.png'

const Hero = () => {
  return (
    <section className='flex justify-between items-center flex-col md:flex-row gap-12 my-2 md:my-12'>
        <div className='flex-1'>
                <h1 className='text-[rgb(2,_7,_62)] font-[Archivo] text-[32px] md:text-[58px] font-normal  leading-normal md:leading-[80px] tracking-[-1.5px] text-left'>Welcome to next level Cryptocurrency Token with faster transfer</h1>
                <p className='mt-3 text-[rgb(2,_7,_62)] font-[DM_Sans] text-[14px] md:text-[17px] leading-normal md:leading-[42px] tracking-[0px] text-left'>We helps brands & agencies manage top-performing influencer programs: talent discovery & qualification, relationship management, automated campaign reporting, performance measurement and competitive benchmarking.</p>
                <div className='flex flex-row gap-6 mt-6'>
                    <button className='px-4 py-2 rounded-[5px] bg-[rgb(22,_23,_24)] text-[rgb(255,_255,_255)] font-[DM_Sans] text-[15px]  leading-[24px] tracking-[0px] text-center uppercase'>GET TOKEN</button>
                    <button className='flex items-center gap-3'>WHITE PAPER 
                    <Image src={PlayIcon} alt='play-icon' width={20} height={10}/></button>
                </div>
        </div>
        <div className='flex-1'>
            <Image 
                src={HeroImage}
                alt='heo-image'
                width={700}
                height={500}
            />
        </div>
    </section>
  )
}

export default Hero