"use client"
import React from 'react'
import ViewProperties from './PropertyComponents/ViewProperties'
import ListProperties from './PropertyComponents/ListProperties'
import usePropertyIndexStore  from '@/store/store'

const plots = [
    {
        "id": 1,
        "name": "Plot 1",
        "location": "Siitii Adin, Manipolyang, Siiro",
        "condition": "Available only for people belonging to Apatani tribe",
        "size": "1000 sq.mtr",
        "price": 1500,
        "images": [
            "/images/dreamscape/plot1/image-main.webp",
            "/images/dreamscape/plot1/image-main.webp",
            "/images/dreamscape/plot1/image-main.webp"
        ]
    },
    {
        "id": 2,
        "name": "Plot 2",
        "location": "Sirrey Pabu, Siro",
        "condition": "Available only for people belonging to Apatani tribe",
        "size": "3900 sq.mtr",
        "price": "Rs 1500/- sq.mtr",
        "images": [
            "/images/dreamscape/plot2/main.webp",
            "/images/dreamscape/plot2/2.webp",
            "/images/dreamscape/plot2/3.webp"
        ]
    },
    {
        "id": 3,
        "name": "Plot 3",
        "location": "Medical Colony, Hapoli",
        "condition": "Available only for people belonging to Apatani tribe",
        "size": "90 sq.mtr",
        "price": "Rs 1500000/-",
        "images": [
            "/images/dreamscape/plot3/main.webp",
            "/images/dreamscape/plot3/2.webp",
            "/images/dreamscape/plot3/3.webp"
        ]
    },
    {
        "id": 4,
        "name": "Plot 4",
        "location": "Hanoko, Hong",
        "condition": "Available only for people belonging to Apatani tribe",
        "size": "350 sq.mtr",
        "price": "Rs 1500/- per sq.mtr",
        "images": [
            "/images/dreamscape/plot4/main.webp",
            "/images/dreamscape/plot4/2.webp",
            "/images/dreamscape/plot4/3.webp4"
        ]
    },
    {
        "id": 5,
        "name": "Plot 5",
        "location": "Hatti, Pabu",
        "condition": "Available only for people belonging to Apatani tribe",
        "size": "1500 sq.mtr",
        "price": "Rs 1500/- per sq.mtr",
        "images": [
            "/images/dreamscape/plot5/main.webp",
            "/images/dreamscape/plot5/2.webp",
            "/images/dreamscape/plot5/3.webp"
        ]
    }
]



function Properties() {
    const currentIndex = usePropertyIndexStore((state) => state.currentIndex)
    console.log(currentIndex);

    return (
        <section className="bg-gradient-to-b from-gray-100 to-white py-36">
            {currentIndex !== null ? (
                <ListProperties propertyImages={plots[currentIndex].images} />
            ) : (
                <ViewProperties properties={plots} />
            )}
        </section>
    )
}

export default Properties