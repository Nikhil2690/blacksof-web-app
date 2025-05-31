import Image from 'next/image'
import React from 'react'

export default function Navbar() {
  return (
    <React.Fragment>
      <div className='flex items-center bg-white text-black w-full'>
        <div className='w-full bg-white h-20'>
          <Image src={"/Supreme_logos.png"} alt='company_logo' width={150} height={150} className='mt-5 ml-[10rem]'/>
        </div> 

        <div className='flex gap-5 mr-[10rem]'>
          <button className='px-6 py-2 bg-[#00BFFF] text-sm rounded-full whitespace-nowrap cursor-pointer'>
            Contact Us
          </button>

          <Image src={"/linkedin.svg"} alt='LinkedIn_logo' width={24} height={24}/>
          <Image src={"/Frame.svg"} alt='frame_logo' width={24} height={24}/>

        </div>
      </div>  
    </React.Fragment>
  )
}
