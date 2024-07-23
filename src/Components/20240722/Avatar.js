import styled from "styled-components";

const Container = styled.div`
  box-sizing: border-box;
  width: 300px;
  background-color: lightgreen;
  box-shadow: 1px 2px 5px gray;
  padding: 10px;
  margin-bottom: 20px;
`;

const Bold = styled.p`
  font-weight: 700;
  font-size: 2rem;
  color: dodgerblue;
`;

export function Avatar() {
  return (
    <>
      <Container>
        <div>
          <Bold>이름</Bold>
          <p>직업</p>
          <p>국적</p>
          <hr />
        </div>
      </Container>
    </>
  );
}
