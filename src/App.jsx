import { useState } from "react";
import "./App.css";
import TaggingScreen from "./containers/tagging-screen";
import Header from "./components/Header";
import FinishScreen from "./components/FinishScreen";
import targets from "./imageData";

function App() {
  const [x, setX] = useState("0");
  const [y, setY] = useState("0");
  const [hideMenuBox, setHideMenuBox] = useState(true);
  const [gameStarted, setGameStarted] = useState(false);
  const [foundTargets, setFoundTargets] = useState([]);
  const [finishTime, setFinishTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [restarted, setRestarted] = useState(false);


  function handleClick(e) {
    if (e.target.id != "image") return;
    setHideMenuBox(!hideMenuBox);
    setX(Math.round(`${(e.nativeEvent.layerX / e.target.clientWidth) * 100}`));
    setY(Math.round(`${(e.nativeEvent.layerY / e.target.clientHeight) * 100}`));
  }

  function startGame() {
    setGameStarted(true);
    setRestarted(false);
  }

  function stopGame() {
    setGameStarted(false);
    setHideMenuBox(true);
    setFoundTargets([]);
    setFinishTime(null)
  }

  function getFinishTime(time) {
    setFinishTime(time);
  }

  function restart() {
    setGameOver(false)
    targets.targets.map((target) => target.isFound = false);
    setRestarted(true);
  }

  return (
    <div onClick={handleClick} className="App relative">
      <Header gameStarted={gameStarted} getFinishTime={getFinishTime} targets={targets.targets} restarted={restarted} />
      <TaggingScreen
        x={x}
        y={y}
        hideMenuBox={hideMenuBox}
        startGame={startGame}
        gameStarted={gameStarted}
        setFoundTargets={setFoundTargets}
        foundTargets={foundTargets}
        stopGame={stopGame}
        setGameOver={setGameOver}
        gameOver={gameOver}
        icons = {targets}
      />
      {gameOver && <FinishScreen time={finishTime} icons={targets.targets} restart={restart} />}
    </div>
  );
}

export default App;
