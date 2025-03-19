"use client"
import React from 'react';
import usePropertyIndexStore from '@/store/store';

const Button = ({ index, children }) => {
  const currentIndex = usePropertyIndexStore((state) => state.currentIndex);
  const setSelectedIndex = usePropertyIndexStore((state) => state.setSelectedIndex);

  function handleClick() {
    console.log(`Button Clicked = ${index}`);
    setSelectedIndex(index);
    console.log(`current index :${currentIndex}`);
  }

  return (
    <>
      <button onClick={handleClick} className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 cursor-pointer">
       {children}
      </button>
    </>
  );
};

export default Button;
