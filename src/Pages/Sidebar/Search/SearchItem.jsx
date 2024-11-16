import { useContext } from "react"
import { BookContext } from "../../../Context/bookContext"

function SearchItem({ data ,closeModal}) {
  
  const {setBooks,setSelectedCategory } = useContext(BookContext)
  
  let ClickHandler = () => {
    setBooks([data])
    closeModal()
    setSelectedCategory('')
 }

  return (
      <div onClick={ClickHandler} className='flex gap-4 items-center w-full lg:w-[800px] cursor-pointer hover:text-black hover:bg-main-Color hover:transform hover:transition-all hover:ease-linear hover:duration-300 px-6 py-2'>
      <img className='w-14' src={data.image} alt="" />
      <div >
          <h3 className=' h3'>{data.name}</h3>
          <span className=' block'>{data.author}</span>
        <span className=' block'>USDT: ${data.price} </span>
      </div>
    </div>

  )
}

export default SearchItem