import { useState } from 'react'
import './App.css'
import TaggingScreen from './containers/tagging-screen'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)
  const [x, setX] = useState("0");
  const [y, setY] = useState("0");
  const [hideMenuBox, setHideMenuBox] = useState(true);

  function handleClick(e) {
    console.log(e.target.id)
    setHideMenuBox(!hideMenuBox);
    setX(Math.round(`${(e.nativeEvent.layerX / e.target.clientWidth) * 100}`));
    setY(Math.round(`${(e.nativeEvent.layerY / e.target.clientHeight) * 100}`));
  }

  return (
    <div
    onClick={handleClick}
    className="App">
      <Header />
      <TaggingScreen x={x}  y={y} hideMenuBox = {hideMenuBox} />
    </div>
  )
}

export default App
