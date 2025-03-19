import React from 'react'
import './Team.css'

const team = [
    {
        "name": "Kago Gambo",
        "role": "Chief Managing Director",
        "url": "https://res.cloudinary.com/dcmyqduai/image/upload/v1741792703/KagoGambo_nutvsh.jpg"
    },
    {
        "name": "Kago Gumbo",
        "role": "Chief Executive Officer",
        "url": "https://res.cloudinary.com/dcmyqduai/image/upload/v1741792703/KagoGumbo_oxzpan.jpg"
    },
    {
        "name": "Khoda Apik",
        "role": "Director of Investments & Partnerships",
        "url": "https://res.cloudinary.com/dcmyqduai/image/upload/v1741792703/KhodaApik_fvcnnr.jpg"
    },
    {
        "name": "Numi Nangu",
        "role": "Chief Marketing Officer",
        "url": "https://res.cloudinary.com/dcmyqduai/image/upload/v1741792703/NumiNangu_enkihs.jpg"
    },
    {
        "name": "Rakesh Kumar Ram",
        "role": "Chief Operating Officer",
        "url": ""
    },
    {
        "name": "Gyati Meena",
        "role": "Financial Officer",
        "url": "https://res.cloudinary.com/dcmyqduai/image/upload/v1741792703/GyatiMeen_tvzppw.jpg"
    },
    {
        "name": "Hari Basumatari",
        "role": "Chief Sales Officer",
        "url": "https://res.cloudinary.com/dcmyqduai/image/upload/v1741792703/HariBasumatari_ly58gd.jpg"
    }
]
function Team() {
    return (
        <div
            className="py-36 place-items-center md:w-[90vw] mx-auto bg-gray-900 md:rounded-t-[50%] text-slate-300 overflow-hidden "
        >
            <div className="mb-24 mx-auto  place-items-center">
                <h2 className="mb-8 text-5xl text-center font-extrabold tracking-normal">
                    The Team
                </h2>
                <p className="text-center px-10 md:text-xl md:w-[80%]">
                    Meet our dedicated team of professionals who work tirelessly to
                    bring you the best real estate solutions. With years of experience
                    and deep industry knowledge, we're here to help you find your
                    perfect property.
                </p>
            </div>
            <div
                className=" gap-6 flex items-center justify-center flex-col md:flex-row overflow-hidden md:h-auto h-[20rem]" id='about'
            >
                {
                    team.map((item, index) => (
                        <div key={index} className="employee-card lg:max-w-2xl w-80 bg-gray-100 dark:bg-gray-700 relative shadow-xl  hover:shadow-2xl group rounded-xl p-5 transition-all duration-500 transform ">
                            <div className="flex flex-col bg-top  items-center gap-4">
                                <img src={item.url}
                                    className="w-32 group-hover:w-36 group-hover:h-36 h-32 object-top object-cover rounded-full transition-all duration-500 delay-500 transform image-cotain"
                                />
                                <div className="w-fit transition-all transform duration-500">
                                    <h1 className="text-gray-600 dark:text-gray-200 font-bold">
                                        {item.name}
                                    </h1>
                                    <p className="text-gray-400">{item.role}</p>
                                </div>
                            </div>
                            <div className="absolute group-hover:bottom-1 delay-300 -bottom-16 transition-all duration-500 bg-gray-600 dark:bg-gray-100 right-1 rounded-lg"></div>
                        </div>
                    ))
                }
            </div>
        </div>


    )
}

export default Team