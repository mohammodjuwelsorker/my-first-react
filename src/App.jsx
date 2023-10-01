import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './Users'
import Friends from './Friends'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Counter></Counter>
    <Team></Team>
    <Users></Users>
    <Friends></Friends>
    </>
  )
}

export default App
