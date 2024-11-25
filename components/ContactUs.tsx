import React from 'react'
import ProductCard from './ProductCard';
import { Mail } from 'lucide-react';

export default function ContactUs() {

  return (
    <section className="mt-16 bg-black">
      <div className="flex flex-col lg:flex-row justify-center p-6 lg:space-x-10 space-y-6 lg:space-y-0">
        <h3 className="text-2xl lg:text-3xl self-center font-extrabold text-white max-w-md text-center lg:text-left">
          STAY UP TO DATE ABOUT OUR LATEST OFFERS
        </h3>
        <div className="flex flex-col self-center space-y-5 w-full max-w-md">
          <div className="relative w-full">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <Mail className="h-5 w-5" />
            </div>
            <input
              type="email"
              placeholder="Enter your email address"
              className="h-12 w-full rounded-full bg-white pl-10 pr-4 text-sm outline-none ring-1 ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-primary"
            />
          </div>
          <button className="h-12 w-full rounded-full bg-white pr-4 text-sm outline-none ring-1 ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-primary">
            Subscribe to Newsletter
          </button>
        </div>
      </div>
    </section>
  )
}
