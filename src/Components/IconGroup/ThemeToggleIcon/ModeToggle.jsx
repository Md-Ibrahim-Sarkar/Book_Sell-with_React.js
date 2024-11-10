import { useContext, useState } from "react";
import { MdLightMode,MdModeNight } from "react-icons/md";
import { BookContext } from "../../../Context/bookContext";



function ModeToggle({ className }) {

  const { mode, setMode } = useContext(BookContext)

  const toggleMode = () => {
    if (mode === "light") {
      document.querySelector("html").setAttribute("data-theme", "dark");
      setMode("dark");
    } else {
      document.querySelector("html").setAttribute("data-theme", "light");
      setMode("light");
    }
  };


  return (
    <span onClick={toggleMode} className={`w-12 h-10 border font-bold border-main-Color flex justify-center items-center rounded transform transition-all ease-linear duration-200 hover:bg-[rgba(46,224,165,0.38)] ${className}`}> <MdLightMode className="w-[17px] h-[19px] text-main-Color hover:scale-110 cursor-pointer" /> </span>
  )
}
<MdModeNight />
export default ModeToggle