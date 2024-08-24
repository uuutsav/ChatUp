// import React from 'react'

import { useState } from "react";
import FormButton from "./FormButton";
import FormInput from "./FormInput";
import axios from "axios"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const SignUp = ({ setLogin }) => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [picture, setPicture] = useState("")
    const [pictureURL, setPictureURL] = useState("")

    const history = useHistory()

    const onSignupHandler = async () => {
        if (!name || !email || !password){
            console.log("Enter all required fields"); // TODO: Toast message 

        } else {
            const data = {
                name,
                email,
                password,
                pictureURL
            }
            try {
                const response = await axios.post("http://localhost:5000/api/user", data)
                // const responseData = response.data;
                localStorage.setItem("userInfo", JSON.stringify(response.data))

                if (response.data._id){
                    history.push("/api/chat")
                } else {
                    console.error("Signup Error: ", response.data)
                }
            } catch (error) {
                console.log("Signup failed: ", error);
            }
        }
    }

    const uploadImage = async (pic) => {
        const formData = new FormData();
        // console.log(picture)
        formData.append('file', pic);
        formData.append('upload_preset', 'chatUp');

        try {
            const response = await axios.post("https://api.cloudinary.com/v1_1/dkxs5foqi/image/upload", formData);
            setPictureURL(response.data.secure_url);
            console.log("ehe?")
        } catch (error) {
            console.log("Error uploading image: ", error);
        }
    }

    return (
        <div>
            <div>
                <FormInput label={"Name"} type={"text"} setState={setName} />
                <FormInput label={"Email Address"} type={"email"} setState={setEmail} />
                <FormInput label={"Password"} type={"password"} setState={setPassword} />
                <FormInput label={"Confirm Password"} type={"password"} setState={setPassword} />
                <FormInput label={"Upload Your Picture"} type={"file"} setState={setPicture} onChangeHandler={uploadImage}/>
                {pictureURL && (
                    <div className="flex">
                        <h3 className="w-1/2 m-auto">Selected Image: </h3>
                        <img src={pictureURL} className="object-cover w-1/2 rounded-full mt-3"/>
                    </div>
                )}

                <FormButton label={"SignUp"} onClickHandler={onSignupHandler}/>

                <div className="text-sm mt-5 text-center text-gray-500">
                    Already have an account?
                    <a href="#" className="text-blue-700" onClick={() => setLogin((data) => !data)}> Login</a>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
