import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import React from 'react'

export default function SearchBar() {
    return (
        <div className="bg-gray-200 rounded-full p-3 w-full max-w-md flex items-center space-x-2">
            <MagnifyingGlassIcon className="size-5" />
            <input
                type="text"
                placeholder="Search for products..."
                className="bg-gray-200 outline-none text-sm w-full cursor-pointer"
            />
        </div>
    )
}
