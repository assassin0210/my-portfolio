import {
  Container,
  GreenText,
  GreenTextTick,
  ScrollSection,
  SubtitleWrapper,
  TextWithLine,
  Title,
} from "../styled/common";

import styled from "styled-components";
import { useTranslate } from "../hooks/translate";
import { SkillItem } from "../common/SkillItem";

export const Resume = () => {
  const { t } = useTranslate();

  const resumeData = [
    { skill: "123123", percent: "30" },
    { skill: "123123112", percent: "40" },
    { skill: "123123", percent: "50" },
  ];

  return (
    <Container>
      <ScrollSection>
        <Title>123</Title>
        <SubtitleWrapper>
          <GreenTextTick>123123</GreenTextTick>
          <GreenTextTick>123123</GreenTextTick>
          <GreenText>123123</GreenText>
        </SubtitleWrapper>
        <TextWithLine>123</TextWithLine>
        <Wrapper>
          {resumeData.map(({ skill, percent }) => (
            <SkillItem skill={skill} percent={percent} />
          ))}
        </Wrapper>
      </ScrollSection>
    </Container>
  );
};

const Wrapper = styled.div`
  display: flex;
  gap: 15px;
  flex-direction: column;
`;
