import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faTachometerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { SkillItem } from "../common/SkillItem";
import { useTranslate } from "../hooks/translate";
import { RootStateType } from "../store/rootReducer";
import {
  GreenText,
  GreenTextTick,
  Subtitle,
  SubtitleWrapper,
  TextWithLine,
  Title,
} from "../styled/common";

export const Resume = () => {
  const { t } = useTranslate();
  const { skills } = useSelector((state: RootStateType) => state.skillsData);

  return (
    <>
      <Title>{t.resume.title}</Title>
      <SubtitleWrapper>
        <GreenTextTick>{t.resume.text.one}</GreenTextTick>
        <GreenTextTick>{t.resume.text.two}</GreenTextTick>
        <GreenText>{t.resume.text.three}</GreenText>
      </SubtitleWrapper>
      <TextWithLine>{t.resume.subtitle}</TextWithLine>

      <SkillWrapper>
        <Icon icon={faTachometerAlt as IconProp} />
        <SkillsSubtitle>Skills</SkillsSubtitle>
      </SkillWrapper>

      <Wrapper>
        {skills.map(({ skill, percent }) => (
          <SkillItem key={skill} skill={skill} percent={percent} />
        ))}
      </Wrapper>
    </>
  );
};

const Icon = styled(FontAwesomeIcon)`
  font-size: 35px;
  color: ${({ theme }) => theme.color.green};
`;

const SkillWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 40px 0;
`;

const SkillsSubtitle = styled(Subtitle)`
  margin: 0;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 15px;
  flex-direction: column;
  margin-bottom: 20px;
`;
