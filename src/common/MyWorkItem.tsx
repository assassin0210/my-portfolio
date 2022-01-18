import styled from "styled-components";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { HoverSection, Links, transitionCSS, Wrapper } from "../styled/common";
import { SocialMedia } from "./SocialMedia";
import { useCallback, useState } from "react";
import { media } from "../styled/media";

interface IProp {
  link: string;
  src: string;
  git: string;
}

export const MyWorkItem = ({ src, git, link }: IProp) => {
  const [status, setStatus] = useState(false);

  const loaded = useCallback(() => {
    setStatus(true);
  }, []);
  return (
    <ItemWrapper>
      <Wrapper onLoad={loaded} loaded={status}>
        <Image loaded={status} src={src} alt="" />
        <HoverSection>
          <SocialMedia $size="60px" icon={faGithubSquare} href={git} />
          <SocialMedia $size="60px" icon={faLink} href={link} />
        </HoverSection>
        <Links />
      </Wrapper>
    </ItemWrapper>
  );
};

const ItemWrapper = styled.div`
  gap: 10px;
`;

const Image = styled.img<{ loaded: boolean }>`
  opacity: ${({ loaded }) => (loaded ? 1 : 0)};
  position: absolute;
  width: 260px;
  z-index: 1;
  ${transitionCSS};

  ${media.desktopBefore} {
    width: 180px;
  }
`;
