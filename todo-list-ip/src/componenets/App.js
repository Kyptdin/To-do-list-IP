import React from "react";
import { useState } from "react";
import Header from "./Header";
import Task from "./Task";

export default function App() {
  const [originalData, setOriginalData] = useState(getQuery());
  const [creatingTask, setCreatingTask] = useState(false);

  function getQuery() {
    return serializeData(localStorage.getItem("tasks"));
  }

  function serializeData(data) {
    return JSON.parse(data);
  }

  // JUST DO THIS WITHOUT THE FUNCTIONS
  // function updateQuery(data) {
  //   localStorage.setItem("tasks", JSON.stringify(data));
  // }

  return (
    <React.Fragment>
      <div className="app">
        <Header
          originalData={originalData}
          setOriginalData={setOriginalData}
          creatingTask={creatingTask}
          setCreatingTask={setCreatingTask}
        />
        <main className="todo-list-app">
          {originalData &&
            originalData.map((task, index) => (
              <Task
                originalData={originalData}
                setOriginalData={setOriginalData}
                taskData={task.taskInfo}
                complete={task.completed}
                key={index}
                myKey={index}
                createTask={false} //Means this componenet isn't creating new tasks
                creatingTask={creatingTask}
                setCreatingTask={setCreatingTask}
              />
            ))}
          {creatingTask && (
            <Task
              originalData={originalData}
              setOriginalData={setOriginalData}
              taskData={""}
              complete={false}
              // key={index}
              // myKey={index}
              createTask={true} //Means that this componenet is used to create a task
              creatingTask={creatingTask}
              setCreatingTask={setCreatingTask}
            />
          )}
        </main>
      </div>
    </React.Fragment>
  );
}
