import { errorResponse, successResponse } from "../responseHandlers/responseHandler.js"
import User from '../models/User.js'

const signup = async (req, res) => {

    try {

        const { email, password, profilePic, fullName, age, role } = req.body;


        if(!email || !password || !age || !role) return errorResponse(400, false, "please fill email, password, age and role fields..",res)

        // console.log("req body -->", req.body);


        const newUser = new User(req.body)
        //  console.log(await newUser.save());

       await newUser.save()
       
    
            return successResponse(200, true, "user signup successfully!", {}, res)

    } catch (error) {

        // console.log("Error --->", error.message);

        return errorResponse(400, false, error.message, res)
    }


}

const login = async (req, res) => {
    try {
        
    } catch (error) {
       return errorResponse(400, false, error.message, res) 
    }
}



export { signup, login}