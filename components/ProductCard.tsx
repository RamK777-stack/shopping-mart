import React from 'react'
import RatingComponent from './RatingComponent';
import slugify from 'slugify';
import Link from 'next/link';

type Product = {
  id: number;
  name: string;
  image: string;
  currency: string;
  price: number;
  original_price?: number;
  discount_percentage?: number;
  rating: number;
  category: string;
  subcategory: string;
};

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {

  const { category, subcategory } = product;

  const productSlug = slugify(product.name);
  const productUrl = `/shop/${category}/${subcategory}/${productSlug}/${product.id}`;

  return (
    <Link href={productUrl}>
      <div className='flex flex-col space-y-3 space-x-2 leading-4 text-left'>
        <img src={product.image} />
        <p className='font-bold'>{product.name}</p>
        <RatingComponent defaultRating={product.rating} />
        <p className="font-bold">
          {product.currency}{product.price}
          {product.original_price && (
            <span className="text-gray-500 ml-2 line-through">
              {product.currency}{product.original_price}
            </span>
          )}
          {product.discount_percentage && (
            <span className="text-xs text-rose-500 rounded-full ml-2 bg-rose-200 px-2 py-1">
              {product.discount_percentage}%
            </span>
          )}
        </p>
      </div>
    </Link>
  )
}
