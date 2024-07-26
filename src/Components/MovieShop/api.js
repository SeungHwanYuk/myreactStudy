import axios from "axios";

const headers = {
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NDFmN2JmMDgwOWMxZGFlNTViYzgyMTkzNDcwMTQwMiIsIm5iZiI6MTcyMTg4NDQ4OS4wMDI2MTcsInN1YiI6IjY0Njk2MzUwYTUwNDZlMDBlNWI2NjBkMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.r3fi44yAiziGcROaufG04pkpjYAp71lcMtXXM9bXbPY",
  },
};

export function getMoviesNowPlaying() {
  return axios.get(
    "https://api.themoviedb.org/3/movie/now_playing?language=ko-KR&page=1",
    headers
  );
}

export function getMoviesPopular() {
  return axios.get(
    "https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1",
    headers
  );
}

export function getMoviesTopRated() {
  return axios.get(
    "https://api.themoviedb.org/3/movie/top_rated?language=ko-KR&page=1",
    headers
  );
}

export function getMoviesUpcoming() {
  return axios.get(
    "https://api.themoviedb.org/3/movie/upcoming?language=ko-KR&page=1",
    headers
  );
}

export const IMG_PATH = "https://image.tmdb.org/t/p/original";

export function getMovieDetailById(id) {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${id}?language=ko-KR`,
    headers
  );
}

export function getMovieCreditById(id) {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?language=ko-KR`,
    headers
  );
}

export function searchMovieName(name) {
  return axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${name}&include_adult=false&language=ko-KR&page=1`,
    headers
  );
}

// 버튼 하드코딩
export function getMoviesSort(key) {
  // console.log("getMoviesNowPlaying 의 키 ", key);
  let url = "";
  const urlNowPlaying =
    "https://api.themoviedb.org/3/movie/now_playing?language=ko-KR&page=1";
  const urlPopular =
    "https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1";
  const urlTopRated =
    "https://api.themoviedb.org/3/movie/top_rated?language=ko-KR&page=1";
  const urlUpcoming =
    "https://api.themoviedb.org/3/movie/upcoming?language=ko-KR&page=1";

  // console.log("url : ", url);

  if (key == "nowPlaying") {
    url = urlNowPlaying;
  } else if (key == "popular") {
    url = urlPopular;
  } else if (key == "topRated") {
    url = urlTopRated;
  } else if (key == "upcoming") {
    url = urlUpcoming;
  }

  return axios.get(url, headers);
}
export let genre = [];

export async function setGenreListOfMovie() {
  // 로컬스토리지에 장르리스트가 있으면 그걸 사용
  genre = JSON.parse(localStorage.getItem("MovieGenreList"));
  // 없으면 api로 받아와서 로컬스토리지에 저장하고 사용
  if (!genre) {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/genre/movie/list?language=ko",
        headers
      );
      genre = response.data.genres;
      localStorage.setItem("MovieGenreList", JSON.stringify(genre));
    } catch (error) {
      console.log("Error", error);
    }
  }
}

export function getGenre(list) {
  return list
    .map((id) => {
      const temp = genre.find((g) => g.id == id);
      return temp ? temp.name : "";
    })
    .filter((name) => name)
    .join(", ");
  // let str = "";
  // list.forEach((a) => {
  //   const temp = genre.find((g) => g.id == a);
  //   str = str + ", " + temp.name;
  // });
  // return str;
}
