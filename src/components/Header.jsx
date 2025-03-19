"use client"


import { useEffect, useState } from 'react'
const logo = 'https://res.cloudinary.com/dcmyqduai/image/upload/v1742381592/logo_foyv18.png'

function Header() {

    const [scrollState, setScrollState] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrollState(window.scrollY > 60);
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-1000 ease-in-out  ${
            scrollState ? "" : ""
        }`}>
            <div className={`absolute inset-0 backdrop-blur-xl transition-all duration-500 ease-in-out ${
                scrollState ? "bg-orange-500/50" : ""
            }`}>
            </div>
            <nav className="relative z-10 w-full">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="/" className={`flex items-center space-x-3 rtl:space-x-reverse `}>
                        <img
                            src={logo}
                            className="h-16 w-16"
                            alt="Dreamscape Logo"
                        />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap">DreamScape</span>
                    </a>
                    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
                            <li>
                                <a href="#" className="block py-2 px-3 bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0  md:dark:text-blue-500" aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="#properties" className={`block py-2 px-3 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0   md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover: md:dark:hover:bg-transparent`}>Listings</a>
                            </li>
                            <li>
                                <a href="#" target='_blank' className={`block py-2 px-3 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0   md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover: md:dark:hover:bg-transparent`}>Sell</a>
                            </li>
                           
                            <li>
                                <a href="#about" className={`block py-2 px-3 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0   md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover: md:dark:hover:bg-transparent`}>About Us</a>
                            </li>
                            <li>
                                <a href="#contact" className={`block py-2 px-3 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0   md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover: md:dark:hover:bg-transparent`}>Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header