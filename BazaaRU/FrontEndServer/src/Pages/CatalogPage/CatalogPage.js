import React from 'react';
import {Catalog} from 'src/Components/Catalog/Catalog.js';


const CatalogPage  = () => {
    return (
        <div>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>Rutgers BazaaRU</p>
          </header>
          <Catalog />
        </div>
      );
};