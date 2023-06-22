import React from "react";
import Nav from "./Nav.js";
export default function Header({ originalData, setOriginalData }) {
  return (
    <React.Fragment>
      <header className="todo-list-header">
        <img
          className="logo"
          src="https://isaactodo.netlify.app/Images/logo.png"
          alt="todo-list"
        />
      </header>
      <Nav originalData={originalData} setOriginalData={setOriginalData} />
    </React.Fragment>
  );
}
