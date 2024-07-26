import { useContext, useEffect, useState } from "react";
import {
  getGenre,
  IMG_PATH,
  getMoviesNowPlaying,
  getMoviesPopular,
  getMoviesTopRated,
  getMoviesUpcoming,
  setGenreListOfMovie,
} from "./api";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { MovieContext } from "./MovieWrapper";

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

const Tab = styled.div`
  display: flex;
`;

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
  // : 과 . 의 차이
  // : 는 원래 완성된 css 기능들을 부를때 사용
  // className을 .으로 원하는 기능 할당 하고 사용 가능
  &.active {
    background-color: royalblue;
    color: white;
  }
`;

// Button 하드코딩 수정
const categories = [
  { category: "Now Playng", func: getMoviesNowPlaying },
  { category: "Popular", func: getMoviesPopular },
  { category: "Top Rated", func: getMoviesTopRated },
  { category: "Upcoming", func: getMoviesUpcoming },
];

export function MovieList() {
  const [data, setData] = useState(null);
  // const [sort, setSort] = useState("nowPlaying");

  const { category, setCategory } = useContext(MovieContext);

  // useNavigate 후크는 url 주소를 매개변수로 갖는 페이지 변경 함수를 리턴
  const navigate = useNavigate();

  async function getMovies(index) {
    // console.log(sort);
    try {
      // const response = await getMoviesNowPlaying(sort);
      setCategory(index);
      const response = await categories[index].func();
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.log("에러 발생", error);
    }
  }

  // function nowPlaying() {
  //   setSort("nowPlaying");
  // }
  // function popular() {
  //   setSort("popular");
  // }
  // function topRated() {
  //   setSort("topRated");
  // }
  // function upcoming() {
  //   setSort("upcoming");
  // }

  useEffect(() => {
    setGenreListOfMovie();
    getMovies(category);
    // getMovies(sort);
  }, [category]);
  return (
    <>
      <h1>Movie List</h1>
      {/* <Button onClick={nowPlaying}>Now Playing</Button>
      <Button onClick={popular}>Popular</Button>
      <Button onClick={topRated}>Top Rated</Button>
      <Button onClick={upcoming}>Upcoming</Button> */}

      {/* Button 하드코딩 수정 */}
      <Tab>
        {categories.map((c, i) => (
          <Button
            key={i}
            onClick={() => getMovies(i)}
            // 삼항연산자로 className 지정가능
            className={i == category ? "active" : ""}
          >
            {c.category}
          </Button>
        ))}
      </Tab>

      <Container>
        {data &&
          // 비교연산자 : 첫번째 조건이 false면 그
          // 다음 비교는 시도조차 하지 않는 특성을 이용한 코드
          data.results.map((movie) => (
            <Card
              key={movie.id}
              onClick={() => {
                // 페이지 변경 함수를 리턴
                navigate(`${movie.id}`);
              }}
            >
              <Img src={IMG_PATH + movie.poster_path}></Img>
              <Text>타이틀 : {movie.title}</Text>
              <Text>장르 : {getGenre(movie.genre_ids)}</Text>
              <hr />
              <Text>소개글 : {movie.overview}</Text>
            </Card>
          ))}
      </Container>
    </>
  );
}
