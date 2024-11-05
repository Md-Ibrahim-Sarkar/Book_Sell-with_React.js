

function SearchItem() {
  return (

    <div className="bg-emerald-500 ">
      <div className="mt-5 flex gap-4 items-center px-8 py-2">
        <img className="w-11" src="http://localhost:5173/src/assets/Book_Images/2.jpg" alt="" />
        <div>
          <p className="h3 text-black">Lorem ipsum book name here</p>
          <span className="block text-sm text-black">Lorem ipsum book name here</span>
          <span className="block text-black font-semibold">BDT: 200 TK</span>
        </div>
      </div>
    </div>
  )
}

export default SearchItem