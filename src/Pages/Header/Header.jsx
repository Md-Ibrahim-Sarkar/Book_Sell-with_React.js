import logo from '../../assets/Book_Images/logo.png'
import { useContext } from "react";
import IconGroup from "../../Components/IconGroup/IconGroup";
import { BookContext } from "../../Context/bookContext";
import { initialBooks } from "../../Data/initialBooks";
import MobileToggle from './MobileToggle';
import SearchModal from '../../Components/SearchModal/SearchModal';



function Header() {

  const {setBooks,setSelectedCategory} = useContext(BookContext)

  return (
    <div className='sticky top-0 w-full bg-white dark:bg-slate-900 z-20'>
      <div className="border-b border-[#595959]">
      <div className="container mx-auto md:px-3">
        <div className="flex justify-between py-5 max-[640px]:py-3 items-center max-[655px]:px-3">
          <div onClick={() => (setBooks(initialBooks()),setSelectedCategory(''))} className="relative cursor-pointer">
              <span className="text-main-Color text-2xl font-semibold cursor-pointer ">Ibrahim <span className='text-4xl'>.</span></span>
              <small className='absolute w-full -bottom-1 -right-  text-[8px] dark:text-main-Color '>All Books</small>
          </div>
          <IconGroup />
        </div>
      </div>
      </div>
      <div className=''>
      <MobileToggle />
      </div>
      <div className='min-[541px]:hidden'>
      <SearchModal className='mx-3' />
      </div>
    </div>
  )
}

export default Header