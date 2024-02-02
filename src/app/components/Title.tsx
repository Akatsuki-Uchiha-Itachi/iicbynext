import React from 'react'
import bg from '../../../public/cover_bg.png'
import logos from '../../../public/logos.png'
import Image from 'next/image'

const Title = () => {
  const bgstyle = {
    backgroundImage: `url(${bg.src})`,
  }
  return (
    <div className="flex flex-col items-center bg-cover h-svh" style={bgstyle}>
      <div className="logos p-5">
        <Image src={logos} width={600} alt='logos'/>
      </div>
      <div className="title">
          <h2 className='lg:text-7xl  md:text-5xl font-bold shadow-xl'>THDC-IHET Innovation Council</h2>
      </div>
      <div className="virtues flex flex-col border  mt-3">
        <ul className='flex flex-1 tracking-wider'>
          <li className='p-1 border'>Innovation & Start Ups</li>
          <li  className='p-1 border'>Design Thinking</li>
          <li  className='p-1 border'>IPR & Technology Transfer</li>
        </ul>
        <ul className='flex  flex-1'>
          <li className='p-1 border' >Pre-Incubation & Incubation Managment</li>
          <li className='p-1 border'>Enterpreneurship Developement</li>
        </ul>
      </div>
    </div>
  )
}

export default Title