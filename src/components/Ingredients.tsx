import { useEffect, useMemo, useState } from "react";
import { getAllIngredients } from "../store/requests/getAllIngredients";
import { useDispatch, useSelector } from "react-redux";
import { RootStateType } from "../store/rootReducer";
import styled, { css } from "styled-components";

export const Ingredients = () => {
  const dispatch = useDispatch();

  const ingredients = useSelector(
    (state: RootStateType) => state.allIngredientsData.ingredients
  );
  useEffect(() => {
    dispatch(getAllIngredients());
  }, [dispatch]);

  const [page, setPage] = useState(1);
  const [items] = useState(100);

  const setPrev = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };
  const setNext = () => {
    if (page < 5) {
      setPage(page + 1);
    }
  };

  const allPAges = useMemo(() => {
    return Math.ceil(ingredients.length / 100);
  }, [ingredients.length]);
  const indexOfLastTodo = page * items;
  const indexOfFirstTodo = indexOfLastTodo - items;
  const currentTodos = ingredients.slice(indexOfFirstTodo, indexOfLastTodo);
  return (
    <div>
      <Pagination>
        <button onClick={setPrev}>Prev</button>

        {[...new Array(allPAges)].map((_, index) => (
          <PaginationItem current={index + 1 === page} key={index}>
            {index + 1}
          </PaginationItem>
        ))}

        <button onClick={setNext}>Next</button>
      </Pagination>
      <Wrapper>
        {currentTodos.map((el) => (
          <Item key={el}>{el}</Item>
        ))}
      </Wrapper>
    </div>
  );
};

const PaginationItem = styled.div<{ current: boolean }>`
  ${({ current }) =>
    current &&
    css`
      color: darkred;
      font-size: 18px;
      font-weight: bold;
    `}
`;

const Item = styled.span`
  cursor: pointer;
  :after {
    content: ",";
  }
`;

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  ${Item}:last-of-type {
    :after {
      content: ".";
    }
  }
`;

const Pagination = styled.div`
  display: flex;
  gap: 10px;
  padding: 5px;
  bottom: 0;
  justify-content: center;
`;
