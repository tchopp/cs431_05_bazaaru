import React from "react";
import logo from "./profile.png";

import {Catalog} from '../Components/Catalog/Catalog.js'

/**
 * Creates the catalog page for users to interact with using catalog component
 * @returns A list of all products
 */
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
