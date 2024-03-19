import React from "react";

function documentCard({ document }) {
  //   {
  //   title: "Document 1",
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
  //   date: "2024-03-20",
  //   url: "https://example.com/document1.pdf",
  // },
  return (
    <div className=''>
      <div className='flex justify-between mb-4'>
        <div>
          <div className='font-bold'>{document.title}</div>
          <div className='text-blue-500 text-sm font-semibold'>
            {document.date}
          </div>
        </div>
        <div className='flex justify-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke-width='1.5'
            stroke='currentColor'
            class='w-10 h-10'>
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              d='M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25'
            />
          </svg>
        </div>
      </div>
      <div className='text-sm text-neutral-500'>{document.description}</div>
    </div>
  );
}

export default documentCard;
