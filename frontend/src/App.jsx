import { } from 'react'
import './App.css'
import { } from '@chakra-ui/react'

import { Route } from 'react-router-dom'
import Home from './Pages/Home'
import Chats from './Pages/Chats'


function App() {

  return (
    <>
      <Route path="/" component={ Home } exact/>
      <Route path="/chats" component={Chats} />
    </>
  )
}

export default App
