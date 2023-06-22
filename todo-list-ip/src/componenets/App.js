import React from "react";
// import DeleteIcon from "@mui/icons-material/Delete";
import Header from "./Header";
import Task from "./Task";

export default function App() {
  return <Logo />;
}

function Logo() {
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
