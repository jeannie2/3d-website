import React, { useState, useContext, useRef } from "react";
import BookmarkedContext from "../context/BookmarkedContext";
import { Col, Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

const ProductCard = ({product, quantity}) =>  {

const inputRef = useRef(null)
const [amount, setAmount] = useState(1)

const handleAmount = e => {
  let onlyNumbers = e.target.value.replace(/\D/g, "");
  console.log(onlyNumbers)
  setAmount(onlyNumbers)
}

const { total, addBookmark, removeBookmark } = useContext(BookmarkedContext)

return (
<Col className="col-sm-12 col-md-3 mt-3">
      <Card className="h-100">
      <Card.Img src={product.image} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
          <p>${product.price}</p>
          <p>Product ID: {product.id}</p>

          Quantity:
          <input
          id="quantity-input"
          ref={inputRef}
          value={amount}
          name="quan"
          onChange={handleAmount}
          ></input>
          <Button variant="primary" onClick={() => addBookmark(product, inputRef)}>Bookmark</Button>

        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
)
}

export default ProductCard;
