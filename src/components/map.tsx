import React from 'react'
import UKMap from '../assets/uk.png';
import SpainMap from '../assets/spain.png';
import AfricaMap from '../assets/africa.png';
import Image from 'next/image';
import MapImage from '../assets/map.png'

const Map = () => {
  return (
    <section className='my-12'>
        <h1 className='text-[rgb(2,_7,_62)] font-[Archivo] text-[30px] font-normal leading-normal md:leading-[48px] tracking-[0px] text-center'>We have more than 3 Bilion worldwide user</h1>
        <p className='py-3 text-[rgb(2,_7,_62)] font-[DM_Sans] text-[16px] font-normal leading-normal md:leading-[34px] tracking-[0px] text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit sed <br/> eiusmod tempor incididunt labore dolore</p>
        <h3 className='py-3 text-[rgb(2,_7,_62)] font-[DM_Sans] text-[16px] font-medium leading-[33px] tracking-[0px] text-center'>Licensed gambling jurisdictions</h3>
        <div className='flex justify-center items-start pl-12 md:pl-0 md:items-center flex-col md:flex-row gap-8 my-12'>
            <div className='flex justify-center items-center gap-3'>
                <Image 
                    src={UKMap}
                    alt='uk map'
                    width={30}
                    height={30}
                />
                <h3>United Kingdom</h3>
            </div>
            <div className='flex justify-center items-center gap-3'>
                <Image 
                    src={AfricaMap}
                    alt='Africa Map'
                    width={30}
                    height={30}
                />
                <h3>South Africa</h3>
            </div>
            <div className='flex justify-center items-center gap-3'>
                <Image 
                    src={SpainMap}
                    alt='Spain Map'
                    width={30}
                    height={30}
                />
                <h3>Spain</h3>
            </div>
        </div>
        <Image 
            src={MapImage}
            alt='map image'
            width={800}
            height={500}
        />
    </section>
  )
}

export default Map