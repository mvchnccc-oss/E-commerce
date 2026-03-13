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

  return (
    <>
      <input
        type="text"
        placeholder="Search product..."
        className="border p-2 w-full mb-4"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
            favIds={favIds}
            CartIds={cartIds}
          />
        ))}
      </div>
    </>
  );
}