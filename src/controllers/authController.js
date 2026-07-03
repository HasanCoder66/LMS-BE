import { errorResponse, successResponse } from "../responseHandlers/responseHandler.js"
import User from '../models/User.js'
import jwt from 'jsonwebtoken'

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

        const {email, password} = req.body;

        console.log("email -->",email);
        console.log("password -->",password);

        const myUser = await User.findOne({email : email})

        console.log("myUser -->",myUser);

        if(!myUser) throw "user not found"


        if(password != myUser.password) throw "invalid credentials"

        const token = jwt.sign({id: myUser._id, email : myUser.email}, process.env.SECRET_KEY)
        console.log(token);

        successResponse(200, true, "user logged in successfully", token, res, )

    } catch (error) {
        console.log(error);
       return errorResponse(400, false, error, res) 
    }
}



export { signup, login}