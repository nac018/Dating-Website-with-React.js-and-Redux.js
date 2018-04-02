import React from 'react';

const AgentProfileForm = ({currUser, handleInputChange, onSubmit}) => {
  return (
    <div id="form_container">
      <h3 id="update_profile_tag">Update Profile</h3>

      <div>
        <img id="placeholder" src={currUser.image_url} alt=""/>
      </div>

      <br/>

      <form id="form">
        <label htmlFor="name">Name</label>
        <br/>
        <input type="text" className="max_width" id="name" name="name" placeholder="Full Name"
               value={currUser.name}
               onChange={handleInputChange}/>
        <br/>

        <label htmlFor="age">Age</label>
        <br/>
        <input type="number" className="max_width" id="age" name="age" placeholder="Age"
               value={currUser.age}
               onChange={handleInputChange}/>
        <br/>

        <label htmlFor="phone">Phone</label>
        <br/>
        <input type="tel" className="max_width" id="phone" name="phone" placeholder="Phone"
               value={currUser.phone}
               onChange={handleInputChange}/>
        <br/>

        <label htmlFor="city">City</label>
        <br/>
        <input type="text" className="max_width" id="city" name="city" placeholder="City"
               value={currUser.city}
               onChange={handleInputChange}/>
        <br/>

        <label htmlFor="ethnicity">Ethnicity</label>
        <br/>
        <input type="text" className="max_width" id="ethnicity" name="ethnicity" placeholder="Ethnicity"
               value={currUser.ethnicity} onChange={handleInputChange}/>
        <br/>

        <label htmlFor="prof">Profession</label>
        <br/>
        <input type="text" className="max_width" id="prof" name="profession" placeholder="Profession"
               value={currUser.profession} onChange={handleInputChange}/>
        <br/>

        <label htmlFor="sex">Sex</label>
        <br/>
        <select id="sex" name="Sex" value={currUser.sex} onChange={handleInputChange}>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <br/><br/>

        <h3>Looking For</h3>
        <br/>

        <label htmlFor="part_sex">Sex</label>
        <br/>
        <select id="part_sex" value={currUser.part_sex} onChange={handleInputChange}>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <br/>

        <br/>
        <label htmlFor="part_age">Age</label>
        <br/>
        <select id="part_age" name="part_age" value={currUser.part_age}
                onChange={handleInputChange}>
          <option>23 or below</option>
          <option>26~34</option>
          <option>35~45</option>
          <option>45 or above</option>
        </select>
        <br/>

        <br/>
        <label htmlFor="part_ethnicity">Ethnicity</label>
        <br/>
        <input type="text" className="max_width" id="part_ethnicity" name="part_ethnicity" placeholder="Ethnicity"
               value={currUser.part_ethnicity} onChange={handleInputChange}/>
        <br/>

        <label htmlFor="city_dist">Distance</label>
        <br/>
        <select id="city_dist" name="city_dist" value={currUser.distance}
                onChange={handleInputChange}>
          <option>4 miles or less</option>
          <option>5~14 miles</option>
          <option>15~24 miles</option>
          <option>25~34 miles</option>
          <option>35 miles or above</option>
        </select>

        <br/>
        <br/>
        <label htmlFor="about_me">About Me</label>
        <br/>
        <textarea className="max_width" id="about_me" name="about_me"
                  placeholder="Enter something you'd like people to know about you!"
                  value={currUser.about_me} onChange={handleInputChange}/>

        <input type="submit" value="Update"/>
      </form>

    </div>
  );
};

AgentProfileForm.propTypes = {
  currUser: React.PropTypes.object.isRequired,
  handleInputChange: React.PropTypes.func.isRequired,
  onSubmit: React.PropTypes.func.isRequired
};

export default AgentProfileForm;
