import React, { Component } from "react";
import CourseService from "../services/course.service";
import { connect } from "react-redux";

class CourseHomework extends Component {

  constructor(props) {
    super(props)
    console.log(props);
  }

  
  componentDidMount() {
    CourseService.getCourseLiveFeed(this.props.course).then(
      response => {
        this.setState({
          schedule: response.data
        });
      },
      error => {
        this.setState({
          schedule: error.response
        });
      }
    )
  }

  render() {
    const { user: currentUser } = this.props;

    return (
      <div className="courseContentContruction">
        <img src={ require('../images/construction.gif') } width="750" />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const navigation = state.navigation.navigation;
  return {
      navigation
  };
}

export default connect(mapStateToProps)(CourseHomework);