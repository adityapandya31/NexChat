import { IoSearchSharp } from "react-icons/io5";
import { useState } from "react";
import useConversation from "../../zustand/useConversation";
 import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";
const SearchInput = () => {
	const[searchTerm,setSearchTerm] = useState('');
         const {setSelectedConversation} = useConversation();
		 const{conversations} =  useGetConversations();
	const handleSubmit = (e) => {
		e.preventDefault();
		if(!searchTerm) return;
		if(searchTerm.length<3){
			return toast.error('Search term must be at least 3 characters');
		}
		const conversation = conversations.find((conv)=>conv.fullName.toLowerCase().includes(searchTerm.toLowerCase()));
		if(conversation){
			setSelectedConversation(conversation);
	}
	else{
		toast.error('No conversation found');
	}
		setSearchTerm('');
	};

	return (
		<form  onSubmit={handleSubmit}className='flex items-center gap-2'>
			<input type='text' placeholder='Search…' className='input input-bordered rounded-full'
			value={searchTerm} 
			onChange={(e)=>setSearchTerm(e.target.value)}/>
			<button type='submit' className='btn btn-circle bg-sky-500 text-white'>
				<IoSearchSharp className='w-6 h-6 outline-none' />
			</button>
		</form>
	);
};
export default SearchInput;