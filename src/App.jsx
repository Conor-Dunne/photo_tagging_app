import { useState } from 'react'
import './App.css'
import TaggingScreen from './containers/tagging-screen'
import Header from './components/Header'
import FinishScreen from './components/FinishScreen'

function App() {
  const [count, setCount] = useState(0)
  const [x, setX] = useState("0");
  const [y, setY] = useState("0");
  const [hideMenuBox, setHideMenuBox] = useState(true);
  const [gameStarted, setGameStarted] = useState(false);
  const [finishTime, setFinishTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);



  function handleClick(e) {
    if (e.target.id != "image") return 
    setHideMenuBox(!hideMenuBox);
    setX(Math.round(`${(e.nativeEvent.layerX / e.target.clientWidth) * 100}`));
    setY(Math.round(`${(e.nativeEvent.layerY / e.target.clientHeight) * 100}`));
  }

  function startGame() {
    setGameStarted(true);
  }

  function stopGame() {
    setGameStarted(false);
    setHideMenuBox(true);
  }

  function getFinishTime(time) {
    setFinishTime(time)
  }

  return (
    <div
    onClick={handleClick}
    className="App relative">
      <Header gameStarted={gameStarted} getFinishTime={getFinishTime} />
      <TaggingScreen x={x}  y={y} hideMenuBox = {hideMenuBox} startGame={startGame} gameStarted={gameStarted} stopGame={stopGame} setGameOver={setGameOver} gameOver={gameOver} />
      {gameOver && <FinishScreen time={finishTime} />}
    </div>
  )
}

export default App
