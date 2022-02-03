import axios from "axios";

export const instance = axios.create({
  baseURL: "https://the-cocktail-db.p.rapidapi.com",
  headers: {
    "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
    "x-rapidapi-key": "04af558c72mshf27a8a62bd4af68p1081f3jsn0a5fc5decc1e",
  },
});
