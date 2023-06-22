import React from "react";
import { useState } from "react";
import Header from "./Header";
import Task from "./Task";

export default function App() {
  const [originalData, setOriginalData] = useState(
    localStorage.getItem("tasks")
  );

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
        <Header />
        <main className="todo-list-app">
          <Task />
        </main>
      </div>
    </React.Fragment>
  );
}
