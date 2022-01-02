import { Container, GreenText, ScrollSection, Title } from "../styled/common";
import { StackItem } from "./StackItem";
import { useEffect, useMemo } from "react";
import styled from "styled-components";
import { useTranslate } from "../hooks/translate";

export const AboutMe = () => {
  const stack = useMemo(
    () => [
      {
        src: require("../static/stack/webstorm.jpg"),
        name: "WebStorm",
        link: "https://www.jetbrains.com/webstorm/",
      },
      {
        src: require("../static/stack/react.png"),
        name: "React",
        link: "https://reactjs.org/",
      },

      {
        src: require("../static/stack/github.png"),
        name: "GitHub",
        link: "https://github.com/assassin0210",
      },
      {
        src: require("../static/stack/redux.jpeg"),
        name: "Redux,Redux-Toolkit",
        link: "https://redux-toolkit.js.org/",
      },

      {
        src: require("../static/stack/html.png"),
        name: "HTML5",
        link: "https://html.com/",
      },
      {
        src: require("../static/stack/reatom.jpg"),
        name: "Reatom",
        link: "https://reatom.js.org/#/",
      },

      {
        src: require("../static/stack/hook-form.jpg"),
        name: "React Hook Form",
        link: "https://react-hook-form.com/",
      },
      { src: require("../static/stack/next.jpg"), name: "NextJs", link: "" },
      {
        src: require("../static/stack/styled.jpg"),
        name: "Styled Components",
        link: "https://styled-components.com/",
      },
      {
        src: require("../static/stack/fontawesome.jpg"),
        name: "Font Awesome",
        link: "https://fontawesome.com/",
      },
      {
        src: require("../static/stack/bootstrap.png"),
        name: "Bootstrap",
        link: "https://getbootstrap.com/",
      },
      {
        src: require("../static/stack/antdesign.png"),
        name: "Ant Design",
        link: "https://ant.design/",
      },
      {
        src: require("../static/stack/npm.png"),
        name: "NPM",
        link: "https://www.npmjs.com/",
      },

      {
        src: require("../static/stack/jses6.jpg"),
        name: "JavaScript ES6",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },

      {
        src: require("../static/stack/sass.png"),
        name: "Sass",
        link: "https://sass-lang.com/",
      },
      {
        src: require("../static/stack/router.jpg"),
        name: "React Router Dom v6",
        link: "https://reactrouter.com/",
      },
      {
        src: require("../static/stack/materialui.png"),
        name: "Material ui",
        link: "https://mui.com/",
      },
    ],
    []
  );
  useEffect(() => {
    // console.log(textContent.getLanguage());
  }, []);

  const { t } = useTranslate();
  return (
    <Container>
      <ScrollSection>
        <Title>{t.title}</Title>
        {/*<SubtitleWrapper>*/}
        {/*  <GreenTextTick>{textContent.aboutMe.year}</GreenTextTick>*/}
        {/*  <GreenTextTick>{textContent.aboutMe.city}</GreenTextTick>*/}
        {/*  <GreenText>{textContent.aboutMe.company}</GreenText>*/}
        {/*</SubtitleWrapper>*/}
        {/*<Text>{textContent.aboutMe.text}</Text>*/}
        {/*<Subtitle>{textContent.aboutMe.stack}</Subtitle>*/}

        <StackList>
          {stack.map((stack) => (
            <StackItem
              link={stack.link}
              name={stack.name}
              src={stack.src}
              key={stack.name}
            />
          ))}
        </StackList>
      </ScrollSection>
    </Container>
  );
};

const SubtitleWrapper = styled.div`
  margin: 40px 0;
`;

const StackList = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 30px;
`;

const GreenTextTick = styled(GreenText)`
  &:after {
    content: "/";
    padding: 0 15px;
    color: ${({ theme }) => theme.color.lightGrey};
    opacity: 0.5;
  }
`;
