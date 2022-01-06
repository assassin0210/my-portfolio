import styled from "styled-components";
import { FlexCenter } from "../styled/common";

export const SkillItem = ({
  skill,
  percent,
}: {
  skill: string;
  percent: string;
}) => {
  return (
    <div>
      <TextWrapper>
        <span>{skill}</span>
        <PercentNum>
          {percent}
          <Percent>%</Percent>
        </PercentNum>
      </TextWrapper>
      <Lite $percent={percent} />
    </div>
  );
};

const Percent = styled.span`
  font-size: 14px;
`;

const PercentNum = styled.span`
  color: ${({ theme }) => theme.color.green};
`;

const TextWrapper = styled(FlexCenter)`
  justify-content: space-between;
`;

const Lite = styled.div<{ $percent: string }>`
  border-radius: 6px;
  overflow: hidden;
  width: 100%;
  height: 5px;
  background-color: ${({ theme }) => theme.color.lightGrey};
  position: relative;
  margin-top: 5px;
  &:after {
    content: "";
    border-radius: 6px;
    height: 100%;
    width: ${({ $percent }) => ($percent ? $percent : 20)}%;
    position: absolute;
    background-color: ${({ theme }) => theme.color.green};
  }
`;
