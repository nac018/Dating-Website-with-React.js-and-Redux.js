import React from 'react';

const AgentProfileForm = ({currUser, handleInputChange, onSubmit}) => {
  return (
    <div id="form_container">
      <h3>Update Your Agent Profile</h3>

      <div>
        <a href=""><img id="placeholder" src={currUser.image_url} alt=""/></a>
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
               value={currUser.ethnicity}
               onChange={handleInputChange}/>
        <br/>


        <label htmlFor="prof">Profession</label>
        <br/>
        <input type="text" className="max_width" id="prof" name="profession" placeholder="Profession"
               value={currUser.profession}
               onChange={handleInputChange}/>
        <br/>

        <label htmlFor="sex">Sex</label>
        <br/>
        <select id="sex" name="Sex" onChange={handleInputChange} value={currUser.sex}>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <br/>
        <br/>

        <label htmlFor="description">Description</label>
        <br/>
        <textarea id="description" className="max_width" name="description" onChange={handleInputChange}
                  value={currUser.description}/>
        <br/>

        <label htmlFor="experience">Experience</label>
        <br/>
        <textarea id="experience" className="max_width" name="experience" onChange={handleInputChange}
                  value={currUser.experience}/>
        <br/>

        <input type="submit" onClick={onSubmit} value="Update"/>
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
