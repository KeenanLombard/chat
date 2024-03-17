import { render } from "@testing-library/react";
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function EmployeeList({ isToggleView }) {
  const [employees, setEmployees] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          "http://127.0.0.1:8000/api/employees",
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
            },
          }
        );
        setEmployees(response.data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  let employeesView;

  if (!isLoading) {
    if (isToggleView) {
      employeesView = (
        <section className='shadow p-2 m-2'>
          <ul className='space-y-2'>
            {employees.map((x) => (
              <Link to='profile'>
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

                    <p className='font-bold my-auto mx-2'>{x.lname}</p>
                  </div>
                  <div>
                    <p className=' my-auto mx-2text-center text-neutral-500'>
                      {x.lname}
                    </p>
                  </div>
                  {/* col 3 */}
                  <div className='text-center text-neutral-500'>
                    {x.position}
                  </div>
                  {/* col 4 */}
                  <div className='text-red-500 pr-5'>{x.status}</div>
                </li>
              </Link>
            ))}
          </ul>
        </section>
      );
    } else {
      employeesView = (
        <section className=''>
          <ul className='m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
            {employees.map((x) => (
              <Link to='profile'>
                <li
                  key={x.id}
                  className='mx-2 my-2 p-2 shadow hover:bg-gray-100 dark:hover:bg-gray-700 flex-col cursor-pointer justify-between items-center space-x-2'>
                  {/* col 2 */}
                  <div className='flex justify-between my-auto'>
                    <div className='flex'>
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

                      <p className='font-bold my-auto mx-2'>{x.lname}</p>
                    </div>
                    <div className='text-red-500 p-2 my-auto'>{x.status}</div>
                  </div>
                  <div>
                    <p className='text-neutral-500 my-auto'>{x.position}</p>
                  </div>
                  {/* col 3 */}
                  <div className='text-blue-500'>{x.email}</div>
                  {/* col 4 */}
                </li>
              </Link>
            ))}
          </ul>
        </section>
      );
    }
  }
  if (!isLoading) {
    return <div>{employeesView}</div>;
  } else {
    return <div>loading...</div>;
  }
}

export default EmployeeList;
