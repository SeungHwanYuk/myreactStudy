import axios from "axios";

const headers = {
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NDFmN2JmMDgwOWMxZGFlNTViYzgyMTkzNDcwMTQwMiIsIm5iZiI6MTcyMTg4NDQ4OS4wMDI2MTcsInN1YiI6IjY0Njk2MzUwYTUwNDZlMDBlNWI2NjBkMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.r3fi44yAiziGcROaufG04pkpjYAp71lcMtXXM9bXbPY",
  },
};

export function getMoviesNowPlaying(key) {
  console.log("getMoviesNowPlaying 의 키 ", key);
  let url = "";
  const urlNowPlaying =
    "https://api.themoviedb.org/3/movie/now_playing?language=ko-KR&page=1";
  const urlPopular =
    "https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1";
  const urlTopRated =
    "https://api.themoviedb.org/3/movie/top_rated?language=ko-KR&page=1";
  const urlUpcoming =
    "https://api.themoviedb.org/3/movie/upcoming?language=ko-KR&page=1";

  console.log("url : ", url);

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

export const IMG_PATH = "https://image.tmdb.org/t/p/original";

export const genre = [
  {
    id: 28,
    name: "Action",
  },
  {
    id: 12,
    name: "Adventure",
  },
  {
    id: 16,
    name: "Animation",
  },
  {
    id: 35,
    name: "Comedy",
  },
  {
    id: 80,
    name: "Crime",
  },
  {
    id: 99,
    name: "Documentary",
  },
  {
    id: 18,
    name: "Drama",
  },
  {
    id: 10751,
    name: "Family",
  },
  {
    id: 14,
    name: "Fantasy",
  },
  {
    id: 36,
    name: "History",
  },
  {
    id: 27,
    name: "Horror",
  },
  {
    id: 10402,
    name: "Music",
  },
  {
    id: 9648,
    name: "Mystery",
  },
  {
    id: 10749,
    name: "Romance",
  },
  {
    id: 878,
    name: "Science Fiction",
  },
  {
    id: 10770,
    name: "TV Movie",
  },
  {
    id: 53,
    name: "Thriller",
  },
  {
    id: 10752,
    name: "War",
  },
  {
    id: 37,
    name: "Western",
  },
];

export function getGenre(list) {
  let str = "";
  list.forEach((a) => {
    const temp = genre.find((g) => g.id == a);
    str = str + ", " + temp.name;
  });
  return str;
}
