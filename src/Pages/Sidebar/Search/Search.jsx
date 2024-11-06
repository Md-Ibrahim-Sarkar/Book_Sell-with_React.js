
import { useContext } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { BookContext } from "../../../Context/bookContext";

function Search() {

  const {setIsModalOpen} = useContext(BookContext)


  return (
    <div onClick={() => setIsModalOpen(true)} className="mt-3 xl:w-48 xl:h-12 lg:w-40 h-12 border border-main-Color rounded-lg  relative cursor-pointer disabled:curs">
      <input readOnly  type="search" className="rounded-lg w-full h-full focus:outline-none xl:ps-12 ps-10 cursor-pointer" placeholder="Quick search..." />

      <IoSearchOutline className="xl:w-10 xl:h-7 w-10 h-5 absolute xl:top-3 top-4" />
    </div>
  )
}

export default Search