import { useEffect, useState } from "react";
import { getGenre, getMoviesNowPlaying, IMG_PATH } from "./api";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
`;

const Card = styled.div`
  width: 100%;
  border: 1px solid dodgerblue;
  padding: 10px;
  cursor: pointer;
`;

const Img = styled.img`
  width: 100%;
`;

const Text = styled.div``;

const Button = styled.button`
  width: 150px;
  height: 40px;
  background-color: white;
  border: 1px solid dodgerblue;
  color: dodgerblue;
  padding: 5px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1rem;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: dodgerblue;
    color: white;
  }
  &:active {
    background-color: darkblue;
  }
`;

export function MovieList() {
  const [data, setData] = useState(null);
  const [sort, setSort] = useState("nowPlaying");

  async function getMovies(sort) {
    console.log(sort);
    try {
      const response = await getMoviesNowPlaying(sort);
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.log("에러 발생", error);
    }
  }
  function nowPlaying() {
    setSort("nowPlaying");
  }
  function popular() {
    setSort("popular");
  }
  function topRated() {
    setSort("topRated");
  }
  function upcoming() {
    setSort("upcoming");
  }

  useEffect(() => {
    getMovies(sort);
  }, [sort]);
  return (
    <>
      <h1>Movie List</h1>
      <Button onClick={nowPlaying}>Now Playing</Button>
      <Button onClick={popular}>Popular</Button>
      <Button onClick={topRated}>Top Rated</Button>
      <Button onClick={upcoming}>Upcoming</Button>
      <Container>
        {data &&
          // 비교연산자 : 첫번째 조건이 false면 그
          // 다음 비교는 시도조차 하지 않는 특성을 이용한 코드
          data.results.map((movie) => (
            <Card key={movie.id}>
              <Img src={IMG_PATH + movie.poster_path}></Img>
              <Text>타이틀 : {movie.title}</Text>
              <Text>장르 : {getGenre(movie.genre_ids)}</Text>
              <Text>소개글 : {movie.overview}</Text>
            </Card>
          ))}
      </Container>
    </>
  );
}
