import { useState } from 'react'
import './App.css'
import { Button } from '@chakra-ui/react'

import { Route } from 'react-router-dom'
import Home from './Pages/Home'
import Chats from './Pages/Chats'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Route path="/" component={ Home } exact/>
      <Route path="/chats" component={Chats} />
    </>
  )
}

export default App
