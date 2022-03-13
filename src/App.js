import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import React from 'react';
import Home from './Pages/Home';
import Register from './Pages/Register';
import ProtectedRoute from './Pages/ProtectedRoute';
import Login from './Pages/Login';
import Navbar from './Pages/Navbar';
import Messenger from './Pages/Messenger';
import VivaGraph from './Pages/Course-Graph/Software';
import SelectCourse from './Pages/VivaGraph';
import Business from './Pages/Course-Graph/Business';
import { AuthProvider } from './Pages/AuthContext';
import MessengerLogin from './Pages/MessengerLogin';
import DigitalMedia from './Pages/Course-Graph/DigitalMedia';


function App() {
  return (
    <div style={{ fontFamily: 'Avenir' }}>
      <Router>
        <Navbar />

        <Switch>
          <ProtectedRoute path="/register" component={Register} exact />
          <ProtectedRoute path="/home" component={Home} exact />

          <Route path='/' component={Login} exact />
          <ProtectedRoute path="/graph" component={SelectCourse} exact />
          <Route path="/software" component={VivaGraph} exact />
          <Route path="/business" component={Business} exact />
          <Route path="/digitalmedia" component={DigitalMedia} exact />
          <ProtectedRoute path="/messengerlogin" component={MessengerLogin} exact />


        </Switch>
        <AuthProvider>
        <Switch>
          <Route path="/messenger" component={Messenger} exact />
        </Switch>
        </AuthProvider>
       
      </Router>
    </div>

  );
}

export default App;
