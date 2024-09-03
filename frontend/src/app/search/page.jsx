'use client';
import data from '@/equipmentData';
import Link from 'next/link';
import React, { useState } from 'react'

const Search = () => {

    const [productData, setProductData] = useState(data);

    const displayProducts = () => {
        return productData.map(product => (
            <Link
                className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md focus:outline-none focus:shadow-md transition dark:bg-neutral-900 dark:border-neutral-800"
                href="#"
            >
                <div className="">
                    <img
                        className="w-full object-cover rounded-t-xl h-76 object-contain"
                        src={product.image}
                        alt="Blog Image"
                    />
                </div>
                <div className="p-4 md:p-5">
                    <p className="mt-2 text-xs uppercase text-gray-600 dark:text-neutral-400">
                        {product.brand}
                    </p>
                    <h3 className="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600 dark:text-neutral-300 dark:group-hover:text-white">
                        {product.title}
                    </h3>
                    <h1 className='text-xl font-bold'>

                        ₹{product.price}
                    </h1>





                </div>
            </Link>
        ))
    }

    return (
        <>
            {/* Card Blog */}
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                {/* Title */}
                <div className="max-w-2xl text-center mx-auto mb-10 lg:mb-14">
                    <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
                        Read our latest news

                    </h2>
                    <p className="mt-1 text-gray-600 dark:text-neutral-400">
                        We've helped some great companies brand, design and get to market.
                    </p>
                </div>

                {/* End Title */}
                {/* Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 lg:mb-14">
                    {displayProducts()}
                </div>
                {/* End Grid */}
                {/* Card */}
                <div className="text-center">
                    <div className="inline-block bg-white border shadow-sm rounded-full dark:bg-neutral-900 dark:border-neutral-800">
                        <div className="py-3 px-4 flex items-center gap-x-2">
                            <p className="text-gray-600 dark:text-neutral-400">
                                Want to read more?
                            </p>
                            <a
                                className="inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-blue-500"
                                href="../docs/index.html"
                            >
                                Go here
                                <svg
                                    className="shrink-0 size-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="m9 18 6-6-6-6" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                {/* End Card */}
            </div>
            {/* End Card Blog */}
        </>

    )
}

export default Search;