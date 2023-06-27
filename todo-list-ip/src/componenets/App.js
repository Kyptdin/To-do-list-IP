import React, { useEffect } from "react";
import { useState } from "react";
import Header from "./Header";
import Task from "./Task";
import Nav from "./Nav";

export default function App() {
  const [creatingTask, setCreatingTask] = useState(false);
  const [originalData, setOriginalData] = useState(() => {
    const localValue = localStorage.getItem("tasks");
    if (!localValue) return [];

    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(originalData));
  }, [originalData]);

  return (
    <React.Fragment>
      <div className="app">
        <Header>
          <Nav
            originalData={originalData}
            setOriginalData={setOriginalData}
            creatingTask={creatingTask}
            setCreatingTask={setCreatingTask}
          />
        </Header>
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
          {/* 
          IDEA  
            Instead of setting the state based on "taskData," I should just set the input el value based on the prop. 
          
          
          */}
        </main>
      </div>
    </React.Fragment>
  );
}
