import { useContext } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { BookContext } from "../../Context/bookContext";
function FilterPanel({className}) {

  const {books,setBooks} = useContext(BookContext)

  const toSortedByName = () => {
    setBooks(books.toSorted((a,b) => a.name.localeCompare(b.name)))
  }
  
  const toSortedByRating = () => {
    const sortedRating = [...books].sort((a, b) => b.rating - a.rating);
    setBooks(sortedRating);
  };
  
  const toSortedByPrice = () => {
    const sortedPrice = [...books].sort((a, b) => a.price - b.price);
    setBooks(sortedPrice)
  }

  return (
    <div className={`min-[1024px]:col-span-3 ${className}`}>
      <div className="flex  mt-10 max-[540px]:mt-0 mb-4">
        <div>
          <h3 className="h3">Filter On Page</h3>

          <div onClick={toSortedByName} className="flex items-center gap-1 mb-1 mt-3 cursor-pointer hover:text-main-Color transform transition duration-500 hover:scale-110 animate-fadeText">
            <IoIosArrowForward />
            <span className="text-xl">By name</span>
          </div>

          <div onClick={toSortedByRating} className="flex items-center gap-1 mb-1 cursor-pointer hover:text-main-Color transform transition duration-500 hover:scale-110 animate-fadeText">
            <IoIosArrowForward />
            <span className="text-xl ">By ratting</span>
          </div>

          <div onClick={toSortedByPrice} className="flex items-center gap-1 mb-1 cursor-pointer hover:text-main-Color transform transition duration-500 hover:scale-110 animate-fadeText">
            <IoIosArrowForward />
            <span className="text-xl">By price</span>
          </div>

        </div>
      </div>
    </div>
  )
}

export default FilterPanel