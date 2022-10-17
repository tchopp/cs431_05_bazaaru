import React from "react";
import logo from "./profile.png"; //Need to replace image with project image

//import { useHistory } from "react-router-dom";

function CatalogPage() {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Catalog />
      </header>
    </div>
  );
}

export default CatalogPage;
