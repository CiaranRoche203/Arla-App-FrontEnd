import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import Auth from './Auth';
const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
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