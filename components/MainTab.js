import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import './App.css';
import Event from '@material-ui/icons/Event';
import Assessment from '@material-ui/icons/Assessment';
import Person from '@material-ui/icons/Person';
import Group from '@material-ui/icons/Group';
import SportsSoccer from '@material-ui/icons/SportsSoccer';
import Palette from '@material-ui/icons/Palette';
import Call from '@material-ui/icons/Call';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

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
        <Box p={10}>
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
    height: '100%',
    borderRadius: 25,
    'flex-direction': 'row',
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
    <div class = 'tab-bar'>
      <Tabs
        orientation="vertical"
        //variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab style={{height: "70px", width: "78px"}} icon={<Event />} {...a11yProps(0)} />
        <Tab style={{height: "70px", width: "78px"}} icon={<Assessment />}  {...a11yProps(1)} />
        <Tab style={{height: "70px", width: "78px"}} icon={<Person />}  {...a11yProps(2)} />
        <Tab style={{height: "70px", width: "78px"}} icon={<Group />}  {...a11yProps(3)} />
        <Tab style={{height: "70px", width: "78px"}} icon={<SportsSoccer />}  {...a11yProps(4)} />
        <Tab style={{height: "70px", width: "78px"}} icon={<Palette />}  {...a11yProps(5)} />
        <Tab style={{height: "70px", width: "78px"}} icon={<Call />}  {...a11yProps(6)} />
      </Tabs>
      </div>
    </div>
    
  );
}