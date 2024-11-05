import { IoIosArrowForward } from "react-icons/io";
function FilterPanel() {
  return (
    <div className="min-[1024px]:col-span-3 max-[500px]:hidden">
      <div className="flex  mt-10 mb-4">
        <div>
          <h3 className="h3">Filter On Page</h3>

          <div className="flex items-center gap-1 mb-1 mt-3 cursor-pointer hover:text-main-Color hover:scale-105">
            <IoIosArrowForward />
            <span className="text-xl">By name</span>
          </div>

          <div className="flex items-center gap-1 mb-1 cursor-pointer hover:text-main-Color hover:scale-105">
            <IoIosArrowForward />
            <span className="text-xl ">By ratting</span>
          </div>

          <div className="flex items-center gap-1 mb-1 cursor-pointer hover:text-main-Color hover:scale-105">
            <IoIosArrowForward />
            <span className="text-xl">By price</span>
          </div>

        </div>
      </div>
    </div>
  )
}

export default FilterPanel