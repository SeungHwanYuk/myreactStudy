import { useEffect, useState } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import styled from "styled-components";

const Container = styled.div`
  width: 1344px;
  height: 756px;
  margin: auto;
  border: 1px solid gray;
`;

export function Unity2Dplatformer() {
  // React -> Unity
  const [playingGame, setPlayingGame] = useState(false);
  const { unityProvider, sendMessage, addEventListener, removeEventListener } =
    useUnityContext({
      loaderUrl: "build/2DPlatformer_jslib.loader.js",
      dataUrl: "build/2DPlatformer_jslib.data",
      frameworkUrl: "build/2DPlatformer_jslib.framework.js",
      codeUrl: "build/2DPlatformer_jslib.wasm",
    });

  // Unity -> React
  const [isGameOver, setIsGameOver] = useState(false);
  const [userName, setUserName] = useState();
  const [score, setScore] = useState();

  function handleGameOver(userName, score) {
    setIsGameOver(true);
    setUserName(userName);
    setScore(score);
  }

  useEffect(() => {
    addEventListener("GameOver", handleGameOver);
    return () => {
      removeEventListener("GameOver", handleGameOver);
    };
  }, []);

  return (
    <>
      <h1>2D Platformer Game</h1>
      <button onClick={() => setPlayingGame(true)}>Start Game</button>
      <button onClick={() => sendMessage("player", "Jump")}>Jump</button>
      <Container>
        {playingGame ? (
          <Unity
            unityProvider={unityProvider}
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        ) : null}
      </Container>
      {isGameOver && (
        <p>{`Game Over ${userName}! You've scored ${score} points.`}</p>
      )}
    </>
  );
}
