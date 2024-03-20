import React from "react";
import Notification from "./widgets/notification";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

function dashboard() {
  ChartJS.register(Tooltip, Legend);
  const data = {
    labels: ["Communication", "Productivity", "Engagement", "Skill", "Rank"],
    datasets: [
      {
        label: "# of Votes",
        data: [10, 10, 10, 10, 10],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };
  return (
    <div>
      <div className='text-center text-3xl font-bold my-4'>
        Welcome back Keenan<br></br>
        <span className='text-xl text-blue-500'>Whats new ?</span>
      </div>
      <div className=''>
        <div className='flex justify-between'>
          <div className='rounded shadow w-full text-center font-bold p-10 m-10'>
            <div>
              Leads<hr className='my-2'></hr>
              <span className='text-2xl text-blue-500'>36257</span>
            </div>
          </div>
          <div className='rounded shadow w-full text-center font-bold p-10 m-10'>
            <div>
              Sales<hr className='my-2'></hr>
              <span className='text-2xl text-blue-500'>$ 3,625,758,69</span>
            </div>
          </div>
          <div className='rounded shadow w-full text-center font-bold p-10 m-10'>
            <div>
              Team Spirit<hr className='my-2'></hr>
              <span className='text-2xl text-blue-500'>4 /10</span>
            </div>
          </div>
        </div>
        <div className='flex justify-between'>
          <div className='rounded shadow w-full text-center font-bold p-10 m-10'>
            Graph
          </div>
        </div>
      </div>
    </div>

    // <div>
    //   <div className='flex-col'>
    //     <div className='flex justify-between'>
    //       <div className='rounded w-full m-2 shadow-xl dark:bg-gray-900 dark:text-white'>
    //         <Notification />
    //         <Notification />
    //       </div>
    //       <div className='rounded w-full m-2 shadow-xl p-4 '>
    //         <div className='mx-5 my-auto'>
    //           <Radar data={data} />
    //         </div>
    //       </div>
    //     </div>
    //     <div className='w-full m-2 shadow-xl p-5 rounded dark:bg-gray-900'>
    //       <div class='relative overflow-x-auto shadow-md sm:rounded-lg'>
    //         <table class='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
    //           <thead class='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
    //             <tr>
    //               <th scope='col' class='px-6 py-3'>
    //                 Product name
    //               </th>
    //               <th scope='col' class='px-6 py-3'>
    //                 Color
    //               </th>
    //               <th scope='col' class='px-6 py-3'>
    //                 Category
    //               </th>
    //               <th scope='col' class='px-6 py-3'>
    //                 Price
    //               </th>
    //               <th scope='col' class='px-6 py-3'>
    //                 Action
    //               </th>
    //             </tr>
    //           </thead>
    //           <tbody>
    //             <tr class='odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700'>
    //               <th
    //                 scope='row'
    //                 class='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
    //                 Apple MacBook Pro 17"
    //               </th>
    //               <td class='px-6 py-4'>Silver</td>
    //               <td class='px-6 py-4'>Laptop</td>
    //               <td class='px-6 py-4'>$2999</td>
    //               <td class='px-6 py-4'>
    //                 <a
    //                   href='#'
    //                   class='font-medium text-blue-600 dark:text-blue-500 hover:underline'>
    //                   Edit
    //                 </a>
    //               </td>
    //             </tr>
    //             <tr class='odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700'>
    //               <th
    //                 scope='row'
    //                 class='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
    //                 Microsoft Surface Pro
    //               </th>
    //               <td class='px-6 py-4'>White</td>
    //               <td class='px-6 py-4'>Laptop PC</td>
    //               <td class='px-6 py-4'>$1999</td>
    //               <td class='px-6 py-4'>
    //                 <a
    //                   href='#'
    //                   class='font-medium text-blue-600 dark:text-blue-500 hover:underline'>
    //                   Edit
    //                 </a>
    //               </td>
    //             </tr>
    //             <tr class='odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700'>
    //               <th
    //                 scope='row'
    //                 class='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
    //                 Magic Mouse 2
    //               </th>
    //               <td class='px-6 py-4'>Black</td>
    //               <td class='px-6 py-4'>Accessories</td>
    //               <td class='px-6 py-4'>$99</td>
    //               <td class='px-6 py-4'>
    //                 <a
    //                   href='#'
    //                   class='font-medium text-blue-600 dark:text-blue-500 hover:underline'>
    //                   Edit
    //                 </a>
    //               </td>
    //             </tr>
    //             <tr class='odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700'>
    //               <th
    //                 scope='row'
    //                 class='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
    //                 Google Pixel Phone
    //               </th>
    //               <td class='px-6 py-4'>Gray</td>
    //               <td class='px-6 py-4'>Phone</td>
    //               <td class='px-6 py-4'>$799</td>
    //               <td class='px-6 py-4'>
    //                 <a
    //                   href='#'
    //                   class='font-medium text-blue-600 dark:text-blue-500 hover:underline'>
    //                   Edit
    //                 </a>
    //               </td>
    //             </tr>
    //             <tr>
    //               <th
    //                 scope='row'
    //                 class='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
    //                 Apple Watch 5
    //               </th>
    //               <td class='px-6 py-4'>Red</td>
    //               <td class='px-6 py-4'>Wearables</td>
    //               <td class='px-6 py-4'>$999</td>
    //               <td class='px-6 py-4'>
    //                 <a
    //                   href='#'
    //                   class='font-medium text-blue-600 dark:text-blue-500 hover:underline'>
    //                   Edit
    //                 </a>
    //               </td>
    //             </tr>
    //           </tbody>
    //         </table>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default dashboard;
