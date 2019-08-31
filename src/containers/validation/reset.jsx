import React from 'react';
import './validation.scss';


export class Reset extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
    
        }
      }
      render() {
        return (
          <div className="form-container sign-in-container">
            <form>
                <h1>Reset Password</h1>
              <span>Please enter your email addres to request a password reset</span>
              <input type="email" placeholder="Email" />
              <button >Reset Password</button>
            </form>
          </div>
        );
      }
}


export default Reset;