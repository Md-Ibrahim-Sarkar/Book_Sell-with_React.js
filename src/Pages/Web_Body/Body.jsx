import BookList from "../BookGrid/BookList"
import FilterPanel from "../FilterPanel/FilterPanel"
import Sidebar from "../Sidebar/Sidebar"

function Body() {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-12 gap-4">
        <Sidebar />
        <BookList />
        <FilterPanel />
      </div>
    </div>
  )
}

export default Body