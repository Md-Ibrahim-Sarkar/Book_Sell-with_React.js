import React, { useContext } from 'react';
import { BookContext } from '../../Context/bookContext';
import { IoSearchSharp, IoCloseSharp } from "react-icons/io5";
import SearchItem from '../../Pages/Sidebar/Search/SearchItem';

function SearchModal() {
  const { books, input, setInput, isModalOpen, setIsModalOpen } = useContext(BookContext);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Filter books based on the input dynamically
  const filteredBooks = books.filter(book =>
    book.name.toLowerCase().includes(input.toLowerCase()) ||
    book.author.toLowerCase().includes(input.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-20 bg-black bg-opacity-50">
          <div>
            <div className="bg-base-100 text-base-content flex border-b rounded-t-lg shadow-lg max-w-[850px] w-full px-6 pt-6">
              <div className='flex w-full items-center gap-2 py-3'>
                <IoSearchSharp className='w-10 h-6' />
                <input
                  onChange={(e) => setInput(e.target.value)}
                  type="text"
                  className='focus:outline-none w-full bg-transparent'
                  placeholder='Type your favorite book name here ...'
                  value={input}
                />
              </div>
              <IoCloseSharp className='w-10 h-8 -mt-3 cursor-pointer' onClick={closeModal} />
            </div>
            <div className="bg-base-100 text-base-content overflow-auto h-[300px] rounded-b-lg shadow-lg max-w-[850px] lg:w-[850px] py-3">
              {input.trim() === '' ? (
                <p className='text-center text-xl'>Type Your Book Name ...</p>
              ) : filteredBooks.length > 0 ? (
                filteredBooks.map(item => (
                  <SearchItem closeModal={closeModal} key={item.id} data={item} />
                ))
              ) : (
                <p className='text-center text-lg'>No results found...</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchModal;
