import { useState, useContext } from "react";
import Search from "./Search/Search";
import { FaFire } from "react-icons/fa";
import { FaFolderPlus } from "react-icons/fa6";
import { CiInboxIn } from "react-icons/ci";
import { GiSelfLove } from "react-icons/gi";
import FilterPanel from "../FilterPanel/FilterPanel";
import SearchModal from "../../Components/SearchModal/SearchModal";
import { BookContext } from "../../Context/bookContext";

function Sidebar() {
  const { books, setBooks, favorites, trending, newReleases, comingSoon } = useContext(BookContext);
  const [selectedCategory, setSelectedCategory] = useState("Trending");

  const handleCategoryClick = (category, bookList) => {
    setSelectedCategory(category);
    setBooks(bookList);
  };

  return (
    <div className="min-[1024px]:col-span-2 max-[768px]:col-span-4 max-[1024px]:col-span-5 max-[540px]:hidden">
      <Search />
      <div>
        <div
          onClick={() => handleCategoryClick("Trending", trending)}
          className={`flex cursor-pointer xl:w-48 xl:h-12 lg:w-40 h-12 mt-[31px] rounded-xl py-2 px-3 items-center gap-2 hover:bg-main-Color hover:text-black transition-all duration-300 ${
            selectedCategory === "Trending" ? "bg-main-Color text-black" : ""
          }`}
        >
          <FaFire />
          <span>Trending</span>
        </div>

        <div
          onClick={() => handleCategoryClick("New Releases", newReleases)}
          className={`flex cursor-pointer mt-[10px] rounded-xl py-3 px-3 items-center gap-2 hover:bg-main-Color hover:text-black transition-all duration-300 ${
            selectedCategory === "New Releases" ? "bg-main-Color text-black" : ""
          }`}
        >
          <FaFolderPlus />
          <span>New Releases</span>
        </div>

        <div
          onClick={() => handleCategoryClick("Coming Soon", comingSoon)}
          className={`flex cursor-pointer mt-[10px] rounded-xl py-3 px-3 items-center gap-2 hover:bg-main-Color hover:text-black transition-all duration-300 ${
            selectedCategory === "Coming Soon" ? "bg-main-Color text-black" : ""
          }`}
        >
          <CiInboxIn />
          <span>Coming Soon</span>
        </div>

        <div
          onClick={() => handleCategoryClick("Favorites", favorites)}
          className={`flex cursor-pointer mt-[10px] rounded-xl py-3 px-3 items-center gap-2 hover:bg-main-Color hover:text-black transition-all duration-300 ${
            selectedCategory === "Favorites" ? "bg-main-Color text-black" : ""
          }`}
        >
          <GiSelfLove />
          <span>Favorites</span>
        </div>
      </div>

      <div className="min-[1024px]:hidden ps-4">
        <FilterPanel />
      </div>
      <SearchModal />
    </div>
  );
}

export default Sidebar;
