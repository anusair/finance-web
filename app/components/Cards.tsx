import React from 'react'
import { cards } from '../utils/data'

function Cards() {
  return (
    <section className='w-full py-[10rem] px-4 bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            {cards.map(({title , img , price , features} , index) => (
            <div 
            key={index} 
            className={`w-full shadow-xl flex flex-col
            p-4 ${index == 1 ? "md:my-0 my-8 bg-gray-100" : "my-4"}  rounded-lg hover:scale-105 duration-700`}>
                <img
                className='w-20 mx-auto -mt-[3rem] bg-white' 
                src={img} alt="/" />

                <h2 className='text-2xl font-bold text-center py-8'>{title}</h2>
                <p className='text-center text-4xl font-bold'>{price}</p>
                <div className='text-center font-medium'>
                    {features.map((feature , index) => (
                    <p key={index} className={`py-2 border-b mx-8 ${index == 0 ? "mt-8" : ""}`}>{feature}</p>
                    ))}
                </div>
                <button
                className={` w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3
                ${index == 1 ? "bg-black text-maincolor" : "bg-maincolor text-black"}`}>
                    Start Trial
                </button>
            </div>
                ))}
        </div>
    </section>
  )
}

export default Cards