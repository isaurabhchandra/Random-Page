import Link from 'antd/es/typography/Link';
import React from 'react';

const Navbar = () => {
  return (
    <div style={styles.navbar}>
      <Link href="#" style={styles.navItem}><i className="fas fa-home"></i>Search</Link>
      <Link href="#" style={styles.navItem}><i className="fas fa-envelope"></i> Help</Link>
      <Link href="#" style={styles.navItem}><i className="fas fa-bell"></i> Notifications</Link>
      <Link href="#" style={styles.navItem}><i className="fas fa-user"></i> Profile</Link>
    </div>
  );
};

const styles = {
  navbar: {
    backgroundColor: 'white',
    color: 'black',
    padding: '10px',
    textAlign: 'right',
    width:'100em'
    
  },
  navItem: {
    color: 'black',
    textDecoration: 'none',
    padding: '10px',
    margin: '0 5px',
   
    
  },
};

export default Navbar;
