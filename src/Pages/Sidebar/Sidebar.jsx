import Search from "./Search/Search"
import { FaFire } from "react-icons/fa";
import { FaFolderPlus } from "react-icons/fa6";
import { CiInboxIn } from "react-icons/ci";
import { GiSelfLove } from "react-icons/gi";
import FilterPanel from "../FilterPanel/FilterPanel";



function Sidebar() {
  return (
    <div className="min-[1024px]:col-span-2 max-[1024px]:col-span-4 max-[500px]:hidden">
      <Search />
      <div>
        <div className="flex cursor-pointer xl:w-48 xl:h-12 lg:w-40 h-12  mt-[31px] rounded-xl py-2 px-3 items-center gap-2 hover:bg-main-Color hover:text-black hover:transform hover:transition-all hover:ease-linear hover:duration-300">
          <FaFire className="" />
          <span className="">Trending</span>
        </div>

        <div className="flex cursor-pointer  mt-[10px] rounded-xl py-3 px-3 items-center gap-2 hover:bg-main-Color hover:text-black hover:transform hover:transition-all hover:ease-linear hover:duration-300">
          <FaFolderPlus />
          <span className="">New Releases</span>
        </div>

        <div className="flex cursor-pointer  mt-[10px] rounded-xl py-3 px-3 items-center gap-2 hover:bg-main-Color hover:text-black hover:transform hover:transition-all hover:ease-linear hover:duration-300">
          <CiInboxIn />
          <span className="">Coming Soon</span>
        </div>

        <div className="flex cursor-pointer  mt-[10px] rounded-xl py-3 px-3 items-center gap-2 hover:bg-main-Color hover:text-black hover:transform hover:transition-all hover:ease-linear hover:duration-300">
          <GiSelfLove />
          <span className="">Favorites</span>
        </div>
      </div>

      <div className="min-[1024px]:hidden  ps-4">
        <FilterPanel />
      </div>

    </div>
  )
}

export default Sidebar