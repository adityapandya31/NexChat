import {create} from 'zustand'; 

 // the whole thing is just like useSate means ine variable and one setter function here we have conversation array and messages array and their setter functions
 const useConversation = create((set) => ({
    selectedConversation: null,
    setSelectedConversation: (selectedConversation) => set({ selectedConversation }),
    messages: [],
    setMessages: (messages) => set({ messages }),
    
}));

export default useConversation; 