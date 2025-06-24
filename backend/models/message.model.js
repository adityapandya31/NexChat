import mongoose, { Schema } from "mongoose";

const messageSchema = new  mongoose.Schema({
   
    senderId:{
      type: mongoose.Schema.Types.ObjectId,
      ref:"User",
      required:true
    },
    receiverId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
      },
    message:{
        type:String,
        required: true
    }
},{timestamps: true });

const Message = mongoose.model ("Message",messageSchema);// here we always use singular words the mongoose will directly convert the message to messages in data base
export default Message;

