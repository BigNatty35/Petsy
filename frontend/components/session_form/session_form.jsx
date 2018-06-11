import React from 'react';
import { withRouter } from 'react-router-dom';
import { closeModal, openModal } from '../../actions/modal_actions';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoSubmit = this.handleDemoSubmit.bind(this);
    this.handleDemoSignupSubmit = this.handleDemoSignupSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleDemoSubmit(e) {
    e.preventDefault();
    this.props.processForm({ username: "carey2", password: "password" }).then(this.props.closeModal());
  }

  handleDemoSignupSubmit(e) {
    e.preventDefault();
    this.props.demoForm({ username: "carey2", password: "password" }).then(this.props.closeModal());
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => this.props.closeModal());
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    if (this.props.formType === "Sign In") {

      return (
        <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
            <div className="form-label"><h2>Sign In</h2></div>
          <br />
          <div className="login-form">
            <br />
            <div className="texbox">
            <label className="input-label">Username
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="input-field"
                />
            </label>
                </div>
            <br />
              <label className="input-label">Password
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="input-field"
                />
            </label>
            <br />
            <input onClick={this.handleSubmit} className="login-button"className="session-submit" type="submit" value={this.props.formType} />
            <input onClick={this.handleDemoSubmit} className="demo-button" type="submit" value={"DEMO"} />
            {this.renderErrors()}
          </div>
        </form>
      </div>
    );
    } else {
      return (
        <div className="login-form-container">
          <form className="login-form-box">
            <div className="form-label"><h2>Register</h2></div>
          <br />
            {this.renderErrors()}
            <div className="login-form">
              <br />
              <label className="input-label">Username
              <input type="text"
                  value={this.state.username}
                  onChange={this.update('username')}
                  className="input-field"
                />
              </label>
              <br />
              <label className="input-label">Email
              <input type="text"
                  value={this.state.email}
                  onChange={this.update('email')}
                  className="input-field"
                />
              </label >
              <br />
              <label className="input-label">Password
              <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="input-field"
                />
              </label>
              <br />
              <input onClick={this.handleSubmit} className="session-submit" type="submit" value={this.props.formType} />
              <div className="demo-box">
              <input onClick={this.handleDemoSignupSubmit} className="demo-button" type="submit" value={"DEMO"}/>
              </div>
            </div>
              
          </form>

        </div>
      );
    }

  }
}

export default withRouter(SessionForm);