import React, { useRef, useState, useEffect } from "react";
import axios from 'axios';

import { Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

import ProductCard from "../components/ProductCard"
// import SearchBar from '../components/Search'
// import Filter from '../components/Filter'

const StorePage = () => {
  // const inputRef = useRef(null)
  // const [quantity, setQuantity] = useState('');

  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([])

  useEffect(() => {
  const fetchData = async () => {
    setLoading(true);
    try {
      const resp = await axios.get("https://fakestoreapi.com/products/category/electronics?limit=10")
      setProducts(resp.data)
    } catch (err) {
      console.log(err)
    }
    setLoading(false)
  }
  fetchData()
}, []);

  return (
    <>
    {loading && <div>Loading</div>}
    {!loading && (
    <Container className='p-6'>
    <Row>
      {products.map((product) => (
        <ProductCard key={product.id} product={product}/>
      ))}
  </Row>
  </Container>
      )}
  </>
  )
}

export default StorePage
