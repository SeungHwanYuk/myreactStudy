import styled from "styled-components";

const Container = styled.div`
  // 크기가 아직 정해지지 않은 경우 width와 height는 100%로 주는것이 좋다
  width: 100%;
  height: 100%;
`;

const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

const Li = styled.li`
  width: 100%;
  padding-left: 20px;
  list-style: none;
  font-weight: 700;
`;

const Link = styled.a`
  display: block;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.7);
  padding: 0 5px;
  font-size: 1.5rem;
  padding: 10px 5px;
  // & 앰퍼센드의 의미는 자식을 지정해준다는 뜻
  // Link에 호버가 오면 실행
  &:hover {
    background-color: dodgerblue;
    color: white;
  }
`;

export function Menu() {
  return (
    <>
      <Container>
        <Ul>
          <Li>
            <Link href="#">Home</Link>
          </Li>
          <Li>
            <Link href="#">Content</Link>
          </Li>
          <Li>
            <Link href="#">About Us</Link>
          </Li>
          <Li>
            <Link href="#">Contect</Link>
          </Li>
          <Li>
            <Link href="#">Social</Link>
          </Li>
        </Ul>
      </Container>
    </>
  );
}
