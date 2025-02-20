import React from 'react'

function NewsLetter() {
  return (
    <section className='w-full py-16 text-white px-4'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 '>
            <div className='lg:col-span-2 my-4'>
                <h1 className='md:text-5xl sm:text-4xl 
                text-2xl font-bold py-2'>
                    Want tips & tricks to optimize your flow?
                </h1>
                <p>Sign up to our newsletter and stay up to date.</p>
            </div>
            <div className='my-4'>
                <div className='flex flex-col sm:flex-row items-center justify-center w-full'>
                    <input 
                    className='p-3 flex w-full rounded-md text-black'
                    type="email" 
                    placeholder='Enter Email'/>
                    <button className='rounded-md bg-maincolor text-black font-medium w-[200px]
                    ml-2 my-6 py-3'>
                        Notify
                    </button>
                </div>
                <p>We care the protection of your data. Read our <span className='text-maincolor'>Privacy Policy.</span></p>
            </div>
        </div>
    </section>
  )
}

export default NewsLetter