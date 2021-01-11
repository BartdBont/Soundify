import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './Components/Login';
import Player from './Components/Player';
import { useStateProviderValue } from './StateProvider';
import AuthenticationService from './Services/AuthenticationService';
import { Redirect, Route, Switch } from 'react-router-dom';


function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [, dispatch] = useStateProviderValue();

  // Run code based on a given condition
  useEffect(() => {
    // const hash = getTokenFromUrl();
    // window.location.hash = "";
    // const _token = hash.access_token;

    AuthenticationService.getCurrentUser().then((response) => {
      if (response) {
        dispatch({
          type: 'SET_USER',
          user: response
        })
        setLoggedIn(true);
      }
    })
  }, [dispatch]);

  return (
    // BEM
    <div className="app">
      {
        loggedIn ? (
            <Switch>
                <Route path="/" component={Player}/>
                <Redirect to="/home"/>
            </Switch>
        ) : (
          <Login/>
        )
      }
      
    </div>
  );
}

export default App;
