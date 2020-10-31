import React, { Component } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { connect } from "react-redux";
import {scheduleMapper} from "../helpers/scheduleMapper.js";
import UserService from "../services/user.service";
import LiveFeed from "./livefeed.component";
import { setcourse } from "../actions/course";
import  { Redirect } from 'react-router-dom';

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
        this.setState({
          schedule:
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

  onEventClick(event)
  {
    const { dispatch, history } = this.props;
    dispatch(setcourse(event.id));
    this.setState({courseClicked: true});
    //<Redirect to='/coursecontent/livefeed'  />;
    //history.push("/coursecontent/livefeed");
    //window.location.reload();
  }

  render() {
    return (
        <div>
          { this.state.courseClicked ? <Redirect to="/coursecontent/livefeed" />
          : 
            <div style={{ height: '500pt'}}>
              <Calendar
                events={this.state.schedule}
                onSelectEvent={event => this.onEventClick(event)}
                step={30}
                view='week'
                defaultDate={moment().toDate()}
                localizer={localizer}
                startAccessor="start"
                endAccessor="end"
              />
            </div>
          }
        </div>
    );
  }
}

function mapStateToProps(state) {
  const { user } = state.auth;
  return {
    user
  };
}

export default connect(mapStateToProps)(TimeTable);