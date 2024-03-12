import React from "react";

const data = [
  {
    id: "123",
    name: "Keenan",
    email: "keenanlombardd2@gmail.com",
    status: "Busy",
  },
  {
    id: "123",
    name: "Keenan",
    email: "keenanlombardd2@gmail.com",
    status: "Busy",
  },
  {
    id: "123",
    name: "Keenan",
    email: "keenanlombardd2@gmail.com",
    status: "Busy",
  },
  {
    id: "123",
    name: "Keenan",
    email: "keenanlombardd2@gmail.com",
    status: "Busy",
  },
];

function employees() {
  const handleOnboarding = () => {};
  const handleViewToggle = () => {};
  const handleSortToggle = (data) => {};
  return (
    <div>
      {/* toolbar */}
      <header className='flex justify-end'>
        <div>
          <button className='mx-2 font-bold bg-green-100 text-green-900 rounded px-5 py-2'>
            Onboarding
          </button>
        </div>
        <div>
          <button className='mx-2 font-bold bg-blue-100 text-blue-900 rounded px-5 py-2'>
            Card View
          </button>
          <button className='mx-2 font-bold bg-blue-100 text-blue-900 rounded px-5 py-2'>
            Sort ASC
          </button>
        </div>
      </header>
      {/* list view */}
      <section className='shadow-xl p-2 m-2'>
        <ul className='space-y-2'>
          {data.map((x) => (
            <li
              key={x.id}
              className='hover:bg-gray-100 dark:hover:bg-gray-700 flex cursor-pointer justify-around items-center space-x-2'>
              {/* col 1 */}
              <div className='my-auto'>
                <input type='checkbox' />
              </div>
              {/* col 2 */}
              <div className='flex my-auto'>
                <img
                  src='https://placekitten.com/40/40'
                  alt={`Peer ${x.id} Avatar`}
                  className='w-9 h-9 rounded-full mx-2'
                />
                <p className='font-bold my-auto mx-2'>{x.name}</p>
                <p className=' my-auto mx-2'>{x.id}</p>
              </div>
              {/* col 3 */}
              <div className=''>{x.email}</div>
              {/* col 4 */}
              <div className='text-red-500'>{x.status}</div>
            </li>
          ))}
        </ul>
      </section>
      {/* card view */}
      <section></section>
    </div>
  );
}

export default employees;
