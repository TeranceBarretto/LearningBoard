import React from 'react';
import './App.css';
import TabNav from './components/TabNav';
import Tab from './components/Tab';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: 'Home',
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
          successMessage: 'Welcome ' + this.state.username })
    }
  }
  reset(){
    let username =this.state.username;
    let password =this.state.password;
      this.setState({
      username:'',
      password:'',
      successMessage: ' ' 
    })
  }
  setSelected = (tab) => {
    this.setState({ selected: tab});
  }
  render() {
    return (
      <div className="App mt=">
        <TabNav tabs={['Login','Courses', 'Announcement', 'Grades', 'Settings', 'About Organization']} selected={ this.state.selected } setSelected={ this.setSelected }>
          <Tab isSelected={ this.state.selected === 'Courses' }>
            <ul>
              <li>Chemistry</li>
              <li>Physics</li>
              <li>English</li>
            </ul> 
          </Tab>
          <Tab isSelected={ this.state.selected === 'Announcement' }>
            <h1>Classes will be online starting Oct 01, 2020</h1>
          </Tab>
          <Tab isSelected={ this.state.selected === 'Grades' }>
            <ul>
              <li>Maths= <h4>A-</h4></li>
              <li>Physics= <h4>B+</h4></li>
              <li>English= <h4>B-</h4></li>
            </ul>       
          </Tab>
          <Tab isSelected={ this.state.selected === 'Settings' }>
            <h4>Need to subscribe for premium membership to avail change of settings</h4>
          </Tab>
          <Tab isSelected={ this.state.selected === 'About Organization' }>
            <h1>Developed as a startup project by a group of Goan elite scholars</h1>    
          </Tab>
          <Tab isSelected={ this.state.selected === 'Login' }>
            <h4>Learning Board Login</h4>
            User name:<input type='text' id='username' value={this.state.username} onChange={(e)=>this.setValue(e)}/>
            Password :<input type='password' id ='password' value={this.state.password} onChange={(e)=>this.setValue(e)}/>
            <p>{this.state.errorMessage}</p>
             <p>{this.state.successMessage}</p>
             <button onClick={(e)=>this.submit(e)}>Click me </button>
             <button onClick={this.reset}>Reset</button>      
          </Tab>  
        </TabNav>
      </div>
    );
  }
}
export default App;