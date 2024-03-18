import React from "react";
import { useState } from "react";
import EmployeeList from "./employeeList";

function Employees() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isToggleView, setToggleView] = useState(false);

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

  // const button = () => {
  //   if (isToggleView) {
  //     return (
  //       <button
  //         onClick={() => setToggleView(!isToggleView)}
  //         className='w-60 mx-2 font-bold bg-blue-100 text-blue-900 rounded px-5 py-2'>
  //         Card View
  //       </button>
  //     );
  //   } else {
  //     return (
  //       <button
  //         onClick={() => setToggleView(!isToggleView)}
  //         className='w-60 mx-2 font-bold bg-blue-100 text-blue-900 rounded px-5 py-2'>
  //         List View
  //       </button>
  //     );
  //   }
  // };

  return (
    <div>
      {/* toolbar */}
      <header className='flex justify-between text-sm'>
        <div>
          <div>
            {/* {button()} */}
            {/* <button className='w-60 mx-2 font-bold bg-blue-100 text-blue-900 rounded px-5 py-2'>
              Sort ASC
            </button> */}
            <button
              onClick={openModal}
              className='w-60 mx-2 font-semibold bg-blue-500 text-white rounded px-5 py-2'>
              Onboarding
            </button>
          </div>
        </div>
        <div className='my-auto flex'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke-width='1.5'
            stroke='currentColor'
            class='w-6 h-6 my-auto'>
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
            />
          </svg>

          <input
            className='border rounded py-1 px-2 mx-2'
            placeholder='search...'></input>
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
              <label className='block mb-4'>
                Group:
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
      <EmployeeList isToggleView={isToggleView} />
    </div>
  );
}

export default Employees;
