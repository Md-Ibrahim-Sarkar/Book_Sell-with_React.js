import { useContext, useState } from "react"
import { initialBooks } from "../../Data/initialBooks"
import BookItem from "./BookItem"
import { BookContext } from "../../Context/bookContext"


function BookList() {


  const { books } = useContext(BookContext)

  return (
    <div className="col-span-8 max-[500px]:col-span-12 max-[640px]:col-span-8 border-x border-[#595959] p-3 grid lg:grid-cols-3 grid-cols-1  gap-y-3 gap-x-4">

      {books.map(item => <BookItem key={item.id} data={item} />)}


    </div>
  )
}

export default BookList