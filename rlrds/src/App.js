import React from 'react';
import './App.css';
import Register from './Register';
import Login from './Login';
import { Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
            <Route exact path='/register' render= {(props) => { return <Register  {...props} />}} />
      <Route exact path='/login' render= {(props) => { return <Login  {...props}  />}} />

    </div>
  );
}

export default App;
