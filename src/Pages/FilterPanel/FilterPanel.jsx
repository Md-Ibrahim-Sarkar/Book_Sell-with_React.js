
import ByName from "./ByName";
import ByRatting from "./ByRatting";
import ByPrice from "./ByPrice";

function FilterPanel() {
  return (
    <div className="col-span-2 ">
      <div className="flex  mt-10 mb-4">
        <div>
          <h3>Filter On Page</h3>

          <ByName />
          <ByRatting />
          <ByPrice />
        </div>
      </div>
    </div>
  )
}

export default FilterPanel