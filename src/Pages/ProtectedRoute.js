import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Auth from './Auth';
// protected route function
const ProtectedRoute = ({ component: Component, ...rest }) => (
  //create a new route
  <Route
    {...rest}
    // find if the user is authenticated or not
    //if so allow the user to access the protected pages
    //otherwise redirect to the login page
    render={props =>
      Auth.getAuth() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login"
          }}
        />
      )
    }
  />
);


export default ProtectedRoute