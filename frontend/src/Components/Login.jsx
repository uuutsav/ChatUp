// import React from 'react'

import { useState } from "react";
import FormButton from "./FormButton";
import FormInput from "./FormInput";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Login = ({ setLogin }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const history = useHistory();

    const handleLogin = async () => {
        const data = {
            email,
            password
        }

        try {
            const response = await axios.post("http://localhost:5000/api/user/login", data);
            if (response.data._id) {
                localStorage.setItem("userData", response.data);
                history.push("/api/chat")
            } else {
                console.log("Login error: ", response.data.msg);
            }
        } catch (error) {
            console.log("Login failed: ", error)
        }
    }
    return (
        <div>
            <FormInput label={"Email Address"} type={"email"} setState={setEmail} />
            <FormInput label={"Password"} type={"password"} setState={setPassword} />
            <a
                href="#"
                className="text-xs text-gray-500 hover:text-gray-900 block text-end w-full mt-2"
            >
                Forget Password?
            </a>

            <FormButton label={"Login"} onClickHandler={handleLogin}/>

            <div className="text-sm mt-4 flex items-center w-full text-center">
                <a
                    href="#"
                    className=" text-gray-500 capitalize text-center w-full"
                >
                    Don&apos;t have any account yet?
                    <span
                        className="text-blue-700"
                        onClick={() => {
                            setLogin((data) => !data)
                        }}
                    >
                        {" "}
                        Sign Up
                    </span>
                </a>
            </div>
        </div>
    );
};

export default Login;
