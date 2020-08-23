import React, { useEffect } from 'react';
import './App.css';
import Header from './component/Header';
import Home from './component/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, Redirect
} from "react-router-dom";
import CheckOut from './component/CheckOut';
import Login from './component/Login';
import { useStateValue } from './component/StateProvider';
import { auth } from './component/firebase';

function App() {
  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    const unsubcrible = auth.onAuthStateChanged(authUser => {
      if (authUser) {
        //user logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else {
        //user logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    });
    return () => {
      // any cleanup operation go in here 
      unsubcrible();
    }
  }, [])
  return (
    <Router>
      <Header></Header>
      <Redirect to="/login" />
      <div className='app'>
        <Switch>
          <Route path='/checkout'>
            <CheckOut></CheckOut>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='/'>
            <Home></Home>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
