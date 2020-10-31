
import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

import Login from './Login';
import Register from './Register';


const style = {
  margin: 15,
};

class Loginscreen extends Component {
  constructor(props){
    super(props);
    var loginButtons=[];

    this.state={
      username:'',
      password:'',
      loginscreen:[],
      loginmessage:'',
      loginButtons:loginButtons,
      isLogin:true
    }
  }
  componentWillMount(){
    var loginscreen=[];
    loginscreen.push(<Login parentContext={this} appContext={this.props.appContext} key={"LoginScreen"}/>);
    var loginmessage = "Forgot Password";
    this.setState({
                  loginscreen:loginscreen
                    })
  }
  render() {
    return (
      <div className="loginscreen" key="loginscreen">
        {this.state.loginscreen}
        <div class = 'lr1'>
          {this.state.loginButtons}
        </div>
      </div>
    );
  }
}


export default Loginscreen;
