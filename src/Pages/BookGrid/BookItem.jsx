
import { useContext} from "react";
import Ratting from "../../Components/Ratting";
import AddToCardModal from "../../Components/AddToCartModal/AddToCardModal";
import { BookContext } from "../../Context/bookContext";
import AddCartBtn from "./AddCartBtn";
import Favorites from "./Favorites";
function BookItem({ data }) {

  const { addToCart, setShowBookItem } = useContext(BookContext)

  const { name, author, image } = data



  

  return (
    <div>
      <div className=" max-[649px]:w-auto  min-[1280px]:w-[270px] min-[1536px]:w-[320px]  min-[650px]:lg:w-[200px] bg-base-100 w-[383px] max-h-[711px] shadow-xl p-2  border border-[#595959] rounded-lg">
        <div onClick={() => (document.getElementById('my_modal_6').showModal(), setShowBookItem(
          {
            id: data.id,
            name: data.name,
            author: data.author,
            description: data.description,
            price: data.price,
            image:data.image,
          }
        ))}>
          <img className="" src={image} alt="Shoes" />
          <h3 className="text-sm  font-semibold py-2">{name}</h3>
          <p className="text-xs pb-2">{author}</p>
        </div>
        <Ratting className='ratng' />
        <div className="flex justify-between max-[1024px]:justify-between items-center mt-3">
          <AddCartBtn addToCart={addToCart} data={data} />
          <Favorites />
        </div>
      </div>
      <AddToCardModal  />
    </div>
  )
}

export default BookItem