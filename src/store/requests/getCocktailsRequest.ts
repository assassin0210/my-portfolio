import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "./baseRequest";

export const getCocktailsRequest = createAsyncThunk(
  "data/stack",
  async function (_) {
    const response = await instance.get<IGetCocktailsResponse>("/latest.php", {
      params: { a: "list" },
    });
    return response.data.drinks;
  }
);

export interface IGetCocktailsResponse {
  drinks: IDrinkItem[];
}

export interface IDrinkItem {
  dateModified?: never;
  idDrink: string;
  strAlcoholic: string;
  strCategory: string;
  strCreativeCommonsConfirmed: string;
  strDrink: string;
  strDrinkAlternate: null;
  strDrinkThumb: string;
  strGlass: string;
  strIBA: null;
  strImageAttribution: null;
  strImageSource: string;
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strIngredient4: string;
  strIngredient5: string;
  strIngredient6: string;
  strIngredient7: string;
  strIngredient8: null;
  strIngredient9: null;
  strIngredient10: null;
  strIngredient11: null;
  strIngredient12: null;
  strIngredient13: null;
  strIngredient14: null;
  strIngredient15: null;
  strInstructions: string;
  strInstructionsDE: null;
  strInstructionsES: null;
  strInstructionsFR: null;
  strInstructionsIT: null;
  "strInstructionsZH-HANS": null;
  "strInstructionsZH-HANT": null;
  strMeasure1: string;
  strMeasure2: string;
  strMeasure3: string;
  strMeasure4: string;
  strMeasure5: string;
  strMeasure6: string;
  strMeasure7: string;
  strMeasure8: null;
  strMeasure9: null;
  strMeasure10: null;
  strMeasure11: null;
  strMeasure12: null;
  strMeasure13: null;
  strMeasure14: null;
  strMeasure15: null;
  strTags: null;
  strVideo: null;
}
