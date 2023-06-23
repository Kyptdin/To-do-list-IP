import RadioButtonUncheckedOutlinedIcon from "@mui/icons-material/RadioButtonUncheckedOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
export default function Task({
  originalData,
  setOriginalData,
  taskData,
  complete,
  myKey,
  createTask,
}) {
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
        <form>
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
