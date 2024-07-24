import styled from "styled-components";

const StyledButton = styled.button`
  width: 100px;
  height: 40px;
  padding: 10px;
  font-size: 1.3rem;
  line-height: 8px;
  color: white;
  background-color: ${(props) => props.$bgcolor};
  border-radius: 10px;
`;

// props로 줄 때 내용이 없는 경우를 대비해서 디폴드값을 준다.
// 구조분해할당을 이용
export function Button({ bgcolor = "gray", title = "Click", func = () => {} }) {
  return (
    <>
      <StyledButton $bgcolor={bgcolor} onClick={func}>
        {title}
      </StyledButton>
    </>
  );
}
