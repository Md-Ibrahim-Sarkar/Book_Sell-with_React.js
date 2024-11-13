import React, { useContext } from 'react';
import { BookContext } from '../../Context/bookContext';
import { IoSearchSharp, IoCloseSharp } from "react-icons/io5";
import SearchItem from '../../Pages/Sidebar/Search/SearchItem';
import { initialBooks } from '../../Data/initialBooks';

function SearchModal({ className }) {
  const {  input, setInput, isModalOpen, setIsModalOpen } = useContext(BookContext);


  const closeModal = () => {
    setIsModalOpen(false);
    setInput(''); 
  };


  const filteredBooks = initialBooks().filter(book =>
    book.name.toLowerCase().startsWith(input.toLowerCase()) ||
    book.author.toLowerCase().startsWith(input.toLowerCase())
  );

  return (
    <div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-20 bg-black bg-opacity-50 transition-opacity duration-300 ease-out">
          <div
            className={`transform transition-all duration-300 ease-in-out bg-base-200 rounded-md xl:w-[850px] lg:w-[750px] md:w-[650px] sm:w-[550px] max-[643px]:w-[500px] max-[530px]:w-[400px] max-[414px]:w-[300px] mt-20 ${className}`}
          >
            {/* Modal Header */}
            <div className=" text-base-content flex border-b rounded-t-lg shadow-lg  w-full px-6 pt-6">
              <div className="flex w-full items-center gap-2 py-3">
                <IoSearchSharp className="w-10 h-6" />
                <input
                  onChange={(e) => setInput(e.target.value)}
                  type="text"
                  className="focus:outline-none w-full bg-transparent"
                  placeholder="Type your favorite book name here ..."
                  value={input}
                />
              </div>
              <IoCloseSharp
                className="w-10 h-8 -mt-3 cursor-pointer"
                onClick={closeModal}
              />
            </div>

            {/* Results Section */}
            <div className=" max-[540px]:h-[250px]   text-base-content overflow-auto h-[300px] rounded-b-lg shadow-lg max-w-[850px] py-3 scrollbar-hide">
              {input.trim() === '' ? (
                <p className="text-center text-xl max-[1024px]:text-sm">Type the first letter of the book or author...</p>
              ) : filteredBooks.length > 0 ? (
                filteredBooks.map(item => (
                  <SearchItem closeModal={closeModal} key={item.id} data={item} />
                ))
              ) : (
                <p className="text-center text-lg">No results found...</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchModal;
