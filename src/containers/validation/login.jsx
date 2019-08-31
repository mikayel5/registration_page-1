import React from 'react';
import './validation.scss'
import { NavLink } from 'react-router-dom';
import Reset from './reset';
import Input from '../../components/UI/Input/input';
import is from 'is_js';



export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFormValid: false,
      formControls: {
        email: {
          value: '',
          type: 'email',
          errorMessage: 'enter the correct email',
          valid: false,
          touched: false,
          validation: {
            required: true,
            email: true
          }
        },
        password: {
          value: '',
          type: 'password',
          errorMessage: 'enter the correct password',
          valid: false,
          touched: false,
          validation: {
            required: true,
            minLength: 6
          }
        }
      }
    }
  }

  
  loginHandler =()=>{

  }
  submitHandler = event => {
    event.preventDefault()
  }

  validateControl(value, validation) {
    if (!validation) {
      return true
    }

    let isValid = true

    if (validation.required) {
      isValid = value.trim() !== '' && isValid
    }

    if (validation.email) {
      isValid = is.email(value) && isValid
    }

    if (validation.minLength) {
      isValid = value.length >= validation.minLength && isValid
    }

    return isValid
  }

  onChangeHandler = (event, controlName) => {
    const formControls = { ...this.state.formControls }
    const control = { ...formControls[controlName] }

    control.value = event.target.value
    control.touched = true
    control.valid = this.validateControl(control.value, control.validation)

    formControls[controlName] = control

    let isFormValid = true

    Object.keys(formControls).forEach(name => {
      isFormValid = formControls[name].valid && isFormValid
    })

    this.setState({
      formControls, isFormValid
    })
  }

  renderInputs() {
    return Object.keys(this.state.formControls).map((controlName, index) => {
      const control = this.state.formControls[controlName]
      return (
        <Input
          key={controlName + index}
          type={control.type}
          value={control.value}
          valid={control.valid}
          touched={control.touched}
          label={control.label}
          shouldValidate={!!control.validation}
          errorMessage={control.errorMessage}
          onChange={event => this.onChangeHandler(event, controlName)}
        />
      )
    })
  }


  render() {
    return (
      <div className="form-container sign-in-container">
        <form onSubmit={this.submitHandler}>
          <h1>Sign in</h1>
          <div className="social-container">
            <button className="bnt-social">f</button>
            <button className="bnt-social">g</button>
            <button className="bnt-social">in</button>
          </div>
          <span>or use your account</span>
          {this.renderInputs()}
          <NavLink to="/reset">Forgot your password?</NavLink>
          <button 
          type ="success"
          onClick={this.loginHandler}
          // disabled={!this.state.isFormValid}
          >Sign In</button>
        </form>
      </div>
    );
  }
}

export default Login