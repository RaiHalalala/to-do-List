import * as axios from "axios";

const urlAPI = process.env.REACT_APP_API_HOST;

export const getTasksAPI = (action) => {
  axios.get(`${urlAPI}/tasks`).then(response => {
    action(response.data);
  });
};

export const postTaskAPI = (action, title, active, setTextInput) => {
  axios.post(`${urlAPI}/tasks`,{
    title: title,
    active: active
  }).then(() => {
      axios.get(`${urlAPI}/tasks`).then(response => {
        action(response.data);
      });
      setTextInput("");
    } 
  );
};

export const deleteTaskAPI = (action,id) => {
  axios.delete(`${urlAPI}/tasks/${id}`);
  axios.get(`${urlAPI}/tasks`).then(response => {
    action(response.data);
  });
};

export const putTaskAPI = (action, id, title, active) => {
  axios.put(`${urlAPI}/tasks/${id}`, {
    title: title,
    active: active
  }).then(() => {
    axios.get(`${urlAPI}/tasks`).then(response => {
      action(response.data);
    });
  });
};

