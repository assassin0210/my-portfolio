import { useRoutes } from "react-router-dom";
import { LayoutContainer } from "./common/Layout";
import React from "react";

import { Ingredients } from "./components/Ingredients";
import { Cocktails } from "./components/Сocktails";
import { CocktailDescription } from "./components/CoctailDescription";

export const Routes = () => {
  return useRoutes([
    {
      path: "/",
      element: <LayoutContainer />,
      children: [
        {
          index: true,
          element: <Ingredients />,
        },
        {
          path: "cocktails",
          element: <Cocktails />,
        },
        {
          path: "cocktails/:id",
          element: <CocktailDescription />,
        },
      ],
    },
  ]);
};
