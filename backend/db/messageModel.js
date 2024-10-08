const mongoose = require("mongoose")

const messageSchema = mongoose.S({
    sender: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    content: {type: String, required: true},
    chat: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Chat"
    }
},{
    timestamps: true,
});

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;