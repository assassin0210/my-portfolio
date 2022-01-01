import styled from "styled-components";
import { useEffect, useState } from "react";
import { textContent } from "../localization";

type ToggleType = "ru" | "en";

export const Checkbox = () => {
  const [toggle, setToggle] = useState<ToggleType>("ru");
  const [toggle1, setToggle1] = useState<boolean>(false);
  const lang = localStorage.getItem("lang");
  useEffect(() => textContent.setLanguage(toggle), [toggle]);
  useEffect(() => {
    if (!localStorage.getItem("lang")) {
      localStorage.setItem("lang", "ru");
      setToggle("ru");
      textContent.setLanguage("ru");
    } else if (localStorage.getItem("lang") === "ru") {
      setToggle("ru");
      textContent.setLanguage("ru");
    } else if (localStorage.getItem("lang") === "en") {
      textContent.setLanguage("en");
      setToggle("en");
    }
  }, [lang]);

  const test = () => {
    setToggle1(!toggle1);
    if (lang === "ru") {
      localStorage.setItem("lang", "en");
      setToggle("ru");
    } else {
      localStorage.setItem("lang", "ru");
      setToggle("en");
    }
  };
  return (
    <Wrapper>
      <input
        onChange={test}
        checked={toggle === "en"}
        type="checkbox"
        id="toggle"
        className="checkbox"
      />
      <label htmlFor="toggle" className="switch" />
      <Lang>
        <LangItem toggle={toggle === "ru"}>Ru</LangItem>
        <LangItem toggle={toggle === "en"}>En</LangItem>
      </Lang>
      {textContent.title}
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
