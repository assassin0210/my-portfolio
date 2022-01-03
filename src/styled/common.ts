import styled, { css, keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SkeletonAnim = keyframes`
  0% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
`;
export const Skeleton = styled.div`
  border-radius: 6px;
  background: linear-gradient(90deg, #c4ccd3 35%, #f2f5f7 60%, #c4ccd3 80%);
  background-size: 400% 100%;
  animation: ${SkeletonAnim} 1s infinite;
  height: 100%;
  width: 100%;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 470px;
  overflow: hidden;
  z-index: 20;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.4), 0 4px 20px 0 rgba(0, 0, 0, 0.7);
  border-radius: 3px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const scrollStylesCSS = css`
  overflow: auto;

  @supports (-moz-appearance: none) {
    scrollbar-color: #57585a;
    scrollbar-width: thin;
  }

  @media screen and (-webkit-min-device-pixel-ratio: 0) and (min-resolution: 0.001dpcm) {
    &::-webkit-scrollbar {
      width: 14px;
      height: 14px;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
      width: 100%;
    }

    &::-webkit-scrollbar-thumb {
      border: 4px solid transparent;
      padding: 20px;
      background-clip: padding-box;
      box-sizing: border-box;
      border-radius: 100px;
      background-color: ${({ theme }) => theme.color.lightGrey};
    }
  }
`;

export const Container = styled.div`
  position: relative;
  padding: 10px 5px;
  width: 700px;
  background-color: ${({ theme }) => theme.color.darkGrey};
  margin: 30px 0;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  :before {
    content: "";
    top: 0;
    height: 30px;
    position: absolute;
    display: block;
    width: 100%;
    margin-right: 10px;
    z-index: 100;
    background-image: linear-gradient(
      to bottom,
      ${({ theme }) => theme.color.darkGrey} 45%,
      ${({ theme }) => theme.color.darkGrey} 23%,
      transparent 100%
    );
  }
  :after {
    content: "";
    bottom: 0;
    height: 30px;
    position: absolute;
    display: block;
    width: 100%;
    margin-right: 10px;
    z-index: 100;
    background-image: linear-gradient(
      to top,
      ${({ theme }) => theme.color.darkGrey} 45%,
      ${({ theme }) => theme.color.darkGrey} 23%,
      transparent 100%
    );
  }
`;

export const ScrollSection = styled.section`
  padding: 25px 10px 10px 30px;
  ${scrollStylesCSS};
`;

export const Title = styled.h1`
  font-size: 60px;
  font-weight: bold;
  line-height: 80px;
  margin-bottom: 15px;
  color: ${({ theme }) => theme.color.white};
`;

export const GreenText = styled.span`
  font-size: 20px;
  font-style: italic;
  color: ${({ theme }) => theme.color.green};
`;

export const Subtitle = styled(Title)`
  font-size: 40px;
  margin-bottom: 15px;
  line-height: 40px;
`;

export const Text = styled.p`
  margin-bottom: 30px;
  padding-bottom: 30px;
`;

export const TextWithLine = styled.p`
  margin-bottom: 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid ${({ theme }) => theme.color.lightGrey};
`;

export const cssGreenHover = css`
  &:active,
  :hover {
    color: ${({ theme }) => theme.color.green};
    path {
      fill: ${({ theme }) => theme.color.green};
      transition: all 0.3s ease-in-out;
    }
  }
  transition: all 0.3s ease-in-out;
`;
export const Icon = styled(FontAwesomeIcon)<{ $size?: string }>`
  font-size: ${({ $size }) => ($size ? $size : "25px")};
`;

export const FlexCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
