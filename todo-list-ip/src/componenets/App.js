import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Header from "./Header";
export default function App() {
  return <Logo />;
}

function Logo() {
  return (
    <React.Fragment>
      <div className="app">
        <Header />
      </div>
    </React.Fragment>
  );
}
