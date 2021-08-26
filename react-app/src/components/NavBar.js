
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';

const NavBar = () => {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks
  if (sessionUser) {
    sessionLinks = (
      <div className='nav__links'>
        <NavLink to={`/users/${sessionUser.id}`} exact={true} activeClassName='active' className='user__profile__link'>
          My Profile
        </NavLink>
        <LogoutButton user={sessionUser} className='logout__button' />
      </div>
    )
  } else {
    sessionLinks = (
      <div>
        <div>
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
    <nav>
      <div>
        <NavLink to='/' exact={true} activeClassName='active'>
          Home
        </NavLink>
      </div>
      <div>
        <NavLink to='/users' exact={true} activeClassName='active'>
          Users
        </NavLink>
      </div>
      <div>
        {sessionLinks}
      </div>
    </nav>
  );
}

export default NavBar;
