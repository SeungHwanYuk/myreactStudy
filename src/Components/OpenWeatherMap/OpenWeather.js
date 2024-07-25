import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Card = styled.div`
  width: 500px;
  height: 300px;
  // UI 스타일링시 영역에 컬러를 넣어야 할시
  // 꼭 linear-gradient 사용
  // 90deg 는 각도를 뜻하고 90도 -> 좌우
  background: linear-gradient(90deg, #a19cd1, #feb47b);
  color: white;
  border-radius: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 30px;
  margin-bottom: 20px;
`;

const Icon = styled.div`
  text-align: center;
  img {
    width: 100%;
    margin-top: 20px;
  }
`;

const Weather = styled.div`
  display: flex;
  flex-direction: column;
  text-align: end;
`;

const Temp = styled.div`
  margin-top: 20px;
  font-size: 5rem;
  // 아이콘을 가져와서 css에 추가할 때

  // Content Distribution Network - 컨텐트 분산 네트워크 (서버별로 검색엔진 제공)
  // JS에서 사용하는 외부 라이브러리 링크 주소를 검색하기 위해 CDN을 이용해야함
  // tabler icons를 검색후 태크 링크를 index.html <head>태그에 넣는다.
  // JSX의 i 태그를 만들고 className에 아이콘의 Webfont를 넣으면 된다.
  i {
    font-size: 3.5rem;
  }
`;

const City = styled.div`
  font-size: 2.5rem;
`;

const Info = styled.div`
  font-size: 1.5rem;
  margin-top: 30px;
`;
const SearchBox = styled.div`
  display: flex;
  margin-top: 20px;
`;
const Input = styled.input`
  width: 350px;
`;
const Button = styled.button`
  background-color: dodgerblue;
  border: none;
  color: white;
  padding: 5px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1.1rem;
  margin-left: 20px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: blue;
  }
  &:active {
    background-color: darkblue;
  }
`;

export function OpenWeather() {
  const API_KEY = "10c4dd19da675f67a7cfd78eb3a85785";
  const [icon, setIcon] = useState("");
  const [temp, setTemp] = useState(0);
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");

  const [inputCity, setInputCity] = useState("");

  // 1번의 Async ~ await 방식의 비동기 코드는 반드시 함수() 안에서 실행되어야 하고
  // 함수 선언문 앞에 async 키워드가 필요함
  // await를 이용하기 위해서 비동기가 필요하므로 함수에 최초 async로 표시해준다
  async function geoOK(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    // 위도 , 경도로 찾기
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    // 1. Axios (Async ~ await) ☆☆☆☆☆☆☆☆☆☆☆☆☆☆
    try {
      const response = await axios.get(url);
      const data = response.data;
      console.log(data);
      setCity(data.name);
      setTemp(parseInt(data.main.temp));
      setIcon(data.weather[0].icon);
      setWeather(data.weather[0].main);
    } catch (error) {
      console.log("요청이 실패했습니다.", error);
    }

    // 2. Axios (Promise ~ then)
    // axios
    //   .get(url)
    //   .then((response) => {
    //     const data = response.data;
    //     console.log(data);
    //     setCity(data.name);
    //     setTemp(parseInt(data.main.temp));
    //     setIcon(data.weather[0].icon);
    //     setWeather(data.weather[0].main);
    //   })
    //   .catch((error) => {
    //     console.log("요청이 실패했습니다.", error);
    //   });

    // 3. fetch의 장점은 외부 라이브러리 설치가 필요없다
    // 외엔 별로.............
    // fetch(url)
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => {
    //     console.log(data);
    //     setCity(data.name);
    //     setTemp(parseInt(data.main.temp));
    //     setIcon(data.weather[0].icon);
    //     setWeather(data.weather[0].main);
    //   })
    //   .catch((error) => {
    //     console.log("요청이 실패했습니다.", error);
    //   });
  }
  // 도시 이름으로 찾기
  async function getWeatherByCityName() {
    const urlCity = `https://api.openweathermap.org/data/2.5/find?q=${inputCity}&appid=${API_KEY}&units=metric`;

    try {
      const response = await axios.get(urlCity);
      const data = response.data.list[0];
      console.log(data);
      setCity(data.name);
      setTemp(parseInt(data.main.temp));
      setIcon(data.weather[0].icon);
      setWeather(data.weather[0].main);
    } catch (error) {
      console.log("요청이 실패했습니다.", error);
    }
  }
  function geoError() {
    alert("현재 위치정보를 찾을 수 없습니다.");
  }

  // 최초 1회만 실행
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(geoOK, geoError);
  }, []);

  return (
    <>
      <Container>
        <Card>
          <Icon>
            <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`}></img>
          </Icon>
          <Weather>
            <Temp>
              {temp}
              <i className="ti ti-temperature-celsius"></i>
            </Temp>
            <City>{city}</City>
            <Info>{weather}</Info>
          </Weather>
        </Card>
        <SearchBox>
          <Input
            placeholder="도시 이름을 영어로 입력해주세요"
            onChange={(e) => {
              setInputCity(e.target.value);
            }}
            value={inputCity}
          />
          <Button onClick={getWeatherByCityName}>Search</Button>
        </SearchBox>
      </Container>
    </>
  );
}
