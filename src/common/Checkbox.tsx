import styled from "styled-components";
import { useEffect } from "react";
import { useTranslate } from "../hooks/translate";

export const Checkbox = () => {
  const { lang, setT } = useTranslate();
  useEffect(() => {
    if (localStorage.getItem("lang") === "ru") {
      setT(false);
    } else if (localStorage.getItem("lang") === "en") {
      setT(true);
    }
  }, [setT]);

  const checkHandler = () => {
    if (lang === "en") {
      setT(false);
    } else if (lang === "ru") {
      setT(true);
    }
  };
  return (
    <Wrapper>
      <input
        onChange={checkHandler}
        checked={lang === "en"}
        type="checkbox"
        id="toggle"
        className="checkbox"
      />
      <label htmlFor="toggle" className="switch" />
      <Lang>
        <LangItem toggle={lang === "ru"}>Ru</LangItem>
        <LangItem toggle={lang === "en"}>En</LangItem>
      </Lang>
    </Wrapper>
  );
};

const LangItem = styled.span<{ toggle?: boolean }>`
  color: ${({ toggle, theme }) => toggle && theme.color.green};
  transition: all 0.2s ease-in-out;
`;

const Lang = styled.div`
  display: flex;
  gap: 6px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .switch {
    cursor: pointer;

    position: relative;
    display: inline-block;
    width: 40px;
    height: 20px;
    background-color: ${({ theme }) => theme.color.lightGrey};
    border-radius: 20px;
    transition: all 0.3s;
  }

  .switch::after {
    content: "";
    position: absolute;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background-color: white;
    top: 1px;
    left: 1px;
    transition: all 0.3s;
  }

  .checkbox:checked + .switch::after {
    left: 20px;
  }

  .checkbox:checked + .switch {
    background-color: ${({ theme }) => theme.color.green};
  }

  .checkbox {
    display: none;
  }
`;
