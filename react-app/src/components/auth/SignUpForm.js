import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import './SignUpForm.css';

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [first_name, setFirst_name] = useState('');
  const [last_name, setLast_name] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [profile_image, setProfile_image] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {

    e.preventDefault();


    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, first_name, last_name, email, password, profile_image));

      if (data) {
        setErrors(data)
      } else {
        alert("Time to Go back to the FUTURE!")
      }
    } else {
      setErrors(['Passwords do not match'])
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateFirst_name = (e) => {
    setFirst_name(e.target.value);
  }

  const updateLast_name = (e) => {
    setLast_name(e.target.value);
  }

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  const updateProfile_image = (e) => {
    setProfile_image(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className='signup__page'>
      <div className='signup__div'>
        <h1>Sign up</h1>
        <form className='signin__form__container' onSubmit={onSignUp}>
          <div className='errors_div' >
            {errors.map((error, ind) => (
              <div className='signup__errors' key={ind}> {error} </div>
            ))}
          </div>
          <div className='username__div' >
            <label>User Name</label>
            <input
              type='text'
              name='username'
              onChange={updateUsername}
              value={username}

            ></input>
          </div>
          <div className='firstN__div' >
            <label>First Name</label>
            <input
              type='text'
              name='first_name'
              onChange={updateFirst_name}
              value={first_name}

            ></input>
          </div>
          <div className='lastN__div' >
            <label>Last Name</label>
            <input
              type='text'
              name='last_name'
              onChange={updateLast_name}
              value={last_name}

            ></input>
          </div>
          <div className='email__div' >
            <label>Email</label>
            <input
              type='text'
              name='email'
              onChange={updateEmail}
              value={email}

            ></input>
          </div>
          <div className='password__div' >
            <label>Password</label>
            <input
              type='password'
              name='password'
              onChange={updatePassword}
              value={password}

            ></input>
          </div>
          <div className='passwordC__div' >
            <label>Confirm Password</label>
            <input
              type='password'
              name='repeat_password'
              onChange={updateRepeatPassword}
              value={repeatPassword}

            ></input>
          </div>
          <div className='profile__imageinput' >
            <label>Profile Image</label>
            <input
              type='text'
              name='profile_image'
              onChange={updateProfile_image}
              value={profile_image}
            ></input>
          </div>
          <button className='signUp__button' type='submit'>Sign Up</button>
        </form>
        <div className='signup__link__member'>
              <p>Already a member, <a href='/login'>login</a></p>

        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
