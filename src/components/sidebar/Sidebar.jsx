import React from 'react';
 import Dashboard from './Dashboard'; // You can remove this import if not used
import '../CSS/sidebar.css';

const Sidebar = () => {
  return (
    <>
      <div className="company-name">
        <h2 className="title-name" style={{ letterSpacing: '5px', marginTop: '2px' }}>
          Manin
        </h2>
     < Dashboard/> 
      </div>
    </>
  );
};

export default Sidebar;
