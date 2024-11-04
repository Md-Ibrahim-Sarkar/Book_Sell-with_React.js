import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";

function CartTable() {
  return (
    <table>
      <div class="overflow-x-auto">
        <table class="table ">
          {/* <!-- head --> */}
          <thead >
            <tr className="border-b border-[#8C8C8C]">
              <th>Product</th>
              <th className="text-center">price</th>
              <th className="text-center">Quantity</th>
              <th>Total</th>
            </tr>
          </thead>

          <tbody>

            {/* row 1  */}

            <tr class="bg-base-200">
              <td className="flex">
                <th className="p-0"><img className="w-[55px]" src="http://localhost:5173/src/assets/Book_Images/2.jpg" alt="" /></th>
                <tr>
                  <td className="">
                    <span className="block py-1">Once Upon a Time...</span>
                    <span className="block py-1">Comedy/Drama</span>
                  </td>
                </tr>
              </td>
              <td>$50</td>
              <td>
                <div className="w-32 h-8 bg-[#595959c1] rounded-full flex justify-around items-center">
                  <FaMinus className="cursor-pointer" />
                  <span className="text-2xl">2</span>
                  <FaPlus className="cursor-pointer" />
                </div>
              </td>
              <td>$100</td>
              <td><RiDeleteBin5Line className="w-10 h-6 cursor-pointer" /></td>
            </tr>
          </tbody>
        </table>
      </div>
    </table>
  )
}

export default CartTable