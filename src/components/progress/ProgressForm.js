import React from 'react';

const ProgressForm = ({taskText, handleInputChange, addNewTask}) => {
  return (
    <div id="form_container">
      <h3>Add a New Task</h3>
      <form id="form">
        <input type="text" id="task_name" name="new_task_text" placeholder="Task Name"
               value={taskText} onChange={handleInputChange}/>
      </form>
      <br/>
      <button className="submit" onClick={addNewTask}>Submit</button>
    </div>

  );
};

ProgressForm.propTypes = {
  taskText: React.PropTypes.string.isRequired,
  handleInputChange: React.PropTypes.func.isRequired,
  addNewTask: React.PropTypes.func.isRequired,
};

export default ProgressForm;
