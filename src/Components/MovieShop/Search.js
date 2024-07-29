import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import {
  getGenre,
  IMG_PATH,
  searchMovieName,
  setGenreListOfMovie,
} from "./api";
import { useLocation, useNavigate } from "react-router-dom";
import { SearchContext } from "./SearchWrapper";

const SearchBox = styled.div``;
const Input = styled.input`
  width: 500px;
  margin-right: 5px;
`;
const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  margin-top: 20px;
  margin-bottom: 50px;
`;
const Card = styled.div`
  width: 100%;
  border: 1px solid dodgerblue;
  cursor: pointer;
  padding: 10px;
`;
const Img = styled.img`
  width: 100%;
`;
const Text = styled.div`
  color: #333;
  margin: 2px 0;
`;

export function Search() {
  const [data, setData] = useState(null);
  const { inputValue, setInputValue } = useContext(SearchContext);
  // const { searchState, setSearchState } = useContext(SearchContext);

  // useNavigate 후크는 url 주소를 매개변수로 갖는 페이지 변경 함수를 리턴
  const navigate = useNavigate();

  // useLocation 후크를 이용해서 주소값을 받아오고 URLSearchParams로 주소내에 ? 검색
  // ? 에서 "keyword" 라는 이름을 찾고 해당 value를 저장
  const location = useLocation();
  const keyword = new URLSearchParams(location.search).get("keyword");

  // 선생님 솔루션
  async function teacherSearchMovies() {
    try {
      const response = await searchMovieName(keyword);
    } catch (error) {
      console.log("에러 발생", error);
    }
  }

  async function getMoviesByName(name) {
    try {
      const response = await searchMovieName(name);
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.log("에러 발생", error);
    }
  }

  // 선생님 솔루션
  // 의존성 배열이 한번만 불리는건 조금 아쉬운 방식
  // keyword가 변할 때 마다 동작 하는 것이 더욱 좋음
  useEffect(() => {
    if (keyword) {
      getMoviesByName(keyword ? keyword : "");
    } else {
      setData("");
    }
    console.log("keyword : ", keyword);
    setGenreListOfMovie();
  }, [keyword]);

  return (
    <>
      <SearchBox>
        <Input
          placeholder="검색어를 입력해주세요"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          onClick={() => {
            navigate(`/search?keyword=${inputValue}`);
            getMoviesByName(inputValue);
          }}
        >
          Search
        </button>
      </SearchBox>
      <h3>{keyword ? `"${keyword}"로 검색한 결과 : ` : null}</h3>
      <Container>
        {data &&
          data.results.map((movie) => (
            <Card
              key={movie.id}
              onClick={() => {
                navigate(`/movie/${movie.id}?language=ko-KR`);
              }}
            >
              <Img src={IMG_PATH + movie.poster_path}></Img>
              <Text>
                <b>타이틀</b> : {movie.title}
              </Text>
              <Text>
                <b>장르</b> : {getGenre(movie.genre_ids)}
              </Text>
              <hr />
              <Text>{movie.overview}</Text>
            </Card>
          ))}
      </Container>
    </>
  );
}
