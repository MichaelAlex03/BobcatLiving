import React, { useState } from 'react'


const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <header className="flex justify-center text-black py-6 px-8 md:px-32 bg-white drop-shadow-md">
  
        <ul className='hidden xl:flex l:flex md:flex items-center gap-12 font-semibold text-base'>
          <li><a href="/" className='nav'>Home</a></li>
          <li><a href="/" className='nav'>View Apartments</a></li>
          <li><a href="/" className='nav'>Contact</a></li>
        </ul>

        <div className='hidden xl:flex l:flex md:flex ml-auto gap-8 font-semibold'> 
          <button className='py-2 px-8 bg-blue-500 text-white rounded-md transition-all cursor-pointer hover:bg-blue-70'>Log In</button>
          <button className='py-2 px-8 border-blue-400 border-2 rounded-md transition-all cursor-pointer'>Sign Up</button>
        </div>

        <i className='bx bx-menu xl:hidden l:hidden m:hidden block text-5xl cursor-pointer' onClick={() => setIsMenuOpen(!isMenuOpen)}></i>
      </header>

      <div className={`absolute xl:hidden l:hidden m:hidden top-24 left-0 w-full bg-white flex flex-col items-center gap-6 font-semibold transform transition-transform' 
      ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`} style={{transition: 'transform 0.3s ease, opacity 0.3s ease'}}>
        <li className='list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all curse-pointer'>Home</li>
        <li className='list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all curse-pointer'>View Apartments</li>
        <li className='list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all curse-pointer'>Contact</li>
      </div>
    </div>
  )
}

export default Navbar