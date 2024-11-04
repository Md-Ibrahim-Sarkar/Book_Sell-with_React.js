import { GiSelfLove } from "react-icons/gi";
import Ratting from "../../Components/Ratting";
function BookItem({ data }) {

  console.log(data);

  const { name, author, ratng, image } = data
  const colorChange = () => {
    document.querySelector('.getColor').classList.toggle('text-main-Color')
  }


  return (
    <div>
      <div className="lg:w-[200px] xl:w-[310px]  rounded-sm bg-base-100 w-[383px] max-h-[711px] shadow-xl p-2  border border-[#595959] ">
        <img className="" src={image} alt="Shoes" />
        <h3 className="text-sm font-semibold py-2">{name}</h3>
        <p className="text-xs pb-2">{author}</p>
        <Ratting className='ratng' />
        <div className="flex justify-between items-center mt-3">
          <button className="py-2 px-3  bg-main-Color text-black lg:text-sm xl:text-xl rounded">$140 | Add to cart</button>
          <div className="w-10 h-9 border border-main-Color rounded-md flex justify-center items-center">
            <GiSelfLove onClick={colorChange} className="getColor" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookItem