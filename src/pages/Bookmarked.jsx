
import React, {useContext} from "react";
import BookmarkedContext from "../context/BookmarkedContext"
import BookmarkedItem from "../components/BookmarkedItem";
import Container from 'react-bootstrap/Container'

const BookmarkedPage = () => {
const {bookmarkedItems} = useContext(BookmarkedContext);

const sum = () => {
  let total = 0;
  bookmarkedItems.forEach((product) => total += product.price * product.quantity)
  return total.toFixed(2);
}

console.log("bookmarked items length: " + bookmarkedItems.length)

  return (
    <Container id="bookmarked-container">
      <h1>Bookmarked products</h1>
      {bookmarkedItems.length === 0 ? (
        <h2>No Bookmarks</h2>
      ) : (
        <ul>
          {bookmarkedItems.map((item, index) => (
            <BookmarkedItem key={index} item={item}/>
          ))}
        </ul>
      )}

      <div>
        <h2>Total: ${sum()} </h2>
      </div>
  </Container>
  )
}

export default BookmarkedPage
