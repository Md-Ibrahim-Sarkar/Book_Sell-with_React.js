import { useContext } from "react";
import Ratting from "../../Components/Ratting";
import AddToCardModal from "../../Components/AddToCartModal/AddToCardModal";
import { BookContext } from "../../Context/bookContext";
import AddCartBtn from "./AddCartBtn";
import Favorites from "./Favorites";
import { FaFire } from "react-icons/fa";

function BookItem({ data }) {
  const { setShowBookItem,comingSoon } = useContext(BookContext);
  const { name, author, image, rating } = data;


  return (
    <div>
      <div
        className="max-[649px]:w-auto min-[768px]:w-[225px] min-[1280px]:w-[270px] min-[1536px]:w-[320px] min-[650px]:lg:w-[200px] bg-base-100 w-[383px] max-h-[711px] shadow-xl p-2 border border-[#595959] h-auto rounded-lg "
        
      >
        <div onClick={() => (
          document.getElementById("my_modal_6").showModal(),
          setShowBookItem({
            id: data.id,
            name: data.name,
            author: data.author,
            description: data.description,
            price: data.price,
            image: data.image,
          })
        )} className="relative flex justify-center">
          <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
          <img className=" transition duration-300 w-full ease-in-out hover:scale-110 cursor-pointer" src={image} alt="Book cover" />
          </div>



          {/* Coming Soon  */}
          {data.status === "coming_soon" && (
            <div className="absolute top-0 left-0 w-full h-full hover:bg-black hover:bg-opacity-50 flex items-center cursor-pointer justify-center hover:transform hover:transition-all hover:ease-linear hover:duration-300">
              <span className="text-black font-bold text-lg bg-gradient-to-r from-green-400 via-green-200 to-green-600 px-4 py-2 rounded">
                Coming Soon
              </span>
            </div>
          )}

          {/* new_releases */}
          {data.status === "new_releases" && (
            <div className="absolute  top-1 right-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-l p-1 text-white">
              <span className="text-xs">New Release</span>
            </div>
          )}

          {/* Trending */}
          {data.status === "trending" && (
            <div className="absolute top-1 right-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-l p-1 text-white flex items-center ">
              <FaFire className="text-red-500  " />
              <span className="text-xs text-black font-semibold p-1">Trending</span>
            </div>
          )}
        </div>

        <h3 className="text-sm font-semibold py-2">{name}</h3>
        <p className="text-xs pb-2">{author}</p>

        <Ratting rating={rating} />

        <div className="flex justify-between max-[1024px]:justify-between items-center mt-3">
          <AddCartBtn data={data} />
          <Favorites data={data} />
        </div>
      </div>

      <AddToCardModal data={data} />
    </div>
  );
}

export default BookItem;
