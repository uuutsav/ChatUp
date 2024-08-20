import { useEffect, useState } from 'react'
import axios from 'axios'

const Chats = () => {
  const [messagesData, setMessagesData] = useState([]);

  useEffect(() => {
    fetchChats();
  }, [])
  
  const fetchChats = async () => {
    const {data} = await axios.get("http://localhost:5000/app/chats")
    console.log(data)
    setMessagesData(data);
  }
  
  return (
    <div>
      Chats
      {messagesData.map((msg) => {
        return <p key={msg._id}>{msg.chatName}</p>
      })}
    </div>
  )
}

export default Chats
