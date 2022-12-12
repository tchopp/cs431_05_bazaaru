import React from "react";
import logo from "./profile.png"; //Need to replace image with project image

import {Catalog} from '../Components/Catalog/Catalog.js'


function CatalogPage() {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Catalog />
    </div>
  );
}

export default CatalogPage;
