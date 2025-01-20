import React, { useEffect, useState } from 'react'
import CartProduct from "./CardProduct";
import { fetchProducts } from '../../axiosCall';

const CardProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };
    getProducts();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-3 p-5 mx-4 bg-white">
      {products.map((product, index) => (
        <CartProduct key={index} product={product} />
      ))}
    </div>
  )
}

export default CardProducts
