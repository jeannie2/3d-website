const BookmarkedReducer = (state, action) => {

  switch (action.type) {
   /* case "CHANGE_INPUT": {
     // if(check_index) {
     // state.quantity = action.payload
      let productIndex =  state.bookmarkedItems.findIndex((item) => item.id === action.payload.id)
        if (productIndex !== -1) {
         // state.quantity = action.payload;
          state.bookmarkedItems[productIndex].quantity = state.portion
        }
    //  }
    return {
        ...state,
        bookmarkedItems: [...state.quantity, action.payload],
        // cartItems: [...state.cartItems, action.payload],
      };
    } */

    case "ADD_BOOKMARK": {
     let check_index = state.bookmarkedItems.find((item) => item.id === action.payload.item.id); // if put outside, payload.item.id needed so no adds new listing (only update quantity). if omit and use action.payload.item and put outside, can remove each one but then each time add creates new listing. so put inside add_bookmark

      console.log("action payload item id: " + action.payload.item.id)
      console.log("action payload input ref current value: " + action.payload.inputRef.current.value)
      //console.log("init state portion: " + state.portion)
      //console.log("inputRef: " + action.payload.value)
        if(check_index) {
          console.log("ALREADY THERE");  // console.log("check_index " + check_index)
          let productIndex = state.bookmarkedItems.findIndex((item) => item.id === action.payload.item.id)
          state.bookmarkedItems[productIndex].quantity = action.payload.inputRef.current.value;
         // console.log("STOCK: " + state.bookmarkedItems[productIndex].quantity)
         // console.log("state.bookmarkedItems : " + state.bookmarkedItems[1].stock) // problem line when was updating as stock
        } else {
          console.log("WASN\'T THERE, ADDING FIRST TIME")
        state.bookmarkedItems.push({
            ...action.payload.item,
            quantity: action.payload.inputRef.current.value // stock
          })
        }
        "CALCULATE_TOTAL"
      return {
        ...state,
        bookmarkedItems: [...state.bookmarkedItems]
        // bookmarkedItems: [...state.bookmarkedItems, action.payload],
      };
    }

    case "REMOVE_BOOKMARK": {
      console.log(action.payload, state);
      return {
        ...state,
        bookmarkedItems: state.bookmarkedItems.filter(
          (item) => item.id !== action.payload
        ),
      };
    }

    case "CALCULATE_TOTAL": {
     let total = 0;
     console.log("TOTAL:")
      state.bookmarkedItems.forEach((product) =>
     //  console.log("price: " + product.price + " quantity: " + product.quantity)
      (state.total += product.price * product.quantity)
      )
      return {
        ...state,
        total: state.total
      }
    }

    default:
      return state;
  }

};

export default BookmarkedReducer;
