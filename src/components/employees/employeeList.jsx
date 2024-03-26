import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import avatar from "../../assets/avatar.jpg";
import { getAllEmployees } from "../../firebase/firebase.js";

function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch all employees
    const fetchAllEmployees = async () => {
      const employeesData = await getAllEmployees();
      setEmployees(employeesData);
      setIsLoading(false);
    };

    fetchAllEmployees();
  }, []);

  let employeesView;
  if (!isLoading) {
    if (employees) {
      employeesView = (
        <section className=''>
          <ul className='m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
            {employees.map((x) => (
              <Link to={"profile/" + x.id}>
                <li
                  key={x.id}
                  className='mx-2 my-2 p-2 shadow hover:bg-gray-100 dark:hover:bg-gray-700 flex-col cursor-pointer justify-between items-center space-x-2'>
                  {/* col 2 */}
                  <div className='flex justify-between my-auto'>
                    <div className='flex'>
                      <div>
                        <img className='w-20 rounded-full' src={avatar}></img>
                      </div>
                      <div className='mx-2 my-auto'>
                        <p className='font-bold'>
                          {x.data.fname} {x.data.lname}
                        </p>
                        <p className='text-neutral-500 text-sm'>
                          {x.data.department}
                        </p>
                        <p className='text-neutral-500 text-sm'>
                          {x.data.position}
                        </p>
                      </div>
                    </div>
                    <p
                      className={`${
                        !x.data.status
                          ? "bg-red-200 border-red-500"
                          : "bg-green-200 border-green-500"
                      } ' border-2 rounded-full h-4 w-4 p-1 text-center m-2`}></p>
                  </div>
                  <div className='flex justify between w-full my-4'>
                    <div className='border-r-2 w-full text-center'>
                      <span className='font-semibold'>Total Hours</span>
                      <br></br>
                      {x.data.hours_worked}
                    </div>
                    <div className='border-r-2 w-full text-center'>
                      <span className='font-semibold'>Performance</span>
                      <br></br>
                      {x.data.performance_rating}
                    </div>
                    <div className='w-full text-center'>
                      <span className='font-semibold'>Total Tasks</span>
                      <br></br>
                      {x.data.tasks_completed}
                    </div>
                  </div>
                  {/* <div>
                    <p className='text-neutral-500 my-auto'>{x.position}</p>
                  </div>
                  <div>
                    <p className='text-blue-500 my-auto'>{x.email}</p>
                  </div>
                  <div>
                    <p className='text-neutral-500 my-auto'>
                      Performance: {x.performance_rating}
                    </p>
                  </div> */}
                </li>
              </Link>
            ))}
          </ul>
        </section>
      );
    } else {
      employeesView = (
        <div className='text-center text-neutral-500 m-10'>
          <span className='text-2xl font-bold text-blue-500'>OOPS</span>
          <br></br> We ran into a problem <br></br> No employees found
        </div>
      );
    }
  }

  if (!isLoading) {
    return <div>{employeesView}</div>;
  } else {
    return (
      <div>
        {" "}
        <div className='flex justify-center items-center m-10'>
          <div className='animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500'></div>
        </div>
      </div>
    );
  }
}

export default EmployeeList;
