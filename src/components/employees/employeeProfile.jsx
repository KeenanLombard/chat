import React, { useEffect, useState } from "react";
import axios from "axios";
import avatar from "../../assets/avatar.jpg";
import { BrowserRouter as Router, Route, useParams } from "react-router-dom";
import { getEmployeeById, deleteEmployee } from "../../firebase/firebase";

function EmployeeProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [employee, setEmployee] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams();

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  useEffect(() => {
    try {
      const fetchAllEmployees = async (id) => {
        setIsLoading(true);
        const employeesData = await getEmployeeById(id);
        setEmployee(employeesData);
        setIsLoading(false);
      };

      fetchAllEmployees(id);
    } catch (error) {
      setIsLoading(false);
      setError(error);
    }
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleOfboard = () => {
    deleteEmployee(employee.id);
    console.log(employee);
    closeModal();
  };

  let view;
  if (!error) {
    if (!isLoading) {
      if (employee) {
        view = (
          <>
            <div>
              <button
                onClick={openModal}
                className='w-60 mx-2 mb-2 font-semibold shadow text-red-500 rounded px-5 py-2 hover:bg-red-500 hover:text-white'>
                Ofboarding
              </button>
            </div>
            <div className='bg-white mx-2 shadow-md rounded p-4 mb-4'>
              <div className='flex justify-between'>
                <h2 className='text-lg font-semibold'>
                  {employee.data.fname} {employee.data.lname}
                </h2>
                {!isEditing ? (
                  <button
                    onClick={() => handleEditToggle()}
                    className='text-blue-500 hover:underline'>
                    Edit
                  </button>
                ) : (
                  <div>
                    <button className='bg-blue-500 text-white py-1 px-3 rounded mr-2'>
                      Save
                    </button>
                    <button
                      onClick={() => handleEditToggle()}
                      className='text-gray-600 hover:text-red-500'>
                      Cancel
                    </button>
                  </div>
                )}
              </div>
              <div className='mt-2'>
                <p>
                  <span className='font-semibold'>Department:</span>{" "}
                  {employee.data.department}
                </p>
                <p>
                  <span className='font-semibold'>Email:</span>{" "}
                  {employee.data.email}
                </p>
                <p>
                  <span className='font-semibold'>Position:</span>{" "}
                  {employee.data.position}
                </p>
              </div>
              {isEditing && (
                <div className='mt-4'>
                  <label className='block mb-2'>
                    First Name:
                    <input
                      type='text'
                      name='fname'
                      value={employee.data.fname}
                      className='border rounded w-full p-1'
                    />
                  </label>
                  <label className='block mb-2'>
                    Last Name:
                    <input
                      type='text'
                      name='lname'
                      value={employee.data.lname}
                      className='border rounded w-full p-1'
                    />
                  </label>
                  <label className='block mb-2'>
                    Department:
                    <input
                      type='text'
                      name='department'
                      value={employee.data.department}
                      className='border rounded w-full p-1'
                    />
                  </label>
                  <label className='block mb-2'>
                    Email:
                    <input
                      type='text'
                      name='email'
                      value={employee.data.email}
                      className='border rounded w-full p-1'
                    />
                  </label>
                  <label className='block mb-2'>
                    Position:
                    <input
                      type='text'
                      name='position'
                      value={employee.data.position}
                      className='border rounded w-full p-1'
                    />
                  </label>
                </div>
              )}
            </div>
          </>
        );
      }
    } else {
      view = (
        <div>
          {" "}
          <div className='flex justify-center items-center m-10'>
            <div className='animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500'></div>
          </div>
        </div>
      );
    }
  } else {
    view = <div>{error}</div>;
  }

  return (
    <div>
      {view}
      {isModalOpen && (
        <div className='fixed inset-0 flex items-center justify-center z-50'>
          <div className='absolute inset-0 bg-black opacity-50'></div>

          <div className='bg-white p-8 rounded shadow-lg z-10 flex-col justify-center'>
            <div>
              <p className='font-semibold'>
                Are you sure you want to strat the ofboarding process with{" "}
                <span className='text-blue-500'>
                  {employee.fname} {employee.lname}
                </span>
                <div className='text-center font-bold text-3xl m-5 flex justify-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-24 h-24 border rounded-full p-2 border-4'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 0 8.835-2.535m0 0A23.74 23.74 0 0 0 18.795 3m.38 1.125a23.91 23.91 0 0 1 1.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 0 0 1.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 0 1 0 3.46'
                    />
                  </svg>
                </div>
                <div className='flex justify-between mt-5'>
                  <button
                    onClick={() => handleOfboard()}
                    className='w-full mx-2 font-semibold shadow text-blue-500 rounded px-5 py-2 hover:bg-blue-500 hover:text-white'>
                    Continue
                  </button>
                  <button
                    onClick={closeModal}
                    className='w-full mx-2 font-semibold shadow text-red-500 rounded px-5 py-2 hover:bg-red-500 hover:text-white'>
                    Cancel
                  </button>
                </div>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default EmployeeProfile;
