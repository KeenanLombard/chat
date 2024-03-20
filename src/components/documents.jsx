import React from "react";
import DocumentCard from "./documentCard.jsx";
import { Link } from "react-router-dom";

function documents() {
  const documents = [
    {
      title: "Document 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      date: "2024-03-20",
      url: "https://example.com/document1.pdf",
    },
    {
      title: "Document 2",
      description:
        "Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at...",
      date: "2024-03-19",
      url: "https://example.com/document2.pdf",
    },
    {
      title: "Document 3",
      description:
        "Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed ...",
      date: "2024-03-18",
      url: "https://example.com/document3.pdf",
    },
    {
      title: "Document 4",
      description:
        "Mauris massa. Vestibulum lacinia arcu eget nulla. Class ...",
      date: "2024-03-17",
      url: "https://example.com/document4.pdf",
    },
    {
      title: "Document 5",
      description:
        "Curabitur sodales ligula in libero. Sed dignissim lacinia ...",
      date: "2024-03-16",
      url: "https://example.com/document5.pdf",
    },
  ];
  return (
    <div>
      <div className='flex'>
        <div>
          <button className='w-60 mx-2 font-semibold bg-blue-500 text-white rounded px-5 py-2'>
            New
          </button>
        </div>
      </div>
      <section className=''>
        <ul className='m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
          {documents.map((x) => (
            <Link to={"profile/" + x.id}>
              <li
                key={x.id}
                className='mx-2 dark:bg-gray-900 my-2 p-2 shadow hover:bg-white dark:hover:bg-gray-700 flex-col cursor-pointer justify-between items-center space-x-2'>
                <DocumentCard document={x} />
              </li>
            </Link>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default documents;
