import { createContext, useReducer, useState } from "react";
import { bookReducer } from "../Reducer/Book";
import { initialBooks } from "../Data/initialBooks";

export const BookContext = createContext()


const BookContextProvider = ({ children }) => {
  const [mode, setMode] = useState("light");
  const [books, dispatch] = useReducer(bookReducer, initialBooks())
  const [addToCart, setAddToCart] = useState([])
  const [showBookItem, setShowBookItem] = useState({})

  let deleteAddToCart = (id) => {
    setAddToCart(addToCart.filter(item => item.id !== id))

  }

  const value = {
    books,
    dispatch,
    mode,
    setMode,
    addToCart,
    setAddToCart,
    deleteAddToCart,
    showBookItem,
    setShowBookItem,

  }

  return (
    <BookContext.Provider value={value}>
      {children}
    </BookContext.Provider>
  )
}


export { BookContextProvider }