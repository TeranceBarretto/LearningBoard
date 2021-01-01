import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import FolderIcon from '@material-ui/icons/Folder';
import '../css/verticalFolderNavigationBar.css'

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
        <Box p={0.5}>
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

export default function VerticalFolderNavigationBar() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className='verticalFolderNavigationBar'>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
      >
        <Tab icon={<FolderIcon />}label="Week 1" {...a11yProps(0)} />
        <Tab icon={<FolderIcon />}label="Week 2" {...a11yProps(1)} />
        <Tab icon={<FolderIcon />}label="Week 3" {...a11yProps(2)} />
        <Tab icon={<FolderIcon />}label="Week 4" {...a11yProps(3)} />
        <Tab icon={<FolderIcon />}label="Week 5" {...a11yProps(4)} />
        <Tab icon={<FolderIcon />}label="Week 6" {...a11yProps(5)} />
        <Tab icon={<FolderIcon />}label="Week 7" {...a11yProps(6)} />
      </Tabs>
      <TabPanel value={value} index={0}>
      <div class='video-notes-display-folders'>
        <div class='top-bar-folders'>
          <div  class='header-text-folders'>
            <h1>Content</h1>
          </div>
        </div>
      </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <div class='video-notes-display-folders'>
        <div class='top-bar-folders'>
          <div  class='header-text-folders'>
            <h1>Content</h1>
          </div>
        </div>
      </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <div class='video-notes-display-folders'>
        <div class='top-bar-folders'>
          <div  class='header-text-folders'>
            <h1>Content</h1>
          </div>
        </div>
      </div>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <div class='video-notes-display-folders'>
        <div class='top-bar-folders'>
          <div  class='header-text-folders'>
            <h1>Content</h1>
          </div>
        </div>
      </div>
      </TabPanel>
      <TabPanel value={value} index={4}>
      <div class='video-notes-display-folders'>
        <div class='top-bar-folders'>
          <div  class='header-text-folders'>
            <h1>Content</h1>
          </div>
        </div>
      </div>
      </TabPanel>
      <TabPanel value={value} index={5}>
      <div class='video-notes-display-folders'>
        <div class='top-bar-folders'>
          <div  class='header-text-folders'>
            <h1>Content</h1>
          </div>
        </div>
      </div>
      </TabPanel>
      <TabPanel value={value} index={6}>
      <div class='video-notes-display-folders'>
        <div class='top-bar-folders'>
          <div  class='header-text-folders'>
            <h1>Content</h1>
          </div>
        </div>
      </div>
      </TabPanel>
    </div>
  );
}