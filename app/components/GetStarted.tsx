import React from 'react'

import Laptop from '../assets/laptop.jpg'

function GetStarted() {
  return (
    <section className='w-full bg-white py-16 px-4'>
        <div className='flex flex-col md:flex-row
        max-w-[1240px]  mx-auto grid md:grid-cols-2'>
            <img
            className='w-[500px] mx-auto my-4'
            src={Laptop} alt="/" />
            <div className='flex flex-col justify-center'>
                <h5 className='text-maincolor font-bold'>DATA ANALYTICS DASHBOARD</h5>
                <h1 className='md:text-4xl sm:text-3xl text-3xl font-bold py-2'>Manage Data Analytics Centrally</h1>
                <p >
                     Lorem ipsum dolor sit amet 
                     consectetur adipisicing elit. 
                     Accusamus non reiciendis ea dolorum 
                     quae atque itaque tenetur quo officia 
                     nisi nam sequi illo adipisci pariatur 
                     tempora repudiandae, perspiciatis labore.
                     Vel?
                </p>
                <button className='bg-black w-[200px] rounded-md
                font-medium my-6 py-3 text-maincolor'>Get Started</button>
            </div>
        </div>
    </section>
  )
}

export default GetStarted