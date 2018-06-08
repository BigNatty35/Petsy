import React from 'react';
import { withRouter } from 'react-router-dom';
import { closeModal } from '../../actions/modal_actions';

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
    const user = Object.assign({}, this.state);
    this.props.processForm({ username: "carey1", password: "password" }).then(this.props.closeModal());
  }

  handleDemoSignupSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.demoForm({ username: "carey1", password: "password" }).then(this.props.closeModal());
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(this.props.closeModal());
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
    if (this.props.formType === "login") {

    
    return (
      <div className="login-form-container">
        {this.renderErrors()}
        <form onSubmit={this.handleSubmit} className="login-form-box">
          Regretsy!
          <br />
          <div className="login-form">
            <br />
            <label>Username:
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
              />
            </label>
            <br />
            <label>Password:
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
              />
            </label>
            <br />
            <input className="session-submit" type="submit" value={this.props.formType} />
            <input onClick={this.handleDemoSubmit} className="session-submit" type="submit" value={"DEMO"} />
          </div>
        </form>
      </div>
    );
    } else {
      return (
        <div className="login-form-container">
          <form className="login-form-box">
            Regretsy!
          <br />
            {this.renderErrors()}
            <div className="login-form">
              <br />
              <label>Username:
              <input type="text"
                  value={this.state.username}
                  onChange={this.update('username')}
                  className="login-input"
                />
              </label>
              <br />
              <label>Email:
              <input type="text"
                  value={this.state.email}
                  onChange={this.update('email')}
                  className="login-input"
                />
              </label>
              <br />
              <label>Password:
              <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="login-input"
                />
              </label>
              <br />
              <input onClick={this.handleSubmit} className="session-submit" type="submit" value={this.props.formType} />
              <input onClick={this.handleDemoSignupSubmit} className="session-submit" type="submit" value={"DEMO"}/>
            </div>
              
          </form>

        </div>
      );
    }

  }
}

export default withRouter(SessionForm);