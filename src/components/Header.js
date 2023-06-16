
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import './Header.css';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const auth = localStorage.getItem('user');

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const logout = () => {
    localStorage.clear();
    navigate('/signup');
  };

  let username = '';

  try {
    const parsedAuth = JSON.parse(auth);
    if (parsedAuth && parsedAuth.name) {
      username = parsedAuth.name;
    }
  } catch (error) {
    // Handle JSON parsing error if necessary
  }

  return (
    <header className="header">
      <div className="lookj-a">
        <Link className='lookj' to="/Hero">JBS
       
        </Link>
     
       
      </div>

      {isMobile ? (
        // Render mobile-friendly navigation menu
        <>
          <div className="header__menu-toggle" onClick={handleMenuToggle}>
            <span className={isMenuOpen ? 'header__menu-icon--open' : 'header__menu-icon'}></span>
            <span className={isMenuOpen ? 'header__menu-icon--open' : 'header__menu-icon'}></span>
            <span className={isMenuOpen ? 'header__menu-icon--open' : 'header__menu-icon'}></span>
          </div>

          <nav className={isMenuOpen ? 'header__nav header__nav--mobile header__nav--open' : 'header__nav header__nav--mobile'}>
            <ul className="header__menu">
              <li>
                <Link to="/LookingJob">Employment</Link>
              </li>
              <li>
                <Link to="/PlacementDetail">Placement</Link>
              </li>
              <li>
                <Link to="/Home">Home</Link>
              </li>
              <li>
                <Link to="/courses">Courses</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/Practice">Practice</Link>
              </li>

              {auth ? (
                <li>
                  <Link onClick={logout} to="/signup">
                    Logout 
                  </Link>
                </li>
              ) : (
                <>
                  <li>
                    <Link to="/signup">Sign Up</Link>
                  </li>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </>
      ) : (
        // Render desktop navigation menu
        <nav className="header__nav header__nav--desktop">
          <ul className="header__menu">
            <li>
              <Link to="/Lookingjob">Employment</Link>
            </li>
            <li>
              <Link to="/PlacementDetail">Placement</Link>
            </li>
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/courses">Courses</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/Practice">Practice</Link>
            </li>

            {auth ? (
              <li>
                <Link onClick={logout} to="/signup">
                  Logout
                </Link>
              </li>
            ) : (
              <>
                <li>
                  <Link to="/signup">Sign Up</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;


