import React from 'react'
import FadeInVideo from './FadeInVideo'
import ScrollProgressLine from './ScrollProgressLine'
import FadeInVideo2 from './FadeInVideo2'

export default function HeroSection() {
  return (
    <section className="h-[170vh] flex flex-col items-center relative bg-black text-white px-10">
      
      <div className="mt-10 text-center">
        <h1 className="text-5xl font-thin">
          Evolving the drive with <span className="font-medium">360-degree</span>
        </h1>
        <h1 className="text-5xl">nonwoven solution</h1>
      </div>

      <div className="mt-10">
        <ScrollProgressLine />
      </div>

      <div className='text-white text-4xl absolute left-[5rem] top-[20rem] w-[20rem]'>
        <h3>Passenger Vehicles</h3>
        <p className='text-lg mt-5'>Revving up Nonwoven innovation from interior to exterior.</p>
      </div>

       <div className='text-white text-4xl absolute left-[5rem] top-[50rem] w-[20rem]'>
        <h3>Commercial Vehicles</h3>
        <p className='text-lg mt-5'>Advancing Nonwoven engineering for heavy-duty vehicles.</p>
      </div>

      <div className="absolute right-10 top-[10rem]">
        <FadeInVideo />
      </div>

      <div className="absolute right-10 bottom-0">
        <FadeInVideo2 />
      </div>

    </section>
  )
}
