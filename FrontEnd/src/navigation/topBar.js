import React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import '../css/topBar.css'

export default function TopBar() {
    return (
        <div className='top-bar'>
        <div className='top-bar-details'>

        <div className='header-text'>
            <h1>&nbsp; LEARNING BOARD</h1>
        </div>
        <div className='user-profile-icon'>
            <AccountCircleIcon 
                className="svg_icons"
            />
        </div>
        </div> 
        </div>
        );
}