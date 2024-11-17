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
    <div className="flex items-center justify-between px-3 bg-[#c9c7c7] dark:bg-slate-700 py-2 w-[135px] max-[640px]:w-28 rounded-full">
      <FaMinus  onClick={handleDecrease} className="px-2 w-8 h-6  max-[640px]:w-7 cursor-pointer hover:scale-110" />
      <span className="px-2 text-2xl max-[640px]:text-lg">{quantity}</span>
      <FaPlus onClick={handleIncrease} className="px-2 w-8 h-6 max-[640px]:w-7 cursor-pointer hover:scale-110" />
    </div>
  );
}

export default PlusMinus;
