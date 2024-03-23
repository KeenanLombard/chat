import React, { useEffect, useState } from "react";
import axios from "axios";
import avatar from "../../assets/avatar.jpg";
import { BrowserRouter as Router, Route, useParams } from "react-router-dom";
import { getEmployeeById } from "../../firebase/firebase";

function EmployeeProfile() {
  const [employee, setEmployee] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams();

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

  let view;
  if (!error) {
    if (!isLoading) {
      if (employee) {
        view = <div>{employee.fname + " " + employee.lname}</div>;
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

  return <div>{view}</div>;
}

export default EmployeeProfile;
