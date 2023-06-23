import RadioButtonUncheckedOutlinedIcon from "@mui/icons-material/RadioButtonUncheckedOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useState } from "react";
export default function Task({
  originalData,
  setOriginalData,
  taskData,
  complete,
  myKey,
  createTask,
  updateQuery,
  setCreatingTask,
}) {
  const [completed, setCompleted] = useState(false);
  const [taskInfo, setTaskInfo] = useState(null);

  function onSubmitData(e) {
    e.preventDefault();
    console.log("Submitting data");
    /*
    Create an object to represent the data of the task
    Add the task object to the tasks array 
    Update the locale storage for the tasks 

    if(the task is used to creat other task){
      manipulate the state to create another task creator 
    }    
    */
    const obj = { completed, taskInfo };
    if (!originalData || originalData.length === 0) {
      setOriginalData([obj]);
    }
    console.log(originalData);
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
        <RadioButtonUncheckedOutlinedIcon
          style={{
            fontSize: "3rem",
            cursor: "pointer",
            background: "none",
            border: "none",
            paddingTop: "0.5rem",
          }}
        />
        {/* Input element used to describe the task */}
        <form onSubmit={onSubmitData}>
          <input
            autoFocus={createTask}
            className="todo-list-task-heading"
            onChange={() => console.log("changing stuff")}
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
