import React from "react";

function settings() {
  return (
    <div>
      <div>
        <div className='flex'>
          <div>
            <button className='w-60 mx-2 font-semibold shadow text-blue-500 rounded px-5 py-2 hover:bg-blue-500 hover:text-white'>
              My Business
            </button>
          </div>
          <div>
            <button className='w-60 mx-2 font-semibold shadow text-blue-500 rounded px-5 py-2 hover:bg-blue-500 hover:text-white'>
              Employees
            </button>
          </div>
          <div>
            <button className='w-60 mx-2 font-semibold shadow text-blue-500 rounded px-5 py-2 hover:bg-blue-500 hover:text-white'>
              Documents
            </button>
          </div>
        </div>
      </div>
      <section></section>
    </div>
  );
}

export default settings;
