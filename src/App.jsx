import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import TaggingScreen from './containers/tagging-screen'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <TaggingScreen />
    </div>
  )
}

export default App
