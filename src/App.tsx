import React from "react";

import { LayoutContainer } from "./common/Layout";
import { Ingredients } from "./components/Ingredients";
import { Cocktails } from "./components/Сocktails";
import { CocktailDescription } from "./components/CoctailDescription";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LayoutContainer />}>
        <Route index element={<Ingredients />} />
        <Route path="cocktails" element={<Cocktails />} />
        <Route path="cocktails/:id" element={<CocktailDescription />} />
        <Route />
      </Route>
    </Routes>
  );
}

export default App;
