'use client'

import { useState, useEffect } from 'react'
import { Star, StarHalf } from 'lucide-react'

interface RatingComponentProps {
    maxRating?: number
    defaultRating?: number
    onChange?: (rating: number) => void
    isEditable?: boolean
}

export default function RatingComponent({
    maxRating = 5,
    defaultRating = 0,
    onChange,
    isEditable = false,
}: RatingComponentProps) {
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)

    useEffect(() => {
        setRating(Math.min(Math.max(defaultRating, 0), maxRating))
    }, [defaultRating, maxRating])

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>, value: number) => {
        if (!isEditable) return
        const { left, width } = e.currentTarget.getBoundingClientRect()
        const percent = (e.clientX - left) / width
        setHover(percent <= 0.5 ? value - 0.5 : value)
    }

    const handleMouseLeave = () => {
        if (isEditable) setHover(0)
    }

    const handleClick = (value: number) => {
        if (!isEditable) return
        const newRating = value === rating ? 0 : value
        setRating(newRating)
        onChange?.(newRating)
    }

    const renderStar = (index: number) => {
        const value = index + 1
        const isHalfHovered = hover === value - 0.5
        const isHovered = hover >= value
        const isActive = rating >= value
        const isHalfActive = rating === value - 0.5

        return (
            <button
                key={index}
                onClick={() => handleClick(value)}
                onMouseMove={(e) => handleMouseMove(e, value)}
                onMouseLeave={handleMouseLeave}
                className="relative w-5 h-5"
            >
                {isActive || isHovered ? (
                    <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ) : (
                    <Star className="w-5 h-5 text-gray-300" />
                )}
                {(isHalfActive || isHalfHovered) && (
                    <StarHalf
                        className="absolute top-0 left-0 w-5 h-5 text-yellow-400 fill-yellow-400"
                    />
                )}
            </button>
        )
    }

    return (
        <div className="flex space-x-2">
            {[...Array(maxRating)].map((_, index) => renderStar(index))}
            <span className='text-sm'>{defaultRating}/{maxRating}</span>
        </div>
    )
}
