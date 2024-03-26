import React from "react";
import { useState } from "react";
import EmployeeList from "./employeeList";
import { addEmployee } from "../../firebase/firebase";

function Employees() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    department: "",
    email: "",
    position: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addEmployee(formData);
    setFormData({
      fname: "",
      lname: "",
      department: "",
      email: "",
      position: "",
    });
    closeModal();
  };

  return (
    <div>
      <header className='flex justify-between text-sm'>
        <div>
          <div>
            <button
              onClick={openModal}
              className='w-60 mx-2 font-semibold shadow text-blue-500 rounded px-5 py-2 hover:bg-blue-500 hover:text-white'>
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

            <form onSubmit={handleSubmit}>
              <label className='block mb-4'>
                First Name:
                <input
                  type='text'
                  name='fname'
                  className='border rounded w-full p-2'
                  value={formData.fname}
                  onChange={handleInputChange}
                />
              </label>
              <label className='block mb-4'>
                Last Name:
                <input
                  type='text'
                  name='lname'
                  className='border rounded w-full p-2'
                  value={formData.lname}
                  onChange={handleInputChange}
                />
              </label>
              <label className='block mb-4'>
                Department:
                <input
                  type='text'
                  name='department'
                  className='border rounded w-full p-2'
                  value={formData.department}
                  onChange={handleInputChange}
                />
              </label>
              <label className='block mb-4'>
                Email:
                <input
                  type='text'
                  name='email'
                  className='border rounded w-full p-2'
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </label>
              <label className='block mb-4'>
                Position:
                <input
                  type='text'
                  name='position'
                  className='border rounded w-full p-2'
                  value={formData.position}
                  onChange={handleInputChange}
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
      <EmployeeList />
    </div>
  );
}

export default Employees;
