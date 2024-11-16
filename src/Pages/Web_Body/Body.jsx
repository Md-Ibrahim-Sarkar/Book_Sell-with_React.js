import BookList from "../BookGrid/BookList"
import FilterPanel from "../FilterPanel/FilterPanel"
import Sidebar from "../Sidebar/Sidebar"

function Body() {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-12 gap-4 ">
        <Sidebar className='max-[540px]:hidden min-[768px]:col-span-4 ' />
        <BookList />
        <div className="max-[1024px]:hidden min-[1024px]: col-span-2">
          <FilterPanel className='max-[500px]:hidden' />
        </div>
      </div>
    </div>
  )
}

export default Body