import { MdOutlineSearch } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

function SearchModal() {
  return (
    <div>
      <dialog id="my_modal_2" className="modal mt-[-100px]">
        <div className="modal-box lg:max-w-[756px] ">
          <div className="flex items-center justify-center">
            <MdOutlineSearch className="w-5 h-7" />
            <input type="text" className=" mx-5 w-full  bg-transparent focus:outline-none" placeholder="Type your favorite book name here ..." />
            <IoMdClose className="mt-[-30px] w-7 h-8 " />
          </div>
          <hr className="mt-3" />
        </div>

        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  )
}

export default SearchModal