'use client'

import React from 'react'
import { ReactTyped } from "react-typed";

function Hero() {
  return (
    <section className='text-white'>
        <div className='max-w-[800px] -mt-[96px] w-full 
        h-screen mx-auto flex flex-col justify-center text-center'>
            <p className='text-maincolor font-bold p-2'>Growing With Data Analytices</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Grow with data.</h1>
            <div className='flex items-center justify-center md:gap-4 gap-3'>
                <p className='md:text-5xl sm:text-4xl text-xl font-bold py-2 lg:py-4'>Fast, flexible financing for</p>
                <ReactTyped
                strings={['BTB', 'BTC' , 'SASS']}
                typeSpeed={120} 
                backSpeed={140} loop
                className='md:text-5xl sm:text-4xl text-xl font-bold'/>
            </div>
            <p className='md:text-2xl text-lg font-bold
            text-gray-500 px-5'>
                Monitor your data analytics to increase revenue for BTB, BTC, & SASS platform.
            </p>
            <button className='bg-maincolor w-[200px] rounded-md
            font-medium my-6 mx-auto py-3 text-black'>
                Get Started
            </button>
        </div>
    </section>
  )
}

export default Hero