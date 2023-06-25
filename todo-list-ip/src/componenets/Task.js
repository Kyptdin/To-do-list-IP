import RadioButtonUncheckedOutlinedIcon from "@mui/icons-material/RadioButtonUncheckedOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import { useState } from "react";
import { create } from "@mui/material/styles/createTransitions";
export default function Task({
  originalData,
  setOriginalData,
  taskData,
  complete,
  myKey,
  createTask,
}) {
  // const [completed, setCompleted] = useState(createTask ? false : complete);
  // const [taskInfo, setTaskInfo] = useState(createTask ? "" : taskData);
  const [completed, setCompleted] = useState(complete);
  const [taskInfo, setTaskInfo] = useState(taskData);
  const iconStyling = {
    fontSize: "3rem",
    cursor: "pointer",
    background: "none",
    border: "none",
    paddingTop: "0.5rem",
  };

  function resetState() {
    setCompleted(false);
    setTaskInfo("");
  }

  function handleCheckClick() {
    //SetCompleted((completed) => !completed); error!
    if (!createTask) {
      const obj = { completed: !completed, taskInfo, id: myKey };
      //Create a copy of the original data
      const arrCopy = originalData.map((el) => el);
      //Use splice method to replace the old data
      arrCopy.splice(myKey, 1, obj);
      //Store data in local storage
      localStorage.setItem("tasks", JSON.stringify(arrCopy));
      //Update the original data state
      setOriginalData(arrCopy);
    }
    setCompleted((completed) => !completed);
  }

  function handleTaskInfoChange(e) {
    console.log(e.target.value);
    setTaskInfo(e.target.value);
    if (createTask) return;
    //Create a new object that represents the data
    const obj = { completed, taskInfo: e.target.value, id: myKey };
    //Create a copy of the original data
    const arrCopy = originalData.map((el) => el);
    //Use splice method to replace the old data
    arrCopy.splice(myKey, 1, obj);
    //Store data in local storage
    localStorage.setItem("tasks", JSON.stringify(arrCopy));
    //Update the original data state
    setOriginalData(arrCopy);
    setTaskInfo(e.target.value);
  }

  function addTask(allTaskData) {
    // There exist no data yet becasue the user hasn't used the app
    if (!allTaskData || allTaskData.length === 0) {
      console.log("First statement");
      const task = { completed, taskInfo, id: 0 };
      const arr = [task];
      console.log(arr);
      localStorage.setItem("tasks", JSON.stringify(arr));
      setOriginalData(arr);
      resetState();
      return;
    }

    // Data does exist and the componenet is used to create other componenets
    if (createTask) {
      console.log("Second statement");
      console.log(originalData);
      const task = { completed, taskInfo, id: originalData.length };
      const arr = originalData.map((el) => el);
      const newArr = arr.push(task);
      console.log(newArr);
      localStorage.setItem("tasks", JSON.stringify(arr));
      setOriginalData(arr);
      resetState();
      return;
    }
  }

  function handleTaskInfoSubmit(e) {
    e.preventDefault();
    addTask(originalData);
  }

  return (
    <div className="todo-list-task">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        {/* The circle used to check a task */}
        {!completed ? (
          <RadioButtonUncheckedOutlinedIcon
            style={iconStyling}
            onClick={handleCheckClick}
          />
        ) : (
          <CheckCircleOutlinedIcon
            style={iconStyling}
            onClick={handleCheckClick}
          />
        )}
        {/* Input element used to describe the task */}
        <form onSubmit={handleTaskInfoSubmit}>
          <input
            value={taskInfo}
            autoFocus={createTask}
            className={`todo-list-task-heading ${completed ? "completed" : ""}`}
            onChange={handleTaskInfoChange}
          />
        </form>
      </div>
      {/* The icon used to delete the task */}
      <DeleteOutlinedIcon
        style={{
          fontSize: "3rem",
          cursor: "pointer",
          background: "none",
          border: "none",
          paddingTop: "0.5rem",
          color: "#127aff",
        }}
      />
    </div>
  );
}
