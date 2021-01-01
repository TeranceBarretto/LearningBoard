import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import { logout } from "../actions/auth";
import { connect } from "react-redux";

class UserLogout extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(logout());
  }

  render() {
    return (
      <Redirect to="/login" push={true}/>
    )
  }
}

function mapStateToProps(state) {
  const { user } = state.auth;
  return {
    user
  };
}


export default connect(mapStateToProps)(UserLogout);