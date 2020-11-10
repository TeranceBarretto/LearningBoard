/*import {Switch,Route} from 'react-router-dom';
import React, { Component } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import logo from './logo.png';
import icon from './icon.png';
import "./App.css";
import './style.css';
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./select.js";
import Tabs from "./Tabs.js"; 
import "./App.css";

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
          style={{ height: "80vh", backgroundColor: "white" , borderTopColor: "transparent"}}>
          </Calendar>
          </p>
   
      </div>

    );

  }

}

export default App;
*/

/*import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Nav from './components/Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Products from './pages/Products';
import logo from './logo.png';
import io from './io.PNG';
import ReactShadowScroll from 'react-shadow-scroll';

console.log(logo);
console.log(io);

function App() {
    return (
    <>
    
    <div functionName="App"></div>

      <Router>
      <img src={logo} alt="Logo"></img> 
      <img src={io} alt="Io"></img> 
        <ReactShadowScroll>     
        <Navbar />
        </ReactShadowScroll> 
        <Switch>
          <Route path='/home' exact component={Home} />
          <Route path='/reports' component={Reports} />
          <Route path='/products' component={Products} />
        </Switch>
      </Router>
      
    </>
    );
  }

export default App; */


import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import Videocam from '@material-ui/icons/Videocam';
import AccessAlarms from '@material-ui/icons/AccessAlarms';
import TrendingUp from '@material-ui/icons/TrendingUp';
import './App.css';
import Navbar from './components/Navbar';
import VerticalTabs from './components/MainTab';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import logo from './logo.png';

console.log(logo);
function TabPanel(props) {

  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >

      {value === index && (
        <Box p={1}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: '100%',
    height:'100%',
    borderRadius: 25,
    'flex-direction': 'row',
  },
  tabs: {
    borderLeft: `1px solid ${theme.palette.divider}`,
  },
}));

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Router>
    <img src={logo} alt="Logo"></img> 
    <div className={classes.root}>
    <div class='top-bar'> 
    <div  class='header-text'>
    <h1>&nbsp; &nbsp; English</h1>
    </div></div>

      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          className="dashboard-tabs"
          variant="fullWidth"
          style={{ background: '#376558' }}
        >
          <Tab style={{height: "50px"}} icon={<HourglassEmptyIcon />} {...a11yProps(0)} />
          <Tab style={{height: "50px"}} icon={<Videocam />} {...a11yProps(1)} />
          <Tab style={{height: "50px"}} icon={<AccessAlarms />} {...a11yProps(2)} />
          <Tab style={{height: "50px"}} icon={<TrendingUp />} {...a11yProps(3)} />
               
        </Tabs>
      </AppBar>  
      
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Navbar/>
          <VerticalTabs/>
        </TabPanel>

        <TabPanel value={value} index={1} dir={theme.direction}>
        <div class= 'video-link-notes'>
          <div class='video-link'>
              <iframe width='100%' height='100px' class = 'zoom-link' scrolling="no" src="https://northeastern.zoom.us/j/8689484373?pwd=b2tuV1g4dXRJeGpoa0pkOURudDFFUT09"  allow="microphone; camera; fullscreen">
              </iframe>
          </div>
          <div class='video-notes-header'>
            Video Description / Pop up questions
          </div>
          <div class='video-notes-display'>
            Video Description
          </div>
        </div>
        <div class = 'class-notes-video'>
          <div class='class-notes-header'>
            Class Notes/Attachments
          </div>
          <div class='display-notes-video'>
            Lecture Notes
          </div>
        </div>
        </TabPanel>

        <TabPanel value={value} index={2} dir={theme.direction}>
         <VerticalTabs/>
        </TabPanel>

        <TabPanel value={value} index={3} dir={theme.direction}>
         <VerticalTabs/>
        </TabPanel>
        
    </div>
    </Router>
  );
}



