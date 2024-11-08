import { createContext, useEffect, useReducer, useState } from "react";
import { bookReducer} from "../Reducer/Book";
import { initialBooks } from "../Data/initialBooks";

export const BookContext = createContext()


const BookContextProvider = ({ children }) => {
  const [mode, setMode] = useState("light");
  // const [books, dispatch] = useReducer(bookReducer, initialBooks())
  const [data, setData] = useState(initialBooks())
  const [books, setBooks] = useState(initialBooks())
  const [addToCart, setAddToCart] = useState([])
  const [showBookItem, setShowBookItem] = useState({})
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [input, setInput] = useState('')
  const [trending, setTrending] = useState([])
  const [newReleases, setNewReleases] = useState([])
  const [comingSoon, setComingSoon] = useState([])
  const [favorites, setFavorites] = useState([])
  const [Search,setSearch] = useState([])
  
  let deleteAddToCart = (id) => {
    setAddToCart(addToCart.filter(item => item.id !== id))

  }

  
  
  useEffect(() => {
    setComingSoon(books.filter(item => item.status === "coming_soon"))
    setNewReleases(books.filter(item => item.status === "new_releases"))
    setTrending(books.filter(item => item.rating === 5))
    setSearch(books)
  },[])
  

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
    trending,
    newReleases,
    comingSoon,
    favorites,
    setFavorites,
    Search,
    setSearch,
    data
  }

  return (
    <BookContext.Provider value={value}>
      {children}
    </BookContext.Provider>
  )
}


export { BookContextProvider }