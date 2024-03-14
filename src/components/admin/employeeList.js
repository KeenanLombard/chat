import { render } from "@testing-library/react";
import React from "react";
import { useState } from "react";

function EmployeeList({ isToggleView }) {
  let data = [
    {
      id: "1",
      group: "Development",
      name: "Keenan",
      email: "keenanlom@gmail.com",
      status: "Busy",
    },
    {
      id: "2",
      group: "Sales",
      name: "Keenan",
      email: "keenanlom@gmail.com",
      status: "Busy",
    },
    {
      id: "3",
      group: "UI/UX",
      name: "Keenan",
      email: "keenanlom@gmail.com",
      status: "Busy",
    },
    {
      id: "4",
      group: "Sales",
      name: "Keenan",
      email: "keenanlom@gmail.com",
      status: "Busy",
    },
    {
      id: "5",
      group: "Development",
      name: "Keenan",
      email: "keenanlom@gmail.com",
      status: "Available",
    },
  ];
  let employees;
  if (isToggleView) {
    employees = (
      <section className='shadow p-2 m-2'>
        <ul className='space-y-2'>
          {data.map((x) => (
            <li
              key={x.id}
              className='hover:bg-gray-100 dark:hover:bg-gray-700 flex cursor-pointer justify-between items-center space-x-2'>
              {/* col 2 */}
              <div className='flex my-auto'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='currentColor'
                  className='w-6 h-6 m-2'>
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5'
                  />
                </svg>

                <p className='font-bold my-auto mx-2'>{x.name}</p>
              </div>
              <div>
                <p className=' my-auto mx-2'>{x.group}</p>
              </div>
              {/* col 3 */}
              <div className=''>{x.email}</div>
              {/* col 4 */}
              <div className='text-red-500 pr-5'>{x.status}</div>
            </li>
          ))}
        </ul>
      </section>
    );
  } else {
    employees = (
      <section className='my-2'>
        <ul className='m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2'>
          {data.map((x) => (
            <li
              key={x.id}
              className='mx-2 my-2 p-2 shadow hover:bg-gray-100 dark:hover:bg-gray-700 flex-col cursor-pointer justify-between items-center space-x-2'>
              {/* col 2 */}
              <div className='flex my-auto'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='currentColor'
                  className='w-6 h-6 m-2'>
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5'
                  />
                </svg>

                <p className='font-bold my-auto mx-2'>{x.name}</p>
              </div>
              <div>
                <p className=' my-auto'>{x.group}</p>
              </div>
              {/* col 3 */}
              <div className=''>{x.email}</div>
              {/* col 4 */}
              <div className='text-red-500 pr-5'>{x.status}</div>
            </li>
          ))}
        </ul>
      </section>
    );
  }
  return <div>{employees}</div>;
}

export default EmployeeList;
