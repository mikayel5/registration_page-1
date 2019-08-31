import React from 'react';
import './validation.scss';
import Login from "./login";
import Register from "./register";
import Reset from './reset';
import { Route } from 'react-router-dom'


class Validation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rightPanel: false
    }
  };

  tryLogin = () => {
    this.props.history.push('/');
    this.setState((prevState) => {
      return { rightPanel: !prevState.rightPanel }
    })

  }

  tryRegister = () => {
    this.props.history.push('/register');
    this.setState((prevState) => {
      return { rightPanel: !prevState.rightPanel }

    })
}
  
  render() {
    const rightPanelClass = (this.state.rightPanel ? "right-panel-active" : " ")
    return (
      <div>
        <div className={`container ${rightPanelClass}`}>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1>Welcome Back!</h1>
                <p>To keep connected with us please login with your personal info</p>
                <button className="ghost" id="signIn" onClick={this.tryLogin}>Sign In</button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1>Hello, Friend!</h1>
                <p>Enter your personal details and start journey with us</p>
                <button  className="ghost" id="signUp" onClick ={this.tryRegister}>Sign Up</button>
                
              </div>
            </div>
          </div>

          {/* <Login />
          <Register /> */}
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/reset" component={Reset} />

        </div>
      </div>
    );
  }
}
export default Validation;