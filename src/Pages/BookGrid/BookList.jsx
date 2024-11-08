import { useContext, useState } from "react"
import { initialBooks } from "../../Data/initialBooks"
import BookItem from "./BookItem"
import { BookContext } from "../../Context/bookContext"


function BookList() {


  const { books } = useContext(BookContext)

  return (
     <div className="col-span-8 max-[1024px]:col-span-7 max-[768px]:col-span-8 max-[1024px]:place-items-start max-[540px]:col-span-12 max-[640px]:col-span-8 max-[540px]:place-items-center border-x border-[#595959] p-3 grid lg:grid-cols-3 grid-cols-1 gap-y-3 gap-x-4 max-[540px]:min-h-screen">
    {books.length > 0 ? (
      books.map((item) => <BookItem key={item.id} data={item} />)
    ) : (
      <p className="text-center max-[640px]:text-sm text-2xl col-span-3  text-gray-500">No books available</p>
    )}
  </div>
  )
}

export default BookList