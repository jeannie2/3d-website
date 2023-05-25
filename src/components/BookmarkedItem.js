import React, { useContext } from "react";
import BookmarkedContext from "../context/BookmarkedContext";

const BookmarkedItem = ({ item }) => {
  const { removeBookmark } = useContext(BookmarkedContext);

  return (
    <li>
      <p><span>NAME: </span> {item.title} </p>
      <p><span>Product ID: </span>{item.id} </p>
      <p><span> PRICE: $</span>{item.price} </p>
      <p><span>QUANTITY: </span>{item.quantity} </p>
      <button onClick={() => removeBookmark(item.id)}>Remove </button>
    </li>
  );
};

export default BookmarkedItem;
