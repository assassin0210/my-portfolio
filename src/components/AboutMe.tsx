import {
  GreenText,
  Title,
  Subtitle,
  TextWithLine,
  SubtitleWrapper,
} from "../styled/common";
import { StackItem } from "./StackItem";
import styled from "styled-components";
import { useTranslate } from "../hooks/translate";
import { stackData } from "../const";
import React from "react";
import { media } from "../styled/media";

export const AboutMe = () => {
  const { t } = useTranslate();
  return (
    <>
      <Title>{t.aboutMe.title}</Title>
      <SubtitleWrapper>
        <GreenTextTick>{t.aboutMe.year}</GreenTextTick>
        <GreenTextTick>{t.aboutMe.city}</GreenTextTick>
        <GreenText>{t.aboutMe.company}</GreenText>
      </SubtitleWrapper>
      <TextWithLine>{t.aboutMe.text}</TextWithLine>
      <Subtitle>{t.aboutMe.stack}</Subtitle>

      <StackList>
        {stackData.map((stack) => (
          <StackItem
            link={stack.link}
            name={stack.name}
            src={stack.src}
            key={stack.name}
          />
        ))}
      </StackList>
    </>
  );
};

const StackList = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 30px;
  ${media.mobileBefore} {
    grid-template-columns: auto auto;
  }
`;

const GreenTextTick = styled(GreenText)`
  &:after {
    content: "/";
    padding: 0 15px;
    color: ${({ theme }) => theme.color.lightGrey};
    opacity: 0.5;
  }
`;
