import React from 'react';
import './validation.scss';
import Input from '../../components/UI/Input/input';
import is from 'is_js';
import axios from "axios";

export class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFormValid: false,
      formControls: {
        name: {
          value: '',
          type: 'name',        
        },
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

  registerHandler = async() => {
    const authData ={
      email:this.state.formControls.email.value,
      password: this.state.formControls.password.value,
      returnSecureToken:true
    }
    try{
      const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBRbb41yFWidO25NlQtZAZn3YRh6ycgU0Q',authData)
      console.log(response.data)
    } catch(e){
      console.log(e)
    }
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
      <div className="form-container sign-up-container">

        <form onSubmit={this.submitHandler}>
          <h1>Create Account</h1>
          <div className="social-container">
            <button className="bnt-social">f</button>
            <button className="bnt-social">g</button>
            <button className="bnt-social">in</button>
          </div>
          <span>or use your email for registration</span>
          {this.renderInputs()}
          <button
            type="primary"
            onClick={this.registerHandler}
          >Sign Up</button>
        </form>
      </div>
    );
  }
}

export default Register;

{/* <input type="text" placeholder="Name" />
<input type="email" placeholder="Email" />
<input type="password" placeholder="Password" /> */}