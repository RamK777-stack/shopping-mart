import React from 'react'
import ProductCard from './ProductCard';

export default function NewArrivals() {

  const newArrivals = [
    {
      name: 'T-shirt with Tape Details',
      image: '/images/NewArrivals/product-a.png',
      currency: '$',
      price: 120,
      rating: 3.5
    },
    {
      name: 'Skinny Fit Jeans',
      image: '/images/NewArrivals/product-b.png',
      currency: '$',
      price: 240,
      original_price: 260,
      discount_percentage: -27,
      rating: 3.5
    },
    {
      name: 'Checkered Shirt',
      image: '/images/NewArrivals/product-c.png',
      currency: '$',
      price: 180,
      rating: 4.5
    },
    {
      name: 'Sleeve Striped T-shirt',
      image: '/images/NewArrivals/product-d.png',
      currency: '$',
      price: 130,
      original_price: 160,
      discount_percentage: -30,
      rating: 4
    }
  ];

  return (
    <section className='mt-12 text-center'>
      <h3 className='text-2xl text-center font-extrabold'>NEW ARRIVALS</h3>
      <div className="mt-10 px-4 sm:px-16">
        <div className="flex space-x-5 overflow-x-auto overflow-y-hidden scrollbar-hide w-full">
          {newArrivals.map((product, index) => (
            <div key={index} className="flex-shrink-0">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
      <button className="rounded-full border-2 px-10 py-2 mt-10 cursor-pointer hover:bg-gray-200">
        View All
      </button>
    </section>
  )
}