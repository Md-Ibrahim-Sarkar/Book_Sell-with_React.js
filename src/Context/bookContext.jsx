import { createContext, useEffect, useReducer, useState } from "react";
import { AddToCartReducer} from "../Reducer/Book";
import { initialBooks } from "../Data/initialBooks";

export const BookContext = createContext()


const BookContextProvider = ({ children }) => {
  // Add to cart Reducer State
  const [addToCart, dispatch] = useReducer(AddToCartReducer, [])
  

  //Main books Data State
  const [books, setBooks] = useState(initialBooks())

  // Dark_Light state
  const [mode, setMode] = useState("light");

  // for 
  const [showBookItem, setShowBookItem] = useState({})
  
  // Other State
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [input, setInput] = useState('')
  const [trending, setTrending] = useState([])
  const [newReleases, setNewReleases] = useState([])
  const [comingSoon, setComingSoon] = useState([])
  const [favorites, setFavorites] = useState([])
  const [Search,setSearch] = useState([])
  
  let deleteAddToCart = (id) => {
    dispatch({
      type: 'DELETE_CART_ITEM',
      payload:addToCart.filter(item => item.id !== id)
    })

  }

  
  
  useEffect(() => {
    setComingSoon(books.filter(item => item.status === "coming_soon"))
    setNewReleases(books.filter(item => item.status === "new_releases"))
    setTrending(books.filter(item => item.rating === 5))
    setSearch(books)
  },[])
  

  const value = {
    dispatch,
    books,
    setBooks,
    mode,
    setMode,
    addToCart,
    deleteAddToCart,
    showBookItem,
    setShowBookItem,
    isModalOpen,
    setIsModalOpen,
    setInput,
    input,
    trending,
    newReleases,
    comingSoon,
    favorites,
    setFavorites,
    Search,
    setSearch,
  }

  return (
    <BookContext.Provider value={value}>
      {children}
    </BookContext.Provider>
  )
}


export { BookContextProvider }