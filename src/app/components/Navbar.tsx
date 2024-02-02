import React from 'react'
import Image from 'next/image'
import logo from '../../../public/logo.svg'


const Navbar = () => {
  return (
    <nav className='h-14 flex justify-between'>
      <div className="logo p-3 bg-blue-500">
        <Image src={logo} alt='logo' width={32}/>
      </div>
      <ul className='flex justify-between bg-red-500'>
        <li className='p-3 mr-5'><a href="/">Home</a></li>
        <li className='p-3 mr-5'><a  href="/events">Events</a></li>
        <li className='p-3 mr-5'><a href="/login">Login</a></li>
      </ul>
    </nav>
  )
}

export default Navbar