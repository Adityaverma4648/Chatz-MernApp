import React, { useEffect, useState } from "react";
import axios from "axios";

const Chat = () => {
  const [chats, setChats] = useState([]);

  const fetchChats = async () => {
    const { data } = await axios.get("/api/chat");
    console.log(data);
    setChats(data);
  };

  useEffect(() => {
    fetchChats();
  }, []);
   
  return (
     <div className="text-danger h1">
         {chats.map((d)=>{
               return d.chatName;
         })}
     </div>
  );
};

export default Chat;
