import { ScrollSection, TextWithLine, Title } from "../styled/common";
import { MyWorkItem } from "../common/MyWorkItem";
import styled from "styled-components";
import { useTranslate } from "../hooks/translate";

import { workData } from "../const";

export const MyWorks = () => {
  const { t } = useTranslate();

  return (
    <ScrollSection>
      <Title>{t.myWorks.title}</Title>
      <TextWithLine>{t.myWorks.description}</TextWithLine>
      <Wrapper>
        {workData.map((item) => (
          <MyWorkItem
            key={item.src}
            src={item.src}
            link={item.link}
            git={item.git}
          />
        ))}
      </Wrapper>
    </ScrollSection>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;
`;
