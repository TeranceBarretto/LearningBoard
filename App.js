/*
import React, { Component } from 'react';
import './App.css';
import LoginScreen from './Loginscreen';
import Calender from './Calender'
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
class App extends Component {
  componentWillMount(){
    var loginPage =[];
    loginPage.push(<LoginScreen appContext={this} key={"login-screen"}/>);
    this.setState({
                  loginPage:loginPage
                    })
  }
  render() {
    return (
      <div className="App">
        {this.state.loginPage}
      </div>
    );
  }
}

export default App;

*/

import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';

import Event from '@material-ui/icons/Event';
import Event1 from './test/unnamed.png';
import Assessment from '@material-ui/icons/Assessment';
import Person from '@material-ui/icons/Person';
import Group from '@material-ui/icons/Group';
import SportsSoccer from '@material-ui/icons/SportsSoccer';
import Palette from '@material-ui/icons/Palette';
import Call from '@material-ui/icons/Call';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import './App.css';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
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
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    /*flexGrow: 1,*/
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: '100%',
    borderRadius: 25,
    'flex-direction': 'column',
    margin: '0 auto',
    padding: '0 40px',
  },
  tabs: {
    borderLeft: `1px solid ${theme.palette.divider}`,
  },

}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue    ] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (

    <div className={classes.root}>
    <div class='top-bar'>

    <div  class='header-text'>
        <h1>&nbsp;   LEARNING BOARD</h1>
    </div>
    <div class="search-bar">
        <TextField id="filled-search" label="Search field" type="search"  variant="filled" />
     </div>
     <div class='user-profile-icon'>
        <AccountCircleIcon />
     </div>
    </div>
    <div class= 'tab-tab-details' >
    <div class = 'tab-bar'>
      <Tabs
        orientation="vertical"
        //variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab style={{height: "100px"}} icon={<Event />} {...a11yProps(0)} />
        <Tab style={{height: "100px"}} icon={<Assessment />}  {...a11yProps(1)} />
        <Tab style={{height: "100px"}} icon={<Person />}  {...a11yProps(2)} />
        <Tab style={{height: "100px"}} icon={<Group />}  {...a11yProps(3)} />
        <Tab style={{height: "100px"}} icon={<SportsSoccer />}  {...a11yProps(4)} />
        <Tab style={{height: "100px"}} icon={<Palette />}  {...a11yProps(5)} />
        <Tab style={{height: "100px"}} icon={<Call />}  {...a11yProps(6)} />
      </Tabs>
      </div>
      <div class='tab-details'>
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
         <iframe class = 'zoom-link' scrolling="no" src="https://northeastern.zoom.us/j/8689484373?pwd=b2tuV1g4dXRJeGpoa0pkOURudDFFUT09"  allow="microphone; camera; fullscreen">
      </iframe>
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
      </div>
      </div>
    </div>
  );
}
