import styled from "styled-components";

export const Caret = () => {
  return (
    <Container>
      <Wrapper>
        <Line />
        <Line />
        <Line />
      </Wrapper>
    </Container>
  );
};

const Line = styled.div`
  height: 3px;
  width: 100%;
  background-color: black;
`;
const Container = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #00c483;
`;

const Wrapper = styled.div`
  width: 35px;
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
