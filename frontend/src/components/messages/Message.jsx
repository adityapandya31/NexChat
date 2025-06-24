// import React from 'react'
// import { useAuthContext } from '../../context/AuthContext'
// import useConversation from '../../zustand/useConversation';
// const Message = ({message}) => {
//  const {authUser} = useAuthContext();
//  const{selectedConversation} = useConversation();
//   const fromMe = message.senderId === authUser._id;
//   const chatClassName = fromMe ? ' chat chat-end' : 'chat chat-start';
//   // const chatClassName = fromMe ? 'chat chat-right' : 'chat chat-left';
//   const profilePic = fromMe ? authUser.profilePic : selectedConversation.profilePic;
//   const bubbleBgColor = fromMe ? 'bg-blue-500' : '';

//   return (
//     <div className='{chatClassName} '>
//         <div className="chat-image avatar">
//             <div className="w-10 rounded-full">
//                 <img src={profilePic} alt="Tailwind Css chat bubble component" />
//             </div>
//         </div>
//         <div className={`chat-bubble text-white bg-blue-500 ${bubbleBgColor}`}>{message.message}</div>
//         <div className={`chat-footer opacity-50 text-xs flex gap-1 items-center `}>12:42</div>
//     </div>
//   )
// }

// export default Message


import React from 'react';
import { useAuthContext } from '../../context/AuthContext';
import useConversation from '../../zustand/useConversation';
import { extractTime } from '../../utils/extractTime';

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();

  const fromMe = message.senderId === authUser._id;
  const chatClassName = fromMe ? 'chat chat-end' : 'chat chat-start';
  const profilePic = fromMe ? authUser.profilePic : selectedConversation.profilePic;
    const bubbleBgColor = fromMe ? ' chat-bubble bg-blue-500' : 'chat-bubble text-white bg-gray-300';
    const fromattedTime = extractTime(message.createdAt);
    const shakeClass = message.shouldShake ? 'shake' : ''; 

  return (
    <div className={chatClassName}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src={profilePic} alt="Profile" />
        </div>
      </div>
      <div className={` ${bubbleBgColor} ${shakeClass}`}>{message.message}</div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
     {fromattedTime}
      </div>
    </div>
  );
};

export default Message;
