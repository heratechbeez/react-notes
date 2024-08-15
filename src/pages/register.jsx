import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import bcrypt from 'bcryptjs';

export default function Register() {
  const [enteredValues, setEnteredValues] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setUser(
        enteredValues.email,
        enteredValues.password,
        enteredValues.firstName,
        enteredValues.lastName
      );
      console.log(enteredValues);
      navigate('/login'); 
    }
  }

  function setUser(email, password, firstName, lastName) {
    const hashedPassword = bcrypt.hashSync(password, 10); // Hash the password
    localStorage.setItem('user', JSON.stringify({ email, password: hashedPassword, firstName, lastName }));
  }

  function validateForm() {
    const errors = {};
    if (!enteredValues.email) {
      errors.email = 'Email is required';
    }
    if (!enteredValues.password) {
      errors.password = 'Password is required';
    }
    if (!enteredValues.firstName) {
      errors.firstName = 'First Name is required';
    }
    if (!enteredValues.lastName) {
      errors.lastName = 'Last Name is required';
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

  return (
  
    <form onSubmit={handleSubmit}>
      <h1>Register</h1>
      <div className="control">
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

      <div className="control-row">
        <div className="control">
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

      <div className="control-row">
        <div className="control">
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            name="first-name"
            onChange={(event) => handleInputChange('firstName', event.target.value)}
            value={enteredValues.firstName}
          />
          {errors.firstName && <p className="error">{errors.firstName}</p>}
        </div>

        <div className="control">
          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            name="last-name"
            onChange={(event) => handleInputChange('lastName', event.target.value)}
            value={enteredValues.lastName}
          />
          {errors.lastName && <p className="error">{errors.lastName}</p>}
        </div>
      </div>
      <p className="form-actions">
        <button type="submit" className="button">
          Register
        </button>
      </p>
      <div className="register-footer">
      <h5>Already have an account? Log in.</h5> 
      <Link to="/login"> 
        <button type="button" className="button">Login</button>
      </Link></div>
    </form>
      
  );
}
