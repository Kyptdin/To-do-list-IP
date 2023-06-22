import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Navbar from "./Navbar";
export default function App() {
  return <Logo />;
}

function Logo() {
  return (
    <React.Fragment>
      <div className="app">
        <Navbar />
      </div>
    </React.Fragment>
  );
}
