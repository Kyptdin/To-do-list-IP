import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

export default function Nav({
  originalData,
  setOriginalData,
  creatingTask,
  setCreatingTask,
}) {
  return (
    <div className="todo-list-options">
      {/* How many total task */}
      <div className="task-count">Task(1)</div>
      <div className="actions">
        {/* The add button to add a task */}
        <AddCircleOutlineOutlinedIcon
          onClick={() => setCreatingTask(true)}
          style={{
            fontSize: "2.5rem",
            cursor: "pointer",
            background: "none",
            border: "none",
          }}
        />
        {/* Select used to determine the filther of the application */}
        <select className="select-filther">
          <option value="time">Filther by order</option>
          <option value="completion">Filther by completion</option>
        </select>
      </div>
    </div>
  );
}
