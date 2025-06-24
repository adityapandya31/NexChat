import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGetConversations = () => {
	const [loading, setLoading] = useState(false);
	const [conversations, setConversations] = useState([]);
    
	useEffect(() => {
		const getConversations = async () => {
			setLoading(true);
			try {
				const res = await fetch("/api/users", {
					credentials: "include",
					
				});
				const data = await res.json();
			
                  // the data here contained a object which hold my users as filteredUsers
				// Ensure data.filteredUsers exists and is an array
				setConversations(Array.isArray(data.filteredUsers) ? data.filteredUsers : []);
			} catch (error) {
				toast.error(error.message);
				setConversations([]); // Fallback to empty array
			} finally {
				setLoading(false);
			}
		};

		getConversations();
	}, []);

	return { loading, conversations };
};

export default useGetConversations;
