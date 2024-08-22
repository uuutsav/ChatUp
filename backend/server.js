const express = require("express")
const dotenv = require("dotenv");
const chats = require("./dummy/data");
const cors = require('cors');
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes")

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

app.listen(port, () => {
    console.log("server started at port: ", port)
})