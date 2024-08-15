import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [enteredValues, setEnteredValues] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});

  function handleSubmit(event) {
    event.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log(enteredValues);
   
    }
  }

  function validateForm() {
    const errors = {};
    if (!enteredValues.email) {
      errors.email = 'Email is required';
    }
    if (!enteredValues.password) {
      errors.password = 'Password is required';
    }
    return errors;
  }

  function handleInputChange(identifier, value) {
    setEnteredValues(prevValues => ({
      ...prevValues,
      [identifier]: value
    }));
    setErrors(prevErrors => ({
      ...prevErrors,
      [identifier]: '' 
    }));
  }
  function setUser(){
    localStorage.setItem('email' ,'password', JSON.stringify(email,password)); 
  }
  function getUser() {
    user = JSON.parse(localStorage.getItem('email', 'password'))
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div className="cntrol-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onChange={(event) => handleInputChange('email', event.target.value)}
            value={enteredValues.email}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={(event) => handleInputChange('password', event.target.value)}
            value={enteredValues.password}
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
      </div>
      <Link to ="/Notes">
      <p className="form-actions">
     
        <button className="button">Login</button>
      </p>
      </Link>
      <h6>Don't have an account? Register now.</h6>
      <Link to="/register">
        <button type="button" className="button">Register</button>
      </Link>
    </form>
  );
}
