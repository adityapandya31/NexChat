
// import React, { useEffect,useRef } from 'react'
// import Message from "./Message";
// import useGetMessages from '../../hooks/useGetMessages';
// import MessageSkeleton from '../skeletons/MessageSkeleton';
// import useListenMessages from '../../hooks/useListenMessages';


// const Messages = () => {
// 	const { messages, loading } = useGetMessages();
// 	// console.log(messages);
// 	useListenMessages();
// 	const lastMessageRef = useRef();
//   useEffect(()=>{
// 	setTimeout(()=>{
// 		lastMessageRef.current?.scrollIntoView({behavior:'smooth'});
// 	},100)
//   },[messages])
// 	return (
// 		<div className='px-4 flex-1 overflow-auto'>
// 			{!loading && messages.length > 0 && messages.map((message) => (
// 				<div key={message._id} ref={lastMessageRef}>
// 					<Message message={message} />
// 				</div>
// 			))}
// 			{loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={`skeleton-${idx}`} />)}
// 			{!loading && messages.length === 0 && (
// 				<p className='text-gray-500 text-center'>Send a message to start conversation</p>
// 			)}
// 		</div>
// 	);
// };

// export default Messages;




// import { useRef, useEffect } from 'react';
// import useGetMessages from '../../hooks/useGetMessages';
// import useListenMessages from '../../hooks/useListenMessages';
// import Message from './Message';
// import MessageSkeleton from '../skeletons/MessageSkeleton';

// const Messages = () => {
// 	const { messages, loading } = useGetMessages();
// 	useListenMessages();a
// 	const lastMessageRef = useRef();

// 	useEffect(() => {
// 		setTimeout(() => {
// 			lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' });
// 		}, 100);
// 	}, [messages]);

// 	return (
// 		<div className='px-4 flex-1 overflow-auto'>
// 			{!loading && messages?.length > 0 && messages.map((message, idx) => (
// 				<div key={message._id} ref={idx === messages.length - 1 ? lastMessageRef : null}>
// 					<Message message={message} />
// 				</div>
// 			))}
// 			{loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
// 			{!loading && (!messages || messages.length === 0) && (
// 				<p className='text-gray-500 text-center'>Send a message to start conversation</p>
// 			)}
// 		</div>
// 	);
// };

// export default Messages;


import { useRef, useEffect } from 'react';
import useGetMessages from '../../hooks/useGetMessages';
import useListenMessages from '../../hooks/useListenMessages';
import Message from './Message';
import MessageSkeleton from '../skeletons/MessageSkeleton';

const Messages = () => {
  const { messages = [], loading } = useGetMessages(); // Ensure `messages` defaults to an empty array
  useListenMessages();
  const lastMessageRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }, [messages]);

  return (
    <div className='px-4 flex-1 overflow-auto'>
      {Array.isArray(messages) && messages.length > 0 && messages.map((message, idx) => (
        <div key={message._id} ref={idx === messages.length - 1 ? lastMessageRef : null}>
          <Message message={message} />
        </div>
      ))}
      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
      {!loading && (!messages || messages.length === 0) && (
        <p className='text-gray-500 text-center'>Send a message to start conversation</p>
      )}
    </div>
  );
};

export default Messages;


// import { useRef, useEffect } from 'react';
// import useGetMessages from '../../hooks/useGetMessages';
// import useListenMessages from '../../hooks/useListenMessages';
// import Message from './Message';
// import MessageSkeleton from '../skeletons/MessageSkeleton';

// const Messages = () => {
//   const { messages = [], loading } = useGetMessages(); // Ensure `messages` defaults to an empty array
//   console.log(messages);
//   useListenMessages();
//   const lastMessageRef = useRef();

//   useEffect(() => {
//     setTimeout(() => {
//       lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' });
//     }, 100);
//   }, [messages]);

//   return (
//     <div className='px-4 flex-1 overflow-auto'>
//       {!loading &&
//         messages.length > 0 &&
//         messages.map((message, idx) => (
//           <div
//             key={message._id || `message-${idx}`} // Use fallback key if `_id` is undefined
//             ref={idx === messages.length - 1 ? lastMessageRef : null}
//           >
//             <Message message={message} />
//           </div>
//         ))}
//       {loading &&
//         [...Array(3)].map((_, idx) => <MessageSkeleton key={`skeleton-${idx}`} />)}
//       {!loading && messages.length === 0 && (
//         <p className='text-gray-500 text-center'>Send a message to start conversation</p>
//       )}
//     </div>
//   );
// };

// export default Messages;




