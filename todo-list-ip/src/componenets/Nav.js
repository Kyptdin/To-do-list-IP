import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
console.log(AddCircleOutlineOutlinedIcon);
export default function Nav() {
  return (
    <div className="todo-list-options">
      <div className="task-count">Task(1)</div>
      <div className="actions">
        <AddCircleOutlineOutlinedIcon
          style={{
            fontSize: "2.5rem",
            cursor: "pointer",
            background: "none",
            border: "none",
          }}
        />
        <select className="select-filther">
          <option value="time">Filther by order</option>
          <option value="completion">Filther by completion</option>
        </select>
      </div>
    </div>
  );
}
