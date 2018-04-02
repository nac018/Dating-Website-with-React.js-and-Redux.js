import React from 'react';
import Header from '../../components/common/BlankHeader';

const AgentSignupForm = ({form, handleInputChange, onSubmit}) => {
  return (
    <div>
      <Header/>
      <div id="form_container">
        <h3>Agent Registration</h3>

        <div>
          <a href=""><img id="placeholder" src={require('../../images/profile.svg')} alt=""/></a>
        </div>

        <br/>

        <form id="form">

          <label htmlFor="username">Username</label>
          <br/>
          <input type="text" className="max_width" id="username" name="username" placeholder="Username"
                 defaultValue=""
                 onChange={handleInputChange}/>
          <br/>

          <label htmlFor="password">Password</label>
          <br/>
          <input type="password" className="max_width" id="password" name="password" placeholder="Password"
                 onChange={handleInputChange}/>
          <br/>

          <label htmlFor="name">Name</label>
          <br/>
          <input type="text" className="max_width" id="name" name="name" placeholder="Full Name" defaultValue=""
                 onChange={handleInputChange}/>
          <br/>

          <label htmlFor="age">Age</label>
          <br/>
          <input type="number" className="max_width" id="age" name="age" placeholder="Age"
                 onChange={handleInputChange}/>
          <br/>

          <label htmlFor="phone">Phone</label>
          <br/>
          <input type="tel" className="max_width" id="phone" name="phone" placeholder="Phone" defaultValue=""
                 onChange={handleInputChange}/>
          <br/>

          <label htmlFor="city">City</label>
          <br/>
          <input type="text" className="max_width" id="city" name="city" placeholder="City" defaultValue=""
                 onChange={handleInputChange}/>
          <br/>

          <label htmlFor="ethnicity">Ethnicity</label>
          <br/>
          <input type="text" className="max_width" id="ethnicity" name="ethnicity" placeholder="Ethnicity"
                 defaultValue=""
                 onChange={handleInputChange}/>
          <br/>


          <label htmlFor="prof">Profession</label>
          <br/>
          <input type="text" className="max_width" id="prof" name="profession" placeholder="Profession"
                 onChange={handleInputChange}/>
          <br/>

          <label htmlFor="sex">Sex</label>
          <br/>
          <select id="sex" name="Sex" onChange={handleInputChange}>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <br/>
          <br/>

          <label htmlFor="description">Description</label>
          <br/>
          <textarea id="description" className="max_width" name="description" onChange={handleInputChange}
                    defaultValue=""/>
          <br/>

          <label htmlFor="experience">Experience</label>
          <br/>
          <textarea id="experience" className="max_width" name="experience" onChange={handleInputChange}
                    defaultValue=""/>
          <br/>

          <input type="submit" onClick={onSubmit} value="Submit"/>
        </form>

      </div>
    </div>
  );
};

AgentSignupForm.propTypes = {
  form: React.PropTypes.object.isRequired,
  handleInputChange: React.PropTypes.func.isRequired,
  onSubmit: React.PropTypes.func.isRequired
};

export default AgentSignupForm;
