// src/components/Dashboard.js
import React, { useState } from 'react';
import UserDetails from './UserDetails';
import AccountCreation from './AccountCreation';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('userDetails');

  return (
    <div className="container mx-auto mt-8">
      <div className="flex">
        <button
          onClick={() => setActiveTab('userDetails')}
          className={`${
            activeTab === 'userDetails' ? 'bg-blue-500' : 'bg-gray-300'
          } text-white font-bold py-2 px-4 rounded-l focus:outline-none focus:shadow-outline`}
        >
          User Details
        </button>
        <button
          onClick={() => setActiveTab('accountCreation')}
          className={`${
            activeTab === 'accountCreation' ? 'bg-blue-500' : 'bg-gray-300'
          } text-white font-bold py-2 px-4 rounded-r focus:outline-none focus:shadow-outline`}
        >
          Account Creation
        </button>
      </div>
      <div className="mt-8">
        {activeTab === 'userDetails' && <UserDetails />}
        {activeTab === 'accountCreation' && <AccountCreation />}
      </div>
    </div>
  );
};

export default Dashboard;
