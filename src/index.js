import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import {PrivateRoute} from './utils/PrivateRoute';
import '../src/assets/style.css';
import '../src/assets/applications.css';
import Login from '../src/function/Login';
import Register from '../src/function/Register';
import Main from '../src/function/Main';
import Questionbook from '../src/function/Questionbook';
import Files from '../src/function/File';
import Teammate from '../src/function/Teamshare';
import Invites from '../src/function/Invite';
import Database from '../src/function/Database';
import Member from '../src/function/Member';


ReactDOM.render(
  <Router>
  <Switch>
  <Route  path="/questionbank" component={Questionbook}/>
  <Route  path="/files" component={Files}/>
  <Route  path="/teammate" component={Teammate}/>
  <Route  path="/member" component={Member}/>
  <Route  path="/Invites" component={Invites}/>
  <Route  path="/database" render={(props)=><Database/>}/>
  <Route  path="/home" render={(props)=><Main/>}/>
  {/* <PrivateRoute  path="/home" exact component={Main}></PrivateRoute> */}
  <Route  path="/register" component={Register}/>
  <Route  path="/" component={Login}/>
  
  {/* <Route  path="/register" exact component={RegisterComponent}/> */}
  
  
  {/* <Route  path="/" exact component={LoginComponent}/> */}
  </Switch>
</Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
