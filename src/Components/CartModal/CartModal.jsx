import { MdOutlineSearch } from "react-icons/md";
import { IoMdClose } from "react-icons/io";


import CartTable from "./CartTable";
import CheckOutBox from "./CheckOutBox";

function CartModal() {
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box lg:max-w-[1000px] h-[573px] ">
          <form method="dialog">

            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <div className="flex justify-center">
            <h3 className="font-bold text-2xl mt-4 mb-7 ">Your Carts</h3>
          </div>
          <div className="lg:grid lg:grid-cols-7 gap-3 ">
            <CartTable />
            <CheckOutBox />
          </div>
        </div>
      </dialog>
    </div>
  )
}







export default CartModal