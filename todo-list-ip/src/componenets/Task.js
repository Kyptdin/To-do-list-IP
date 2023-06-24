import RadioButtonUncheckedOutlinedIcon from "@mui/icons-material/RadioButtonUncheckedOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import { useState } from "react";
export default function Task({
  originalData,
  setOriginalData,
  taskData,
  complete,
  myKey,
  createTask,
}) {
  const [completed, setCompleted] = useState(createTask ? false : complete);
  const [taskInfo, setTaskInfo] = useState(createTask ? "" : taskData);
  const iconStyling = {
    fontSize: "3rem",
    cursor: "pointer",
    background: "none",
    border: "none",
    paddingTop: "0.5rem",
  };

  function handleCheckClick() {
    setCompleted((completed) => !completed);
  }

  function handleTaskInfoChange(e) {
    setTaskInfo(e.target.value);
  }

  function fixUnexistingArray(allTaskData) {
    if (
      !allTaskData ||
      allTaskData.length === 0 ||
      !(typeof allTaskData !== "object")
    ) {
      const task = { completed, taskInfo, id: 0 };
      const arr = [task];
      localStorage.setItem("tasks", JSON.stringify(arr));
      setOriginalData(arr);
    }
  }

  function handleTaskInfoSubmit(e) {
    e.preventDefault();
    if (createTask) {
      fixUnexistingArray(originalData);
    }
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
