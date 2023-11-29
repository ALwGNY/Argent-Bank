import './Header.scss'
import logo from '../../assets/argentBankLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout, selectUserName, selectToken, setUserInfo} from '../../components/redux/userSlice';
import React, { useEffect } from 'react';

function Header() {

  const token = useSelector(selectToken);
  const userName = useSelector(selectUserName);
  const isAuthenticated = useSelector(selectToken) !== null;
  const dispatch = useDispatch();
  const apiUrl = 'http://localhost:3001/api/v1/user/profile';
  

  const handleLogout = () => {
    dispatch(logout());
  }

  useEffect(() => {
    if (isAuthenticated && token) {
      async function fetchUserData() {
        try {
          const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
          });
  
          if (response.ok) {
            const userData = await response.json();
            dispatch(setUserInfo({
              userName: userData.body.userName,
            }));
          } else {
            console.error('API request failed with status code:', response.status);
          }
        } catch (error) {
          console.error('Erreur lors de la connexion :', error);
        }
      }
  
      fetchUserData();
    }
  }, [isAuthenticated, token, dispatch]);

    return(
        <nav className="main-nav">
      <Link to ="/" className="main-nav-logo" href="./index.html">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {isAuthenticated ? (
          <div className='connected'>
            <p> {userName}</p>
            <Link to="/" onClick={handleLogout} className="main-nav-item"> 
              Log Out
            </Link>
          </div>
        ) : (
          <Link to="/SignIn" className="main-nav-item">
            <FontAwesomeIcon icon={faUserCircle} />
            Sign In
          </Link>
        )}
      </div>
    </nav>
    )
}

export default Header