import useGetConversations from "../../hooks/useGetConversations";
import Conversation from "./Conversation";
import { getRandomEmoji } from "../../utils/emojis";

const Conversations = () => {
    const { loading, conversations } = useGetConversations();

    console.log("Conversations Type:", Array.isArray(conversations));
    console.log("Conversations Data:", conversations);

    return (
        <div className='py-2 flex flex-col overflow-auto'>
            {Array.isArray(conversations) && conversations.map((conversation, idx) => (
                <Conversation
                    key={conversation._id}
                    conversation={conversation}
                    emoji={getRandomEmoji()}
                    lastIdx={idx === conversations.length - 1}
                />
            ))}

            {loading ? <span className='loading loading-lg'></span> : null}
        </div>
    );
};

export default Conversations;
