import {
  Container,
  GreenText,
  GreenTextTick,
  ScrollSection,
  Subtitle,
  SubtitleWrapper,
  TextWithLine,
  Title,
} from "../styled/common";

import styled from "styled-components";
import { useTranslate } from "../hooks/translate";
import { SkillItem } from "../common/SkillItem";
import { resumeData } from "../const";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTachometerAlt } from "@fortawesome/free-solid-svg-icons";

export const Resume = () => {
  const { t } = useTranslate();

  return (
    <Container>
      <ScrollSection>
        <Title>{t.resume.title}</Title>
        <SubtitleWrapper>
          <GreenTextTick>{t.resume.text.one}</GreenTextTick>
          <GreenTextTick>{t.resume.text.two}</GreenTextTick>
          <GreenText>{t.resume.text.three}</GreenText>
        </SubtitleWrapper>
        <TextWithLine>{t.resume.subtitle}</TextWithLine>

        <SkillWrapper>
          <Icon icon={faTachometerAlt} />
          <SkillsSubtitle>Skills</SkillsSubtitle>
        </SkillWrapper>

        <Wrapper>
          {resumeData.map(({ skill, percent }) => (
            <SkillItem key={skill} skill={skill} percent={percent} />
          ))}
        </Wrapper>
      </ScrollSection>
    </Container>
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
`;
