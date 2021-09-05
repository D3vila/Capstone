import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';
import { useHistory } from 'react-router';
import './LoginForm.css'

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const demoUserLogin = async(e) => {
    e.preventDefault();
    await dispatch(login('demo@aa.io', 'password'));
  }

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to={`/users/${user.id}`} />;
  }

  return (
    <div className='login__page'>
      <div className='Login__div'>
        <h1>Login</h1>
        <form className='login__form__container' onSubmit={onLogin}>
          <div className='error__div'>
            {errors.map((error, ind) => (
              <div className='errors' key={ind}>{error}</div>
            ))}
          </div>
          <div className='email__div'>
            <label htmlFor='email'>Email</label>
            <input
              name='email'
              type='text'
              placeholder='Email'
              value={email}
              onChange={updateEmail}
            />
          </div>
          <div className='password__div'>
            <label htmlFor='password'>Password</label>
            <input
              name='password'
              type='password'
              placeholder='Password'
              value={password}
              onChange={updatePassword}
            />
            </div>
            <div>
              <button className='Login__button' type='submit'>Login</button>
            </div>
        </form>
        <div className='signUp__link'>
              <p>Not a member? <a href='/sign-up'>SignUp</a></p>

        </div>
        <div className='signUp__link'>
              <p>Login as a <button className='demo__button' onClick={demoUserLogin}>DemoUser</button></p>

        </div>
      </div>
    </div>
  );
};

export default LoginForm;
