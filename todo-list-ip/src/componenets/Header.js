import React from "react";

export default function Header({ children }) {
  return (
    <React.Fragment>
      <header className="todo-list-header">
        <img
          className="logo"
          src="https://isaactodo.netlify.app/Images/logo.png"
          alt="todo-list"
        />
      </header>
      {children}
    </React.Fragment>
  );
}
