import React from 'react'

function Hero() {
  return (
    <section className='md:h-[80vh] pb-24 md:pb-0'>
        <div className="grid max-w-screen-xl md:h-full px-4 mx-auto lg:gap-8 xl:gap-0 md:grid-cols-2 lg:grid-cols-12 place-items-center">
        <div className="mr-auto place-self-center md:col-span-1 lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white duration-750 motion-scale-in-[0.5] motion-translate-x-in-[-25%] motion-translate-y-in-[25%] motion-opacity-in-[0%] motion-rotate-in-[-10deg] motion-blur-in-[5px] motion-duration-[1.00s] motion-duration-[1.50s]/scale motion-duration-[1.50s]/translate motion-duration-[1.80s]/rotate">Your Land. Your Future. Our Expertise.</h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 text-justify">Access exclusive land listings, connect with verified buyers, and get expert guidance on land investments. Your journey to successful land ownership starts here.</p>

        
            <a href="https://wa.me/7002812274" target="_blank" className="inline-block items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                Speak to Sales
            </a> 
        </div>
        <div className="hidden md:block md:col-span-1 lg:mt-0 lg:col-span-5">
            <img src="https://images.unsplash.com/photo-1707769407737-80d2ecfbdda3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt='mockup' className="rounded-lg shadow-lg w-full h-auto"/>              
        </div>                
    </div>
    </section>
  )
}

export default Hero