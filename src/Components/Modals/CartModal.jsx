import { MdOutlineSearch } from "react-icons/md";
import { IoMdClose } from "react-icons/io";


import CartTable from "../IconGroup/CartIcon/CartTable";

function CartModal() {
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box lg:max-w-[900px] h-[573px] ">
          <form method="dialog">

            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <div className="flex justify-center">
            <h3 className="font-bold text-2xl -mt-4 mb-7">Your Carts</h3>
          </div>
          <CartTable />
        </div>
      </dialog>
    </div>
  )
}







export default CartModal