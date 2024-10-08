const mongoose = require("mongoose");
const colors = require("colors")

const connectDB = async ()=> {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);

        console.log(`DB connected successfully, port: ${conn.connection.port}`.yellow.bold);
    }
    catch (e) {
        console.log(`DB connection failed. Error - e`.red.bold);
    }
}

module.exports = connectDB