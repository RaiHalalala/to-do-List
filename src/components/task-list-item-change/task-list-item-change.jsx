import React from "react";
import PropTypes from "prop-types";
import Close from "@material-ui/icons/CloseOutlined";
import "./task-list-item-change.css";

function ItemChange (props) {
  return (
      <div className="input-item-container">
        <div className="input-position">
          <input
            className="input-item"
            onChange={props.onPostItemChange}
            id="outlined-multiline-flexible"
            label="Edit task"
            value= {props.textChangeInput}
            variant="outlined"
          />
          <label />
          <Close 
            className="close-input"
            onClick={props.onCloseInputItem} />
        </div>
        <button 
          className="btn-item"
          id={props.id}
          onClick={props.onSaveChangeInput}>Save</button>
      </div>
  );
}

ItemChange.propTypes = {
  onPostItemChange: PropTypes.func.isRequired,
  textChangeInput: PropTypes.string.isRequired,
  onCloseInputItem: PropTypes.func.isRequired,
  onSaveChangeInput: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired
};

export default ItemChange;