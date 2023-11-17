import React from 'react';
import Sidebar from './sidebar/Sidebar';
import Navbar from './Navbar';

const Home = () => {
  return (
    <>
      <div className='home-page' style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ flex: 1 }}>
          <Navbar />
          {/* Add the content of your home page here */}
        </div>
      </div>
    </>
  );
};

export default Home;
