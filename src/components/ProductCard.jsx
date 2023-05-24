import React, { useState, useContext, useRef } from "react";
import BookmarkedContext from "../context/BookmarkedContext";
import { Row, Col, Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
// import CardGroup from 'react-bootstrap/CardGroup';

const ProductCard = ({product, quantity}) =>  {

const inputRef = useRef(null)
const [rabbit, setRabbit] = useState(1) // useState({quantity: ''})

const handleRabbit = e => {
  let onlyNumbers = e.target.value.replace(/\D/g, "");
  console.log(onlyNumbers)
  setRabbit(onlyNumbers)
}

const { total, handleChange, addBookmark, removeBookmark } = useContext(BookmarkedContext)

return (
<Col className="col-sm-12 col-md-3 mt-3">
      <Card>
      <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>
          <p>${product.price}</p>
          <p>Product ID: {product.id}</p>

          Quantity:
          <input
          ref={inputRef}
          value={rabbit}
          name="roomRent"
          onChange={handleRabbit}
          ></input>
          <Button variant="primary" onClick={() => addBookmark(product, inputRef)}>Bookmark</Button>

        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
)
}

export default ProductCard;
