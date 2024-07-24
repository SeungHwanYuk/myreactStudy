import { createGlobalStyle } from "styled-components";
import { Home } from "./Components/20240724/Home";
import { Menu } from "./Components/20240724/Menu";
import { ItemList } from "./Components/20240724/ItemList";
import { OpenWeather } from "./Components/OpenWeatherMap/OpenWeather";

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'GmarketSansMedium';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: GmarketSansMedium;
}
`;

function App() {
  return (
    <>
      <OpenWeather />
    </>
  );
}

export default App;
