import RadioButtonUncheckedOutlinedIcon from "@mui/icons-material/RadioButtonUncheckedOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
export default function Task({
  originalData,
  setOriginalData,
  taskData,
  complete,
  key,
}) {
  function onTaskDataChange() {
    setOriginalData(originalData.map((task) => task));
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
        <RadioButtonUncheckedOutlinedIcon
          style={{
            fontSize: "3rem",
            cursor: "pointer",
            background: "none",
            border: "none",
            paddingTop: "0.5rem",
          }}
        />
        <input
          className="todo-list-task-heading"
          onChange={() => console.log("changing stuff")}
        ></input>
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
