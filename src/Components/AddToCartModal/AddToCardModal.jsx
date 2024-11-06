import { useContext } from "react"
import Favorites from "../../Pages/BookGrid/Favorites"
import { BookContext } from "../../Context/bookContext"


function AddToCardModal() {

  const { showBookItem, addToCart, setAddToCart } = useContext(BookContext)
 
  let {name, image, author, description, price, id} = showBookItem
 
  const addHandler = () => {


    let exist = addToCart.find(item => item.id === showBookItem.id)
    if (exist === undefined) {
        
      setAddToCart([
        ...addToCart,
        {
          id: id,
          name: name,
          author: author,
          image: image,
          price: price,
        }
       ])
      }
   }
  
  return (
    <div>
      <dialog id="my_modal_6" className="modal modal-middle ">
        <div className="modal-box grid grid-cols-7 p-0 max-w-[700px] max-h-[445px]" >
          <div className="p-8 col-span-5">
            <h3 className="font-bold text-2xl">{name}</h3>
            <span className="text-sm">{author}</span>
            <p className="py-4">{description}</p>

            <div className="grid grid-cols-3">
              <button onClick={addHandler} className={`lg:py-2 h-10 lg:px-2 md:px-8 max-[1024px]:py-3 max-[1024px]:px-8 max-[590px]:px-5 max-[553px]:px-1 max-[500px]:px-5 max-[370px]:px-1 max-[340px]:text-lg max-[340px]:px-3 max-[1024px]:text-2xl md:text-2xl xl:px-1  xl:text-base ${addToCart.find(i => i.id === id) ? `bg-rose-500`: `bg-main-Color`} text-black lg:text-sm font-semibold rounded text-nowrap`}>
                {addToCart.find(item => item.id === id)? 'Already Added': `$${price}| Add to cart`}
                </button>

              <Favorites className='h-10 me-20' />
              <div className="modal-action mt-0 me-40">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <img className="w-[209px] h-full object-cover" src={image} alt="" />
          </div>
        </div>
      </dialog>
    </div>
  )
}

export default AddToCardModal