import React from 'react';
export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      username:'',
      password:'',
      errorMessage:'',
      successMessage:''
    }
    this.reset = this.reset.bind(this);
  }
  
  setValue(e){
    let id= e.target.id;
    let value = e.target.value;
    let username=this.state.username;
    if(value ===undefined || value === '')
      return;
    if(id==='username'){ //to seperate the value for username
    username = value;
    this.setState({
      username:username})
    }
      else{
        this.setState({
          password:e.target.value})
        
      }
  }
  submit(e){
    //to check undefined you can add multiple check condititon
    if(this.state.username ===undefined || this.state.username ===''
          || this.state.password === undefined || this.state.password === ''){
      this.setState({
        errorMessage: 'Enter both the field details'})
    }
    else{
        this.setState({
          successMessage: 'Welcome Sagar' })
    }
  }
  reset(){
    let username =this.state.username;
    let password =this.state.password;
      this.setState({
      username:'',
      password:'',
    })
  }
  render(){
  return(
  <div>
    User name:<input type='text' id='username' value={this.state.username} onChange={(e)=>this.setValue(e)}/>
    Password :<input type='password' id ='password' value={this.state.password} onChange={(e)=>this.setValue(e)}/>
    <p>{this.state.errorMessage}</p>
      <p>{this.state.successMessage}</p>
      <button onClick={(e)=>this.submit(e)}>Click me </button>
      <button onClick={this.reset}>Reset</button>
      </div>
    )
  }
}
