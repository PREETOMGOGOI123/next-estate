"use client"
import React from 'react';
import './ListProperties.css'
import Button from '@/components/Button'


const ListProperties = ({ properties }) => {
  

  return (
    <div className="mx-auto max-w-screen-2xl px-4 lg:px-6" id='properties'>
      <div className="mx-auto mb-8 max-w-screen-sm text-center lg:mb-16">
        <h2 className="mb-8 text-5xl font-extrabold tracking-normal text-gray-700 dark:text-white">
          All Properties
        </h2>
        <p className="font-light text-gray-500 sm:text-xl lg:mb-16 dark:text-gray-400">
          Discover our exclusive collection of houses and plots nestled in beautiful mountain valleys of
          Arunachal Pradesh.
        </p>
      </div>
      <div className="rounded-lg px-10 py-0 md:bg-gradient-to-br">
        <div className="custom-scrollbar smooth-scroll mb-6 gap-26 overflow-x-auto md:overflow-y-hidden rounded-lg md:bg-gradient-to-br md:p-10 lg:mb-16 md:h-auto h-[30rem] md:grid md:grid-cols-2 lg:grid-cols-3">
          {properties.map((plot, index) => (
            <div key={index} className="items-center rounded-lg bg-white p-5 shadow-lg transition-all duration-300 hover:scale-105 sm:flex flex-col justify-start py-0 pb-4 place-items-center overflow-hidden md:px-0 px-2 mb-6 md:mb-0">
              <div  className="">
                <img className="w-full rounded-md object-contain" src={plot.images[0]} alt="plot Image" />
              </div>
              <div className="flex flex-col gap-5 p-5">
                <h2 className="drop rounded-md text-center text-lg font-light tracking-tight text-gray-900 dark:text-white">
                  Location: {plot.location}
                </h2>
                <p className="text-md rounded-md text-center font-light tracking-tight text-gray-900 dark:text-white">
                  Size: {plot.size}
                </p>
                <p className="text-md rounded-md text-center font-light tracking-tight text-gray-900 dark:text-white">
                  Price: {plot.price}
                </p>
                <p className="text-md rounded-md text-center font-light tracking-tight text-gray-900 dark:text-white">
                  {plot.condition}
                </p>
                <Button index={index} >View More</Button>
              </div>
    
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListProperties;
