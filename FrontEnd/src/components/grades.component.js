import React, { Component } from "react";
import { connect } from "react-redux";

class Grades extends Component {

  constructor(props) {
    super(props)
    console.log(props);
  }

  
  componentDidMount() {
  }

  render() {
    const { user: currentUser } = this.props;

    return (
      <div className="construction">
        <img src={ require('../images/construction.gif') } width="750" alt="Sagar's welcome" />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { user } = state.auth;
  const course = state.course.course;
  return {
    user, course
  };
}

export default connect(mapStateToProps)(Grades);