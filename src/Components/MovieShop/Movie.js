import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  getGenre,
  getMovieCreditById,
  getMovieDetailById,
  IMG_PATH,
} from "./api";
import styled from "styled-components";
import { IconBack } from "./icon";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const Header = styled.div`
  margin: 20px;
  color: dodgerblue;
  text-align: center;
  position: relative;
`;
const Back = styled.div`
  position: absolute;
  top: 20px;
  right: 0;
`;
const Img = styled.img`
  width: 100%;
`;
const Content = styled.div`
  font-size: 1rem;
  line-height: 30px;
  color: #333;
`;

export function Movie() {
  const { id } = useParams();
  const [detail, setDetail] = useState(null);
  const [credit, setCredit] = useState(null);
  const navigate = useNavigate();

  async function getMovieInfo() {
    try {
      let response = await getMovieDetailById(id);
      console.log("getMovieDetailById", response);
      setDetail(response.data);
      response = await getMovieCreditById(id);
      console.log("getMovieCreditById", response.data);
      setCredit(response.data);
    } catch (error) {
      console.log("에러 발생", error);
    }
  }

  const handleGoBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    getMovieInfo();
  }, []);
  return (
    <>
      {detail && credit && (
        <>
          <Header>
            <h1>{detail.title}</h1>
            {/* 선생님 솔루션
            Link 대신 익명함수로 바로 호출해도됨
            <Back onClick={()=> navigate(-1)}>BACK</Back> */}
            <Back onClick={handleGoBack}>
              {/* svg는 코드가 길어서 지저분해지므로 icon.js에 
              따로 모아서 이름을 정의하고 컴포넌트를 import 한다 */}
              <IconBack />
            </Back>
          </Header>
          <Img src={IMG_PATH + detail.backdrop_path} />
          <Content>
            <p>
              <b>타이틀</b> : {detail.title}
            </p>
            <p>
              <b>장르</b> : {detail.genres.map((g) => g.name).join(", ")}
              {/* filter 의 name은 false가 아니면 담으라는 뜻. 
              곧 null은 false이므로 null값을 걸러준다 */}
              {/* <b>장르</b> :{" "}
              {detail.genres
                .map((g) => g.name)
                .filter((name) => name)
                .join(", ")} */}
            </p>
            <p>
              <b>개봉일</b> : {detail.release_date}
            </p>
            <p>
              <b>상영시간</b> : {detail.runtime + "분"}
            </p>
            <p>
              <b>감독</b> :{" "}
              {credit.crew
                .filter((c) => c.job == "Director")
                .map((c) => c.name)}
            </p>
            <p>
              <b>배우</b> :{" "}
              {/* filter의 i(index)로 limit을 사용할 때는 .slice()를 사용
              10의 조건이 안될 경우를 대비해서 오류를 방지하기 위함 */}
              {credit.cast
                .filter((c, i) => c.known_for_department == "Acting" && i < 10)
                .map((c) => c.name)
                .join(", ")}
            </p>

            <hr />

            <p>{detail.overview}</p>
          </Content>
        </>
      )}
    </>
  );
}
