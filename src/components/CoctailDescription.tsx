import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";
import { getCocktailDetail } from "../store/requests/getCocktailDetail";
import { RootStateType } from "../store/rootReducer";
import styled from "styled-components";
import { scrollStylesCSS } from "../styled/common";

export const CocktailDescription = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const allIngredients = [];
  const cocktail: any = useSelector(
    (state: RootStateType) => state.cocktailItem.drink
  );
  for (const item in cocktail) {
    if (item.includes("strIngredient")) {
      allIngredients.push(cocktail[item]);
    }
  }

  useEffect(() => {
    dispatch(getCocktailDetail({ id }));
  }, [dispatch, id]);

  return (
    <Content>
      <ImgWrapper>
        <Img src={cocktail?.strDrinkThumb} alt="" />
      </ImgWrapper>
      <div>
        <Desc>Тип:</Desc> {cocktail?.strAlcoholic}
      </div>
      <div>
        <Desc>Тип Напитка:</Desc> {cocktail?.strCategory}
      </div>
      <div>
        <Desc>Стакан:</Desc> {cocktail?.strDrink}
      </div>
      <Wrapper>
        <Desc>Ингредиенты:</Desc>
        {allIngredients.map((item) => item && <Item key={item}>{item}</Item>)}
      </Wrapper>
      <div>
        <Desc>Инструкция по приготовлению:</Desc> {cocktail?.strInstructions}
      </div>
    </Content>
  );
};

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 20px 0;
  ${scrollStylesCSS};
`;

const Desc = styled.span`
  font-size: 18px;
  color: black;
  font-weight: bold;
`;

const Item = styled.span`
  margin-right: 10px;

  :after {
    content: ",";
  }
`;

const Wrapper = styled.div`
  ${Item}:last-of-type {
    :after {
      content: ".";
    }
  }
`;

const ImgWrapper = styled.div`
  min-width: 100px;
  max-width: 800px;
  overflow: hidden;
  margin: 0 auto;
`;
const Img = styled.img`
  padding: 0 5px;
  object-fit: cover;
  width: 100%;
  height: 500px;
`;
