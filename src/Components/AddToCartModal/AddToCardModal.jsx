import { useContext, useState } from "react";
import { BookContext } from "../../Context/bookContext";

function AddToCardModal() {
  const { showBookItem, addToCart, dispatch, favorites, setFavorites } = useContext(BookContext);
  const [isFilled, setIsFilled] = useState(false);
    console.log(addToCart);
    
  const { name, image, author, description, price, id } = showBookItem;

  const addHandler = () => {
    const exist = addToCart.find(item => item.id === id);
    if (!exist) {
      dispatch({
        type: 'ADD_TO_CART_MODAL',
        payload: {
          id,
          name,
          author,
          image,
          price,
        }
      })

    }
  };

  const favoriteClick = () => {
    if (favorites.find(item => item.id === id)) {
      setFavorites(favorites.filter(item => item.id !== id));
    } else {
      setFavorites([...favorites, showBookItem]);
    }
    setIsFilled(!isFilled);
  
  };

  const isInCart = addToCart.find(item => item.id === id);
  const isFavorite = favorites.find(item => item.id == id);

  return (
    <div>
      <dialog id="my_modal_6" className="modal modal-middle">
        <div className="modal-box grid grid-cols-7 p-0 max-w-[700px] max-h-[445px] max-[501px]:max-w-[420px] max-[501px]:max-h-[260px] ">
          <div className="p-8 max-[501px]:p-3 col-span-5">
            <h3 className="font-bold text-2xl max-[501px]:text-xl max-[400px]:text-[13px]">{name}</h3>
            <span className="text-sm max-[400px]:text-[10px]">{author}</span>
            <p className="py-4 max-[501px]:text-xs max-[400px]:py-1">{description}</p>

            <div className="grid grid-cols-7 place-items-start">
              <button
                onClick={addHandler}
                className={`col-span-2 lg:py-2 h-10 lg:px-2 max-[553px]:px-1 max-[500px]:px-1  md:px-2  xl:px-1 xl:text-base ${isInCart ? "bg-rose-500" : "bg-main-Color"} text-black lg:text-sm font-semibold rounded text-nowrap max-[768px]:px-2 max-[660px]:text-sm max-[600px]:text-[12px] max-[400px]:text-[8px]`}
              >
                {isInCart ? "Already Added" : `$${price} | Add to cart`}
              </button>

              <div
                onClick={favoriteClick}
                className=" rounded-md flex justify-center items-center col-span-2 max-[640px]:col-span-3 place-self-center -mt-1"
              >
                <svg
                  className="border border-main-Color  rounded-md max-[768px]:ms-7 max-[692px]:ms-10 w-10 lg:w-9 xl:w-11"
                  viewBox="0 0 24 24"
                  style={{ cursor: "pointer" }}
                >
                  <path
                    fill={isFavorite?"#00D991": "#8C8C8C" }
                    d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                  />
                </svg>
              </div>

              <div className="modal-action -mt-1">
                <form method="dialog">
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <img className="w-[209px] h-full object-cover" src={image} alt={name} />
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default AddToCardModal;
