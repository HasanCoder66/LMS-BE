import { errorResponse, successResponse } from "../responseHandlers/responseHandler.js"
import userModel from "../models/User.js"

const getUser = async (req, res, next) => {
    console.log("id -->", req.params.id);
    try {
        // let userById = await userModel.findById(req.params.id);

        // if(userById){

        //     return successResponse(200, true, "user data milgaya..", userById, res)
        // }
        
        // console.log(userById);

        if(true){
            throw "faaltu ka errror"
        }else {
            throw  "else wala errror"
        }


    } catch (error) {
        // console.log(error);
        next(error)
        // return errorResponse(400, false, error.message, res)
    }
}

const getAllUsers = async (req, res) => {
    // console.log("req query -->", req.query);
    
    // let query = {age : {$gte: req.query.ageStart, $lte:req.query.ageEnd}}

    // let querytwo = {...req.query}

    // if(req.query.ageStart && req.query.ageEnd){

    // }

    try {
        let allUsers = await userModel.find().limit(10).skip(2).sort("-age")
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


export {getAllUsers, updateUser, deleteUser, getUser}