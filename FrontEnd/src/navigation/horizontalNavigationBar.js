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
import CourseFolder from "../components/courseFolder.component";
import CourseHomework from "../components/courseHomework.component";
import LiveFeed from "../components/livefeed.component";

import { connect } from "react-redux";

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
        <Box p={4}>
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
    margin: '0 auto',
  },
}));

export function HorizontalNavigationPanel() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          className="dashboard-tabs"
          variant="fullWidth"
          style={{ background: '#376558' }}
        >
          <Tab style={{height: "100px"}} icon={<HourglassEmptyIcon />} {...a11yProps(0)} />
          <Tab style={{height: "100px"}} icon={<Videocam />} {...a11yProps(1)} />
          <Tab style={{height: "100px"}} icon={<AccessAlarms />} {...a11yProps(2)} />
          <Tab style={{height: "100px"}} icon={<TrendingUp />} {...a11yProps(3)} />
        </Tabs>
      </AppBar>
        <TabPanel value={value} index={0} dir={theme.direction}>
            <CourseFolder/>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
            <LiveFeed/>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
            <CourseHomework/>
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
            <CourseHomework/>
        </TabPanel>
    </div>
  );
}

function mapStateToProps(state) {
    const navigation = state.navigation.navigation;
    return {
        navigation
    };
  }
  
export default connect(mapStateToProps)(HorizontalNavigationPanel);