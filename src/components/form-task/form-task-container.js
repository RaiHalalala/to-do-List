import {setStateActionCreator} from "../../state/reducer-tasks";
import FormTask from "./form-task.jsx";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
  return {
    ListTasks: state.ListTasks
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    setTasks: (data) => {
      dispatch(setStateActionCreator(data));
    }
  };
};

const FormTaskContainerSuper = connect(mapStateToProps,mapDispatchToProps)(FormTask);

export default FormTaskContainerSuper;