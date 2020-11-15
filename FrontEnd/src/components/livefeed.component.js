import React, { Component } from "react";
import CourseService from "../services/course.service";
import { connect } from "react-redux";
import '../css/livefeedComponent.css'

class LiveFeed extends Component {

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
      <div>
        <div class= 'video-link-notes'>
          <div class='video-link'>
            <iframe width='100%' height='500px' class = 'zoom-link' scrolling="no" src="https://northeastern.zoom.us/j/8689484373?pwd=b2tuV1g4dXRJeGpoa0pkOURudDFFUT09"  allow="microphone; camera; fullscreen">
            </iframe>
          </div>
        </div>
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

export default connect(mapStateToProps)(LiveFeed);