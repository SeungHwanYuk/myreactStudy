import styled from "styled-components";
import { Button } from "./Button";
import { Menu } from "./Menu";
import { ItemList } from "./ItemList";

const Container = styled.div`
  display: flex;
`;

const SideMenu = styled.div`
  width: 200px;
  height: 100vh;
`;

const Content = styled.div`
  padding-left: 50px;
`;

export function Home() {
  return (
    <>
      <Container>
        <SideMenu>
          <Menu />
        </SideMenu>
        <Content>
          <ItemList />
          <Button
            bgcolor={"dodgerblue"}
            title={"버튼1"}
            func={() => console.log("버튼 1 클릭 됨")}
          />
          <Button
            bgcolor={"lightgreen"}
            title={"버튼2"}
            func={() => console.log("버튼 2 클릭 됨")}
          />
          <Button
            bgcolor={"teal"}
            title={"버튼3"}
            func={() => console.log("버튼 3 클릭 됨")}
          />
          {/* 디폴트값만 받은 버튼 */}
          <Button />
        </Content>
      </Container>
    </>
  );
}
