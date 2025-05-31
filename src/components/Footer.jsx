import Image from 'next/image'
import React from 'react'

export default function Footer() {
  return (
    <footer className=' text-black h-[90vh] bg-white relative'>
      <Image src={"/Supreme_logos.png"} alt='company_logo' 
      width={160} height={160} 
      className='absolute top-[7rem] left-[16rem]'/>

    <div className='flex justify-center items-center gap-[8rem] h-full'>
      <div className='flex flex-col gap-8'>
      <p className='uppercase '>Applications</p>
      <ul className='flex flex-col gap-3  text-gray-600'>
        <li>Apparel</li>
        <li>Automotive</li>
        <li>Filtration</li>
        <li>Customised Nonwoven</li>
      </ul>
      </div>

      <div className='flex flex-col gap-8'>
      <p className='uppercase '>company</p>
      <ul className='flex flex-col gap-3  text-gray-600'>
        <li>Innovation</li>
        <li>Global Compentency</li>
        <li>About Us</li>
        <li>Contact Us</li>
      </ul>
      </div>

      <div className='flex flex-col gap-8 mb-8'>
      <p className='uppercase'>more</p>
      <ul className='flex flex-col gap-3  text-gray-600'>
        <li>Careers</li>
        <li>Privacy Policy</li>
        <li>Terms and Conditions</li>
      </ul>
      </div>

      <div className='flex flex-col gap-8'>
      <p className='uppercase '>Follow us</p>
      <ul className='flex flex-col gap-3  text-gray-600'>
        <li>Twitter</li>
        <li>LinkedIn</li>
        <li>Instagram</li>
        <li>Medium</li>
      </ul>
      </div>

    </div>

    <div className='text-black bg-white flex justify-center w-[80%] absolute bottom-20 left-[5.5rem] gap-[15rem]'>
      <p className='text-gray-500 text-sm'>&copy;2024. All Rights Reserved </p>
      <p className='text-gray-500 text-sm'>Supreme House. 110, 16th Road, Chembur, Mumbai - 400071</p>
    </div>

    </footer>
  )
}
