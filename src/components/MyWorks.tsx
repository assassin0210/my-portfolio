import {
  Container,
  ScrollSection,
  TextWithLine,
  Title,
} from "../styled/common";
import { MyWorkItem } from "../common/MyWorkItem";
import styled from "styled-components";
import { useTranslate } from "../hooks/translate";

export const MyWorks = () => {
  const { t } = useTranslate();
  return (
    <Container>
      <ScrollSection>
        <Title>{t.myWorks.title}</Title>
        <TextWithLine>123</TextWithLine>
        <Wrapper>
          <MyWorkItem />
          <MyWorkItem />
          <MyWorkItem />
          <MyWorkItem />
          <MyWorkItem />
          <MyWorkItem />
        </Wrapper>
      </ScrollSection>
    </Container>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
`;
