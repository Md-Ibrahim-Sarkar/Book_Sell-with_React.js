import { IoIosArrowForward } from "react-icons/io";

function ByRatting() {

  const SearchBar = () => {
    document.querySelector('.onHiddenRatting').classList.toggle('hidden')
  }

  return (
    <div >
      <div onClick={SearchBar} className="flex ">
        <div className="flex items-center gap-1 cursor-pointer">
          <IoIosArrowForward />
          <span>By ratting</span>
        </div>
      </div>
      <div className="onHiddenRatting hidden border border-main-Color rounded-md">
        <span className=" ">
          <input type="text" className="rounded-md w-full focus:outline-none px-2 py-2" />
        </span>
      </div>
    </div>
  )
}

export default ByRatting