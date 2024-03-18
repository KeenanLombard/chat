import React, { useEffect, useState } from "react";
import axios from "axios";
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
  return <div>Hello</div>;
}

export default EmployeeProfile;
