import React, { useContext } from 'react';
import { BookContext } from '../../Context/bookContext';
import { IoSearchSharp, IoCloseSharp } from "react-icons/io5";
import SearchItem from '../../Pages/Sidebar/Search/SearchItem';

function SearchModal({className}) {
  const { Search,setSearch, books,data, input, setInput, isModalOpen, setIsModalOpen } = useContext(BookContext);

  const closeModal = () => {
    setIsModalOpen(false);
    setInput(''); // Clear input when closing modal
  };

  // Filter books where the first letter of the name or author matches the input
  const filteredBooks = data.filter(book =>
    book.name.toLowerCase().startsWith(input.toLowerCase()) ||
    book.author.toLowerCase().startsWith(input.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center justify-center min-[541px]:min-h-screen ">
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-20  bg-black bg-opacity-50">
          <div className={`${className}`}>
            <div className="bg-base-100  text-base-content flex border-b rounded-t-lg shadow-lg  max-w-[850px] w-full px-6 pt-6">
              <div className="flex w-full items-center gap-2 py-3">
                <IoSearchSharp className="w-10 h-6" />
                <input
                  onChange={(e) => setInput(e.target.value)}
                  type="text"
                  className="focus:outline-none w-full bg-transparent max-[1023px]:"
                  placeholder="Type your favorite book name here ..."
                  value={input}
                />
              </div>
              <IoCloseSharp className="w-10 h-8 -mt-3 max-[]: cursor-pointer max-[1023px]:-me-5" onClick={closeModal} />
            </div>

            {/* Results Section */}
            <div className="bg-base-100 max-[540px]:h-[200px] text-base-content overflow-auto h-[300px] rounded-b-lg shadow-lg  max-w-[850px] lg:w-[850px] py-3">
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
