import styled from "styled-components";

const sizes = {
  mobile: "480px",
  tablet: "768px",
  desktop: "1026px",
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 10px;
  justify-content: center;
  align-items: center;
  margin: 20px;
  // 반응형 조건 media query
  @media (max-width: ${sizes.mobile}) {
    grid-template-columns: 1fr;
  }
  @media (min-width: ${sizes.mobile}) and (max-width: ${sizes.tablet}) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: ${sizes.tablet}) and (max-width: ${sizes.desktop}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (min-width: ${sizes.desktop}) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  }
`;

const Box = styled.div`
  text-align: center;
  line-height: 100px;
  width: 200px;
  height: 200px;
  background-color: dodgerblue;
`;

export function ResponsivePage() {
  return (
    <>
      <Container>
        <Box>Menu1</Box>
        <Box>Menu2</Box>
        <Box>Menu3</Box>
        <Box>Menu4</Box>
        <Box>Menu5</Box>
        <Box>Menu6</Box>
      </Container>
    </>
  );
}
