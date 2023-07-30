import React from "react"
import ProductCard from "./ProductCard"


const ProductsComp = ({products = []}) => {
  return (
    <>
      {products &&
        products.map((product) => (
          <ProductCard key={product.id} product={product}/>
        ))}
        <button type="button" className="btn btn-outline-light">Order Now</button>
    </>
  );
};

export default ProductsComp;
