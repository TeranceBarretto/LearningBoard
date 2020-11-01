import {Switch,Route} from 'react-router-dom';
import React, { Component } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import logo from './logo.png';
import icon from './icon.png';
import Profile from './Profile';
import "./App.css";
import './style.css';
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./select.js";

/*import {Linking} from 'react-native';*/



const localizer = momentLocalizer(moment);

console.log(logo);
console.log(icon);

class App extends Component {

  state = {

    events: [

      {
        title: "English",
        start: moment().toDate(),
        end: moment().add(1,"hours").toDate()

      },
      {

        start: moment().add(2,"hour").toDate(),
        end: moment().add(3,"hours").toDate(),
        title: "Hindi"
      },
      {

        start: moment().add(4,"hour").toDate(),
        end: moment().add(5,"hours").toDate(),
        title: "Science"
      }

    ]

  }; 

  render() {

    
    return (
      
      <div className="App">
        <p><img src={icon} alt="Icon"></img></p>
        <p> <img src={logo} alt="Logo"></img>
          <Calendar
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="week"
          views={['week','day','agenda']}
          events={this.state.events}
          onSelectEvent={event => alert(event.title)}
          /*onPress={() => Linking.openURL('https://www.google.com') }*/
          style={{ height: "80vh", backgroundColor: "white" , borderTopColor: "transparent"}}>
          </Calendar>
          </p>
   
      </div>

    );

  }

}



export default App;
