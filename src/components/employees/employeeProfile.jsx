import React, { useEffect, useState } from "react";
import axios from "axios";
import avatar from "../../assets/avatar.jpg";
import { BrowserRouter as Router, Route, useParams } from "react-router-dom";
import { getEmployeeById } from "../../firebase/firebase";

function EmployeeProfile() {
  const [employee, setEmployee] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  let { id } = useParams();

  useEffect(() => {
    // Fetch all employees
    const fetchAllEmployees = async (id) => {
      setIsLoading(true);
      const employeesData = await getEmployeeById(id);
      setEmployee(employeesData);
      setIsLoading(false);
    };

    fetchAllEmployees();
  }, []);

  console.log(employee);

  return (
    <div>
      <div className='flex'>
        <div className='bg-blue-500 rounded text-white p-5'>
          <img className='rounded-full w-28 my-5' src={avatar}></img>
          <p className='my-2'>Keenan</p>
          <p className='my-2'>Lombard</p>
          <p className='my-2'>Sales</p>
          <p className='my-2'>Sales Manager</p>
          <p className='my-2'>keenanlombardd2@gmail.com</p>
        </div>
        <div className='w-full'>
          <p className='mx-1'>Name:</p>
          <input
            plceholder='name'
            className='w-full border mb-4 mx-1 p-2'></input>
          <p className='mx-1'>Name:</p>
          <input
            plceholder='name'
            className='w-full border mb-4 mx-1 p-2'></input>
          <p className='mx-1'>Name:</p>
          <input
            plceholder='name'
            className='w-full border mb-4 mx-1 p-2'></input>
          <p className='mx-1'>Name:</p>
          <input
            plceholder='name'
            className='w-full border mb-4 mx-1 p-2'></input>
          <p className='mx-1'>Name:</p>
          <input
            plceholder='name'
            className='w-full border mb-4 mx-1 p-2'></input>
          <p className='mx-1'>Name:</p>
          <input
            plceholder='name'
            className='w-full border mb-4 mx-1 p-2'></input>
        </div>
      </div>
    </div>
  );
}

export default EmployeeProfile;
