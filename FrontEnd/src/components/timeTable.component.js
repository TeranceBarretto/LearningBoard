import React, { Component } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { connect } from "react-redux";
import {scheduleMapper} from "../helpers/scheduleMapper.js";
import UserService from "../services/user.service";
import { setcourse } from "../actions/course";
import { setnavigation } from "../actions/navigation";
import  { Redirect } from 'react-router-dom';
import { logout } from "../actions/auth";
import * as NAVIGATION_TYPES from "../navigation/navigationTypes";
import '../css/calendar.css'

const localizer = momentLocalizer(moment);

class TimeTable extends Component {

  constructor(props) {
    super(props);

    this.state = {
      schedule: [],
      courseClicked: false
    };
  }

  componentDidMount() {
    const { user: currentUser } = this.props;
    UserService.getUserSchedule(currentUser.userId).then(
      response => {
        this.setState({
          schedule: scheduleMapper(response.data)
        });
      },
      error => {
        if(error.response.status == 403)
        {
          this.props.dispatch(logout());
        }
      }
    );
  }

  onEventClick(event)
  {
    const { dispatch } = this.props;
    dispatch(setnavigation(NAVIGATION_TYPES.NAVIGATION.COURSE_CONTENT))
    dispatch(setcourse(event.id));
    this.setState({courseClicked: true});
  }

  render() {
    return (
      this.state.courseClicked ? <Redirect to={"/coursecontent"} push={true}/> 
        : 
        <div>
            <Calendar
              events={this.state.schedule}
              onSelectEvent={event => this.onEventClick(event)}
              defaultView='week'
              defaultDate={new Date()}
              views={['week','day','agenda']}
              localizer={localizer}
              style={{ height: "80vh", backgroundColor: "white" , borderTopColor: "transparent"}}
            />
        </div>
    )
  }
}

function mapStateToProps(state) {
  const { user } = state.auth;
  return {
    user
  };
}

export default connect(mapStateToProps)(TimeTable);