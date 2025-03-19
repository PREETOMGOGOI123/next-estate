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
            "https://res.cloudinary.com/dcmyqduai/image/upload/v1741951811/1_y6qs6l.webp",
            "https://res.cloudinary.com/dcmyqduai/image/upload/v1741951811/1_y6qs6l.webp"
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
            "https://res.cloudinary.com/dcmyqduai/image/upload/v1741951853/5_ofujul.webp",
            "https://res.cloudinary.com/dcmyqduai/image/upload/v1741951852/4_y2xhkj.webp",
            "https://res.cloudinary.com/dcmyqduai/image/upload/v1741951851/3_akwni6.webp"
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
            "https://res.cloudinary.com/dcmyqduai/image/upload/v1741951870/13_s72uvn.webp",
            "https://res.cloudinary.com/dcmyqduai/image/upload/v1741951869/12_zwm4rm.webp",
            "https://res.cloudinary.com/dcmyqduai/image/upload/v1741951869/11_dyyime.webp"
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
            "https://res.cloudinary.com/dcmyqduai/image/upload/v1741951886/16_gtmcc7.webp",
            "https://res.cloudinary.com/dcmyqduai/image/upload/v1741951886/15_gww8gt.webp",
            "https://res.cloudinary.com/dcmyqduai/image/upload/v1741951885/14_vsq5ay.webp"
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
            "https://res.cloudinary.com/dcmyqduai/image/upload/v1741951914/19_rm0l0p.webp",
            "https://res.cloudinary.com/dcmyqduai/image/upload/v1741951914/18_ars63o.webp",
            "https://res.cloudinary.com/dcmyqduai/image/upload/v1741951913/17_aswpqm.webp"
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