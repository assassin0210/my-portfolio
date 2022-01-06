import {
  Container,
  ScrollSection,
  TextWithLine,
  Title,
} from "../styled/common";
import { MyWorkItem } from "../common/MyWorkItem";
import styled from "styled-components";
import { useTranslate } from "../hooks/translate";
import waxon from "../static/works/waxon.jpg";
import tesla from "../static/works/tesla.jpg";
import music from "../static/works/music.jpg";
import pizza from "../static/works/pizza.jpg";
import basketboll from "../static/works/basketboll.jpg";
import summary from "../static/works/summary.jpg";
import game from "../static/works/game.jpg";
import registration from "../static/works/registration.jpg";

export const MyWorks = () => {
  const { t } = useTranslate();

  const data = [
    {
      link: "/",
      git: "https://github.com/assassin0210/waxon",
      src: waxon,
      description: "Waxon Landing",
    },
    {
      link: "/",
      git: "https://github.com/assassin0210/teslaProject",
      src: tesla,
      description: "Tesla Test Drive",
    },
    {
      link: "/",
      git: "https://github.com/assassin0210/music",
      src: music,
      description: "Music Player",
    },
    {
      link: "/",
      git: "https://github.com/assassin0210/pizzza",
      src: pizza,
      description: "pizza",
    },
    {
      link: "/",
      git: "https://github.com/assassin0210/basketball",
      src: basketboll,
      description: "basketboll",
    },
    {
      link: "/",
      git: "https://github.com/assassin0210/summary",
      src: summary,
      description: "summary",
    },
    {
      link: "/",
      git: "https://github.com/assassin0210/table-info",
      src: game,
      description: "game",
    },
    {
      link: "/",
      git: "https://github.com/assassin0210/registration",
      src: registration,
      description: "registration",
    },
  ];
  return (
    <Container>
      <ScrollSection>
        <Title>{t.myWorks.title}</Title>
        <TextWithLine>123</TextWithLine>
        <Wrapper>
          {data.map((item) => (
            <MyWorkItem
              src={item.src}
              link={item.link}
              git={item.git}
              description={item.description}
            />
          ))}
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
