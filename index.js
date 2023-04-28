import express from 'express'
import userRoute from './routes/users.js'
import bookRoute from './routes/books.js'
import journalRoute from './routes/journals.js'
import authRoute from './routes/auth.js'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express()   

app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Credentials", true);
    next();
})
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: "http://localhost:3001"
}));

app.use("/api/users", userRoute)
app.use("/api/books", bookRoute)
app.use("/api/journals", journalRoute)
app.use("/api/auth", authRoute)


app.listen(3000,()=>{
    console.log("API Working at 3000")
})