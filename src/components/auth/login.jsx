import React from "react";
import { useHistory } from "react-router-dom"; // Import useHistory hook
import { useState } from "react";
import { logInWithEmailAndPassword } from "../../firebase/firebase";
import { getAuth } from "firebase/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    logInWithEmailAndPassword(email, password).then(() => {
      if (getAuth().currentUser != null) {
        history.push("/employees"); // Navigate to "/employees" route
      }
    });
  };

  const history = useHistory();

  return (
    <div className='flex items-center justify-center min-h-screen'>
      <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/3'>
        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='email'>
            Email
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='email'
            type='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='mb-6'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='password'>
            Password
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='password'
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className='flex items-center justify-between'>
          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            type='submit'
            onClick={handleLogin}>
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
