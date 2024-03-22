import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import avatar from "../../assets/avatar.jpg";
import { getAllEmployees } from "../../firebase/firebase.js";

function EmployeeList() {
  const [employees, setEmployees] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(async () => {
    setIsLoading(true);
    const emp = await getAllEmployees();
    setEmployees(emp);
    setIsLoading(false);
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
                          {x.fname} {x.lname}
                        </p>
                        <p className='text-neutral-500 text-sm'>
                          {x.department}
                        </p>
                      </div>
                    </div>
                    <p
                      className={`${
                        x.status != "Active"
                          ? "bg-red-100 border-red-500"
                          : "bg-green-100 border-green-500"
                      } ' border-2 rounded-full my-auto px-5 text-center`}>
                      {x.status}
                    </p>
                  </div>
                  <div className='flex justify between w-full my-4'>
                    <div className='border-r-2 w-full text-center'>
                      <span className='font-semibold'>Total Hours</span>
                      <br></br>
                      {x.hours_worked}
                    </div>
                    <div className='border-r-2 w-full text-center'>
                      <span className='font-semibold'>Performance</span>
                      <br></br>
                      {x.performance_rating}
                    </div>
                    <div className='w-full text-center'>
                      <span className='font-semibold'>Total Tasks</span>
                      <br></br>
                      {x.tasks_completed}
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
