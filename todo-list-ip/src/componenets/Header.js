import React from "react";
import Nav from "./Nav.js";
export default function Header() {
  return (
    <React.Fragment>
      <header class="todo-list-header">
        <img
          className="logo"
          src="https://isaactodo.netlify.app/Images/logo.png"
          alt="todo-list"
        />
      </header>
      <Nav />
    </React.Fragment>
  );
}
