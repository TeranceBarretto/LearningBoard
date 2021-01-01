import React, { Component } from 'react';
import Routes from "../routes/routes";
import {  Router } from "react-router-dom";
import { history } from '../helpers/history';
import VerticalNavigationPanel from "../navigation/verticalNavigationBar"
import TopBar from "../navigation/topBar"
import { connect } from "react-redux";
import '../css/homeComponent.css'

class Home extends Component 
{    
    render() 
    {
        return (
            <div>
                <Router history={history}>
                    <TopBar/>
                    <div className='horizontalRow'>
                        <VerticalNavigationPanel/>
                        <Routes/>
                    </div>
                </Router>
            </div>
         )

    }
}

function mapStateToProps(state) {
    const navigation = state.navigation.navigation;
    return {
        navigation
    };
  }

  export default connect(mapStateToProps)(Home);