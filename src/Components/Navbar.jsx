import React, { useState } from 'react'

function Navbar() {
    const [isMenuOpen, setisMenuOpen] = useState(false)

    const toggleMenu = () =>{
        setisMenuOpen(!isMenuOpen)
    }
  return (
    <div className='pl-15 w-full flex flex-row h-24  md:flex-row-reverse md:justify-end  items-center gap-10'>

            <div className={`pl-28 z-40 absolute top-0 left-0 h-24 items-center  md:p-0 bg-white ${isMenuOpen? "flex" :"hidden"}  w-full  md:bg-transparent  md:static md:flex text-lg`}>
                 <a href="/" className='pr-3 text-black md:text-white'>Home</a>
                 <a href="/shop" className='pr-3 text-black md:text-white '>Shop</a>
                 <a href="/about" className='pr-3 text-black md:text-white'>About</a>
                 <a href="/contact" className=' text-black md:text-white'>Contact</a>
            </div>
            <img src={isMenuOpen? "/icon-close.svg" : "/icon-hamburger.svg"} 
            alt="" className=' md:hidden pr-10 z-50  ' onClick={toggleMenu}/>

            <img src="/logo.svg" alt="" className='w-20 h-4' />
    </div>
  )
}

export default Navbar