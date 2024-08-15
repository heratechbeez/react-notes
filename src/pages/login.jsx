import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [enteredValues, setEnteredValues] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      const { email, password } = enteredValues;
      if (validateCredentials(email, password)) {
        storeUser(email, password); 
        console.log("Login successful:", enteredValues);
        navigate('/Notes');
      } else {
        setErrors({ login: 'Invalid email or password' });
      }
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

  function storeUser(email, password) {
   
    localStorage.setItem('user', JSON.stringify({ email, password }));
  }

  function validateCredentials(email, password) {

    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {

      return storedUser.email === email && storedUser.password === password;
    }
    return false;
  }

  return (
    
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <div className="cntrol-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onChange={(event) => handleInputChange('email', event.target.value)}
            value={enteredValues.email}
             className="large-input"
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
             className="large-input"
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
      </div>
      {errors.login && <p className="error">{errors.login}</p>}
      <p className="form-actions">
        <button type="submit" className="button">Login</button>
      </p>
      <div className="register-container">
      <h5>Don't have an account? Register now.</h5>
      <Link to="/register">
        <button type="button" className="button">Register</button>
      </Link></div>
    </form>

  );
}
