import Image from 'next/image'
import React from 'react'
import { ShoppingCartIcon, UserCircleIcon } from '@heroicons/react/24/outline'
import SearchBar from './SearchBar'

export default function Header() {
    return (
        <div className='flex flex-col lg:flex-row justify-around items-center p-6'>
            <a href='/'>
                <Image
                    src="/images/logo.svg"
                    height={144}
                    width={144}
                    alt="Logo"
                    className='cursor-pointer'
                />
            </a>

            <div className='flex space-x-5'>
                <p className='cursor-pointer'>Shop</p>
                <p className='cursor-pointer'>On Sale</p>
                <p className='cursor-pointer'>New Arrivals</p>
                <p className='cursor-pointer'>Brands</p>
            </div>

            <SearchBar />

            <div className='flex space-x-3'>
                <div><ShoppingCartIcon className="size-5 cursor-pointer" /></div>
                <div><UserCircleIcon className="size-5 cursor-pointer" /></div>
            </div>
        </div>
    )
}
