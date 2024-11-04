import Search from "../../Components/Search/Search"
import { FaFire } from "react-icons/fa";
import { FaFolderPlus } from "react-icons/fa6";
import { CiInboxIn } from "react-icons/ci";
import { GiSelfLove } from "react-icons/gi";


function Sidebar() {
  return (
    <div className="col-span-2">
      <Search />
      <div>
        <div className="flex cursor-pointer xl:w-48 xl:h-12 lg:w-40 h-12 bg-main-Color  mt-[31px] rounded-xl py-2 px-3 items-center gap-2">
          <FaFire className="text-black" />
          <span className="text-black">Trending</span>
        </div>

        <div className="flex cursor-pointer  mt-[10px] rounded-xl py-2 px-3 items-center gap-2">
          <FaFolderPlus />
          <span className="">New Releases</span>
        </div>

        <div className="flex cursor-pointer  mt-[10px] rounded-xl py-2 px-3 items-center gap-2">
          <CiInboxIn />
          <span className="">Coming Soon</span>
        </div>

        <div className="flex cursor-pointer  mt-[10px] rounded-xl py-2 px-3 items-center gap-2">
          <GiSelfLove />
          <span className="">Favorites</span>
        </div>
      </div>
    </div>
  )
}

export default Sidebar