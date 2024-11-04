import { createContext, useReducer } from "react";
import { bookReducer } from "../Reducer/Book";

export const BookContext = createContext()


const BookContextProvider = ({ children }) => {
  const [book, dispatch] = useReducer(bookReducer, '')


  const value = {

  }




  return (
    <BookContext.Provider value={value}>
      {children}
    </BookContext.Provider>
  )
}


export { BookContextProvider }