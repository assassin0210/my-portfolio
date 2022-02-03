import styled from "styled-components";
import { SkeletonCSS, transitionCSS } from "../styled/common";
import { media } from "../styled/media";
import { useCallback, useState } from "react";
import { Link } from "react-router-dom";

export const CocktailItem = ({
  src,
  name,
  id,
}: {
  src: string;
  name: string;
  id: string;
}) => {
  const [status, setStatus] = useState(false);
  const loaded = useCallback(() => {
    setStatus(true);
  }, []);

  return (
    <Wrapper to={`${id}`} onLoad={loaded}>
      <Image loaded={status} src={src} alt="" />
      <Name>{name}</Name>
    </Wrapper>
  );
};

const Name = styled.span`
  position: absolute;
  text-align: center;
  padding: 5px;
  background: #000;
  color: white;
  width: 100%;
  left: 0;
  bottom: 0;
`;

const Image = styled.img<{ loaded: boolean }>`
  opacity: ${({ loaded }) => (loaded ? 1 : 0)};
  position: absolute;
  display: block;
  border-radius: 8px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${transitionCSS};

  ${media.desktopBefore} {
    width: 180px;
  }
`;

const Wrapper = styled(Link)<{ loaded?: boolean }>`
  cursor: pointer;
  border-radius: 8px;
  position: relative;
  width: 230px;
  height: 300px;
  overflow: hidden;
  ${transitionCSS};
  ${({ loaded }) => !loaded && SkeletonCSS};

  ${media.desktopBefore} {
    width: 160px;
    height: 200px;
  }

  :hover {
    transform: scale(1.08);
  }
`;
