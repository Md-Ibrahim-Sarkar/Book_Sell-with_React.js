import { useContext } from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { BookContext } from "../../Context/bookContext";

function CartItem({ cartData }) {

  const { deleteAddToCart } = useContext(BookContext)
  return (
    <tr className="border-t border-[#8C8C8C]">
      <th className="p-0 py-3">
        <img className="w-[55px] cursor-pointer" src={cartData.image} alt="" />
      </th>
      <td className="flex-row px-0 py-3 items-center">
        <span className="block py-1 text-nowrap cursor-pointer">{cartData.name}</span>
        <span className="block py-1 text-xs cursor-pointer">{cartData.author}</span>
      </td>
      <td>$50</td>
      <td>
        <span className="w-32 h-8 bg-[#595959c1] rounded-full flex justify-around items-center">
          <FaMinus className="cursor-pointer" />
          <span className="text-2xl">2</span>
          <FaPlus className="cursor-pointer" />
        </span>
      </td>
      <td>$100</td>
      <td>
        <RiDeleteBin5Line onClick={() => deleteAddToCart(cartData.id)} className="w-10 h-6 cursor-pointer" />
      </td>
    </tr>
  );
}

export default CartItem;
