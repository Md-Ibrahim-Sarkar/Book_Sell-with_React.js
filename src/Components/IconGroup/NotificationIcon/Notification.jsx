import { FaRegBell } from "react-icons/fa";
function Notification({ className }) {
  return (
    <span className={`w-12 h-10 border border-main-Color font-bold flex justify-center items-center rounded transform transition-all ease-linear duration-200 hover:bg-[rgba(46,224,165,0.38)] ${className}`}> <FaRegBell className="w-[17px] h-[19px] text-main-Color hover:scale-110 cursor-pointer" /></span>
  )
}

export default Notification