
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import './NavBar.css';

const NavBar = () => {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks
  if (sessionUser) {
    sessionLinks = (
      <div className='nav__links profile__items'>
        <img src={sessionUser.profile_image} className='navbar__profilePic' alt='profilePic'/>
        <NavLink to={`/users/${sessionUser.id}`} exact={true} activeClassName='active' className='user__profile__link'>
          <div className='profile__link'>{sessionUser.username} </div>
        </NavLink>
        <LogoutButton user={sessionUser} className='logout__button' />
      </div>
    )
  } else {
    sessionLinks = (
      <div className='nonUser__div'>
        <div className='nav__links'>
          <NavLink to='/sign-up' exact={true} activeClassName='active' className='signup__link'>
            Sign Up
          </NavLink>
          <NavLink to='/login' exact={true} activeClassName='active' className='login__link'>
            Login
          </NavLink>
        </div>
      </div>
    )
  }


  return (
    <nav className='navbar__container'>
      <div className='left__nav'>
        <NavLink to='/' exact={true} activeClassName='active' className='home__link'>
          <img src="https://fontmeme.com/permalink/210828/43ccaeb2b7f7e9b65a8a7493f308f5a6.png" alt="DeLoreanTraveler" className="logo"/>
          <img src="https://www.pinclipart.com/picdir/big/184-1848230_back-to-the-future-delorean-clipart-cartoon-car.png" alt="DeLoreanTraveler" className="DLlogo"/>
        </NavLink>
      </div>
      <div className='right__nav steady'>
        {/*<NavLink to='/users' exact={true} activeClassName='active' className='users__link'>
          Users
        </NavLink>*/}
        <NavLink to='/locations' exact={true} activeClassName='active' className='location__link'>
          Locations
        </NavLink>
      </div>
      <div className='right__nav'>
        {sessionLinks}
      </div>
    </nav>
  );
}

export default NavBar;
