import { useContext } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { BookContext } from "../../Context/bookContext";
import PlusMinus from "./PlusMinus";

function CartItem({ cartData, quantity, updateQuantity }) {
  const { deleteAddToCart } = useContext(BookContext);

  const handleQuantityChange = (newQuantity) => {
    updateQuantity(cartData.id, newQuantity);
  };

  let total = quantity * cartData.price;

  return (
    <tr className="border-t border-[#8C8C8C]">
      <th className="p-0 py-3">
        <img className="w-[55px] cursor-pointer" src={cartData.image} alt="" />
      </th>
      <td className="flex-row px-0 py-3 items-center">
        <span className="block py-1 text-nowrap cursor-pointer">{cartData.name}</span>
        <span className="block py-1 text-xs cursor-pointer">{cartData.author}</span>
      </td>
      <td>${cartData.price}</td>
      <td>
        <PlusMinus quantity={quantity} onQuantityChange={handleQuantityChange} />
      </td>
      <td className="">${total.toFixed(2)}</td>
      <td>
        <RiDeleteBin5Line onClick={() => deleteAddToCart(cartData.id)} className="w-10 h-6 cursor-pointer" />
      </td>
    </tr>
  );
}

export default CartItem;
