import React from "react"
import ProductCard from "./ProductCard"

const ProductsComp = ({products = []}) => {
  return (
    <>
      {products &&
        products.map((product) => (
          <ProductCard key={product.id} product={product}/>
        ))}
    </>
  );
};

export default ProductsComp;
