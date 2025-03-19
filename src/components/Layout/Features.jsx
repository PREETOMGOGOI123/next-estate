import React from 'react'

function Features() {
  return (
    
<section className="bg-gray-900 py-36 md:flex hidden">
    <div className="px-4 mx-auto max-w-screen-xl lg:px-6 ">
        <div className="max-w-screen-md mb-8 lg:mb-16">
            <h2 className="mb-10 text-4xl tracking-wide font-extrabold text-gray-200 ">Explore Land Categories</h2>
            <p className="text-slate-300 tracking-wider sm:text-xl dark:text-gray-400">Discover diverse land opportunities that match your investment goals. From residential plots to agricultural lands, find the perfect property for your future.</p>
        </div>
        <div className="space-y-8 md:grid md:grid-cols-2 text-slate-200 tracking-widest lg:grid-cols-3 md:gap-12 md:space-y-0">
            <div>
                
                <h3 className="mb-2 text-xl font-bold dark:text-white flex items-center gap-2"><span><i className="fa-solid fa-house-signal text-amber-500 text-lg" ></i></span><span>Residential Plots</span></h3>
                <p className="text-slate-300 tracking-widest dark:text-gray-400">Prime locations for building your dream home. Ready-to-develop plots in established neighborhoods with essential amenities nearby.</p>
            </div>
            <div>
                <h3 className="mb-2 text-xl font-bold dark:text-white flex items-center gap-2"><span><i className="fa-solid fa-wheat-awn text-amber-500 text-lg"></i></span><span>Agricultural Land</span></h3>
                <p className="text-slate-300 tracking-widest dark:text-gray-400">Fertile farmland perfect for agriculture or hobby farming. Various plot sizes available with good irrigation potential and soil quality.</p>
            </div>
            <div>
                <h3 className="mb-2 text-xl font-bold dark:text-white flex items-center gap-2"><span><i className="fa-solid fa-store text-amber-500 text-lg"></i></span><span>Commercial Plots</span></h3>
                <p className="text-slate-300 tracking-widest dark:text-gray-400">Strategic locations for business development. High-visibility areas with excellent connectivity and growth potential.</p>
            </div>
            <div>
                <h3 className="mb-2 text-xl font-bold dark:text-white flex items-center gap-2"><span><i className="fa-solid fa-handshake-simple text-amber-500 text-lg"></i></span><span>Investment Parcels</span></h3>
                <p className="text-slate-300 tracking-widest dark:text-gray-400">Large land parcels ideal for long-term investment. Located in developing areas with high appreciation potential.</p>
            </div>
            <div>
                <h3 className="mb-2 text-xl font-bold dark:text-white flex items-center gap-2"><i className="fa-solid fa-volleyball text-amber-500 text-lg"></i><span>Recreational Land</span></h3>
                <p className="text-slate-300 tracking-widest dark:text-gray-400">Perfect for outdoor enthusiasts. Scenic properties suitable for camping, hunting, or building your vacation retreat.</p>
            </div>
            <div>
                <h3 className="mb-2 text-xl font-bold dark:text-white flex items-center gap-2"><i className="fa-solid fa-industry text-amber-500 text-lg"></i><span>Industrial Plots</span></h3>
                <p className="text-slate-300 tracking-widest dark:text-gray-400">Zoned for industrial use with necessary infrastructure. Ideal for warehousing, manufacturing, or industrial development.</p>
            </div>
        </div>
    </div>
</section>
  )
}

export default Features