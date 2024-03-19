import React, { useEffect, useState } from "react";
import axios from "axios";
import avatar from "../../assets/avatar.jpg";
import { BrowserRouter as Router, Route, useParams } from "react-router-dom";

function EmployeeProfile() {
  const [employee, setEmployee] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  let { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `http://127.0.0.1:8000/api/employees/profile/${id}`,
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
            },
          }
        );
        setEmployee(response.data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };
    fetchData();
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
