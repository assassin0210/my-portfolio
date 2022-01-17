import { FC, memo, useCallback, useState } from "react";
import styled, { css } from "styled-components";
import { media } from "../styled/media";
import { SkeletonCSS, transitionCSS } from "../styled/common";

export const StackItem: FC<{ name: string; src: string; link: string }> = memo(
  ({ src, name, link }) => {
    const [status, setStatus] = useState(false);

    const loaded = useCallback(() => {
      setStatus(true);
    }, []);

    return (
      <>
        <Wrapper onLoad={loaded} target={"_blank"} href={link}>
          <ImageWrapper loaded={status}>
            <StackImg loaded={status} src={src} alt={name} />
          </ImageWrapper>
          <Text loaded={status}>{name}</Text>
        </Wrapper>
      </>
    );
  }
);

const Text = styled.p<{ loaded: boolean }>`
  ${transitionCSS};
  ${({ loaded }) =>
    !loaded &&
    css`
      ${SkeletonCSS};
      border-radius: 6px;
      width: 146px;
      height: 25px;
      z-index: 5;
      color: rgba(0, 0, 0, 0);
      ${media.desktopBefore} {
        width: 110px;
      }
    `};
`;
const ImageWrapper = styled.div<{ loaded: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 110px;
  height: 110px;
  overflow: hidden;
  border-radius: 16px;
  margin-bottom: 5px;
  ${({ loaded }) => !loaded && SkeletonCSS}

  &:hover {
    transform: scale(1.1);
  }

  ${transitionCSS};
  ${media.desktopBefore} {
    width: 90px;
    height: 90px;
  }

  ${media.mobileBefore} {
    width: 70px;
    height: 70px;
  }
`;

const Wrapper = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StackImg = styled.img<{ loaded: boolean }>`
  opacity: ${({ loaded }) => (loaded ? "1" : "0")};
  background: ${({ theme }) => theme.color.lightGrey};
  padding: 5px;
  border-radius: 16px;
  width: 100px;
  object-fit: cover;
  ${transitionCSS};
  ${media.desktopBefore} {
    width: 90px;
  }

  ${media.mobileBefore} {
    width: 70px;
  }
`;
