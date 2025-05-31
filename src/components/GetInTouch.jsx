import React from 'react'

export default function GetInTouch() {
  return (
    <React.Fragment>
      <div className='h-[100vh] bg-[#0067B1] flex justify-center items-center gap-[12rem]'>

        <div className='flex flex-col gap-10'>
          <h3 className='text-6xl'>Get in touch</h3>
          <hr className='w-14'/>

          <p className='text-xl'>For general enquiries</p>

          <div>
          <p  className='text-xl'>Address:</p>
          <p  className='text-xl'>110, 16th Road, Chembur, Mumbai-400071</p>
          </div>

          <div>
          <p className='text-xl'>Phone:</p>
          <p className='text-xl'>+91 22 25208822</p>
          </div>

          <div>
          <p className='text-xl'>Email:</p>
          <p className='text-xl'>info@supremegroup.co.in</p>
          </div>
        </div>

        <div className='flex flex-col gap-14 relative w-[30rem]'>
          <div className='flex flex-col gap-5'>
          <input type='text' placeholder='Full Name' className='w-full bg-transparent focus:outline-none'/>
          <hr/>
          </div>
          <div className='flex flex-col gap-5'>
          <input type='email' placeholder='E-mail' className='w-full bg-transparent focus:outline-none'/>
          <hr/>
          </div>
          <div className='flex flex-col gap-5'>
          <input type='text' placeholder='Subject' className='w-full bg-transparent focus:outline-none'/>
          <hr/>
          </div>
          <div className='flex flex-col gap-5'>
          <textarea type='text' placeholder='Message' className='w-full bg-transparent focus:outline-none'/>
          <hr/>
          </div>
          <button className='absolute bottom-[-5rem] px-12 py-3 bg-transparent rounded-full cursor-pointer border-1'>
            <p className='font-medium'>send</p>
          </button>
        </div>

    </div>
    </React.Fragment>
  )
}
