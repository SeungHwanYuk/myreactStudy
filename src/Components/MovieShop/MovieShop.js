import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Home } from "./Home";
import { Dashboard } from "./Dashboard";
import { Login } from "./Login";
import { Error } from "./Error";
import { Movie } from "./Movie";
import { MovieList } from "./MovieList";
import { Search } from "./Search";
import styled from "styled-components";
import { MovieWrapper } from "./MovieWrapper";
import { SearchWrapper } from "./SearchWrapper";

const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;
const Section = styled.div`
  width: 60%;
`;
const Menu = styled.div`
  width: 100%;
`;
const ContentBox = styled.div`
  width: 100%;
  margin-top: 30px;
`;

export function MovieShop() {
  return (
    <>
      <BrowserRouter>
        <Container>
          <Section>
            <Menu>
              <Navbar />
            </Menu>
            <ContentBox>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />

                {/* 하위 주소를 만들 때 부모 / 자식 형태로 만든다 */}
                {/* 변화하는 PathVariable상태로 자식을 만들시 path에 : 을 추가한다 */}
                {/* 이때 부모 컴포넌트는 자식까지 실행시켜주는 컴포넌트로 수정해야함! */}
                <Route path="/movie" element={<MovieWrapper />}>
                  {/* 부모였던 MovieList -> MovieWrapper로 컴포넌트를 만들고 바꿔주면
                MovieWrapper의 Outlet이 부모와 자식을 하나의 주소로 합쳐준다.  */}
                  <Route index element={<MovieList />} />
                  <Route path=":id" element={<Movie />} />
                </Route>

                <Route path="/search" element={<SearchWrapper />}>
                  <Route index element={<Search />} />
                  <Route path=":id" element={<Movie />} />
                </Route>

                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<Error />} />
              </Routes>
            </ContentBox>
          </Section>
        </Container>
      </BrowserRouter>
    </>
  );
}
