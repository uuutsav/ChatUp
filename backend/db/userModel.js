const bcrypt = require('bcryptjs');
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    dp: {
        type: String,
        required: true,
        default: "https://static.vecteezy.com/system/resources/thumbnails/005/545/335/small/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg"
    },
},{
    timestamps: true
});

userSchema.pre('save', async function(next) {
    // console.log(this.isModified)

    if (!this.isModified){
        next();
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(this.password, salt);
    // console.log("\nHash: ", hash);
    this.password = hash;
})

userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
}

const User = mongoose.model("User", userSchema);

module.exports = User;