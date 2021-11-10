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
import GraphGraph from './Pages/Graph'
function App() {
  return (
    <div style={{ fontFamily: 'Avenir' }}>
      <Router>
        <Navbar />

        <Switch>
        <Route path="/login" component={Login} exact />
        <Route path="/register" component={Register} exact />
        <ProtectedRoute path="/" component={Home} exact />
        <Route path="/messenger" component={Messenger} exact />
        <Route path="/graph" component={GraphGraph} exact />
        </Switch>
      </Router>
    </div>
    
  );
}

export default App;
