import { css, keyframes } from "styled-components";

export const transitionCSS = css`
  transition: all 0.3s ease-in-out;
`;

const SkeletonAnim = keyframes`
  0% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
`;

export const SkeletonCSS = css`
  background: linear-gradient(90deg, #c4ccd3 35%, #f2f5f7 60%, #c4ccd3 80%);
  background-size: 400% 100%;
  animation: ${SkeletonAnim} 1s infinite;
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
