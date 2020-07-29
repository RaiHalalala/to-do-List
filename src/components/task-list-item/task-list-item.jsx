import React, { useState } from "react";
import PropTypes from "prop-types";
import Checkbox from "@material-ui/core/Checkbox";
import ItemChange from "../task-list-item-change/task-list-item-change.jsx";
import Close from "@material-ui/icons/CloseOutlined";
import {putTaskAPI} from "../../state/server-api";
import "./task-list-item.css";

function ItemListTasks ({stateItem, setTasks, id, active, activeTask, onDeleteTask}) {
  const [inputItem, setImputItem] = useState(false);
  const [textChangeInput, setTextChangeInput] = useState(stateItem);

  let onChangeTitleItem = () => {
    setImputItem(true);
  };

  const onPostItemChange = (e) => {
    setTextChangeInput(e.target.value);
  };

  const onSaveChangeInput = (e) => {
    setImputItem(false);
    const idTask = e.target.id;
    putTaskAPI(setTasks, idTask, textChangeInput, false);
  };

  const onCloseInputItem = () => {
    setImputItem(false);
  };

  let openInput = () => {
    return (
      <div>
         <ItemChange onPostItemChange={onPostItemChange} textChangeInput={textChangeInput} onSaveChangeInput={onSaveChangeInput} id={id} onCloseInputItem={onCloseInputItem}/>
         <div 
          className={show}
          onClick={onCloseInputItem}></div>
      </div>
       
    );
  };
  let show = inputItem ? "back show" : "back hide";

  let itemChange = inputItem ? openInput() : null;
 
  let styleItem;
  if(!active) {
    styleItem = "item__content";
  } else {
    styleItem = "task-finish";
  }

  return (
    <div className="item__container">
      <Checkbox
        onClick={activeTask}
        checked={active}
        inputProps={{ "aria-label": "primary checkbox" }}
        id={id + ""}
      />
      {itemChange}
      <div 
        className={styleItem}
        onClick={onChangeTitleItem}>
        {stateItem}
      </div>
      <div 
        className="item__icon-close"
        onClick={onDeleteTask}
        id={id}>
        <Close/>
      </div>
    </div>
  );
}

ItemListTasks.propTypes = {
  stateItem: PropTypes.string.isRequired,
  setTasks: PropTypes.func.isRequired,
  id: PropTypes.number,
  active: PropTypes.bool.isRequired,
  activeTask: PropTypes.func.isRequired,
  onDeleteTask: PropTypes.func.isRequired
};

export default ItemListTasks;