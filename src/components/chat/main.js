import React from "react";

const Chat = () => {
  return (
    <div className='flex flex-col h-screen w-full'>
      {/* Header */}
      <div className='bg-gray-800 text-white p-4'>
        <h1 className='text-xl font-semibold'>John</h1>
      </div>

      {/* Chat Container */}
      <div className='flex-1 overflow-y-scroll bg-gray-900 p-4'>
        {/* Message List */}
        <div className='flex flex-col space-y-2'>
          {/* Individual Messages */}
          <div className='flex items-center space-x-2'>
            <img
              src='https://placekitten.com/40/40'
              alt='User Avatar'
              className='w-8 h-8 rounded-full'
            />
            <div className='bg-gray-800 p-2 rounded-md'>
              <p className='text-white'>Hello, how are you?</p>
            </div>
          </div>

          {/* Add more messages as needed */}
        </div>
      </div>

      {/* Input Area */}
      <div className='bg-gray-800 p-4'>
        <input
          type='text'
          placeholder='Type your message...'
          className='w-full p-2 rounded-md'
        />
      </div>
    </div>
  );
};

export default Chat;
