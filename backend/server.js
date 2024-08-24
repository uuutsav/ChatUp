const express = require("express")
const dotenv = require("dotenv");
const chats = require("./dummy/data");
const cors = require('cors');
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const { notFound, errorHandler } = require("./middlewares/errorHandlerMiddleware");

const app = express();
dotenv.config();

connectDB();

const port = process.env.PORT || 3000;
app.use(cors({
    origin: 'http://localhost:5173'
}));
app.use(express.json());

app.get('/', (req, resp) => {
    resp.send("API runnign sucessfully")
})

app.use('/api/user', userRoutes)

// error handling middlewares
app.use(notFound)
app.use(errorHandler)

app.listen(port, () => {
    console.log("server started at port: ", port)
})