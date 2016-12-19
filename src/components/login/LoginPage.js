import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from './LoginActions';
import LoginForm from './LoginForm';

export const LoginPage = (props) => {
  return (
    <LoginForm
      login={props.actions.login}
      userLogin={props.userLogin}
      validateLogin={props.actions.validateLogin}
    />
  );
};

LoginPage.propTypes = {
  actions: PropTypes.object.isRequired,
  userLogin: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    userLogin: state.userLogin
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
