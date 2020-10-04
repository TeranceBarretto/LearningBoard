import React, { Component } from 'react';
import { render } from 'react-dom';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { connect } from "react-redux";
import {scheduleMapper} from "../helpers/scheduleMapper.js";
import UserService from "../services/user.service";

const localizer = momentLocalizer(moment);

class TimeTable extends Component {

  constructor(props) {
    super(props);

    this.state = {
      schedule: []
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

  render() {
    const { user: currentUser } = this.props;
    const now = new Date();
    return (
      <div>
        <div style={{ height: '500pt'}}>
          <Calendar
            events={this.state.schedule}
            step={30}
            view='week'
            defaultDate={moment().toDate()}
            localizer={localizer}
            startAccessor="start"
            endAccessor="end"
          />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { user } = state.auth;
  return {
    user,
  };
}

export default connect(mapStateToProps)(TimeTable);