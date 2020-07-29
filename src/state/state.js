import taskReduser from "./reduser-tasks";

const ADD_TASK = "ADD-TASK";

let store = {
  state: {
    ListTasks: [
      {key: 1, text: 'Text 1', checkbox: false},
      {key: 2, text: 'Text 2', checkbox: false},
      {key: 3, text: 'Text 2', checkbox: false},
    ]
  },
  _callSubscriber () {},
  subcribe (observer) {
    this._callSubscriber = observer;
  },
  dispatch (action) {

    this.state.ListTasks = taskReduser(this.state.ListTasks, action)

    this._callSubscriber(this.state);
  } 
};






export default store;