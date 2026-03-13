import ProductCard from '@/components/ProductCard/ProductCard';
import { Products, ProductsResponse } from '@/Interfaces/productInterface';
import React from 'react';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/auth';
import ProductSearch from '@/components/ProductSearch/ProductSearch';

export default async function AllProducts() {
  const session = await getServerSession(authOptions);
  const token = (session as any)?.token;

  const response = await fetch("https://ecommerce.routemisr.com/api/v1/products");
  const data: ProductsResponse = await response.json();

  let favIds: string[] = [];
  let cartIds: string[] = [];

  if (token) {
    const favRes = await fetch("https://ecommerce.routemisr.com/api/v1/wishlist", {
      headers: { token }
    });

    const favData = await favRes.json();
    favIds = (favData.data || []).map((p: Products) => p._id);

    const cartRes = await fetch("https://ecommerce.routemisr.com/api/v1/cart", {
      headers: { token },
      cache: "no-store",
    });

    const cartData = await cartRes.json();
    cartIds = (cartData.data?.products || []).map((item: any) => item.product._id);
  }

  // grouping products by category
  const groupedProducts = data.data.reduce((acc: any, product: Products) => {
    const category = product.category.name;

    if (!acc[category]) {
      acc[category] = [];
    }

    acc[category].push(product);
    return acc;
  }, {});

  return (
    <div className="container mx-auto p-4">
      <ProductSearch
        products={data.data}
        favIds={favIds}
        cartIds={cartIds}
      />
      {Object.entries(groupedProducts).map(([category, products]) => (
        <div key={category} className="mb-10">

          <h2 className="text-2xl font-bold mb-4">{category}</h2>

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

    </div>
  );
}