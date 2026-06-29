import express from 'express'
import userRoutes from './routes/userRoutes.js'
import authRoutes from './routes/authRoutes.js'

const app = express()

// middleware -->
app.use(express.json())

// auth routes -->
app.use("/api/auth", authRoutes)

// userRoute -->
app.use("/api/user", userRoutes)


export default app