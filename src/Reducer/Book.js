
// for Add To Cart

export const AddToCartReducer = (data, action) => {
 
  let { type, payload } = action;

  switch (type) {
    case "ADD_TO_CART": {
      return [
        ...data,
        payload
      ]
    }
    case "ADD_TO_CART_MODAL": {
      return [
        ...data,
        payload
      ]
    }
    case 'DELETE_CART_ITEM': {
      return payload
    }
      
      
  
    default:
      return data;
  }
   
}


//  for Search

export const SearchBooks = (books, action) => {
  return books
}