import React, { useEffect, useRef, useState } from 'react';
import { auth } from "../firebase";
import { useAuth } from "../Context/AuthContect"; 
import { NavLink, useNavigate } from 'react-router-dom';

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login, user} = useAuth(); 
  const navigate=useNavigate()
  if (user){
    console.log(user.email)
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError('');
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/")
    } catch (error) {
      console.error("Signup error:", error); // Log error for debugging
      setError("Failed to login " + (error.code ? error.code : ''));
    }
    setLoading(false);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-11/12 max-w-lg p-4 shadow-md mx-3">
       {error && <p style={{ color: 'red' }}>{error}</p>}
        <h1 className="text-4xl font-bold text-center text-blue-600">SRU<span className="text-xs align-bottom">CS-AI</span></h1>
        <p className="text-center text-lg font-semibold mt-2">Login to Continue</p>

        <div className="mt-8">
          <div className="mb-4">
            <input type="email" ref={emailRef} className="w-full p-3 border border-gray-300 rounded-lg focus:border-gray-500 focus:outline-none" placeholder="Enter your email" />
          </div>

          <div className="mb-4">
            <input type="password" ref={passwordRef} className="w-full p-3 border border-gray-300 rounded-lg focus:border-gray-500 focus:outline-none" placeholder="Enter your password" />
          </div>

          <div className="text-right mb-6">
            <a href="#" className="text-sm text-blue-500 hover:underline">Forgot Password?</a>
          </div>

          <button disabled={loading} onClick={handleSubmit} className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600">{loading ? 'loging in...' : 'login'}</button>
        </div>

        <div className='flex flex-row justify-end mt-2'>
          <span>Have an account?</span>
          <NavLink to="/signup" className="ml-2 text-blue-500">Login</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Login;
