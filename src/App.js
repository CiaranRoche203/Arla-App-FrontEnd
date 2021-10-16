import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import React from 'react';
import Home from './Pages/Home';
import Register from './Pages/Register';
import ProtectedRoute from './Pages/ProtectedRoute';

function App() {
  return (
    <div style={{ fontFamily: 'Avenir' }}>
      <Router>
        
        <Switch>
        <Route path="/" component={Register} exact />
        <ProtectedRoute path="/home" component={Home} exact />
        </Switch>
      </Router>
    </div>
    
  );
}

export default App;
