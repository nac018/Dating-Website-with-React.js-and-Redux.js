import React from 'react';

const LoginForm = ({form, handleInputChange, onSubmit}) => {
  return (
    <form id="loginForm">
      <label htmlFor={"username"}>Username</label>
      <br/>
      <input className="quarter_width" id="username" type="text" name="username" defaultValue={form.username}
             onChange={handleInputChange}/>
      <br/>

      <label htmlFor={"password"}>Password</label>
      <br/>
      <input className="quarter_width" id="password" type="password" name="password"
             defaultValue={form.password} onChange={handleInputChange}/>
      <br/>

      <input type="submit" onClick={onSubmit} value="Submit"/>
    </form>
  );
};

LoginForm.propTypes = {
  form: React.PropTypes.object.isRequired,
  handleInputChange: React.PropTypes.func.isRequired,
  onSubmit: React.PropTypes.func.isRequired
};

export default LoginForm;
