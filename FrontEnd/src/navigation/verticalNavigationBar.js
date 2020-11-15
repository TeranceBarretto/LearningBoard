import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Event from '@material-ui/icons/Event';
import Assessment from '@material-ui/icons/Assessment';
import Person from '@material-ui/icons/Person';
import Group from '@material-ui/icons/Group';
import SportsSoccer from '@material-ui/icons/SportsSoccer';
import Palette from '@material-ui/icons/Palette';
import Call from '@material-ui/icons/Call';
import { Redirect } from "react-router-dom";
import '../css/verticalNavigationBar.css'

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

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalNavigationPanel() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
        return (
            <div className='verticalNavigationBar'>
            <Tabs
                orientation="vertical"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
            >
                <Tab style={{height: "100px"}} icon={<Event />} {...a11yProps(0)} />
                <Tab style={{height: "100px"}} icon={<Assessment />}  {...a11yProps(1)} />
                <Tab style={{height: "100px"}} icon={<Person />}  {...a11yProps(2)} />
                <Tab style={{height: "100px"}} icon={<Group />}  {...a11yProps(3)} />
                <Tab style={{height: "100px"}} icon={<SportsSoccer />}  {...a11yProps(4)} />
                <Tab style={{height: "100px"}} icon={<Palette />}  {...a11yProps(5)} />
                <Tab style={{height: "100px"}} icon={<Call />}  {...a11yProps(6)} />
            </Tabs>
            <TabPanel value={value} index={0}>
              <Redirect to='/calendar' push={true}/>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Redirect to={"/grades"} push={true}/>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Redirect to={"/careers"} push={true}/>
            </TabPanel>
            <TabPanel value={value} index={3}>
              <Redirect to={"/discussionForum"} push={true}/>
            </TabPanel>
            <TabPanel value={value} index={4}>
              <Redirect to={"/sports"} push={true}/>
            </TabPanel>
            <TabPanel value={value} index={5}>
              <Redirect to={"/cultural"} push={true}/>
            </TabPanel>
            <TabPanel value={value} index={6}>
              <Redirect to={"/contactUs"} push={true}/>
            </TabPanel>
            </div>
        );
}