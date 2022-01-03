import styled from "styled-components";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FlexCenter } from "../styled/common";
import { SocialMedia } from "./SocialMedia";

export const MyWorkItem = () => {
  return (
    <Wrapper>
      <HoverSection>
        <SocialMedia $size={"50px"} icon={faGithubSquare} href="/" />
        <SocialMedia $size={"50px"} icon={faLink} href="/" />
        <Links />
      </HoverSection>
    </Wrapper>
  );
};

const HoverSection = styled(FlexCenter)`
  opacity: 0;
  transition: all 0.3s ease-in-out;
  gap: 20px;
`;
const Links = styled.div`
  position: absolute;
  border-radius: 8px;

  width: 88%;
  pointer-events: none;
  height: 90%;
  background-color: rgba(255, 255, 255, 0.1);
`;

const Wrapper = styled.div`
  border-radius: 8px;
  position: relative;
  width: 230px;
  height: 300px;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  :hover {
    ${HoverSection} {
      opacity: 1;
    }
  }
`;
