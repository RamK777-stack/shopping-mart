import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function BrowseByStyle() {
    const categories = [
        { name: "Casual", image: "images/Categories/casual.jpg" },
        { name: "Formal", image: "images/Categories/formal.jpg" },
        { name: "Party", image: "images/Categories/party.jpg" },
        { name: "Gym", image: "images/Categories/gym.jpg" },
    ]

    return (
        <div className="rounded-lg bg-gray-100 p-10 mt-12 mx-auto">
            <h3 className='text-2xl font-extrabold text-center'>BROWSE BY DRESS STYLE</h3>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-2 mt-8'>
                {categories.map((category, index) => (
                    <a href={`/${category.name.toLowerCase()}`} key={index} className="relative group block w-full h-96">
                        <img
                            src={category.image}
                            alt={`${category.name} style clothing`}
                            className="w-full h-full rounded-md object-cover"
                        />
                        <div className="absolute inset-0 bg-black/20 rounded-md group-hover:bg-black/30 transition-colors" />
                        <div className="absolute bottom-5 left-5">
                            <h4 className="text-xl font-bold text-white">{category.name}</h4>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    )
}