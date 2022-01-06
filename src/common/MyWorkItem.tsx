import styled from "styled-components";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FlexCenter } from "../styled/common";
import { SocialMedia } from "./SocialMedia";

interface IProp {
  link: string;
  src: string;
  git: string;
}

export const MyWorkItem = ({ src, git, link }: IProp) => {
  return (
    <ItemWrapper>
      <Wrapper src={src}>
        <HoverSection>
          <SocialMedia $size={"60px"} icon={faGithubSquare} href={git} />
          <SocialMedia $size={"60px"} icon={faLink} href={link} />
        </HoverSection>
        <Links />
      </Wrapper>
    </ItemWrapper>
  );
};

const ItemWrapper = styled.div`
  gap: 10px;
`;

const HoverSection = styled(FlexCenter)`
  display: flex;
  gap: 25px;
  opacity: 0;
  transition: all 0.3s ease-in-out;
`;
const Links = styled.div`
  position: absolute;
  border-radius: 8px;
  width: 100%;
  pointer-events: none;
  height: 100%;
  z-index: -1;
  opacity: 0;
  background-color: rgb(45%, 46%, 47%);
  transition: all 0.4s ease-in-out;
`;

const Wrapper = styled.div<{ src: string }>`
  cursor: pointer;
  border-radius: 8px;
  position: relative;
  width: 230px;
  height: 300px;
  background: ${({ src }) => `url(${src})`} no-repeat center;
  background-size: 115%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  margin-bottom: 10px;

  :hover {
    transform: scale(1.06);
    ${HoverSection} {
      opacity: 1;
    }
    ${Links} {
      opacity: 0.6;
    }
  }
`;
