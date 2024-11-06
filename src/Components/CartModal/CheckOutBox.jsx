import { useContext } from "react";
import { BookContext } from "../../Context/bookContext";

function CheckOutBox() {


  // Calculate subtotal by multiplying price and quantity for each item
  // const subtotal = total.reduce((acc, item) => acc + item.price * item.quantity, 0) || 0;


  return (
    <div className="max-w-[360px] w-full max-h-[280px] col-span-4">
      <div className="bg-[rgba(140,140,140,0.3)] mt-9 py-6 pb-9 rounded-t">
        <h3 className="h3 text-center">Order summary</h3>
      </div>
      <div className="border-t border-[#8C8C8C] bg-[rgba(140,140,140,0.3)] rounded-b">
        <ul className="p-7 px-12 pb-0">
          <li className="flex justify-between">
            <span>Subtotal</span> 
            <span>a</span>
          </li>
          <li className="flex justify-between mt-5">
            <span>Shipping</span> 
            <span className="text-main-Color">Free</span>
          </li>
        </ul>
        <ul className="bg-[rgba(140,140,140,0.26)] px-12 mt-5">
          <li className="flex justify-between mt-4">
            <span>Total</span> 
            <span>a</span>
          </li>
        </ul>
      </div>
      <button className="py-2 px-6 bg-main-Color text-black w-full mt-7 rounded hover:scale-105 hover:transform hover:transition-all hover:ease-linear hover:duration-300 text-[23px]">
        Checkout
      </button>
    </div>
  );
}

export default CheckOutBox;
