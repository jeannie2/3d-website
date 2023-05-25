const BookmarkedReducer = (state, action) => {

  switch (action.type) {
    case "ADD_BOOKMARK": {
    let check_index = state.bookmarkedItems.find((item) => item.id === action.payload.item.id);
      console.log("action payload item id: " + action.payload.item.id)
      console.log("action payload input ref current value: " + action.payload.inputRef.current.value)

        if(check_index) {
          console.log("ALREADY THERE");
          let productIndex = state.bookmarkedItems.findIndex((item) => item.id === action.payload.item.id)
          state.bookmarkedItems[productIndex].quantity = action.payload.inputRef.current.value;
        } else {
          console.log("WASN\'T THERE, ADDING FIRST TIME")
        state.bookmarkedItems.push({
            ...action.payload.item,
            quantity: action.payload.inputRef.current.value
          })
        }
      return {
        ...state,
        bookmarkedItems: [...state.bookmarkedItems]
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
