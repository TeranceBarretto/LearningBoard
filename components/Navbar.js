/*import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import Home from './Home';
import Reports from './Reports';
import Products from './Products';
import AppBar from '@material-ui/core/AppBar';
import ReactShadowScroll from 'react-shadow-scroll';


function Navbar() {
  const [sidebar, setSidebar] = useState(true);
  const showSidebar = () => setSidebar(!sidebar);

  
  return (
    <>
      
      
      <IconContext.Provider value={{ color: '#fff' }}>

        <nav className={sidebar ? 'nav-menu active' : 'nav-menu active'}>
          
          <ul className='nav-menu-items' onClick={showSidebar}>

            {SidebarData.map((item, index) => {
              return (
                
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon }
                    <span>{item.title}</span>
                  </Link>
                </li>
                
              );
            })}

          </ul>
        </nav>

      </IconContext.Provider>
      
      
    </>
    
  );
  
}

export default Navbar;
*/

import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import './App.css';
import logo from './logo.png';
import test from './test.gif';
import FolderIcon from '@material-ui/icons/Folder';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';

console.log(logo);
console.log(test);
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

const useStyles = makeStyles((theme) => ({
  root: {
    /*flexGrow: 1,*/
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height:'100%',
    'flex-direction': 'row',

  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
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
      <div class='video-notes-display'>
      <div class='top-bar'>
      <div  class='header-text'>
      <h1>&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; Video Links &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;</h1>
      </div></div>
      <p><b> &nbsp; Monday</b></p>
      &nbsp; * Video Link 1
      <p>&nbsp; * Video Link 2</p>
      </div>
      <div class='video-notes-display'>
      <div class='top-bar'>
      <div  class='header-text'>
      <h1>&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; Lecture Note Links &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;</h1>
      </div></div>
      <p><b>&nbsp; Monday</b></p>
      &nbsp; * Notes Link 1.pdf
      <p>&nbsp; * Notes Link 2.pdf</p>
      </div>
      <div class='video-notes-display'>
      <div class='top-bar'>
      <div  class='header-text'>
      <h1>&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; Other Attachment Links &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;</h1>
      </div></div>
      <p><b>&nbsp; Monday</b></p>
      &nbsp; * Homework Link.pdf
      <p>&nbsp; * Assignment Link.pdf</p>
      </div>.
      </TabPanel>
      <TabPanel value={value} index={1}>
      <div class='video-notes-display'>
      <div class='top-bar'>
      <div  class='header-text'>
      <h1>&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; Video Links &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;</h1>
      </div></div>
      <p><b>&nbsp; Tuesday</b></p>
      &nbsp; * Video Link 1
      <p>&nbsp; * Video Link 2</p>
      </div>
      <div class='video-notes-display'>
      <div class='top-bar'>
      <div  class='header-text'>
      <h1>&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; Lecture Note Links &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;</h1>
      </div></div>
      <p><b>&nbsp; Tuesday</b></p>
      &nbsp; * Notes Link 1.pdf
      <p>&nbsp; * Notes Link 2.pdf</p>
      </div>
      <div class='video-notes-display'>
      <div class='top-bar'>
      <div  class='header-text'>
      <h1>&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; Other Attachment Links &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;</h1>
      </div></div>
      <p><b>&nbsp; Tuesday</b></p>
      &nbsp; * Homework Link.pdf
      <p>&nbsp; * Assignment Link.pdf</p>
      </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <div class='video-notes-display'>
      <div class='top-bar'>
      <div  class='header-text'>
      <h1>&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; Video Links &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;</h1>
      </div></div>
      <p><b>&nbsp; Wednesday</b></p>
      &nbsp; * Video Link 1
      <p>&nbsp; * Video Link 2</p>
      </div>
      <div class='video-notes-display'>
      <div class='top-bar'>
      <div  class='header-text'>
      <h1>&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; Lecture Note Links &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;</h1>
      </div></div>
      <p><b>&nbsp; Wednesday</b></p>
      &nbsp; * Notes Link 1.pdf
      <p>&nbsp; * Notes Link 2.pdf</p>
      </div>
      <div class='video-notes-display'>
      <div class='top-bar'>
      <div  class='header-text'>
      <h1>&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; Other Attachment Links &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;</h1>
      </div></div>
      <p><b>&nbsp; Wednesday</b></p>
      &nbsp; * Homework Link.pdf
      <p>&nbsp; * Assignment Link.pdf</p>
      </div>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <div class='video-notes-display'>
      <div class='top-bar'>
      <div  class='header-text'>
      <h1>&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; Video Links &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;</h1>
      </div></div>
      <p><b>&nbsp; Thursday</b></p>
      &nbsp; * Video Link 1
      <p>&nbsp; * Video Link 2</p>
      </div>
      <div class='video-notes-display'>
      <div class='top-bar'>
      <div  class='header-text'>
      <h1>&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; Lecture Note Links &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;</h1>
      </div></div>
      <p><b>&nbsp; Thursday</b></p>
      &nbsp; * Notes Link 1.pdf
      <p>&nbsp; * Notes Link 2.pdf</p>
      </div>
      <div class='video-notes-display'>
      <div class='top-bar'>
      <div  class='header-text'>
      <h1>&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; Other Attachment Links &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;</h1>
      </div></div>
      <p><b>&nbsp; Thurday</b></p>
      &nbsp; * Homework Link.pdf
      <p>&nbsp; * Assignment Link.pdf</p>
      </div>
      </TabPanel>
      <TabPanel value={value} index={4}>
      <div class='video-notes-display'>
      <div class='top-bar'>
      <div  class='header-text'>
      <h1>&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; Video Links &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;</h1>
      </div></div>
      <p><b>&nbsp; Friday</b></p>
      &nbsp; * Video Link 1
      <p>&nbsp; * Video Link 2</p>
      </div>
      <div class='video-notes-display'>
      <div class='top-bar'>
      <div  class='header-text'>
      <h1>&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; Lecture Note Links &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;</h1>
      </div></div>
      <p><b>&nbsp; Friday</b></p>
      &nbsp; * Notes Link 1.pdf
      <p>&nbsp; * Notes Link 2.pdf</p>
      </div>
      <div class='video-notes-display'>
      <div class='top-bar'>
      <div  class='header-text'>
      <h1>&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; Other Attachment Links &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;</h1>
      </div></div>
      <p><b>&nbsp; Friday</b></p>
      &nbsp; * Homework Link.pdf
      <p>&nbsp; * Assignment Link.pdf</p>
      </div>
      </TabPanel>
      <TabPanel value={value} index={5}>
      <div class='video-notes-display'>
      <div class='top-bar'>
      <div  class='header-text'>
      <h1>&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; Video Links &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;</h1>
      </div></div>
      <p><b>&nbsp; Saturday</b></p>
      &nbsp; * Video Link 1
      <p>&nbsp; * Video Link 2</p>
      </div>
      <div class='video-notes-display'>
      <div class='top-bar'>
      <div  class='header-text'>
      <h1>&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; Lecture Note Links &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;</h1>
      </div></div>
      <p><b>&nbsp; Saturday</b></p>
      &nbsp; * Notes Link 1.pdf
      <p>&nbsp; * Notes Link 2.pdf</p>
      </div>
      <div class='video-notes-display'>
      <div class='top-bar'>
      <div  class='header-text'>
      <h1>&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; Other Attachment Links &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;</h1>
      </div></div>
      <p><b>&nbsp; Saturday</b></p>
      &nbsp; * Homework Link.pdf
      <p>&nbsp; * Assignment Link.pdf</p>
      </div>
      </TabPanel>
      <TabPanel value={value} index={6}>
      <div class='video-notes-display'>
      <div class='top-bar'>
      <div  class='header-text'>
      <h1>&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; Sunday-Holiday &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;</h1>
      </div></div>
      <h1>&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;<img src={test} alt="Test" height="150px" ></img></h1>
      </div>
      </TabPanel>
    </div>
  );
}
