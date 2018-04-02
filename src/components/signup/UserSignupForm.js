import React from 'react';

const UserSignupForm = ({form, handleInputChange, onSubmit}) => {
  return (
    <div id="form_container">
      <h3>User Registration</h3>

      <div>
        <a href=""><img id="placeholder" src={require('../../images/profile.svg')} alt=""/></a>
      </div>

      <br/>

      <form id="form">

        <label htmlFor="username">Username</label>
        <br/>
        <input type="text" className="max_width" id="username" name="username" placeholder="Username"
               onChange={handleInputChange}/>
        <br/>

        <label htmlFor="password">Password</label>
        <br/>
        <input type="password" className="max_width" id="password" name="password" placeholder="Password"
               onChange={handleInputChange}/>
        <br/>

        <label htmlFor="name">Name</label>
        <br/>
        <input type="text" className="max_width" id="name" name="name" placeholder="Full Name"
               onChange={handleInputChange}/>
        <br/>

        <label htmlFor="age">Age</label>
        <br/>
        <input type="number" className="max_width" id="age" name="age" placeholder="Age"
               onChange={handleInputChange}/>
        <br/>

        <label htmlFor="phone">Phone</label>
        <br/>
        <input type="tel" className="max_width" id="phone" name="phone" placeholder="Phone"
               onChange={handleInputChange}/>
        <br/>

        <label htmlFor="city">City</label>
        <br/>
        <input type="text" className="max_width" id="city" name="city" placeholder="City"
               onChange={handleInputChange}/>
        <br/>

        <label htmlFor="ethnicity">Ethnicity</label>
        <br/>
        <input type="text" className="max_width" id="ethnicity" name="ethnicity" placeholder="Ethnicity"
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

        <label htmlFor="about_me">About</label>
        <br/>
        <textarea id="about_me" className="max_width" name="about_me"
                  placeholder="Enter something you'd like people to know about you!"
                  onChange={handleInputChange}/>
        <br/>

        <h3>Looking For</h3>
        <label htmlFor="part_sex">Sex</label>
        <select id="part_sex" name="part_sex" onChange={handleInputChange}>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <br/>

        <label htmlFor="part_age">Age</label>
        <select id="part_age" name="part_age" onChange={handleInputChange}>
          <option>23 or below</option>
          <option>26~34</option>
          <option>35~45</option>
          <option>45 or above</option>
        </select>
        <br/>

        <label htmlFor="part_ethnicity">Ethnicity</label>
        <br/>
        <input type="text" id="part_ethnicity" name="part_ethnicity" placeholder="Ethnicity" className="max_width"
               onChange={handleInputChange}/>
        <br/>

        <label htmlFor="city_dist">Distance</label>
        <select id="city_dist" name="city_dist" onChange={handleInputChange}>
          <option>4 miles or less</option>
          <option>5~14 miles</option>
          <option>15~24 miles</option>
          <option>25~34 miles</option>
          <option>35 miles or above</option>
        </select>
        <br/>

        <br/>
        <input type="submit" onClick={onSubmit} value="Submit"/>
      </form>

    </div>
  );
};

UserSignupForm.propTypes = {
  form: React.PropTypes.object.isRequired,
  handleInputChange: React.PropTypes.func.isRequired,
  onSubmit: React.PropTypes.func.isRequired
};

export default UserSignupForm;
