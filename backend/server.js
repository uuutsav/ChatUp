const express = require("express")
const dotenv = require("dotenv");
const chats = require("./dummy/data");
const cors = require('cors');

const app = express();
dotenv.config();
const port = process.env.PORT || 3000;
app.use(cors({
    origin: 'http://localhost:5173'
}));

app.get('/', (req, resp) => {
    resp.send("API runnign sucessfully")
})

app.get('/app/chats', (req, resp) => {
    resp.send(chats)
})

app.get('/app/chat/:id', (req, resp) => {
    const specific = chats.find((c) => {
        c._id === req.params.id;
        return c;
    })
    resp.send(specific)
})

app.listen(port, () => {
    console.log("server started at port: ", port)
})