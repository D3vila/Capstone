import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
// import UsersList from './components/User/UsersList';
import User from './components/User/User';
import Locations from './components/LocationList/Locations'
import Location from './components/Location/Location';
import HomePage from './components/HomePage/HomePage';
import { authenticate } from './store/session';
import EditReservationPage from './components/editReservation/editReservationPage'

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
        <ProtectedRoute path='/edit-reservation/:reservationId'>
          <EditReservationPage/>
        </ProtectedRoute>
        <Route path='/locations' exact={true}>
          <Locations />
        </Route>
        <Route path='/locations/:locationId'>
          <Location />
        </Route>
        <Route path='/' exact={true} >
          <HomePage/>
        </Route>
      </Switch>

    </BrowserRouter>
  );
}

export default App;
