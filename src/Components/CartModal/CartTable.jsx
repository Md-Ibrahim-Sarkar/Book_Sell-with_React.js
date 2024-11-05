import { useContext } from "react";
import CartItem from "./CartItem";
import { BookContext } from "../../Context/bookContext";


function CartTable() {
  const { addToCart } = useContext(BookContext)
  return (
    <div className="col-span-4">
      <div className="overflow-x-auto">
        <table className="table ">
          {/* <!-- head --> */}
          <thead >
            <tr className="border-b border-[#8C8C8C] ">
              <th className="ps-0">Product</th>
              <th></th>
              <th className="text-center">price</th>
              <th className="text-center">Quantity</th>
              <th>Total</th>
            </tr>
          </thead>

          <tbody>

            {addToCart.map(item => <CartItem key={item.id} cartData={item} />)}

          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CartTable