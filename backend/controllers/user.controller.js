import User from "../models/user.model.js";

export const getUsersForSidebar = async(req,res)=>{
try {
    const loginuser = req.user._id;
    const filteredUsers = await User.find({_id:{$ne:loginuser}}).select("-password");
    res.status(200).json({filteredUsers});
} catch (error) {
    console.log("user controller error");
    res.status(500).json({error:"internal server error"})
}
}