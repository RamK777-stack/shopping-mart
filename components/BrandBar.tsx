import React from 'react'

export default function BrandBar() {
    return (
        <div className='flex flex-wrap items-center justify-center gap-6 md:gap-8 lg:gap-14 bg-black py-4 md:py-6 px-4'>
        <img 
            src="/images/Brand-1.svg" 
            className="h-4 md:h-6 lg:h-8 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300" 
            alt="Clothing Style Brand 1" 
        />
        <img 
            src="/images/Brand-2.svg" 
            className="h-4 md:h-6 lg:h-8 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300" 
            alt="Clothing Style Brand 2" 
        />
        <img 
            src="/images/Brand-3.svg" 
            className="h-4 md:h-6 lg:h-8 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300" 
            alt="Clothing Style Brand 3" 
        />
        <img 
            src="/images/Brand-4.svg" 
            className="h-4 md:h-6 lg:h-8 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300" 
            alt="Clothing Style Brand 4" 
        />
        <img 
            src="/images/Brand-5.svg" 
            className="h-4 md:h-6 lg:h-8 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300" 
            alt="Clothing Style Brand 5" 
        />
    </div>
    )
}
