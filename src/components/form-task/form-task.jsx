import React, {useState} from "react";
import "./form-task.css";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types";
import {postTaskAPI} from "../../state/server-api";

function FormTask ({setTasks}) {

  const [textInput, setTextInput] = useState("");

  const onPostChange = (e) => {
    setTextInput(e.target.value);
  };

  const onAddFormEnter = (e) => {
    if (e.keyCode === 13 && !e.ctrlKey) {
      postTaskAPI(setTasks,textInput, false, setTextInput);
    }
    return true;
  };

  const onAddTask = () => {
    postTaskAPI(setTasks,textInput, false, setTextInput);
  };

  return (
    <div className="form-task">
      <div className="form">
        <TextField
          className="textarea-form"
          onChange={onPostChange}
          id="outlined-multiline-flexible"
          label="Task"
          multiline
          rowsMax={4}
          value= {textInput}
          variant="outlined"
          onKeyUp ={onAddFormEnter}
        />
        <Button 
          className="btn-form"
          onClick={onAddTask}
          variant="outlined"
          color="primary"
          type="submit"
        >ADD</Button>
      </div>
    </div>
  );
}

FormTask.propTypes = {
  setTasks: PropTypes.func.isRequired
};

export default FormTask;