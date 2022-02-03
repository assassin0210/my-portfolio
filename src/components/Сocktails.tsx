import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCocktailsRequest } from "../store/requests/getCocktailsRequest";
import { CocktailItem } from "./CoctailItem";
import { RootStateType } from "../store/rootReducer";
import styled from "styled-components";

export const Cocktails = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: RootStateType) => state.cocktailsData.stack);
  useEffect(() => {
    dispatch(getCocktailsRequest());
  }, [dispatch]);

  return (
    <CocktailsWrapper>
      {data.map((e) => (
        <CocktailItem
          key={e.idDrink}
          src={e.strDrinkThumb}
          name={e.strDrink}
          id={e.idDrink}
        />
      ))}
    </CocktailsWrapper>
  );
};

const CocktailsWrapper = styled.div`
  padding: 15px;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;
