import useConversation from "../zustand/useConversation";
import { useState } from "react";
import toast from 'react-hot-toast';
 import useGetMessages from "./useGetMessages";
const useSendMessage = () => {
 const[loading, setLoading] = useState(false);  
 const  {messages,setMessages,selectedConversation}=  useConversation();
 const{fetchMessages} = useGetMessages(); 

 const sendMessage = async (message) => {
    try {
      setLoading(true); //api/messages/send/6761ac5ac188e5936d0d3acb
      const response = await fetch(`/api/messages/send/${selectedConversation._id}`, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({
            message,
         }),
      });
      const data = await response.json();
      if(data.error){
        throw new Error(data.error);
      }
      fetchMessages();

     setMessages([...messages, data.message]);
   
    } catch (error) {
      toast.error('Failed to send message');    
    } finally {
      setLoading(false);
    }
     };
        return {loading,sendMessage};
}

export default useSendMessage;


// import useConversation from "../zustand/useConversation";
// import { useState } from "react";
// import toast from 'react-hot-toast';

// const useSendMessage = () => {
//   const [loading, setLoading] = useState(false);
//   const { messages, setMessages, selectedConversation } = useConversation();

//   const sendMessage = async (message) => {
//     setLoading(true);
//     try {
//       const response = await fetch(`/api/messages/send/${selectedConversation._id}`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ message }),
//       });

//       const data = await response.json();
//       if (data.error) throw new Error(data.error);

//       // Optimistically update the UI
//       const newMessage = {
//         ...data.message,
//         sender: selectedConversation.userId, // Assuming this is the current user's ID
//         _id: Date.now().toString(), // Temporary ID
//       };
//       setMessages((prevMessages) => [...prevMessages, newMessage]);

//       // If the server response includes the actual message ID, update it
//       if (data.message._id) {
//         setMessages((prevMessages) =>
//           prevMessages.map((msg) =>
//             msg._id === newMessage._id ? { ...msg, _id: data.message._id } : msg
//           )
//         );
//       }

//       return newMessage;
//     } catch (error) {
//       toast.error(error.message || 'Failed to send message');
//       throw error;
//     } finally {
//       setLoading(false);
//     }
//   };

//   return { loading, sendMessage };
// };

// export default useSendMessage;

