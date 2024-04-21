import Image from 'next/image'
import Logo from '../assets/logo.png'

const Header = () => {
  return (
    <nav className='flex justify-between items-center w-full h-16 sticky'>
        <Image 
            src={Logo}
            alt='logo'
            width={150}
            height={50}
            style={{cursor: 'pointer'}}
        />

        <div>
            <ul className='hidden md:flex flex-row items-center gap-6'>
                <li className='text-[rgb(15,_33,_55)] font-[DM_Sans] text-[16px] leading-[33px] tracking-[0px] text-right cursor-pointer'>Service</li>
                <li className='text-[rgb(15,_33,_55)] font-[DM_Sans] text-[16px] leading-[33px] tracking-[0px] text-right cursor-pointer'>Pricing</li>
                <li className='text-[rgb(15,_33,_55)] font-[DM_Sans] text-[16px] leading-[33px] tracking-[0px] text-right cursor-pointer'>Support</li>
                <li className='text-[rgb(15,_33,_55)] font-[DM_Sans] text-[16px] leading-[33px] tracking-[0px] text-right cursor-pointer'>About me</li>
                <li className='text-[rgb(15,_33,_55)] font-[DM_Sans] text-[16px] leading-[33px] tracking-[0px] text-right cursor-pointer'>Contact</li>
            </ul>
        </div>
    </nav>
  )
}

export default Header