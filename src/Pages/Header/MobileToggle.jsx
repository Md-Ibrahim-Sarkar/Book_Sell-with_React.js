import { useContext, useState } from "react";
import { RiMenuUnfoldFill } from "react-icons/ri";
import { IoSearchCircleSharp } from "react-icons/io5";
import { TbFilterUp } from "react-icons/tb";
import FilterPanel from '../FilterPanel/FilterPanel';
import Sidebar from '../Sidebar/Sidebar';
import { BookContext } from "../../Context/bookContext";


function MobileToggle() {
  const { setIsModalOpen } = useContext(BookContext);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isFilterPanelOpen, setIsFilterPanelOpen] = useState(false);

  return (
    <div className="flex relative justify-between container mx-auto px-1 min-[540px]:hidden py-2 border-b border-[#595959]">
      
      {/* Sidebar Toggle */}
      <div 
        onClick={() => setIsSidebarOpen(!isSidebarOpen)} 
        className="relative cursor-pointer"
      >
        <RiMenuUnfoldFill className="w-10 h-6" />
        {isSidebarOpen && (
          <div className="absolute top-full left-0 mt-2 bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            <Sidebar className="max-h-[400px] w-full" />
          </div>
        )}
      </div>

      {/* Search Modal Toggle */}
      <div 
        onClick={() => setIsModalOpen(true)} 
        className="relative cursor-pointer"
      >
        <IoSearchCircleSharp className="w-10 h-6" />
      </div>

      {/* Filter Panel Toggle */}
      <div 
        onClick={() => setIsFilterPanelOpen(!isFilterPanelOpen)} 
        className="relative cursor-pointer"
      >
        <TbFilterUp className="w-10 h-6" />
        {isFilterPanelOpen && (
          <div className="absolute top-full right-0 mt-2 bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            <FilterPanel />
          </div>
        )}
      </div>
      
    </div>
  );
}

export default MobileToggle;
