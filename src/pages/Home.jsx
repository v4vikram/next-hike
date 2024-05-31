import React from 'react'
import homeBanner from '../assets/home-banner.webp';
import './home.css'

const Home = () => {
  return (
  <section>
    <img src={homeBanner} alt="" className='w-full h-screen z-0 relative'/>
    <div className="absolute z-10 top-[20%] left-[0%] w-full">
       <div className='banner-content container px-10 mx-auto'>
       <h1 className='text-white'>Discover your<br/> next Hike</h1>
        <p className='p1 mt-2'>Discover your<br/> next Hike</p>
        <p className='p2 mt-4'>Lorem, ipsum dolor sit amet<br></br> consectetur<br/> adipisicing elit. Expedita,</p>
       </div>
    </div>
  </section>
  )
}

export default Home