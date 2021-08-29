
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
          <img src="https://png2.cleanpng.com/sh/9698774adcd19fbfde6b8eddbf1d34fb/L0KzQYq3UsA6N6V9jpH0aYP2gLBuTfRua15pfd54cnXkfn7qggIubKMyfd92ZYT3PbP5jCdvNZVqhNH7ZXHxPcXwjfUudZIyfNHsYX3zccH2kCMubJZxhARuYX6wf7A0kCR2bJZzjJ98aHB6PYbqVfYyO2k6TKo7MkizPom3VsUxP2U2Sac9OUe2RIiBWcI6PWYziNDw/kisspng-dmc-delorean-car-dr-emmett-brown-delorean-time-ma-docampaposs-delorean-on-student-show-5c5f1385482280.8065074115497347892955.png" alt="DeLoreanTraveler" className="DLlogo"/>
        </NavLink>
      </div>
      <div className='right__nav steady'>
        <NavLink to='/users' exact={true} activeClassName='active' className='users__link'>
          Users
        </NavLink>
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
