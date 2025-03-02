import React, { useState } from 'react'
import Navbar from './Components/Navbar'

function App() {
 
  const images = [
    "/mobile-image-hero-1.jpg",
    "/mobile-image-hero-2.jpg",
    "/mobile-image-hero-3.jpg"
  ];
  const desktopImages = [
    "/desktop-image-hero-1.jpg",
    "/desktop-image-hero-2.jpg",
    "/desktop-image-hero-3.jpg"
  ]; 
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNextMobile = () =>{

    setCurrentIndex((prev) => (prev + 1) % images.length);

  }
  const handlePrevMobile = () =>{
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  }
  const handleNextDesktop = () =>{

    setCurrentIndex((prev) => (prev + 1) % images.length);

  }
  const handlePrevDesktop = () =>{
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  }

  
  
  return (
    <div>
      <div className='  w-full flex flex-wrap '>
      <div 
    className='min-h-[600px] md:h-[600px] bg-cover bg-right flex-[1_1_650px] flex h-full flex-col' 
    style={{ backgroundImage: `url(${window.innerWidth >= 760 ? desktopImages[currentIndex] : images[currentIndex]})` }}
  >
          <Navbar />
          <div className=' flex lg:hidden justify-end items-end h-[600px]'>
              <div className='bg-black flex w-32 p-4 gap-6 justify-center items-center'>
                <img src="/icon-angle-left.svg" alt="" className='w-4' onClick={handleNextMobile} />
                <img src="/icon-angle-right.svg" alt=""  className='w-4' onClick={handlePrevMobile}/>
              </div>
          </div>
          
        </div>
        
        <div className='flex-[1_1_350px] flex flex-col h-full  md:h-[600px] '>
          <div className='flex w-full h-full justify-center  px-10 py-15 lg:items-center'>
              <div className=''>
                  <h1 className='font-bold text-3xl md:text-4xl'>Discover Innovative <br />  ways to decorate </h1>
                  <p className='max-w-[450px] py-5 md:py-3 text-[hsl(0, 0%, 63%)]'> We provide unmatched quality, comfort and style for property
                    owners across the country. Our experts combine form and function in bringing your vision to life.
                    Create a room in your own style with our collection and make your property a reflection of you and what you love.
                  </p>
                  <div className='flex gap-2 font-bold text-md'>
                    <h4 className='tracking-[.8em]'>SHOP NOW</h4>
                    <img src="/icon-arrow.svg" alt="" />
                  </div>
              </div>
          </div>
          <div className='bg-black flex hidden lg:flex w-32 p-6 gap-6 justify-center items-center'>
            <img src="/icon-angle-left.svg" alt="" className='w-4' onClick={handleNextDesktop} />
            <img src="/icon-angle-right.svg" alt=""  className='w-4' onClick={handlePrevDesktop}/>
          </div>
          

        </div>
      </div>

      <div className='flex w-full flex-wrap'>
        <img src="/image-about-dark.jpg" alt="" className='flex-[1_1_300px]  object-cover' />
        <div className='flex w-full justify-center lg:min-h-[400px]  px-10 py-15 lg:items-center flex-[1_1_300px]'>
            <div className=''>
              <h3 className='text-2xl pb-5 font-bold  tracking-widest'>About Our Furniture</h3>
              <p>Our multifunctional collection blends design and function to suit your individual taste
              Make each room unique or pick a cohesive theme, that best express your interest or what inspires you.
              Find the furniture pieces you need, from traditional to contemporaray styles or anything in between.
              Product specialist are availabe to help you create your dream space.</p>
            </div>
        </div>
        <img src="/image-about-light.jpg" alt="" className='flex-[1_1_300px] object-cover' />
      </div>

    </div>
  )
}

export default App