import { useState } from "react"
import { initialBooks } from "../../Data/initialBooks"
import BookItem from "./BookItem"


function BookList() {
  let [data, setData] = useState(initialBooks())

  return (
    <div className="col-span-8 border-x border-[#595959] p-4 flex flex-wrap gap-5 justify-between">

      {data.map(item => <BookItem key={item.id} data={item} />)}


    </div>
  )
}

export default BookList