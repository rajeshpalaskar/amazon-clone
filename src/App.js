import React,{ useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import {auth} from "./firebase";
import {useStateValue} from "./StateProvider";

function App() {
  const [{user}, dispatch] = useStateValue();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(authUser => {
      if(authUser) {
        //The user is logged in
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      } else {
        //The user is logged out
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
    return () => {
      // Any clean up operation goes in here
      unsubscribe();
    }
  }, [])
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
          <Login />  
          </Route>
          {/*This is the default route */}
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
    </div>
    </Router>
    
  );
}
  
  //    {/*we need React-Router */}

  //    {/*localhost.com/ */}
  //    {/*localhost.com/checkout */}
  //    {/*localhost.com/login */}
      
  

export default App;
