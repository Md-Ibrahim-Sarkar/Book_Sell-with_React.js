import { GiShoppingCart } from "react-icons/gi";
import CartModal from "../../Modals/CartModal";

function Cart({ className }) {
  return (
    <div>
      <span onClick={() => document.getElementById('my_modal_3').showModal()} className={`w-12 h-10 border border-main-Color flex justify-center items-center rounded transform transition-all ease-linear duration-200 hover:bg-[rgba(46,224,165,0.38)] relative ${className}`}> <GiShoppingCart className="w-[25px] h-[25px] text-main-Color hover:scale-110 cursor-pointer" /><span className="absolute -right-3 -top-3 bg-main-Color text-sm rounded-full w-6 h-6 flex justify-center items-center text-white font-mono">10</span></span>
      <CartModal />
    </div>
  )
}

export default Cart