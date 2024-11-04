import { IoIosArrowForward } from "react-icons/io";

function ByPrice() {
  const SearchBar = () => {
    document.querySelector('.onHiddenPrice').classList.toggle('hidden')
  }



  return (
    <div className="dropdown">
      <div onClick={SearchBar} className="flex ">
        <div className="flex items-center gap-1 cursor-pointer">
          <IoIosArrowForward />
          <span>By price</span>
        </div>
      </div>
      <div className="onHiddenPrice hidden border border-main-Color rounded-md">
        <span className=" ">
          <input type="text" className="rounded-md w-full focus:outline-none px-2 py-2" />
        </span>
      </div>
    </div>
  )
}

export default ByPrice