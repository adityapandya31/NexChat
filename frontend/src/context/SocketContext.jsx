import { createContext,useState,useEffect,useContext } from "react"; 
import { useAuthContext } from "./AuthContext";
import io from "socket.io-client";


 const SocketContext = createContext();

export const useSocketContext = () => {
    return useContext(SocketContext);
    };

export const SocketContextProvider = ({ children }) => {
    const[socket,setSocket]=useState(null);
    const[onlineUsers,setOnlineUsers]=useState([]);
    const{authUser} = useAuthContext();

    useEffect(()=>{
        if(authUser){
            const Socket = io("https://chat-app-94pk.onrender.com/",{
                query:{
                    userId:authUser._id,
                },      
            });
            setSocket(Socket);  
            Socket.on("getOnlineUsers",(users)=>{
                setOnlineUsers(users);
            });

            return()=>{
            Socket.close();
            }
        }else{
            if(socket){
                socket.disconnect();    
                setSocket(null);
        }
    }

    },[authUser]);
  return (
    <SocketContext.Provider value={{socket,onlineUsers}}>
      {children}
    </SocketContext.Provider>
  );
};
