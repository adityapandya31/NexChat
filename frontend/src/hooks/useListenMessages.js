import React from 'react'
import { useEffect } from 'react'
import {useSocketContext} from"../context/SocketContext"
import useConversation from '../zustand/useConversation'
import { use } from 'react'
const useListenMessages = () => {
 const  {socket}= useSocketContext();
 const {messages,setMessages} = useConversation();
 
 useEffect(() => {
     socket?.on("newMessage",(newMessage)=>{
        //  console.log("new message received",message);
        newMessage.shouldShake = true;
         setMessages([...messages,newMessage]);
     })
     return () => {
         socket?.off("newMessage");
     }
 }, [socket,messages,setMessages]);
}

export default useListenMessages