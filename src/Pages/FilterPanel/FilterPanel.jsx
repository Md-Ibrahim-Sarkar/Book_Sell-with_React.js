import { IoIosArrowForward } from "react-icons/io";
function FilterPanel() {
  return (
    <div className="col-span-2 ">
      <div className="flex  mt-10 mb-4">
        <div>
          <h3>Filter On Page</h3>

          <div className="flex items-center gap-1 cursor-pointer">
            <IoIosArrowForward />
            <span>By name</span>
          </div>

          <div className="flex items-center gap-1 cursor-pointer">
            <IoIosArrowForward />
            <span>By ratting</span>
          </div>

          <div className="flex items-center gap-1 cursor-pointer">
            <IoIosArrowForward />
            <span>By price</span>
          </div>

        </div>
      </div>
    </div>
  )
}

export default FilterPanel