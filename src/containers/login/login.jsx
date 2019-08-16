import React from 'react';
import './style.css'


export default class Login extends React.Component {
    loginHandler = () => {

    }

    registerHandler = () => {

    }

    submitHandler = event => {
        event.preventDefault()
    }
    render() {
        return (
            <div className="base-container">
                <div >
                    <h1>Registration</h1>
                    <form onSubmit={this.submitHandler} className="autform">
                        <input type="text" />
                        <input type="text" />
                        <button type="success" onClick={this.loginHandler}>Login</button>
                        <button type="primary" onClick={this.registerHandler}>Registration</button>
                    </form>
                </div>
            </div>
        )
    }

}

