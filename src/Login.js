import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
var apiBaseUrl = "http://localhost:4000/api/";
import axios from 'axios';
import UploadPage from './UploadPage';
import Link from '@material-ui/core/Link';
import Paper from 'material-ui/Paper'

class Login extends Component {
  componentWillMount(){
      console.log("in student componentWillMount");
      var localloginComponent=[];
      localloginComponent.push(
        <MuiThemeProvider>
        <div class = 'lg6'>
                        <Paper variant="outlined">
                            <img src="/images/Logo.png" />
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
             <RaisedButton label="Log In" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
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
  handleClick(event){
    var self = this;
    var payload={
      "userid":this.state.username,
	    "password":this.state.password,
      "role":this.state.loginRole
    }
    axios.post(apiBaseUrl+'login', payload)
   .then(function (response) {
     console.log(response);
     if(response.data.code == 200){
       console.log("Login successfull");
       var uploadScreen=[];
       uploadScreen.push(<UploadPage appContext={self.props.appContext} role={self.state.loginRole}/>)
       self.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen})
     }
     else if(response.data.code == 204){
       console.log("Username password do not match");
       alert(response.data.success)
     }
     else{
       console.log("Username does not exists");
       alert("Username does not exist");
     }
   })
   .catch(function (error) {
     console.log(error);
   });
  }
  render() {
    return (
      <div class='lg8'>
      {this.state.loginIcon}
        {this.state.loginComponent}
      </div>
    );
  }
}

const style = {
  margin: 15,
};

export default Login;
