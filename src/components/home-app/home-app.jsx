import React from "react";
import ListTasksContainer from "../task-list/task-list-container";
import FormTaskContainer from "../form-task/form-task-container";
import "./home-app.css";

function Home () {
  return (
    <div className="home-app container">
      <FormTaskContainer/>
      <ListTasksContainer/>
    </div>
  );
}

export default Home;