import { useContext } from "react"
import { BookContext } from "../../Context/bookContext"

function AddCartBtn({ data ,className}) {
  
  const { addToCart, dispatch } = useContext(BookContext)
  const addHandler = () => {

    let exist = addToCart.find(item => item.id === data.id)

    if (exist === undefined) {


      dispatch({

        type: 'ADD_TO_CART',
        payload: {
          
            id: data.id,
            name: data.name,
            author: data.author,
            image: data.image,
            price: data.price,
            status: data.status,
          
        }
      })
    }

  }



  return (
    <button onClick={addHandler} className={`lg:py-2 lg:px-2 ${className} max-[1024px]:py-3 min-[768px]:px-2 max-[767px]:px-3 min-[768px]:text-sm max-[590px]:px-5 max-[553px]:px-1 max-[500px]:px-5 max-[370px]:px-1 max-[340px]:text-lg max-[340px]:px-3 max-[1024px]:text-2xl xl:px-3  xl:text-xl max-[640px]:py-1 sm:py-2 md:py-2 ${addToCart.find(i => i.id === data.id) ? `bg-green-200`: `bg-main-Color`}  text-black lg:text-sm rounded`}>
            {
              data.status === "coming_soon" ?'Coming Soon':addToCart.find(it => it.id === data.id) ? <span className="px-2">Already Added</span> : `$${data.price} | Add to cart`
            }
    </button>
  )
}

export default AddCartBtn