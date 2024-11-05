import { useContext } from "react"
import { BookContext } from "../../Context/bookContext"

function AddCartBtn({ data }) {
  
  const { addToCart, setAddToCart } = useContext(BookContext)
  const addHandler = () => {

    let exist = addToCart.find(item => item.id === data.id)

    if (exist === undefined) {

      setAddToCart(
        [
          ...addToCart,
          {
            id: data.id,
            name: data.name,
            author: data.author,
            image: data.image,
            price: data.price,
          }

        ]
      )
    }

  }



  return (
    <button onClick={addHandler} className={`lg:py-2 lg:px-2 md:px-8 max-[1024px]:py-3 max-[1024px]:px-8 max-[590px]:px-5 max-[553px]:px-1 max-[500px]:px-5 max-[370px]:px-1 max-[340px]:text-lg max-[340px]:px-3 max-[1024px]:text-2xl md:text-2xl xl:px-3  xl:text-xl ${addToCart.find(i => i.id === data.id) ? `bg-rose-500`: `bg-main-Color`}  text-black lg:text-sm rounded`}>
            {
              addToCart.find(it => it.id === data.id) ? <span className="px-2">Already Added</span> : '$140 | Add to cart'
            }
    </button>
  )
}

export default AddCartBtn