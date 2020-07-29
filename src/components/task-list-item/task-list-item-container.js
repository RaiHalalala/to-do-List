import { setStateActionCreator} from "../../state/reducer-tasks";
import {connect} from "react-redux";
import ItemListTasks from "./task-list-item.jsx";

let mapStateToProps = (state) => {
  return {
    tasks: state.ListTasks.tasks
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    setTasks: (data) => {
      dispatch(setStateActionCreator(data));
    }
  };
};

const ItemListTasksContainer = connect(mapStateToProps, mapDispatchToProps)(ItemListTasks);

export default ItemListTasksContainer;