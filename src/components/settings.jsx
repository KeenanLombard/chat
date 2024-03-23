import React, { useState } from "react";

function Settings() {
  const [departments, setDepartments] = useState([]);
  const [newDepartment, setNewDepartment] = useState("");
  const [selectedEmployee, setSelectedEmployee] = useState("");
  const [assignedDepartments, setAssignedDepartments] = useState({});

  const handleDepartmentSubmit = (e) => {
    e.preventDefault();
    if (newDepartment.trim() !== "") {
      setDepartments([...departments, newDepartment]);
      setNewDepartment("");
    }
  };

  const handleAssignment = (e, department) => {
    const employeeId = e.target.value;
    setSelectedEmployee(employeeId);

    setAssignedDepartments({
      ...assignedDepartments,
      [department]: employeeId,
    });
  };

  const employees = [
    {
      id: "KL001",
      name: "Keenan Lombard KL001",
    },
  ];

  return (
    <div className='container mx-auto'>
      <h1 className='text-xl font-semibold mb-4'>Department Management</h1>

      {/* Add Department Form */}
      <form onSubmit={handleDepartmentSubmit} className='mb-6'>
        <input
          type='text'
          value={newDepartment}
          onChange={(e) => setNewDepartment(e.target.value)}
          placeholder='Enter department name'
          className='border border-gray-300 px-4 py-2 rounded mr-2 focus:outline-none focus:border-blue-500'
        />
        <button
          type='submit'
          className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600'>
          Add Department
        </button>
      </form>

      {/* Department List */}
      <div className='mb-6'>
        <ul>
          {departments.map((department, index) => (
            <li key={index} className='mb-2'>
              {department}
              <select
                value={assignedDepartments[department] || ""}
                onChange={(e) => handleAssignment(e, department)}
                className='ml-4 border border-gray-300 rounded px-2 py-1 focus:outline-none'>
                <option value=''>Assign Head of Department</option>
                {employees.map((employee) => (
                  <option key={employee.id} value={employee.id}>
                    {employee.name}
                  </option>
                ))}
              </select>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Settings;
