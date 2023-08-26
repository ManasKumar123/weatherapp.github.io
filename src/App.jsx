import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import TempApp from './components/TempApp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TempApp />
    </>
  )
}

export default App
