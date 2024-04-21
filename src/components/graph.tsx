import React from 'react'
import LineChart from './line-chart'

const Graph = () => {
  return (
    <section className='flex flex-col md:flex-row justify-between items-start gap-12'>
        <div className='flex-1'>
        <LineChart />
        </div>
        <div className='flex-1'>
            <h1 className='text-[rgb(2,_7,_62)] font-[Archivo] text-[32px] md:text-[48px] font-normal leading-normal md:leading-[70px] tracking-[-1px] text-left'>Total Investment sale <br/> from last year transaction</h1>
            <p className='mt-4 text-[rgb(2,_7,_62)] font-[DM_Sans] text-[16px] font-normal leading-normal md:leading-[40px] tracking-[0px] text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore magna aliqua minim Lorem ipsum dolor sit amet consectetur.</p>
            <button className='mt-6 px-4 py-2 rounded-[5px] opacity-50 bg-[rgb(238,_241,_244)] text-[rgb(2,_7,_62)] font-[DM_Sans] text-[15px] font-bold leading-[24px] tracking-[0px] text-center uppercase'>LEARN MORE</button>
        </div>
    </section>
  )
}

export default Graph