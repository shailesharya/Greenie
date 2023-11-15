// src/components/AccountCreation.js

import React, { useState } from 'react';
import axios from 'axios';


const AccountCreation = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log(username);
    console.log(password);
  
    // Dummy request handling
    try {
      const response = await axios.post('http://127.0.0.1:5000/account/register', {
        username,
        password,
      });
  
      if (response.status === 200) {
        console.log(response.data.message);
        alert(response.data.message);
        console.log(response);
      } else {
        console.error('Failed to create account');
      }
    } catch (error) {
      console.error('Error during account creation:', error);
    }
  };
  

  return (
    <div className="container mx-auto mt-8">
      <form onSubmit={handleFormSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
            <center>
            <p className="text-4xl font-bold text-blue-500 mb-10 mt-10">Account Regisration </p>
            </center>
          <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
};

export default AccountCreation;
