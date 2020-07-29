import { setStateActionCreator} from "../../state/reducer-tasks";
import ListTasks from "./task-list.jsx";
import {connect} from "react-redux";

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

const ListTasksContainer = connect(mapStateToProps, mapDispatchToProps)(ListTasks);

export default ListTasksContainer;