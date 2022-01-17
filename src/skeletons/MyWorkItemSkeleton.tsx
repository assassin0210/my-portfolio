import styled from "styled-components";
import { Skeleton, Wrapper } from "../styled/common";

export const AboutMeItemSkeleton = () => {
  return (
    <SkeletonWrapper>
      <Skeleton />
    </SkeletonWrapper>
  );
};

export const AboutMeItemsSkeleton = () => {
  return (
    <>
      {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
        <SkeletonWrapper key={index}>
          <Skeleton />
        </SkeletonWrapper>
      ))}
    </>
  );
};

const SkeletonWrapper = styled(Wrapper)`
  background: transparent;
  display: block;
  z-index: 5;
`;
