'use client'

import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import Marquee from "@/components/ui/marquee"
import { Check } from 'lucide-react'

export default function TestimonialsMarquee() {
  const testimonials = [
    {
      name: "Sarah M.",
      verified: true,
      rating: 5,
      text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
    },
    {
      name: "Alex K.",
      verified: true,
      rating: 5,
      text: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions."
    },
    {
      name: "James L.",
      verified: true,
      rating: 5,
      text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on point with the latest trends."
    },
    {
      name: "Emily R.",
      verified: true,
      rating: 4,
      text: "Shop.co has become my go-to for sustainable fashion. Their eco-friendly options are stylish and affordable. While I wish they had more variety in some categories, overall I'm very satisfied."
    },
    {
      name: "Michael T.",
      verified: true,
      rating: 5,
      text: "The customer service at Shop.co is unparalleled. They went above and beyond to help me find the perfect outfit for a special event. I'll definitely be a repeat customer!"
    },
    {
      name: "Sophia L.",
      verified: true,
      rating: 5,
      text: "I appreciate the size inclusivity at Shop.co. As someone who often struggles to find fashionable clothes in my size, it's refreshing to see a brand that caters to all body types."
    },
    {
      name: "David W.",
      verified: true,
      rating: 4,
      text: "The quality of materials used in Shop.co's clothing is impressive. Everything I've purchased has held up well after multiple washes. My only suggestion would be to expand their men's accessories line."
    }
  ]

  return (
    <section className='mt-12 px-16'>
      <h3 className='text-2xl text-center font-extrabold'>OUR HAPPY CUSTOMERS</h3>
      <Marquee pauseOnHover className="mt-10 [--duration:40s]">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="p-2 w-80 flex-shrink-0">
            <Card className="border-0 shadow-md h-full cursor-pointer hover:bg-gray-100">
              <CardContent className="flex flex-col p-6 h-full">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-semibold text-lg">{testimonial.name}</span>
                  {testimonial.verified && (
                    <span className="bg-green-500 rounded-full p-0.5">
                      <Check className="w-3 h-3 text-white" />
                    </span>
                  )}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed flex-grow overflow-auto">
                  {testimonial.text}
                </p>
              </CardContent>
            </Card>
          </div>
        ))}
      </Marquee>
    </section>
  )
}