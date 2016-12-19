import React from 'react';
import './LoginForm.scss';
import Widgets from '../widgets/index';
// Since this component is simple and static, there's no parent container for
// it.
class LoginForm extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.keypress = this.keypress.bind(this);
    this.login = this.login.bind(this);
  }
  
  keypress(name, value) {
    this.props.validateLoginForm(this.props.userLogin, name, value);
  }

  login() {
    this.props.login(this.props.userLogin);
  }

  render() {
    return (
      <div id="login-page" className="mdl-card mdl-shadow--6dp">
        <div className="mdl-card__title mdl-color--primary mdl-color-text--white">
          <h2 className="mdl-card__title-text">Login</h2>
        </div>
        <div className="mdl-card__supporting-text">
          <form action="#">
            <Widgets.uInput
              name="username"
              id="username"
              placeholder="Username"
              onChange={this.keypress}
              errors={this.props.userLogin.errors.username}/>
            <Widgets.uInput
              name="password"
              id="password"
              placeholder="Password"
              onChange={this.keypress}
              errors={this.props.userLogin.errors.password}/>
          </form>
        </div>
        <div className="mdl-card__actions mdl-card--border">
          <div className="mdl-layout-spacer"></div>
          <button className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"
            onClick={this.login}>Log in</button>
        </div>
      </div>
    );
  }
}

export default LoginForm;
