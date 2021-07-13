import React, { useEffect} from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from '../firebase';
import { useStateValue } from './StateProvider';

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only load when componenet loads first
    auth.onAuthStateChanged(authUser => {
      console.log("the user is >>>", authUser);
      if (authUser) {
         // if the user is already lohhed in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else {
        // user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
     })
  }, [])
   

  return (
    // react router is use to move from one page to another without refreshing the page
    <Router>
      <div className="App">
        {/* If repeated can put outside the route componenet */}
        <Switch>
          {/*  component will only render the first route that matches/includes the path */}
          {/* always called "/"  if the url types is not there called, like the default home page */}
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
          <Header />
            <Checkout />
          </Route>
          <Route path="/">
          <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
