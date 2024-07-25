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
                <Route path="/movie" element={<MovieList />} />
                <Route path="/search" element={<Search />} />
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
