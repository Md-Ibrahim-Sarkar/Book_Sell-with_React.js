import { useContext,useEffect } from "react";
import { MdLightMode, MdModeNight } from "react-icons/md";
import { BookContext } from "../../../Context/bookContext";

function ModeToggle({ className }) {
  const { mode, setMode } = useContext(BookContext);

  const toggleMode = () => {
    const newMode = !mode;
    setMode(newMode);
    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("selectedTheme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("selectedTheme", "light");
    }
  };


  useEffect(() => {
    const savedTheme = localStorage.getItem("selectedTheme");
    if (savedTheme === "dark") {
      setMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, [setMode]);


  return (
    <span
      onClick={toggleMode}
      className={`w-12 max-[640px]:w-10 h-10 border font-bold cursor-pointer border-main-Color flex justify-center items-center rounded transform transition-all ease-linear duration-200 hover:bg-[rgba(46,224,165,0.38)] ${className}`}
    >
      {mode ? (
        <MdLightMode className="w-[17px] h-[19px] text-main-Color hover:scale-110 cursor-pointer" />
      ) : (
        <MdModeNight className="w-[17px] h-[19px] text-main-Color hover:scale-110 cursor-pointer" />
      )}
    </span>
  );
}

export default ModeToggle;
