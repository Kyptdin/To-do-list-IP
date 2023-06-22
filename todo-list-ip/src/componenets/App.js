import React from "react";
import { useState } from "react";
import Header from "./Header";
import Task from "./Task";

export default function App() {
  const [originalData, setOriginalData] = useState(getQuery());

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
        <Header originalData={originalData} setOriginalData={setOriginalData} />
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
              />
            ))}
        </main>
      </div>
    </React.Fragment>
  );
}
