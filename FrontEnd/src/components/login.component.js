import React, { Component } from "react";

import Link from '@material-ui/core/Link';
import Paper from 'material-ui/Paper'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Home from "./home.component";
import { connect } from "react-redux";
import { login } from "../actions/auth";
import '../css/loginComponent.css'

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const style = {
  margin: 15,
};

class UserLogin extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      username: "",
      password: "",
      loading: false,
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  handleLogin(e) {
    e.preventDefault();

    this.setState({
      loading: true,
    });

    const { history, dispatch } = this.props;
    dispatch(login(this.state.username, this.state.password))
    .then(() => {
      history.push("/timeTable");
      window.location.reload();
    })
    .catch(() => {
      this.setState({
        loading: false
      });
    });
  }

  componentDidMount()
  {
    var localloginComponent=[];
    localloginComponent.push(
      <MuiThemeProvider>
      <div class = 'lg6'>
          <Paper variant="outlined">
              <img src={ require('../images/Logo.png') }  />
          </Paper>
          <h1 class = 'logofont'> LEARNING BOARD</h1>
          <h3 class = 'logofont'>ITS ALL ABOUT PROGRESS....</h3>
      </div>


      <div class='lg9'>
        <div class='lg5'>
         <TextField
           hintText="Enter your user-id"
           floatingLabelText="Student Id"
           onChange = {(event,newValue) => this.setState({username:newValue})}
           />
         <br/>
           <TextField
             type="password"
             hintText="Enter your Password"
             floatingLabelText="Password"
             onChange = {(event,newValue) => this.setState({password:newValue})}
             />
           <br/>
           <RaisedButton label="Log In" primary={true} style={style} onClick={(event) => this.handleLogin(event)}/>
          <br/>
          <Link href="#" >
              Forgot Password
            </Link>
            <br />&nbsp;
            <br />&nbsp;
         </div>
       </div>
       </MuiThemeProvider>
    )
    this.setState({menuValue:1,loginComponent:localloginComponent,loginRole:'student'})
  }

  render() {
    const { isLoggedIn } = this.props;

    if (isLoggedIn) {
      return <Home/>;
    }

    return (
      <div class='lg8'>
        {this.state.loginIcon}
        {this.state.loginComponent}
      </div>
    );

  }
}

function mapStateToProps(state) {
  const { isLoggedIn } = state.auth;
  return {
    isLoggedIn
  };
}

export default connect(mapStateToProps)(UserLogin);