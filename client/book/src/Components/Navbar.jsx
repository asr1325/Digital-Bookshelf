import React from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const email = localStorage.getItem('email');
  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleLogout = () => {
    localStorage.removeItem('email');
    navigate('/');
  };
  
  return (
    <div className="nav">
        <li onClick={() => handleNavigation('/')}>Home</li>
        <li onClick={() => handleNavigation('/books')}>Books</li>
        <li onClick={() => handleNavigation('/authors')}>Authors</li>
        <li onClick={() => handleNavigation('/about')}>About Us</li>
        {email ? (
          <>
            <p>{email}</p>
           <button onClick={handleLogout}>Logout</button>
          </>
       
        
      ) : (
        <>
          <button onClick={() => handleNavigation('/login')}>Login</button>
          <button onClick={() => handleNavigation('/register')}>Register</button>
        </>
      )}

        <button onClick={() => handleNavigation('/search')}>Search</button>
    </div>
  );
}

export default Navbar;
