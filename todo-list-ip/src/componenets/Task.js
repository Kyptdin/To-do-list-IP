import RadioButtonUncheckedOutlinedIcon from "@mui/icons-material/RadioButtonUncheckedOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
export default function Task() {
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
        <RadioButtonUncheckedOutlinedIcon
          style={{
            fontSize: "3rem",
            cursor: "pointer",
            background: "none",
            border: "none",
            paddingTop: "0.5rem",
          }}
        />
        <span className="todo-list-task-heading">Task name</span>
      </div>
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