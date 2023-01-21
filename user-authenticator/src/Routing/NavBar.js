  import React from 'react'
  import { Link } from 'react-router-dom'

  const NavBar = () => {
    return (
      <div className='shadow'>
      <nav class="bg-green-800 md:flex flex-wrap  items-center px-8 py-4 mx-auto bg-white">
    <div className='md:mr-20 py-3 md:py-0'>
      <h3 class="text-2xl font-medium text-white">LOGO</h3>
    </div>
    <div class="space-x-4 md:space-x-6 flex-wrap md:flex  md:ml-40">
      <Link to="/" className='text-white font-bold md:px-1'>Home</Link>
      <Link to="/about" className='text-white font-bold md:px-1'>About</Link>
      <Link to="/contact" className='text-white font-bold md:px-1'>Contact</Link>
      <Link to="/other" className='text-white font-bold md:px-1'>Other</Link>
    </div>
  </nav>
      </div>
    )
  }

  export default NavBar
