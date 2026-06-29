import { errorResponse, successResponse } from "../responseHandlers/responseHandler.js"
import userModel from "../models/User.js"

const getUser = async (req, res) => {}

const getAllUsers = async (req, res) => {
    console.log("req query -->",req.query);
    
    try {
        let allUsers = await userModel.find(req.query)
        console.log(allUsers);

        return successResponse(200, true, "users retrieve successfully", allUsers, res)
        
    } catch (error) {
        return errorResponse(400, false, error.message, res)
        
    }
}


const updateUser = async (req, res) => {
    // console.log("req params -->",req.params.id);

//   console.log(req.params);
  
  
    
    try {
          let findUser = await userModel.findById({_id : req.params.id})
    console.log("saleem2 -->", findUser);
    
    if(!findUser){
        return errorResponse(404,false, "user not found", res)
    }

  let updatedUser = await userModel.findByIdAndUpdate(req.params.id, req.body)

    console.log("update user -->",updateUser);
    

        return successResponse(200, true, "user updated successfully", {}, res)
    } catch (error) {
        return errorResponse(400, false, error.message, res)
    }
}


const deleteUser = async (req, res) => {

    try {
          let findUser = await userModel.findById({_id : req.params.id})
    
    if(!findUser){
        return errorResponse(404,false, "user not found", res)
    }

  let deletedUser = await userModel.findByIdAndDelete(req.params.id)

    console.log("deleted user -->",deletedUser);
    

        return successResponse(200, true, "user deleted successfully", {}, res)
    } catch (error) {
        return errorResponse(400, false, error.message, res)
    }
}


export {getAllUsers, updateUser, deleteUser}