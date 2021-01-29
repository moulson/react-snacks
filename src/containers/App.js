import React from 'react';
import styled from 'styled-components';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Header from '../components/Header/Header'
import Home from './Home';
import Subscribe from './Subscribe';



class App extends React.Component{
  constructor(){
    super();
  }

  render(){
    const links = [
      {href: '/subscribe', title: 'Subscribe'},
      {href: '#', title: 'About Us'},
      {href: '#', title: 'What\'s in a box'},
    ];
     return (
    <>
      <Header links={links}></Header>
      <Router>
        <Route exact path='/' component={Home}/>
        <Route exact path='/subscribe' component={Subscribe}/>
      </Router>
    </>
  );
  }
}

export default App;
