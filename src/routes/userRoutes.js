import express from 'express'
import { deleteUser, getAllUsers, getUser, updateUser } from '../controllers/userController.js'


const userRoutes = express.Router()

// userRoutes.get("/", getUser)
userRoutes.get("/users", getAllUsers)
userRoutes.put("/:id", updateUser)
userRoutes.delete("/:id", deleteUser)
userRoutes.get("/:id", getUser)


// userRoutes.put("/", (req, res) => {

//     return successResponse(200, true, "user updated successfully!", {}, res)
// })


// userRoutes.put("/", (req, res) => {

//     res.status(200).json({
//         status: true,
//         message : "use "
//     })
// })




export default userRoutes