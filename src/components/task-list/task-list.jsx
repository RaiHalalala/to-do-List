import React from "react";
import PropTypes from "prop-types";
import ItemListTasksContainer from "../task-list-item/task-list-item-container";
import {getTasksAPI} from "../../state/server-api";
import {deleteTaskAPI} from "../../state/server-api";
import {putTaskAPI} from "../../state/server-api";
import "./task-list.css";

let firstLoad = true;

function ListTasks ({tasks, setTasks}) {
  if (tasks.length === 0 && firstLoad) {
    getTasksAPI(setTasks);
    firstLoad = false;
  }
 
  const onDeleteTask = (e) => {
    const idTask = +(e.currentTarget.id);
    deleteTaskAPI(setTasks, idTask);
  };

  let activeTask = (e) => {
    const idTask = +(e.target.id);
    let el = tasks.find(item => item.id === idTask);
    if (el.active) {
      putTaskAPI(setTasks, idTask, el.title, false);
    } else {
      putTaskAPI(setTasks, idTask, el.title, true);
    }
  };

  const itemTesk = tasks.map(({id, title, active}) => {
    return (
      <li key={id} className="task-list__item">
        <ItemListTasksContainer stateItem={title} id={id} active={active} onDeleteTask={onDeleteTask} activeTask={activeTask}/>
      </li>
    );
  });

  return (
    <ul className="task-list">
      {itemTesk}
    </ul>
  );
}

ListTasks.propTypes = {
  tasks: PropTypes.array.isRequired,
  setTasks: PropTypes.func.isRequired,
  idTask: PropTypes.number
};

export default ListTasks;
