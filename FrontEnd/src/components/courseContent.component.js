import React, { Component } from "react";
import { connect } from "react-redux";
import HorizontalNavigationPanel from "../navigation/horizontalNavigationBar"
import * as NAVIGATION_TYPES from "../navigation/navigationTypes";
import '../css/courseContentComponent.css'

class CourseContent extends Component {

  constructor(props) {
    super(props)
    console.log(props);
  }


  render() {
    return (
       this.props.navigation == NAVIGATION_TYPES.NAVIGATION.COURSE_CONTENT ?  
      <div className='verticalRow'>
          <HorizontalNavigationPanel/>                   
      </div>
      : null
  )
  }
}

function mapStateToProps(state) {
  const navigation = state.navigation.navigation;
  const course = state.course.course;
  return {
      navigation, course
  };
}

export default connect(mapStateToProps)(CourseContent);