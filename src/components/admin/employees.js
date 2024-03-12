import React from "react";
import { useState } from "react";

function Employees() {
  //load
  //fetch all employee data
  //save employee data locally
  //finish load
  //render component

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    closeModal();
  };

  const handleViewToggle = () => {};
  const handleSortToggle = (data) => {};

  return (
    <div>
      {/* toolbar */}
      <header className='flex justify-end'>
        <div>
          <button
            onClick={openModal}
            className='mx-2 font-bold bg-green-100 text-green-900 rounded px-5 py-2'>
            Onboarding
          </button>
        </div>
        <div>
          <button className='mx-2 font-bold bg-blue-100 text-blue-900 rounded px-5 py-2'>
            Card View
          </button>
          <button className='mx-2 font-bold bg-blue-100 text-blue-900 rounded px-5 py-2'>
            Sort ASC
          </button>
        </div>
      </header>
      {/* Model */}
      {isModalOpen && (
        <div className='fixed inset-0 flex items-center justify-center z-50'>
          <div className='absolute inset-0 bg-black opacity-50'></div>

          <div className='bg-white p-8 rounded shadow-lg z-10'>
            <div className='flex justify-end'>
              <button
                className='text-gray-700 hover:text-red-500'
                onClick={closeModal}>
                Close
              </button>
            </div>

            <form onSubmit={() => handleSubmit}>
              {/* Your form fields go here */}
              <label className='block mb-4'>
                ID:
                <input
                  type='text'
                  className='border rounded w-full p-2'
                  // Add your form input state and logic here
                />
              </label>
              <label className='block mb-4'>
                Name:
                <input
                  type='text'
                  className='border rounded w-full p-2'
                  // Add your form input state and logic here
                />
              </label>
              <label className='block mb-4'>
                Email:
                <input
                  type='text'
                  className='border rounded w-full p-2'
                  // Add your form input state and logic here
                />
              </label>
              <button
                type='submit'
                className='w-full bg-blue-500 text-white py-2 px-4 rounded'>
                Submit
              </button>
            </form>
          </div>
        </div>
      )}

      {/* list view */}
      <section className='shadow-xl p-2 m-2'>
        <ul className='space-y-2'>
          {data.map((x) => (
            <li
              key={x.id}
              className='hover:bg-gray-100 dark:hover:bg-gray-700 flex cursor-pointer justify-around items-center space-x-2'>
              {/* col 1 */}
              <div className='my-auto'>
                <input type='checkbox' />
              </div>
              {/* col 2 */}
              <div className='flex my-auto'>
                <img
                  src='https://placekitten.com/40/40'
                  alt={`Peer ${x.id} Avatar`}
                  className='w-9 h-9 rounded-full mx-2'
                />
                <p className='font-bold my-auto mx-2'>{x.name}</p>
                <p className=' my-auto mx-2'>{x.id}</p>
              </div>
              {/* col 3 */}
              <div className=''>{x.email}</div>
              {/* col 4 */}
              <div className='text-red-500'>{x.status}</div>
            </li>
          ))}
        </ul>
      </section>
      {/* card view */}
      <section></section>
    </div>
  );
}

export default Employees;
