import {  useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";


function PlusMinus({ quantity, onQuantityChange }) {
  const handleIncrease = () => {
    onQuantityChange(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      onQuantityChange(quantity - 1);
    }
  };

  return (
    <div className="flex items-center justify-between px-3 bg-[#595959] text-base-content py-2 w-[135px] rounded-full">
      <FaMinus  onClick={handleDecrease} className="px-2 w-8 h-6  cursor-pointer hover:scale-110" />
      <span className="px-2 text-2xl">{quantity}</span>
      <FaPlus onClick={handleIncrease} className="px-2 w-8 h-6 cursor-pointer hover:scale-110" />
    </div>
  );
}

export default PlusMinus;
