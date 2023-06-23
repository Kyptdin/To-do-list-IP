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

  function updateQuery(data) {
    localStorage.setItem("tasks", JSON.stringify(data));
  }

  // function stringifyData(data) {
  //   return JSON.stringify(data);
  // }

  // if (!originalData) {
  //   alert("You didn't create the query yet");
  //   createQuery([]);
  //   setOriginalData(getQuery());
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
            originalData.length > 0 &&
            originalData.map((task, index) => (
              <Task
                originalData={originalData}
                setOriginalData={setOriginalData}
                taskData={task.taskInfo}
                complete={task.completed}
                key={index}
                myKey={index}
                updateQuery={updateQuery}
                createTask={false}
              />
            ))}
          {creatingTask && (
            <Task
              originalData={originalData}
              setOriginalData={setOriginalData}
              updateQuery={updateQuery}
              createTask={true}
            />
          )}
        </main>
      </div>
    </React.Fragment>
  );
}
