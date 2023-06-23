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

  function stringifyData(data) {
    return JSON.stringify(data);
  }

  function serializeData(data) {
    return JSON.parse(data);
  }

  function createQuery(data) {
    localStorage.setItem("tasks", stringifyData(data));
  }

  if (!originalData) {
    alert("You didn't create the query yet");
    createQuery([]);
  }

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
                taskData={task.data}
                complete={task.complete}
                key={index}
                myKey={index}
                createTask={false}
              />
            ))}
          {creatingTask && <Task createTask={true} />}
        </main>
      </div>
    </React.Fragment>
  );
}
