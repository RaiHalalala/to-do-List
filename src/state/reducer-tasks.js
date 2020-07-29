const SET_STATE = "SET-STATE";

let initialState = {
  tasks:[]
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STATE:
      return {...state, tasks: [ ...action.dataTask]};
    default:
      return state;
  }
};

export let setStateActionCreator = (data) => {
  return {
    type: SET_STATE,
    dataTask: data
  };
};

export default taskReducer;
