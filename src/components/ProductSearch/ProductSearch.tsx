"use client"

import { useState } from "react";
import { Products } from "@/Interfaces/productInterface";
import ProductCard from "../ProductCard/ProductCard";

export default function ProductSearch({
    products,
    favIds,
    cartIds,
}: {
    products: Products[];
    favIds: string[];
    cartIds: string[];
}) {

    const [search, setSearch] = useState("");

    const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
    );

    const groupedProducts = filteredProducts.reduce((acc: any, product) => {

        const category = product.category.name;

        if (!acc[category]) {
            acc[category] = [];
        }

        acc[category].push(product);

        return acc;

    }, {});

    return (
        <>

            <div className="relative mb-3">
                <input
                    type="text"
                    placeholder="Search products..."
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 pl-10 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <svg
                    className="absolute left-3 top-3.5 w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m21 21-4.35-4.35M10 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16z"
                    />
                </svg>
            </div>

            {Object.entries(groupedProducts).map(([category, products]) => (

                <div key={category} className="mb-10">

                    <h2 className="text-2xl font-bold mb-4">
                        {category}
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">

                        {(products as Products[]).map((product) => (
                            <ProductCard
                                key={product._id}
                                product={product}
                                favIds={favIds}
                                CartIds={cartIds}
                            />
                        ))}

                    </div>

                </div>

            ))}

        </>
    );
}