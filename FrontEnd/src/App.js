import React, { Component } from 'react';
import './App.css';
import UserLogin from "./components/login.component";

const style = {
  margin: 15,
};

class App extends Component 
{

  constructor(props) {
    super(props);
  }

  render()
  {
    return (
      <UserLogin/>
    )
  }
}

export default App;