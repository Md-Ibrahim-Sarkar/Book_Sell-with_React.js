import { createContext, useReducer, useState } from "react";
import { bookReducer} from "../Reducer/Book";
import { initialBooks } from "../Data/initialBooks";

export const BookContext = createContext()


const BookContextProvider = ({ children }) => {
  const [mode, setMode] = useState("light");
  // const [books, dispatch] = useReducer(bookReducer, initialBooks())
  const [books, setBooks] = useState(initialBooks())
  const [addToCart, setAddToCart] = useState([])
  const [showBookItem, setShowBookItem] = useState({})
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [input, setInput] = useState('')
  const [favorites, setFavorites] = useState([])
  
  let deleteAddToCart = (id) => {
    setAddToCart(addToCart.filter(item => item.id !== id))

  }
console.log(books);

  

  const value = {
    books,
    setBooks,
    mode,
    setMode,
    addToCart,
    setAddToCart,
    deleteAddToCart,
    showBookItem,
    setShowBookItem,
    isModalOpen,
    setIsModalOpen,
    setInput,
    input,
    favorites,
    setFavorites
  }

  return (
    <BookContext.Provider value={value}>
      {children}
    </BookContext.Provider>
  )
}


export { BookContextProvider }