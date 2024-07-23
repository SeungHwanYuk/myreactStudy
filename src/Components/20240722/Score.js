import styled from "styled-components";

const Name = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 300px;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: xx-large;
`;

const Container = styled.div`
  flex-direction: column;
  margin: 0 auto;
  text-align: center;
`;

export function Score({ firstName, score: { math, english, history } }) {
  return (
    <>
      <Container>
        <Name>{firstName}</Name>
        <div>Math{math}</div>
        <div>English{english}</div>
        <div>History{history}</div>
      </Container>
    </>
  );
}
