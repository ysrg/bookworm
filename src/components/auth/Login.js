import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firebaseConnect } from 'react-redux-firebase';
import MyForm from "./MyForm";

class Login extends Component {
  render() {
    const {dispatch, staticContext, ...rest} = this.props
    return (
          <MyForm {...rest} source='login'/>
    );
  }
}

export default firebaseConnect()(Login);
