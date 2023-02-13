import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import TaggingScreen from './containers/tagging-screen'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <TaggingScreen />
    </div>
  )
}

export default App
