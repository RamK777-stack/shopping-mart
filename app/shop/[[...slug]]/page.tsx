'use client'

import Breadcrumbs from "@/components/common/Breadcrumbs";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from 'lucide-react';
import { useState } from "react";

type PageParams = {
    params: {
        slug?: string[]
    }
}

export default function Page({ params }: PageParams) {
    const [category, subcategory, name, id] = params.slug || [];
    console.log(name, id)
    const [selectedImage, setSelectedImage] = useState("/images/tshirt-3.jpg");
    const [quantity, setQuantity] = useState(1);

    const thumbnails = [
        "/images/tshirt-1.jpg",
        "/images/tshirt-2.jpg",
        "/images/tshirt-3.jpg"
    ];

    return (
        <section className="container mx-auto px-4 lg:px-16 py-8">
            <Breadcrumbs items={['Home', 'Shop', category, subcategory]} />
            <div className="flex flex-col lg:flex-row gap-8 mt-10">
                <div className="flex gap-6 flex-1">
                    <div className="flex flex-col space-y-5 h-full overflow-y-auto">
                        {thumbnails.map((thumb, index) => (
                            <div
                                key={index}
                                className={`w-32 h-32 border rounded-lg overflow-hidden cursor-pointer hover:border-primary transition-colors ${selectedImage === thumb ? 'border-primary' : ''}`}
                                onClick={() => setSelectedImage(thumb)}
                            >
                                <Image
                                    src={thumb}
                                    alt={`Product thumbnail ${index + 1}`}
                                    className="w-full h-full object-cover"
                                    width={128}
                                    height={128}
                                />
                            </div>
                        ))}
                    </div>
                    <div className="flex-1 h-full">
                        <div className="rounded-lg overflow-hidden h-full">
                            <Image
                                src={selectedImage}
                                alt="Product main view"
                                className="w-full h-full object-cover object-center"
                                width={600}
                                height={600}
                                priority
                            />
                        </div>
                    </div>
                </div>
                <div className="flex-1 space-y-6">
                    <div>
                        <h1 className="text-3xl font-extrabold">ONE LIFE GRAPHIC T-SHIRT</h1>
                        <div className="flex items-center gap-2 mt-2">
                            <div className="flex">
                                {[...Array(4)].map((_, i) => (
                                    <svg
                                        key={i}
                                        className="w-5 h-5 text-yellow-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                                <svg
                                    className="w-5 h-5 text-yellow-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            </div>
                            <span className="text-sm text-muted-foreground">4.5/5</span>
                        </div>
                    </div>

                    <div className="flex items-baseline gap-4">
                        <span className="text-3xl font-bold">$260</span>
                        <span className="text-xl text-muted-foreground line-through">$300</span>
                        <span className="text-sm font-semibold text-red-500">-40%</span>
                    </div>

                    <p className="text-muted-foreground">
                        This graphic t-shirt which is perfect for any occasion. Crafted from a soft and
                        breathable fabric, it offers superior comfort and style.
                    </p>

                    <div className="space-y-4">
                        <div>
                            <h3 className="font-semibold mb-3">Select Colors</h3>
                            <div className="flex gap-2">
                                <button className="w-8 h-8 rounded-full bg-olive-600 ring-2 ring-offset-2 ring-olive-600" />
                                <button className="w-8 h-8 rounded-full bg-emerald-800" />
                                <button className="w-8 h-8 rounded-full bg-navy-600" />
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold mb-3">Choose Size</h3>
                            <div className="flex gap-2">
                                {["Small", "Medium", "Large", "X-Large"].map((size) => (
                                    <Button
                                        key={size}
                                        variant="outline"
                                        className="px-6"
                                    >
                                        {size}
                                    </Button>
                                ))}
                            </div>
                        </div>

                        <div className="flex items-center gap-6">
                            <div className="flex items-center gap-2">
                                <Button
                                    variant="outline"
                                    size="icon"
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                >
                                    <Minus className="h-4 w-4" />
                                </Button>
                                <span className="w-12 text-center">{quantity}</span>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    onClick={() => setQuantity(quantity + 1)}
                                >
                                    <Plus className="h-4 w-4" />
                                </Button>
                            </div>
                            <Button className="flex-1">Add to Cart</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}