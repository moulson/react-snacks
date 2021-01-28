import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header/Header'


class App extends React.Component{
  constructor(){
    super();
  }

  render(){
    const links = [
      {href: '#', title: 'Home'},
      {href: '#', title: 'Subscribe'},
    ];
     return (
    <Header links={links}></Header>
  );
  }
}

export default App;
