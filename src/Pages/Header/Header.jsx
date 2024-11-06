
import { useContext } from "react";
import IconGroup from "../../Components/IconGroup/IconGroup";
import { BookContext } from "../../Context/bookContext";
import { initialBooks } from "../../Data/initialBooks";

function Header() {

  const {setBooks} = useContext(BookContext)

  return (
    <div className="border-b border-[#595959]">
      <div className="container mx-auto md:px-3">
        <div className="flex justify-between py-5 items-center max-[655px]:px-3">
          <div onClick={()=>setBooks(initialBooks())} className="">
            <span className="text-main-Color text-2xl font-semibold cursor-pointer ">Ibrahim Sarkar</span>
          </div>
          <IconGroup />
        </div>
      </div>
    </div>
  )
}

export default Header