import React from 'react'

export default function HeroSection() {
    return (
        <div className="flex flex-col lg:flex-row justify-evenly items-center bg-gray-100 w-full">
            <div className="max-w-lg space-y-5 text-center lg:text-left py-5 md:py-12">
                <h2 className="font-extrabold text-3xl md:text-5xl">
                    FIND CLOTHES THAT MATCH YOUR STYLE
                </h2>
                <p className="text-sm md:text-base text-gray-500">
                    Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
                </p>
                <button className="bg-black px-8 md:px-10 py-2 rounded-full text-white">
                    Show Now
                </button>

                <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-10">
                    <div className="border-r-0 md:border-r-2 pr-0 md:pr-5">
                        <h3 className="text-xl md:text-2xl font-bold">200+</h3>
                        <p className="text-xs md:text-sm text-gray-500">International Brands</p>
                    </div>
                    <div className="border-r-0 md:border-r-2 pr-0 md:pr-5">
                        <h3 className="text-xl md:text-2xl font-bold">2000+</h3>
                        <p className="text-xs md:text-sm text-gray-500">High-Quality Products</p>
                    </div>
                    <div className="pr-0 md:pr-3">
                        <h3 className="text-xl md:text-2xl font-bold">3000+</h3>
                        <p className="text-xs md:text-sm text-gray-500">Happy Customers</p>
                    </div>
                </div>
            </div>
            <img src="/images/Hero1.png" className="self-end w-full lg:w-1/3 h-auto mt-5 lg:mt-0" alt="Clothing Style" />
        </div>
    )
}
