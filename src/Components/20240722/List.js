import styled from "styled-components";

const Li = styled.li`
  list-style: none;
  color: lightcoral;
`;

const Container = styled.div`
  width: 100vw;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2rem;
`;

const Photo = styled.img`
  border-radius: 40%;
`;

export function List({ products, user }) {
  // JS 영역

  return (
    <>
      <h1>List Component</h1>
      <p>리액트 연습 코드</p>
      <ul>
        {products.map((p) => (
          <Li>{p.title}</Li>
        ))}
      </ul>
      <Container>
        <Title>{user.name}</Title>
        <Photo src={user.imageUrl}></Photo>
      </Container>
    </>
  );
}
