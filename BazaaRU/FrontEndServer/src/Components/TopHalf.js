import { Typography } from "@mui/material";
import React from "react";
import { NavBar } from "./NavBar.js";
import logo from "../Pages/bazaaru.png";

export const TopHalf = () => {
  return (
    <div>
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" width="150" />
      </div>
      <NavBar />
    </div>
  );
};
