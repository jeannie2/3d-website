import React, { useRef, useState, useEffect } from "react"; // useMemo
import axios from 'axios';

import { Container, Row } from 'react-bootstrap';
import SearchBar from "../components/SearchBar"
import SortBar from "../components/SortBar"
import ProductsComp from "../components/ProductsComp"

import ContactForm from "../components/ContactForm"

const ShopPage = () => {
  const [loading, setLoading] = useState(false);
  const [allProducts, setAllProducts] = useState([]);
  const [products, setProducts] = useState([])
  const [keyword, setKeyword]  = useState('')
  const [order, setOrder] = useState("default")
  const [sortedData, setSortedData] = useState([])

  // fetch data from Fake Store API
  useEffect(() => {
  const fetchData = async () => {
    setLoading(true);
    try {
      const resp = await axios.get("https://fakestoreapi.com/products?limit=10")
      setProducts(resp.data)
      setAllProducts(resp.data);
    } catch (err) {
      console.log(err)
    }
    setLoading(false)
  }
  fetchData()
}, []);

// search bar
const updateKeyword = (keyword) => {
    const filtered = allProducts.filter(product => {
    return `${product.title.toLowerCase()}`.includes(keyword.toLowerCase());
    })
    setKeyword(keyword);
    setProducts(filtered);
}

// sort products in ascending, descending order
const updateOrder = (order) => {
  setOrder(order)
  console.log("order " + order)
  if(order === "ascending") {
    return allProducts.sort((a, b) => a.title < b.title ? -1 : 1)
  }
  else if (order === "descending") {
    return allProducts.sort((a, b) => b.title > a.title ? 1 : -1)
  } else {
    return allProducts
  }
}

const sortResults = (order) => {
  const results = updateOrder(order)
  setProducts(results)
}

  return (
    <>
    {loading && <div>Loading</div>}
    {!loading && (
    <Container id="shop-container" className='p-6'>

      {/* <SearchBar keyword={keyword} onChange={updateKeyword}/>
      <SortBar order={order} onChange={sortResults}/> */}
        <Row>
            <ContactForm/>
          {/* <ProductsComp products={products} /> */}
        </Row>
    </Container>
      )}
  </>
  )
}

export default ShopPage
