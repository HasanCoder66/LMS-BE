import app from "./src/app.js";
import dotenv from 'dotenv'
import connectDb from "./src/db/connect.js";


dotenv.config()

const PORT = process.env.PORT || 6500;
app.listen(PORT, () => {
    console.log(`server listening on PORT: ${PORT}` );
    
    // connect database

    connectDb()
})