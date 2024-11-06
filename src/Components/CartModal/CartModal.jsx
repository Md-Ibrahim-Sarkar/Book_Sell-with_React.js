import { MdOutlineSearch } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { useContext, useState } from "react";
import { BookContext } from "../../Context/bookContext";
import CartItem from "./CartItem";

function CartModal() {
  const { addToCart } = useContext(BookContext);

  // State to keep track of quantities for each item
  const [quantities, setQuantities] = useState({});

  // Calculate the total price based on cart items and their quantities
  const calculateTotalPrice = () => {
    return addToCart.reduce((total, item) => {
      const quantity = quantities[item.id] || 1; // default to 1 if no quantity set
      return total + item.price * quantity;
    }, 0);
  };

  // Update quantity function to pass to CartItem
  const handleQuantityChange = (id, newQuantity) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: newQuantity,
    }));
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box lg:max-w-[1000px] h-[573px] ">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 text-2xl top-2">✕</button>
          </form>
          <div className="flex justify-center">
            <h3 className="font-bold text-2xl mt-4 mb-7 ">Your Cart</h3>
          </div>
          <div className="lg:grid lg:grid-cols-12 gap-3 ">
            <div className="col-span-8 relative">
              <div className="overflow-x-auto">
                <table className="table ">
                  <thead>
                    <tr className="border-b border-[#8C8C8C] ">
                      <th className="ps-0">Product</th>
                      <th></th>
                      <th className="text-center">Price</th>
                      <th className="text-center">Quantity</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody className="">
                    {!addToCart || addToCart.length === 0 ? (
                      <p className="text-center mt-5  text-2xl">Your cart is empty.</p> // Display this message if the cart is empty or undefined
                    ) : (
                      addToCart.map((item) => (
                        <CartItem
                          key={item.id}
                          cartData={item}
                          quantity={quantities[item.id] || 1}
                          updateQuantity={handleQuantityChange}
                        />
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="max-w-[360px] w-full max-h-[280px] col-span-4">
              <div className="bg-[rgba(140,140,140,0.3)] mt-9 py-6 pb-9 rounded-t">
                <h3 className="h3 text-center">Order Summary</h3>
              </div>
              <div className="border-t border-[#8C8C8C] bg-[rgba(140,140,140,0.3)] rounded-b">
                <ul className="p-7 px-12 pb-0">
                  <li className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${calculateTotalPrice().toFixed(2)}</span>
                  </li>
                  <li className="flex justify-between mt-5">
                    <span>Shipping</span>
                    <span className="text-main-Color">Free</span>
                  </li>
                </ul>
                <ul className="bg-[rgba(140,140,140,0.26)] px-12 mt-5">
                  <li className="flex justify-between mt-4">
                    <span>Total</span>
                    <span>${calculateTotalPrice().toFixed(2)}</span>
                  </li>
                </ul>
              </div>
              <button className="py-2 px-6 bg-main-Color text-black w-full mt-7 rounded hover:scale-105 hover:transform hover:transition-all hover:ease-linear hover:duration-300 text-[23px]">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default CartModal;
