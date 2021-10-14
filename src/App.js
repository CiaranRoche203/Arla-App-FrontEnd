import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import React from 'react';
import Home from './Pages/Home';
import Register from './Pages/Register';

function App() {
  return (
    <div style={{ fontFamily: 'Avenir' }}>
      <Router>
        
        <Switch>
        <Route path="/register" component={Register} exact />
        <Route path="/" component={Home} exact />
        </Switch>
      </Router>
    </div>
    
  );
}

export default App;
